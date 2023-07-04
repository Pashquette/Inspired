import { Container } from "../../Layout/Container/Container";
import { Category } from "./Category/Category";
import { Gender } from "./Gender/Gender";

export const Navigation = ({ data, gender }) => {
    return (
        <nav>
            <Container className="container">
                <Gender gender={gender}/>
                <Category data={data}/>
            </Container>
        </nav>
    );
};
