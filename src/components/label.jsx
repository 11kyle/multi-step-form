import React from 'react'
import PropTypes from 'prop-types'

function Label({ children, htmlFor }) {
  return (
    <label className="text-[#022959] text-xs" htmlFor={htmlFor}>
        {children}
    </label>
  )
}

Label.propTypes = {
    children: PropTypes.node.isRequired,
    htmlFor: PropTypes.string
}

export default Label
