import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

// import styles from './input.css'

const Input = props => {
  const {
    className,
    type,
    value,
    ...otherProps
  } = props

  const classes = classnames(
    // styles.input,
    className
  )

  return (
    <input {...otherProps}
      type={type}
      className={classes}
      value={value}
    />
  )
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
}

export default Input
