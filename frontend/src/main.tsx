import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ActivityPage from "./activityPage";
import ShowActivity from "./showActivity";
import EditActivity from "./editActivity";
import CreateActivity from "./createActivity";
import Layout from "./layout";
import "./index.css"

// All the routes are managed here 
// routing path are /
//                  /create
//                  /activity
//                  /activity/<id>
//                  /activity/<id>/edit

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<App />} />
          <Route path="activity/:id" element={<ActivityPage />}>
            <Route path="" element={<ShowActivity />} />
            <Route path="edit" element={<EditActivity />} />
          </Route>
          <Route path="create" element={<CreateActivity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
