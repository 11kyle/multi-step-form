import React from 'react'
import PropTypes from 'prop-types'

function Heading({ children, version }) {
  return (
    <h1 className={`text-[#022959] ${version}`}>
        {children}
    </h1>
  )
}

Heading.defaultProps = {
    version: 'heading-1'
}

Heading.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string
}

export default Heading
