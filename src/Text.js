import { createElement } from 'react';
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './text.css'

const Text = (props) => {
  const { className, tagName, children, ...otherProps } = props
  const tagNames = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  const tag = tagNames.filter((key) => key === tagName)[0]
  const classes = classnames(tag ? styles[tag] : null, className)

  return createElement(
    tagName || 'p',
    { ...otherProps, className: classes },
    children
  );
}

Text.propTypes = {
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node,
}

export default Text
