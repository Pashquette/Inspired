import { Navigation } from "./Navigation/Navigation";
import { Top } from "./Top/Top";

export const Header = ({data}) => {
    return (
        <header>
            <Top/>
            <Navigation data={data}/>
        </header>
    );
};
