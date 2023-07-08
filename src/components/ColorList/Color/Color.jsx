import { useEffect, useRef } from 'react'
import s from './Color.module.scss'
import cn from 'classnames'

export const Color = ({color, check}) => {
    const ref = useRef()
    useEffect(() => {
        if (ref.current) {
          ref.current.style.setProperty('--data-color', color);
        }
      }, [color]);

    return (
        <li ref={ref} className={cn(s.color, check && s.colorCheck )}>

        </li>
    )
}