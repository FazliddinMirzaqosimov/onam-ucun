import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import SurahProvider from "./provider/SurahProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider>
        <SurahProvider>
          <App />
        </SurahProvider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
