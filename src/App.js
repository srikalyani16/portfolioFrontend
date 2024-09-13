import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {useEffect, useCallback } from "react";
import Loader from "./components/Loader";
import axios from "axios";
import { HideLoading, SetPortfolioData, ShowLoading,ReloadData } from "./redux/rootSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Admin from "./pages/Admin";
import Login from "./pages/Admin/Login";

function App() {
  const { loading, portfolioData, reloadData } = useSelector(
    (state) => state.root
  );

  //API CALL
  const dispatch = useDispatch();
  const getPortfolioData = useCallback(async () => {
    try {
      dispatch(ShowLoading(true));
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
      console.log(response.data);
    } catch (error) {
      dispatch(HideLoading());
      console.error(error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData, getPortfolioData]); // Added getPortfolioData to dependencies

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData, getPortfolioData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin-login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
