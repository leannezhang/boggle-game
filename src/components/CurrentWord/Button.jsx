import React from 'react'

const Button = (props) => {
  const {handleSubmit} = props

  return (
    <div className="button" onClick={handleSubmit}>
      <div>SUBMIT WORD</div>
    </div>
    )
}
export default Button

// add propTypes
