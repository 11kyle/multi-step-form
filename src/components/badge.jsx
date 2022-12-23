import PropTypes from 'prop-types'

function Badge({ children, isActive }) {
  return (
    <div className={`flex flex-row justify-center items-center ${isActive ? "bg-[#BEE2FD] border-[#BEE2FD]" : "bg-transparent border-white"} rounded-full border w-8 h-8`}>
        <span className="text-white">{children}</span>
    </div>
  )
}

Badge.defaultProps = {
    isActive: false
}

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    isActive: PropTypes.bool
}

export default Badge
