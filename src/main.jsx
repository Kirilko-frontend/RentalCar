import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import "./assets/styles/main.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
