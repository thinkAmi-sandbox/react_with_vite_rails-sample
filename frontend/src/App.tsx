import React from "react";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HelloPage from "./pages/HelloPage";
import NotFound from "./pages/NotFound";
import RedirectIndex from "./pages/try_redirect/RedirectIndex";
import ArrayInQueryParamsIndex from "./pages/array_in_query_params/ArrayInQueryParamsIndex";

const Component = (): JSX.Element => {

  return (
    <Routes>
      <Route path="/">
        <Route index element={<HelloPage />} />

        <Route path="about" element={<AboutPage />} />

        <Route path="try-redirect">
          <Route index element={<RedirectIndex />} />
        </Route>

        <Route path="array-in-query-params">
          <Route index element={<ArrayInQueryParamsIndex />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default Component