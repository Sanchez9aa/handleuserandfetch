import axios from 'axios'

const createUser = async (nameUser) => {
  console.log('Creando Usuario')
  const newUser = {
    "name": nameUser,
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
}
  }
  await axios.post('https://jsonplaceholder.typicode.com/users/', newUser)
  .then(res => {
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })
}

const deleteUser = (id) => {
  console.log('Borrando Usuario')
  axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
}

const updateUser = async (nameUser, id) => {
  const newUser = {
    "name": nameUser,
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
}
  }
  await axios.put('https://jsonplaceholder.typicode.com/users/' + id, newUser)
  .then(res => {
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })
}

export default {createUser, deleteUser, updateUser}