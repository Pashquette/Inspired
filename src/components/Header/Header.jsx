import { Navigation } from "./Navigation/Navigation";
import { Top } from "./Top/Top";

export const Header = ({data, gender}) => {
    return (
        <header>
            <Top/>
            <Navigation gender={gender} data={data}/>
        </header>
    );
};
