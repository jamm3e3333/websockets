import classes from './Container.module.scss'

const Container = ({ children }: {children: any}) => {
  return <div className={classes.container}>{children}</div>
}

export default Container
