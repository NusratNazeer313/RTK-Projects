import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import HomePage from "./Pages/Home";
import { Provider } from "react-redux";
import store from "./Store/Store";
import ProductsPage from "./Pages/ProductsPage";
import AddToCart from "./componenets/AddToCart/AddToCart";
import FavouritItems from "./Pages/Favourits/Favourits";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/addToCart",
    element: <AddToCart />,
  },
  {
    path: "/favourit",
    element: <FavouritItems />,
  },
]);

const persistor = persistStore(store);

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
