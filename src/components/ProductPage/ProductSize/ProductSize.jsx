import cn from "classnames";
import s from "./ProductSize.module.scss";

export const ProductSize = ({ size, selectedSize, handleSizeChange }) => {
    return (
        <div className={s.size}>
            <p className={s.title}>Размер</p>
            <div className={s.list}>
                {size?.map((item) => {
                    return (
                        <label className={cn(s.size, s.item)} key={item}>
                            <input
                                type="radio"
                                name="size"
                                className={s.input}
                                value={item}
                                checked={selectedSize === item}
                                onChange={handleSizeChange}
                            />
                            <span className={s.check}>{item}</span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};
