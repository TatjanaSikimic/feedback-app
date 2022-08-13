import React from "react"
import PropTypes from "prop-types"

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )


}

Button.defaultProps = {
    version: 'primary',
    text: 'button',
    isDisabled: false,

}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

export default Button