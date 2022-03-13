import React from 'react'
import classes from './Header.module.scss'

interface HeaderProps {
    headerValue: string
}
const Header: React.FC<HeaderProps> = (props) => {

    return (
        <div className={classes.header}>
            <h1>{props.headerValue}</h1>
        </div>
    )
}

export default Header