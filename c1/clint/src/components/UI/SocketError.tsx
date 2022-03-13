
import React from 'react'
import classes from './SocketError.module.scss'

const SocketError: React.FC<{code: number}> = ({children, code}) => {
    return <div className={classes['error-container']}>
        <p className={classes['error-text']}>{children}</p>
        <p className={classes['error-code']}>{code}</p>
    </div>
}

export default SocketError