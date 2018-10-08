import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './container.css'

const Container = props => {
  const {
    className,
    fluid,
    children,
    ...otherProps
  } = props

  const classes = classnames(
    props.fluid ? styles['container-fluid'] : styles.container,
    className
  )

  return (
    <div {...otherProps} className={classes}>
      {children}
    </div>
  )
}

Container.propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
}

export default Container
