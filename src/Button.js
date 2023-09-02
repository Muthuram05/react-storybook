import React from 'react'
import PropTypes from 'prop-types'
const Button = ({label,backgroundColor = 'red',size='md',onClick,disabled=false}) => {
    let scale = 1
    if(size === 'sm') scale = 0.75
    if(size === 'lg') scale = 1.5
    const style = {
        backgroundColor,
        padding:`${scale * 0.5}rem ${scale * 1}rem`,
        // border: "none"
    }
  return (
    <div>
        <button onClick={onClick} style={style} disabled={disabled}>
            {label}
        </button>
    </div>
  )
}

Button.propTypes ={
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size : PropTypes.oneOf(["sm","md","lg"]),
    onClick: PropTypes.func,
    disabled : PropTypes.bool
}

export default Button