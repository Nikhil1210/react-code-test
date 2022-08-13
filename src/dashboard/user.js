You •
import { Typography } from '@material-ui/core'
import React from 'react'
export default props => (<div>
    <Typography color="primary">{new Date().toLocaleTimeString()}</Typography>
    <div>{props.user.fname} {props.user.lname}</div>
    <div>{props.user.city} {props.user.country}</div>
</div>)