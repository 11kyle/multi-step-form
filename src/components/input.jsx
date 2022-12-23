import React from 'react'
import PropTypes from 'prop-types'

function Input({ id, type, placeholder, value, isDisabled, isRequired }) {
  return (
    <>
      <input 
        id={id}
        type={type}
        className="peer block text-black font-medium border border-[#D6D9E6] focus:outline-none focus:border-[#483EFF] focus:ring-1 focus:ring-[#483EFF] rounded-md w-full px-4 py-3"
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
        required={isRequired}
      />
      <p className="invisible peer-required:visible absolute top-0 right-0 text-xs text-[#EE374A]">This field is required</p>
    </>
  )
}

Input.defaultProps = {
    type: "text",
    placeholder: "",
    isDisabled: false,
    isRequired: false
}

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool
}

export default Input
