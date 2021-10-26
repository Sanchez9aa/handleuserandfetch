import { useQuery } from 'react-query'
import Error from './components/error/Error'
import Form from './components/form/Form'
import { useDispatch } from 'react-redux'
import { setUser } from './redux/actions/userActions'
import { GlobalStyles } from './components/styles/GlobalStyles.style'

const App = () => {

  const dispatch = useDispatch()

  const { isLoading, error, data, isError } = useQuery('data', async () =>
     await fetch('https://jsonplaceholder.typicode.com/users/').then(res => res.json())
    )
  
  if (isLoading) return 'Loading...'

  if (error || data === undefined || data.length === undefined) return <Error />

  if (isLoading === false && isError === false){
    dispatch(setUser(data))
  }
  return (
    <>
      <GlobalStyles />
      <Form /> 
    </>
  )
}

 export default App