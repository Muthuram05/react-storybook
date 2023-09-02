import React from 'react'
import PropTypes from 'prop-types'
const Outline = ({label,backgroundColor = 'red',onClick,isOutline=false}) => {
   
    const style = {
        backgroundColor:"transparent",
        // padding:`5rem 5rem`,
        border: `${isOutline ? "2px solid blue" : 'none'}`
    }
  return (
    <div>
        <button onClick={onClick} style={style} >
            {label}
        </button>
    </div>
  )
}

Outline.propTypes ={
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
    isOutline: PropTypes.bool
}

export default Outline