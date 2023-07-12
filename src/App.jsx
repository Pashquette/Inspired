import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { Root } from "./routes/Root";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNavigation } from "./features/navigationSlice";
import { fetchColors } from "./features/colorsSlice";
import { ProductPage } from "./components/ProductPage/ProductPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="/" element={<MainPage/>} />
            <Route path="catalog/:gender/:category?" index element={<MainPage />} />
            <Route path="product/:id" index element={<ProductPage/>} />
            <Route path="*" index element={<ErrorPage/>}/>
        </Route>       
    )
);

export const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNavigation());
        dispatch(fetchColors())
    }, [dispatch])
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
};
