import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import ListedBooks from "./Components/ListedBooks/ListedBooks.jsx";
import PagesToRead from "./Components/PagesToRead/PagesToRead.jsx";
import BookDetails from "./Components/BookDetails/BookDetails.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listed",
        loader: () => fetch("books.json"),
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/reads",
        loader: () => fetch("books.json"),
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("../books.json"),
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
