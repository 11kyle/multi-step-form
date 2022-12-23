import PropTypes from 'prop-types'

function FormGroup({ children }) {
  return (
    <div className="relative mt-4">
        {children}
    </div>
  )
}

FormGroup.propTypes = {
    children: PropTypes.node.isRequired
}

export default FormGroup
