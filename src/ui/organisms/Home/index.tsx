import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Input, Loader, SearchInput } from '../../atoms';
import { Watch } from '../../../utils';
import { Modal, Table } from '../../molecules';

const COLUMNS: { name: string; columnName: string }[] = [
  { name: 'Modello', columnName: 'model' },
  { name: 'Prezzo', columnName: 'price' },
  { name: 'Modifica', columnName: '' },
];

const Home = () => {
  const [watches, setWatches] = useState<Watch[]>([]);
  const [watchesFiltered, setWatchesFiltered] = useState<Watch[]>([]);
  const [watch, setWatch] = useState<Watch | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const [updatedPrice, setUpdatedPrice] = useState('');
  const [updatedMonth, setUpdatedMonth] = useState('');
  const [updatedPriceError, setUpdatedPriceError] = useState('');
  const [updatedMonthError, setUpdatedMonthError] = useState('');

  const handleGetWatches = async () => {
    try {
      const responseWatches = await axios.get('http://localhost:4000/watches');
      const allWatches: Watch[] = responseWatches.data;
      setWatches(allWatches);
      setWatchesFiltered(allWatches);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim().toLowerCase();
    setSearchTerm(value);

    if (value === '') {
      setWatchesFiltered(watches);
    } else {
      const filtered = watches.filter(
        (watch) =>
          watch.model?.toLowerCase().includes(value) ||
          watch.month?.toLowerCase().includes(value) ||
          watch.price?.toString().toLowerCase().includes(value) ||
          (watch.updatedPrice && watch.updatedPrice.toString().toLowerCase().includes(value)),
      );
      setWatchesFiltered(filtered);
    }
  };

  const handleEdit = (item: Watch) => {
    setWatch(item);
    setUpdatedPrice(
      item.updatedPrice
        ? item.updatedPrice.toFixed(2).toString()
        : item.price.toFixed(2).toString(),
    );
    setUpdatedMonth(item.month ? item.month : '');
    setOpen(true);
  };

  const handleIsOpen = (open: boolean) => {
    setOpen(open);
    if (!open) {
      handleReset();
    }
  };

  const handleEditConfirm = async () => {
    let valid = true;

    if (!updatedPrice.length) {
      setUpdatedPriceError('Obbligatorio');
      valid = false;
    } else if (!isValidNumber(updatedPrice)) {
      setUpdatedPriceError('Devi inserire un numero valido!');
      valid = false;
    } else {
      setUpdatedPriceError('');
    }

    if (!updatedMonth.length || updatedMonth.trim() === '') {
      setUpdatedMonthError('Obbligatorio');
      valid = false;
    } else {
      setUpdatedMonthError('');
    }

    if (!valid) {
      return;
    }

    if (watch) {
      const updatedWatch: Watch = {
        ...watch,
        updatedPrice: parseFloat(updatedPrice),
        month: updatedMonth,
      };
      try {
        await axios.put(`http://localhost:4000/watches/${updatedWatch.id}`, updatedWatch);
        setWatches((prevWatches) =>
          prevWatches.map((w) => (w.id === updatedWatch.id ? updatedWatch : w)),
        );
        setWatchesFiltered((prevWatchesFiltered) =>
          prevWatchesFiltered.map((w) => (w.id === updatedWatch.id ? updatedWatch : w)),
        );
      } catch (err) {
        console.error(err);
      } finally {
        handleIsOpen(false);
      }
    }
  };

  const handleReset = () => {
    setUpdatedPrice('');
    setUpdatedMonth('');
    setUpdatedPriceError('');
    setUpdatedMonthError('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'updatedPrice') {
      setUpdatedPrice(event.target.value);
    }

    if (event.target.name === 'updatedMonth') {
      setUpdatedMonth(event.target.value);
    }
  };

  const isValidNumber = (value: string): boolean => {
    return /^\d*\.?\d*$/.test(value);
  };

  useEffect(() => {
    handleGetWatches();
  }, []);

  const getDisplayData = (data: Watch[]): Watch[] => {
    return data.map((watch) => ({
      ...watch,
      price: searchTerm
        ? watch.updatedPrice !== undefined
          ? watch.updatedPrice
          : watch.price
        : watch.price,
    }));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <article className="m-0 flex size-full h-fit max-h-fit min-h-[42.662rem] items-baseline justify-center p-6 sm:px-8 sm:py-12">
      <section className="flex w-full flex-col-reverse items-center md:flex-row">
        <section className="flex w-full flex-col">
          <section className="mb-4 flex w-full flex-col items-center">
            <h1 className="mb-4 items-center text-center text-4xl sm:mb-6">
              Orologi consigliati del giorno
            </h1>
            <SearchInput
              name="search"
              onChange={handleChangeSearch}
              containerClassName="m-4 sm:m-0"
            />
          </section>
          <Table columns={COLUMNS} data={getDisplayData(watchesFiltered)} handleEdit={handleEdit} />
        </section>
      </section>
      <Modal isOpen={open} handleIsOpen={handleIsOpen}>
        <article>
          <section className="flex justify-end">
            <Button
              className="justify-content-end m-2 !h-fit !max-h-fit !min-h-fit !w-fit !min-w-fit !max-w-fit !bg-white !p-0"
              iconName="close"
              title="Chiudi"
              onClick={() => handleIsOpen(false)}
            />
          </section>
          <p className="font-bold">{watch?.model}</p>
          <p>
            Prezzo attuale: <b>{watch?.price.toFixed(2)}</b>
          </p>

          <Input
            name="updatedPrice"
            label="Nuovo prezzo:"
            placeholder="Inserisci il nuovo prezzo"
            onChange={handleChange}
            value={updatedPrice}
            error={updatedPriceError}
          />
          <Input
            name="updatedMonth"
            label="Mese offerta:"
            placeholder="Inserisci il mese dell'offerta"
            onChange={handleChange}
            value={updatedMonth}
            error={updatedMonthError}
          />

          <section className="grid size-full grid-cols-1 place-items-center gap-7 p-2.5 sm:grid-cols-2">
            <Button
              type="reset"
              text="Annulla"
              title="Annulla"
              textColor="text-black"
              className="!sm:w-auto !w-full"
              backgroundColor="bg-gray-300 hover:bg-gray-200 hover:text-gray-100"
              iconName="reset"
              textSize="text-xs"
              onClick={() => handleIsOpen(false)}
            />
            <Button
              text="Conferma"
              title="Conferma"
              iconColor="white"
              className="!sm:w-auto !w-full"
              backgroundColor="bg-yellow-200 hover:bg-yellow-50"
              iconName="rightArrow"
              onClick={handleEditConfirm}
            />
          </section>
        </article>
      </Modal>
    </article>
  );
};

export default Home;
