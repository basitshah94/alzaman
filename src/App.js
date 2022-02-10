import React, { lazy } from "react";
// import Home from './components/home/Home';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, CircularProgress } from "@material-ui/core";
import ResultDetails from "./views/result_details";

const QasaidPak = lazy(() => import("./views/qasaid_pak"));
const Home = lazy(() => import("./components/home/Home"));
const PdfBooks = lazy(() => import("./views/pdf_books"));
const Audio = lazy(() => import("./views/audio"));

function App() {
  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<>Loading please wait</>}>
                <Home />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/results"
            element={
              <React.Suspense
                fallback={
                  <>
                    <CircularProgress id="circular-progress" />
                  </>
                }
              >
                <QasaidPak />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/pdfs"
            element={
              <React.Suspense fallback={<>Loading please wait</>}>
                <PdfBooks />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/audio"
            element={
              <React.Suspense fallback={<>Loading please wait</>}>
                <Audio />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/result_details"
            element={
              <React.Suspense
                fallback={
                  <>
                    <CircularProgress id="circular-progress" />
                  </>
                }
              >
                <ResultDetails></ResultDetails>
              </React.Suspense>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
