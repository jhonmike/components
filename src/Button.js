import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './button.css'

const prepareProps = props => {
  const { className, theme, ...otherProps } = props
  const classes = classnames(
    styles.btn,
    theme ? styles[`btn-${theme}`] : null,
    className
  )

  return {
    ...otherProps,
    className: classes,
  }
}

const Button = props => {
  const { className, theme, children, ...otherProps } = prepareProps(props)

  return (
    <button {...otherProps} className={className}>
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node,
}

export default Button
