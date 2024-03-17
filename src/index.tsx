import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "styles/reset.scss";
import Store from "stores/Store";

const rootStore = new Store();
type RootStoreType = typeof rootStore;

export const StoreContext = createContext<RootStoreType>(rootStore);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContext.Provider value={rootStore}>
        <ConfigProvider>
          <AdaptivityProvider>
            <AppRoot>
              <App />
            </AppRoot>
          </AdaptivityProvider>
        </ConfigProvider>
      </StoreContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
