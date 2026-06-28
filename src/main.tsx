import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./stores/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ConfigProvider prefixCls="antd">
      <StrictMode>
        <App />
      </StrictMode>
    </ConfigProvider>
  </Provider>
);
