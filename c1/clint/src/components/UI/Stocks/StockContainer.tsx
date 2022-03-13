import classes from './StockContainer.module.scss'
import React from 'react'
interface StockProps {
    name: string
    value: number
}

const StockContainer: React.FC<StockProps> = (props) => {
    return (
        <div className={classes['stock-container']}>
            <p className={classes['stock-name']}>{props.name}</p>
            <p className={`${classes['stock-value']} ${props.value > 90 ? classes.high : classes.low}`}>{props.value}</p>
        </div>
    )
}

export default StockContainer