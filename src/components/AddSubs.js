import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import {addUser} from '../Service/api';
import {Link } from 'react-router-dom'

const useStyle = makeStyles({
    container : {
        width:"50%",
        margin: "5% 0 0 25%",
        '& > *': {
            marginTop: "10px"
        }
    }
})

const initialValues = {
    name:"",
    username:"",
    email:"",
    phone:""
}


const AddUser = () =>{
    const [ user, setUser] = useState(initialValues);
    const {name, username, email, phone} = user;
    const classes = useStyle();

    
    const onValueChange =(e) =>{
        setUser({...user, [e.target.name]: e.target.value});
        
    }

    const addUserDetail = async()=> {
        await addUser(user) 
    }
    
    return (
        <div>
           <FormGroup className={classes.container}>
           <Typography variant="h4"> Add Subscriber </Typography>
               <FormControl>
                   <InputLabel> Name </InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name='name' /> 
               </FormControl>
               <FormControl>
                   <InputLabel> Username </InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name='username'  /> 
               </FormControl>
               <FormControl>
                   <InputLabel> Email </InputLabel>
                   <Input onChange={(e) => onValueChange(e)}  name='email'/> 
               </FormControl>
               <FormControl>
                   <InputLabel> Phone </InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name='phone'/> 
               </FormControl>
              
               <Button variant="contained"  onClick ={() => addUserDetail()} color="primary" component={Link} to={`/all`}> Add Subscriber </Button >
              
           </FormGroup>
        </div>
    )
    }
export default AddUser;
