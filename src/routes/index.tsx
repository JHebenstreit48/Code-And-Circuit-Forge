import { createBrowserRouter } from "react-router-dom";

import App from "@/App";

import ErrorPage from "@/pages/Error";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Portfolio from "@/pages/Portfolio";
import Skills from "@/pages/Skills";
import QRCodePage from "@/pages/subpages/qrCode";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
      {
        path: 'qrcode',
        element: <QRCodePage />,
      },
    ],
  },
]);