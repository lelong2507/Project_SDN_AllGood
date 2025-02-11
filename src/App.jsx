import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          {routes.map((item, index) => {
            const Page = item.element;
            const Layout = item.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <Layout>
                    <Page/>
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
