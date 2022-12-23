import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Tile({ children }) {
  const [active, setActive] = useState(false)

  return (
    <div onClick={() => setActive(!active)} aria-checked={active} className={`group flex flex-row lg:flex-col items-center lg:items-start gap-x-3 border border-[#D6D9E6] hover:border-[#483EFF] rounded-md w-full p-4 mt-3 cursor-pointer ${active ? "bg-[#F8F9FF] border-[#483EFF]" : "bg-transparent"}`}>
        {children}
    </div>
  )
}

Tile.propTypes = {
  children: PropTypes.node.isRequired
}

export default Tile
