import React from 'react'
import PropTypes from 'prop-types'

function Form({ children, name, action, method, target }) {
  return (
    <div>
        {children}
    </div>
  )
}

Form.defaultProps = {
    
}

Form.propTypes = {
    children: PropTypes.node.isRequired
}

export default Form
