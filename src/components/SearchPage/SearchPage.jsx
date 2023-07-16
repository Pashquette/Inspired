import { useDispatch, useSelector } from 'react-redux'
import { fetchAll } from '../../features/goodsSlice'
import s from './SearchPage.module.scss'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Goods } from '../Goods/Goods';

export const SearchPage = () => {
    const {goodsList} = useSelector(state => state.goods);

    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        const searchQuery = new URLSearchParams(location.search).get("q");
        console.log(searchQuery);
        dispatch(fetchAll({search: searchQuery}))
    }, [dispatch, location.search])
    return (
        goodsList.length > 0 
        ?
        <Goods title='Результаты поиска'/>
        : <p className={s.empty}>Ничего не найдено. :(</p>
    )
}