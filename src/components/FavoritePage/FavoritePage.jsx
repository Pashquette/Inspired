import { useDispatch, useSelector } from "react-redux"
import { Goods } from "../Goods/Goods"
import { fetchCategory } from "../../features/goodsSlice";
import { useEffect } from "react";
import { usePageFromSearchParams } from "../../hooks/usePageFromSearchParams";

export const FavoritePage = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const page = usePageFromSearchParams(dispatch)

    useEffect(() => {
        if(favorites) {
            const param = {list: favorites}
            if(page) {
                param.page = page;
            }
            dispatch(fetchCategory(param))
        }
    }, [favorites, dispatch, page])
    return (
        <Goods title="Избраннное"/>
    )
}