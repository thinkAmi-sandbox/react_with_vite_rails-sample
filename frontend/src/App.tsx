import React from "react";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HelloPage from "./pages/HelloPage";
import NotFound from "./pages/NotFound";

const Component = (): JSX.Element => {

  return (
    <Routes>
      <Route path="/">
        <Route index element={<HelloPage />} />

        <Route path="about" element={<AboutPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default Component