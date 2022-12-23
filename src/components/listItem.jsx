import PropTypes from 'prop-types'

function ListItem({ children }) {
  return (
    <li className="flex flex-row items-center lg:gap-x-4 w-full cursor-pointer">
        {children}
    </li>
  )
}

ListItem.propTypes = {
    children: PropTypes.node.isRequired
}

export default ListItem
