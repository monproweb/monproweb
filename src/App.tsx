import * as React from "react";
import { Routes, Route } from "react-router-dom";
import 'styles/App.scss'
import Header from "components/Header";
import Home from "pages/Home";

const Projects = React.lazy(() => import("./pages/Projects"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NoMatch = React.lazy(() => import("./pages/NoMatch"));

export default function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route
          path="projects"
          element={<React.Suspense fallback={<>...</>}>
            <Projects />
          </React.Suspense>} />
        <Route
          path="contact"
          element={<React.Suspense fallback={<>...</>}>
            <Contact />
          </React.Suspense>} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      </Routes>
    </>
  );
}
