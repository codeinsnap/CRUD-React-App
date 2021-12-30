import { Typography , makeStyles} from '@material-ui/core'
import React from 'react'
import Home from '../Assets/Images/Home.jpg'

const newStyle = makeStyles({
    title: {
        color: '#ffffff',
        textAlign:'center',
        fontSize:20,
        background: '#000000',
        position:'relative'
    }
})


const Artistic = () => {
    const classes= newStyle();
    return (
        <div >
            <Typography  className={classes.title}> Welcome to Artistic Arts</Typography>
             <img src={Home}  style={{height: '100%' , width: '100%'}} />
             
        </div>
    )
}

export default Artistic
