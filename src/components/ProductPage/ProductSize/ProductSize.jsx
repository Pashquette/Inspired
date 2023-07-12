import cn from 'classnames'
import s from './ProductSize.module.scss'

export const ProductSize = ({size, selectedSize, handleSizeChange}) => {
    return (
        <div className={s.size}>
            <p className={s.title}>Размер</p>
            <div className={s.list}>
                {size?.map((id) => {
                    return (
                        <label className={cn(s.size, s.item)} key={id}>
                            <input
                            type="radio"
                            className={(s.input)}
                            value={id}
                            checked={selectedSize === id}
                            onChange={handleSizeChange}
                            />
                            <span className={s.check}>{id}</span>
                      </label>
                    )
                })}
            </div>
        </div>
    )
}
