import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";

const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const Terms = React.lazy(() => import("./pages/Terms"));
const StarryNight = React.lazy(() => import("./pages/StarryNight"));
const NoMatch = React.lazy(() => import("./pages/NoMatch"));

export default function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={<React.Suspense fallback={<>...</>}>
            <About />
          </React.Suspense>} />
        <Route
          path="contact"
          element={<React.Suspense fallback={<>...</>}>
            <Contact />
            </React.Suspense>} />
          <Route
            path="privacy"
            element={<React.Suspense fallback={<>...</>}>
              <Privacy />
            </React.Suspense>} />
          <Route
            path="terms"
            element={<React.Suspense fallback={<>...</>}>
              <Terms />
            </React.Suspense>} />
          <Route
            path="starrynight"
            element={<React.Suspense fallback={<>...</>}>
              <StarryNight />
            </React.Suspense>} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      </Routes>
    </>
  );
}
