import { lazy } from "react"

import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/home/Home")) ;
const Detail = lazy(() => import("../pages/detail/Detail"));
const BookSeat = lazy(() => import( "../pages/bookseat/BookSeat"));

import HomeTemplate from "../templates/home/home.template";

export const router = createBrowserRouter([
    {
        element: <HomeTemplate/>,
        children: [
            {
                path: "",
                element:<Home/>
            },
            {
                path: "detail/:idDetail",
                element: <Detail/>
            },
            {
                path: "bookseat",
                element: <BookSeat/>
            }
        ]
    },
    {
        path: "*",
        element: <h1> Page Not Found</h1>
    }
])