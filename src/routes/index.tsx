import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../utils';
import { Layout } from '../ui';
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path={ROUTES.home} element={<HomePage />} /> */}
        </Route>
        {/* <Route path={ROUTES.login} element={<LoginPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
