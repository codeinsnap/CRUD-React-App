import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import React, {useState , useEffect, Component} from 'react';
import {editUser, getUsers} from '../Service/api';
import { Link, useParams } from 'react-router-dom';




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


const EditUser = () =>{
    const [ user, setUser] = useState(initialValues);
    const {name, username, email, phone} = user;
    const { id } = useParams();
    const classes = useStyle();

    useEffect(() => {
        loadData();
    },[])

    const loadData = async() =>{
        console.log("id ", id)
        const Daata = await getUsers(id);
        if (Daata !=null) {
            setUser(Daata.data)
        } 
     
          console.log("This is ", Daata);
    }
    console.log("this is user", user)

    // const loadUserData = async ()=>{
    //     const response = await getUsers1(id);
    //     setUser(response.dataa);
    // }
    const onValueChange =(e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editUserDetail = async()=> {
        await editUser(id, user);
    }

    
    
    return (
        <div>
        {user != null ? ( 
           <FormGroup className={classes.container}>
           <Typography variant="h4"> Edit Subscriber </Typography>
               <FormControl>
                   <InputLabel> Name </InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name='name' value={name}/> 
               </FormControl>
               <FormControl>
                   <InputLabel> Username </InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name='username' value={username}  /> 
               </FormControl>
               <FormControl>
                   <InputLabel> Email </InputLabel>
                   <Input onChange={(e) => onValueChange(e)}  name='email' value={email}/> 
               </FormControl>
               <FormControl>
                   <InputLabel> Phone </InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name='phone' value={phone}/> 
               </FormControl>
               <Button variant="contained"  onClick ={() => editUserDetail() } color="primary" component={Link} to={`/all`} > Edit Subscriber </Button>
           </FormGroup>
           ):
        (<h1>Loading...</h1>)}
        </div>
    )
    }
export default EditUser;
