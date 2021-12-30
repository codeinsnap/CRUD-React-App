import React from 'react'
import {AppBar, Toolbar, makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'

const newStyle = makeStyles({
    header: {
      background:'#111111'
    },
    tabs: {
        color: '#ffffff',
        textDecoration: 'none',
        marginRight: 20,
        fontSize:20
    }
})


const navbar = () => {
    const classes= newStyle();
    return (
        <div>
        <AppBar className={classes.header} position='static'>
            <Toolbar>
                <Link to='/' className={classes.tabs}> Artistic Arts </Link>
                <Link  to='/all' className={classes.tabs}> All Subscribers </Link>
                <Link  to='/add' className={classes.tabs}> Add Subscribers </Link>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default navbar
 