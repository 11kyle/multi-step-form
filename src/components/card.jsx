import React from 'react'
import PropTypes from 'prop-types'

function Card({ children }) {
  return (
    <div className="relative bg-white rounded-md lg:w-[450px] px-6 py-8 mx-4 lg:mx-24">
        {children}
    </div>
  )
}

Card.propTypes = {
    children: PropTypes.node.isRequired
}

export default Card
