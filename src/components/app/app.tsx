import { HashRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../constants/const';
import MainPage from '../../pages/main-page/main-page';
import '../../styles/index.scss'; //! always on top of imports!
import Layout from '../layouts/layout';

// ^======================== App ========================^ //

function App(): React.JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
export default App;