import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./page/login/login";
import { ListPage } from "./page/list/list";
import { DetailPage } from "./page/detail/detail";
import { OrgProvider } from "./context/org.context";

export const App = () => {
  return (
    <OrgProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </OrgProvider>
  );
};
