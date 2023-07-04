import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { Root } from "./routes/Root";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="/" element={<MainPage/>} />
            <Route path="women" index element={<MainPage gender="women" />} />
            <Route path="men" index element={<MainPage gender="men" />} />
            <Route path="women/:category" index element={<MainPage gender="women"/>}/>
            <Route path="men/:category" index element={<MainPage gender="men"/>}/>
            <Route path="*" index element={<ErrorPage/>}/>
        </Route>       
    )
);

export const App = () => {
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
};
