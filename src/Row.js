import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './row.css'

const Row = props => {
  const {
    className,
    children,
    ...otherProps
  } = props

  const classes = classnames(
    styles.row,
    className
  )

  return (
    <div {...otherProps} className={classes}>
      {children}
    </div>
  )
}

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Row
