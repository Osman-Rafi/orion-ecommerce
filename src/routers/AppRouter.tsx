import { Routes, Route } from "react-router-dom";
import { Navigation } from "../components/common";
import { routes } from "../constants";
import * as views from "../views";

const AppRouter = () => (
  <>
    <Navigation />
    <Routes>
      <Route path={routes.HOME} element={<views.Home />} />
    </Routes>
  </>
);

export default AppRouter;
