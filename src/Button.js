import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './button.css'

const Button = props => {
  const {
    className,
    theme,
    children,
    ...otherProps
  } = props

  const classes = classnames(
    styles.btn,
    styles[`btn-${theme}`],
    className
  )

  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([
    'default', 'primary', 'secondary'
  ]),
  children: PropTypes.node
}

Button.defaultProps = {
  theme: 'default'
}

export default Button
