import { Container } from "../../Layout/Container/Container";
import { Category } from "./Category/Category";
import { Gender } from "./Gender/Gender";

export const Navigation = ({ data }) => {
    return (
        <nav>
            <Container className="container">
                <Gender/>
                <Category data={data}/>
            </Container>
        </nav>
    );
};
