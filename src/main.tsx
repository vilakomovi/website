import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

import App from './App.tsx'

import './index.css'
import {
    // createBrowserRouter,
    // RouterProvider,
    HashRouter,
    Route,
    Routes,
} from "react-router-dom";
import ApartmentNode from "./pages/ApartmentNode";
import MainLayout from "./layouts/MainLayout";
import {GlobalStyle} from "./App.styled.ts";

const theme = extendTheme({
    fonts: {
        body: `'Poppins', sans-serif`,
        heading: `'Poppins', sans-serif`,
    },
})

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <MainLayout />,
//         children: [
//             {
//                 path: '',
//                 element: <App />
//             },
//             {
//                 path: '/apartment/:apartmentId',
//                 element: <ApartmentNode />
//             }
//         ]
//     },
// ])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <GlobalStyle />
          <HashRouter>
              <Routes>
                  <Route path="/" element={<MainLayout />}>
                      <Route path="/" element={<App />} />
                      <Route path="apartment/:apartmentId" element={<ApartmentNode />} />
                  </Route>
              </Routes>
          </HashRouter>
          {/*<RouterProvider router={router} />*/}
      </ChakraProvider>
  </React.StrictMode>,
)
