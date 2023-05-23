import React, {useState, useEffect} from 'react'
import { ListGroup, Container } from 'react-bootstrap'
import axios from 'axios'

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
      const fetchUsers = async()=>{
        const {data} = await axios.get("http://65.0.93.119:4000/fetchusers")
        setUsers(data.data)
      }
    fetchUsers()
     
    }, [])
    
  return (
    <div>
        <Container className='mt-5'>
        <h3>Users {users?.length}</h3>
            <ListGroup>
            {
                users?.map(user => (
                <ListGroup.Item key={user._id}>{user.firstname}</ListGroup.Item>

                ))
            }
            
            </ListGroup>
        </Container>
    </div>
  )
}

export default UserList