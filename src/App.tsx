import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "components/Header";
import Home from "pages/Home";
import { Spinner } from '@primer/react';

const About = React.lazy(() => import("./pages/About"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const Terms = React.lazy(() => import("./pages/Terms"));
const NoMatch = React.lazy(() => import("./pages/NoMatch"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<Spinner />}>
              <About />
            </React.Suspense>
          } 
        />
        <Route
          path="privacy"
          element={
            <React.Suspense fallback={<Spinner />}>
              <Privacy />
            </React.Suspense>
          } 
        />
        <Route
          path="terms"
          element={
            <React.Suspense fallback={<Spinner />}>
              <Terms />
            </React.Suspense>
          } 
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}