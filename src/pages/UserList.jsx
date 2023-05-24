import React, {useState, useEffect} from 'react'
import { Button, ListGroup, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from "react-hot-toast";


const deleteUser = async(email)=>{
   await axios.post("http://65.0.93.119:4000/remove", {email})
  toast.success("user deleted")
}

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
                <ListGroup.Item key={user._id} className='d-flex justify-content-between align-items-center'>
                <div>
                {user.firstname}   {user.lastname}
                </div>
                  <div>
                  <Button className='me-2' as={Link} to={`/update/${user._id}`}>Update </Button>
                <Button variant="danger" onClick={() => deleteUser(user.email)
                }>Delete </Button>
                  </div>
                </ListGroup.Item>
                ))
            }
            
            </ListGroup>
        </Container>
    </div>
  )
}

export default UserList