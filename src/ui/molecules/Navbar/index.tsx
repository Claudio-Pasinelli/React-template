import { Link, useLocation, useParams } from 'react-router-dom';
import { cn } from '../../../utils/helpers/tailwindMerge';
import { ROUTES } from '../../../utils';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { A } from '../../atoms';

const Navbar = () => {
  const location = useLocation();

  const [pageName, setPageName] = useState('');

  // useEffect(() => {
  //   if (location.pathname === ROUTES.home || location.pathname === '') {
  //     setPageName('HOME');
  //   } else if (location.pathname === ROUTES.contacts) {
  //     setPageName('CONTATTAMI');
  //   } else if (location.pathname === ROUTES.profile) {
  //     setPageName('PROFILO');
  //   } else if (location.pathname === ROUTES.myRecipes) {
  //     setPageName('LE MIE RICETTE');
  //   } else if (location.pathname.startsWith(ROUTES.myRecipesForm)) {
  //     if (params.id) {
  //       setPageName('MODIFICA UNA RICETTA');
  //     } else {
  //       setPageName('NUOVA RICETTA');
  //     }
  //   } else if (location.pathname === ROUTES.settings) {
  //     setPageName('IMPOSTAZIONI');
  //   } else {
  //     setPageName('');
  //   }
  // }, [location.pathname, params.id]);

  return (
    <nav className="sticky top-0 z-50 flex h-20 min-h-28 w-full items-center justify-between bg-yellow-200 px-4 py-2 shadow-xl">
      <section className="flex w-full items-center justify-start">
        {/* <A href={location.pathname === ROUTES.home ? undefined : ROUTES.home}>
        </A> */}

        <h1 className="font-bold text-white">{pageName}</h1>
      </section>
      <section className="flex items-center">
        <div className="sm:border-black-50 mr-8 flex flex-col items-start border-0 border-none pl-8 sm:border-l-2">
          <section className="flex w-full items-center justify-end">
            {location.pathname !== ROUTES.home && (
              <Link
                to={ROUTES.home}
                className={cn(
                  'text-white',
                  location.pathname === ROUTES.home
                    ? 'bg-black-50 rounded-2xl p-2'
                    : 'rounded-none bg-none p-0',
                )}>
                Home
              </Link>
            )}
            {/* {location.pathname !== ROUTES.contacts && (
              <Link
                to={ROUTES.contacts}
                className={cn(
                  'text-white ml-4',
                  location.pathname === ROUTES.contacts
                    ? 'bg-black-50 p-2 rounded-2xl'
                    : 'bg-none p-0 rounded-none',
                )}>
                Contattami
              </Link>
            )}
            {isUserRegistered && location.pathname !== ROUTES.myRecipes && (
              <Link
                to={ROUTES.myRecipes}
                className={cn(
                  'text-white ml-4',
                  location.pathname === ROUTES.myRecipes
                    ? 'bg-black-50 p-2 rounded-2xl'
                    : 'bg-none p-0 rounded-none',
                )}>
                Le mie ricette
              </Link>
            )} */}
          </section>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
