import { Button } from '../../atoms';

interface Props {
  columns: { name: string; columnName: string }[];
  data: any[];
  handleEdit?: (item: any) => void;
  handleDelete?: (item: any) => void;
}
const Table = ({ columns, data, handleEdit, handleDelete }: Props) => {
  return (
    <table className="min-w-full divide-y divide-gray-300 border">
      <thead className="bg-gray-200 text-white">
        <tr>
          {columns.map((column) => (
            <th
              key={column.columnName}
              className="text-gray-900 py-3.5 pl-4 pr-3 text-center text-sm font-semibold sm:pl-6">
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {data.map((data) => (
          <tr key={data.id} className="hover:bg-gray-100">
            {columns.map((column, index) =>
              data[column.columnName] ? (
                <td
                  key={index + column.columnName}
                  className="text-gray-500 whitespace-nowrap px-3 py-4 text-sm">
                  {typeof data[column.columnName] === 'number'
                    ? data[column.columnName].toFixed(2)
                    : data[column.columnName]}
                </td>
              ) : (
                ''
              ),
            )}
            <td className="text-gray-500 flex justify-around whitespace-nowrap px-3 py-4 text-sm">
              {handleEdit && (
                <Button
                  className="!w-fit !min-w-fit !max-w-fit !p-2"
                  backgroundColor="bg-gray-100 hover:bg-white"
                  title="Modifica"
                  iconName="edit"
                  onClick={() => handleEdit(data)}
                />
              )}
              {handleDelete && (
                <Button
                  className="!w-fit !min-w-fit !max-w-fit !p-2"
                  backgroundColor="bg-gray-100 hover:bg-white"
                  title="Elimina"
                  iconName="delete"
                  onClick={() => handleDelete(data)}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
