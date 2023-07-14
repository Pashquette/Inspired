import { Container } from "../../Layout/Container/Container"
import s from './Top.module.scss'
import cn from 'classnames';

import logo from '/src/assets/logo.svg'
import {ReactComponent as LikeSVG} from '../../../assets/heart.svg'
import {ReactComponent as SearchSVG} from '../../../assets/search.svg'
import {ReactComponent as CartSVG} from '../../../assets/cart.svg'
import { NavLink } from "react-router-dom";


export const Top = () => {
    return (
        <div className={s.top}>
            <Container className={s.container}>
                <a className={cn(s.link, s.phone)} href="tel:89304902620">8 930 490 26 20</a>
                <a className={s.logo} href="/">
                    <img src={logo} alt="logo Inspired" />
                </a>
                <div className={s.navigation}>
                    <ul className={s.navList}>
                        <li className={s.navItem}>
                            <button className={s.link}>
                                <SearchSVG/>
                            </button>
                        </li>
                        <li className={s.navItem}>
                            
                            <NavLink className={s.link} to="/cart">
                                <CartSVG/>
                            </NavLink>
                        </li>
                        <li className={s.navItem}>
                            <NavLink className={cn(s.link, s.like)} to="/favorite">
                                <LikeSVG/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};
