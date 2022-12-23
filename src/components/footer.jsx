import PropTypes from 'prop-types'

function Footer({ children }) {
  return (
    <div className="absolute bottom-0 lg:top-[calc(600px-96px)] lg:bottom-auto lg:left-[calc(50%+116px)] lg:-translate-x-1/2 flex flex-row justify-between bg-white w-full lg:w-[450px] p-4">
        {children}
    </div>
  )
}

Footer.propTypes = {
    children: PropTypes.node.isRequired
}

export default Footer
