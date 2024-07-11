import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../utils';
import { HomePage, Layout } from '../ui';
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.home} element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
