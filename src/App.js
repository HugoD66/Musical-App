import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "components/Home";
import About from "components/About";

import Layout from "components/Layout";


function App() {
  return (
      <BrowserRouter>


            <Layout>
                <Routes>
                    <Route element={<About />} path="/about" />
                    <Route element={<Home />} path="/" />
                </Routes>
            </Layout>
      </BrowserRouter>
  );
}

export default App;
