import React from 'react'
import { StyledHr, StyledLi } from '../../styles/FormStyles'

const UserTitle = ( {index, userTitle, handleCheckbox}) => {

  return (
    <>
      <StyledLi value={index}> {userTitle} </StyledLi>
      <input onChange={e=>handleCheckbox(e)} name={index} type="checkbox" />
      <StyledHr></StyledHr>
    </>
  )
}

export default UserTitle