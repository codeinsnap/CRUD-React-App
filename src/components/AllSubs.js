import React from 'react'
import {deleteUser, getUsers } from '../Service/api';
import {useEffect, useState} from 'react'
import {Table ,TableRow, TableBody ,TableCell, TableHead, makeStyles, Button} from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyle = makeStyles({
    table: {
        width: "90%",
        margin: "50px 0 0 50px"
    },

    thead: {
       '& > *' :{
           background: '#000000',
           color: '#ffffff',
           fontSize: 20
          
       }    
    },

    row : {
        '& > *' : {
            // background: '#000000',
            // color: '#ffffff',
            fontSize: 20
        }
    },
    sbutton :{
        background: "blue",
        color: "#ffffff",
        marginRight: 10
    },

    sbutton2 :{
        background: "#DC143C",
        color: "#ffffff",
        marginRight: 10
    },
    // sbutton1 :{
    //     background: "#000000",
    //     color: "#000000",
    //     marginRight: 10
    // }
})


function AllSubs()  {

    // const [ users, setUsers] = useState([]); 
    
    const [ userData, setUserData] = useState([]); 

    useEffect(()=>{
        getAllUsers();
    // getUsers().then((res) => {const Data = res
    //  // setUserData(Data)
    // }  ).catch((e)=> console.log(e))

        // console.log("Hi", Data)
    }, [])

    const getAllUsers= async()=>{
        const Data = await getUsers();
     setUserData(Data)
    }

    // const getAllUsers = async()=>{
    //   const response= await getUsers();
    //   console.log(response.data);
    //   setUsers(response.data);
    // } the above code was no working 


    // console.log("inside AllSubs")
    // console.log("My user data", userData)
    // console.log("My user data 2", userData.data)

    const classes = useStyle();

    const deleteUserData = async(id)=>{
        await deleteUser(id);
        getAllUsers();
    }



    return (
        <div>
        {userData.data != null ? ( 
            <Table className={classes.table}>
            <TableHead >
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell />
                    <TableCell />
                </TableRow>
            </TableHead>

            <TableBody>
               {
                userData.data.map((user) =>
                       (
                   
                       <TableRow className={classes.row}>
                           <TableCell> {user.id} </TableCell>
                           <TableCell> {user.name} </TableCell>
                           <TableCell> {user.username} </TableCell>
                           <TableCell> {user.email} </TableCell>
                           <TableCell> {user.phone} </TableCell>
                           <TableCell> 
                                <Button className={classes.sbutton} component={Link} to={`/edit/${user.id}`}> Edit </Button>
                                <Button className={classes.sbutton2} onClick={()=> deleteUserData(user.id)}> Delete</Button>
                           </TableCell>
                       </TableRow>
                   ))
               }
                            
            </TableBody>
        </Table>
            
        ):
        (<h1>Loading...</h1>)}
        </div>
        
    )
}

export default AllSubs;
