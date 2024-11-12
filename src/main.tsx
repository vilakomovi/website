import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

import App from './App.tsx'

import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ApartmentNode from "./pages/ApartmentNode";
import MainLayout from "./layouts/MainLayout";
import {GlobalStyle} from "./App.styled.ts";

const theme = extendTheme({
    fonts: {
        // body: `'Montserrat Alternates', sans-serif`,
        // heading: `'Montserrat Alternates', sans-serif`,

        // body: `'DM Serif Display', serif`,
        // heading: `'DM Serif Display', serif`,

        // body: `"Libre Franklin", sans-serif`,
        // heading: `"Libre Franklin", sans-serif`,

        body: `'Poppins', sans-serif`,
        heading: `'Poppins', sans-serif`,
    },
})

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <App />
            },
            {
                path: '/apartment/:apartmentId',
                element: <ApartmentNode />
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
      </ChakraProvider>
  </React.StrictMode>,
)
