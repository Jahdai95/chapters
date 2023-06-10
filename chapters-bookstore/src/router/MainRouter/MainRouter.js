import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import MainLayout from "../../components/MainLayout/MainLayout";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route exact path={"/tienda"} element={<ItemListContainer />} />
          <Route
            exact
            path={"/narrativa/:categoryId"}
            element={<ItemListContainer />}
          />
          <Route
            exact
            path={"/poesia/:categoryId"}
            element={<ItemListContainer />}
          />
          <Route
            exact
            path={"/teatro/:categoryId"}
            element={<ItemListContainer />}
          />
          <Route
            exact
            path={"/item/:itemId"}
            element={<ItemDetailContainer />}
          />

          <Route path="*" element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
