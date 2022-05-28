import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "../components/common";
import { routes } from "../constants";
import * as views from "../views";


const AppRouter = () => (
  <>
    <Navigation />
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={views.Home()} />
      </Routes>
    </BrowserRouter>
  </>
);

export default AppRouter;
