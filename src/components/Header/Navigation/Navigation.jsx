import { useDispatch } from "react-redux";
import { Container } from "../../Layout/Container/Container";
import { Category } from "./Category/Category";
import { Gender } from "./Gender/Gender";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setActiveGender } from "../../../features/navigationSlice";

export const Navigation = ({ data }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const gender = location.pathname.split('/')[1] || 'women';


    useEffect(() => {
        dispatch(setActiveGender(gender))
    }, [gender, dispatch])
    return (
        <nav>
            <Container className="container">
                <Gender />
                <Category data={data} />
            </Container>
        </nav>
    );
};
