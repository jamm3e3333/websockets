import classes from './StockHeader.module.scss'
import React from 'react'


const StockHeader: React.FC<{firstColumn: string; secondColumn: string}> = (props) => {
    return (
        <div className={classes['stock-column--container']}>
            <p className={classes['stock-col']}>{props.firstColumn}</p>
            <p className={classes['stock-col']}>{props.secondColumn}</p>
        </div>
    )
}

export default StockHeader