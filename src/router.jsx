import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  );
};

export default AppRouter;
