import React, {useState} from 'react'
import UserTitle from './userTitle/UserTitle'
import {useForm} from 'react-hook-form'
import Service from '../../services/Service'
import { useSelector, useDispatch } from 'react-redux'
import { newUser, deleteUser } from '../../redux/actions/userActions'
import { StyledSaveButton, StyledForm, StyledSubmit, StyledButton, StyledP, StyledHr, StyledInput, StyledDivButtons } from '../styles/FormStyles'


const Form = () => {

  const [user, setUser] = useState('')
  const [ids, setIds] = useState(0)
  const [id, setId] = useState(0)
  const [disable, setDisable] = useState(false)
  const {handleSubmit} = useForm()
  console.log(disable)

  const allUser = useSelector((state) => state)
  const users = allUser.allUsers.user
  console.log(users)
  const dispatch = useDispatch()

   
  const submitForm = () =>{
    console.log('hola')
    dispatch(newUser(user))
    setDisable(true)
  }

  const handleCheckbox = (e) =>{
    let newId = e.target.name;
    console.log(newId)
    setId(newId)
    setIds(newId)
  }

  const handleDeletes = () =>{
    Service.deleteUser(ids)
    dispatch(deleteUser(ids))
    setDisable(true)
  }

  const handleSaves = (e) => {
    Service.updateUser(user, id)
    setDisable(false)
  }
  return (
    <>

    <StyledForm onSubmit={handleSubmit(submitForm)}>

    <StyledP>Users</StyledP>
    <StyledHr></StyledHr>

    {users.map(x =>
      <div key={x.id}>  
        <UserTitle handleCheckbox={handleCheckbox} index={x.id} userTitle={x.name} />
      </div>
      )}
    <div>
      <StyledInput onChange={e => setUser(e.target.value)} type="text" placeholder="Usuario a agregar" />
      <input type="checkbox" />
    </div>
    <StyledDivButtons>
      <StyledSubmit backgroundColor="green" type="submit" disabled={disable} value="Agregar" />
      <StyledButton backgroundColor="red" disabled={disable} onClick={handleDeletes}>Eliminar</StyledButton>
    </StyledDivButtons>

    <StyledSaveButton type="button" backgroundColor="blue" onClick={handleSaves}> Guardar </StyledSaveButton>
    </StyledForm>
      
    </>
  )

}

export default Form