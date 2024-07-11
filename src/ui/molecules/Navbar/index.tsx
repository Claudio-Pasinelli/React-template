import { Link, useLocation, useParams } from 'react-router-dom';
import { cn } from '../../../utils/helpers/tailwindMerge';
import { ROUTES } from '../../../utils';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { A } from '../../atoms';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 flex h-20 min-h-28 w-full items-center justify-between bg-yellow-200 px-4 py-2 shadow-xl">
      <section className="flex w-full items-center justify-start">
        <h1 className="text-4xl font-bold text-white">RunnerWatch</h1>
      </section>
    </nav>
  );
};

export default Navbar;
