import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";

import { Header } from "layout/Header";
import { Footer } from "layout/Footer";
import { Recipes } from "recipes/Recipes";
import { Recipe } from "recipes/Recipe";
import { About } from "about/About";

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recipes/:slug" element={<Recipe />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
