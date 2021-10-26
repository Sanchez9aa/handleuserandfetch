import styled from 'styled-components'

export const StyledForm = styled.form`
  padding: 20px
`

export const StyledSubmit = styled.input`
  width: 100px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.backgroundColor};
  transition: 0.5s ease-in;
  border-radius: 10px;
  color:white;
  cursor: pointer;

  &:hover{
    background-color: white;
    color: black;
    border-color: ${(props) => props.backgroundColor$};
    transform: scale:(1.1);
  }
  &:disabled{
    background-color:grey;
    color:white;
    border-color:grey;
    cursor: not-allowed;
  }
`

export const StyledDivButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0
`

export const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.backgroundColor};
  transition: 0.5s ease-in;
  border-radius: 10px;
  color:white;
  cursor: pointer;

  &:hover{
    background-color: white;
    color: black;
    border-color: ${(props) => props.backgroundColor$};
    transform: scale:(1.1);
  }
  &:disabled{
    background-color:grey;
    color:white;
    border-color:grey;
    cursor: not-allowed; 
  }
`

export const StyledSaveButton = styled.button`{
  position: absolute;
  bottom: 30px;
  right: 50px;
  width: 100px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.backgroundColor};
  transition: 0.5s ease-in;
  border-radius: 10px;
  color:white;
  cursor: pointer;

  &:hover{
    background-color: white;
    color: black;
    border-color: ${(props) => props.backgroundColor$};
    transform: scale:(1.1);
  }

}`

export const StyledP = styled.p`
  margin: 20px 0;
  font-size: 20px;
  font-weight: bold;
`

export const StyledHr = styled.hr`
  display: block;
  width: 100%;
  margin-bottom: 20px;
`

export const StyledLi = styled.li`
  display: inline-block;
  width: 95%;
  margin: 5px 0;
`

export const StyledInput = styled.input`
  border: none;
  width: 95%;
  height: 40px;
  margin: 10px 0;

  &:focus{
    outline:none
  }
`