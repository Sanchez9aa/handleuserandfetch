import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/actions/userActions'
import Error from '../components/error/Error'


const Fetch =  () => {

  console.log('hola')

  const dispatch = useDispatch()

  const { isLoading, error, data } = useQuery('data', async () =>
     await fetch('https://jsonplaceholder.typicode.com/users/')
     .then(res => dispatch(setUser(res.data)))
     .catch((err)=>{
       console.log("err", err)
     })
    )
 
  if (isLoading) return 'Loading...'

  if (error || data === undefined || data.length === undefined) return <Error />
}

export default Fetch