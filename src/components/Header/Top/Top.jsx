import { Container } from "../../Layout/Container/Container"
import s from './Top.module.scss'
import cn from 'classnames';

import logo from '/src/assets/logo.svg'
import {ReactComponent as LikeSVG} from '../../../assets/heart.svg'
import {ReactComponent as SearchSVG} from '../../../assets/search.svg'
import {ReactComponent as CartSVG} from '../../../assets/cart.svg'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearch } from "../../../features/searchSlice";


export const Top = () => {
    const {countItems} = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleOpenSearch = () => {
        dispatch(toggleSearch())
    }
    return (
        <div className={s.top}>
            <Container className={s.container}>
                <a className={cn(s.link, s.phone)} href="tel:89304902620">8 930 490 26 20</a>
                <NavLink className={s.logo} to="/">
                    <img src={logo} alt="logo Inspired" />
                </NavLink>
                <div className={s.navigation}>
                    <ul className={s.navList}>
                        <li className={s.navItem}>
                            <button onClick={handleOpenSearch} className={s.link}>
                                <SearchSVG/>
                            </button>
                        </li>
                        <li className={s.navItem}>
                            
                            <NavLink className={s.link} to="/cart">
                                <CartSVG/>
                                {countItems ? <span className={s.linkCount}>{countItems}</span> : null}
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
