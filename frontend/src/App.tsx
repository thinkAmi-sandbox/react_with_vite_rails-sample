import React from "react";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HelloPage from "./pages/HelloPage";
import NotFound from "./pages/NotFound";
import RedirectIndex from "./pages/try_redirect/RedirectIndex";

const Component = (): JSX.Element => {

  return (
    <Routes>
      <Route path="/">
        <Route index element={<HelloPage />} />

        <Route path="about" element={<AboutPage />} />

        <Route path="try-redirect">
          <Route index element={<RedirectIndex />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default Component