import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Input from '../components/Input'
import { toast } from 'react-hot-toast'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const upateUser = async(userData) =>{
    await axios.post("http://65.0.93.119:4000/update", userData)
    console.log("Data updated");
}


const UserUpdate = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
      
        const getUser = async(id) => {
            const {data} = await axios.get("http://65.0.93.119:4000/fetchusers")
             const users = data.data
             const user = users.find(user => user._id === id)
           
            setFirstName(user.firstname);
            setLastName(user.lastname)
            setAge(user.age)
            setEmail(user.email)
            setPhone(user.phoneNumber)
        }
     
        getUser(id)
    }, [])
    
    
    

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(firstName ==="" || lastName === "" || age === "" || phone === "" || email === "" || password === ""){
            return toast.error("please provide all required fields!!!")
        }

        const userData ={
            firstname: firstName,
            lastname: lastName,
            age: Number(age),
            email: email,
            phoneNumber: Number(phone),
            password: password
          }

          setFirstName("")
          setLastName("")
          setAge("")
          setEmail("")
          setPhone("")
          setPassword("")
        
          console.log(userData);
          upateUser(userData)
          navigate("/users")
          toast.success("User updated successfully")
    }

  return (
    <Container>
       <Row className='mt-5'>
            <Col lg={8} className='mx-auto bg-light y-2'>
               <Form onSubmit={handleSubmit}>
               
                    <Input label="First name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    <Input label="Last name" value={lastName} onChange={e => setLastName(e.target.value)}/>
                    <Input label="Age" value={age} onChange={e => setAge(e.target.value)}/>
                    <Input label="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <Input label="Contact Number" value={phone} onChange={e => setPhone(e.target.value)}/>
                    <Input label="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <div>
                    <Button type="submit" variant="dark" className=' block w-full' >Submit</Button>

                    </div>
               </Form>
            </Col>
       </Row>
    </Container>
  )
}

export default UserUpdate