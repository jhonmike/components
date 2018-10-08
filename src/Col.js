import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './col.css'

const prepareProps = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const classMap = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    xsOffset: 'xs-offset',
    smOffset: 'sm-offset',
    mdOffset: 'md-offset',
    lgOffset: 'lg-offset',
    xlOffset: 'xl-offset'
  }

  const sizes = Object.keys(props)
    .filter(key => classMap[key])
    .map(key => {
      const classe = typeof props[key] === 'number'
        ? styles[`${classMap[key]}-${props[key]}`]
        : styles[classMap[key]]

      delete otherProps[classMap[key]]
      return classe
    })

  return {
    ...otherProps,
    className: classnames(...sizes, className)
  }
}

const Col = props => {
  const {
    className,
    children,
    ...otherProps
  } = prepareProps(props)

  return (
    <div {...otherProps} className={className}>
      {children}
    </div>
  )
}

Col.propTypes = {
  className: PropTypes.string,
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlOffset: PropTypes.number,
  children: PropTypes.node
}

export default Col
