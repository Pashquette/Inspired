import s from './Color.module.scss'
import cn from 'classnames'

export const Color = ({color, check}) => {

    return (
        <li style={{'--data-color': color}} className={cn(s.color, check && s.colorCheck )}>

        </li>
    )
}