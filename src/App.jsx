import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./Page/ListPage";
import HomePage from "./Page/HomePage";

import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Navbar />
        <Routes>
          <Route path="/list" Component={ListPage} />
          <Route path="/" Component={HomePage} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
