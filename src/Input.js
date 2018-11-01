import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

// import styles from './input.css'

const Input = props => {
  const { className, type, ...otherProps } = props

  const classes = classnames(
    // styles.input,
    className
  )

  return <input {...otherProps} type={type} className={classes} />
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
}

export default Input
