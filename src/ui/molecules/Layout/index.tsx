import { Outlet } from 'react-router-dom';
// import { Footer } from '../../atoms';
import Navbar from '../Navbar';

const Layout = () => {
  return (
    <section className="size-full overflow-x-hidden">
      <section className="flex h-screen w-full flex-col justify-between text-center">
        <Navbar />
        <section className="h-auto w-full">
          <Outlet />
        </section>
        {/* <Footer /> */}
      </section>
    </section>
  );
};

export default Layout;
