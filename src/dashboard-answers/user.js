
import { Typography } from '@material-ui/core'
import React from 'react'
export default React.memo(props => (<div>
    <Typography color="primary">{new Date().toLocaleTimeString()}</Typography>
    <div>{props.user.fname} {props.user.lname}</div>
    <div>{props.user.city} {props.user.country}</div>
</div>), (oldVal, newVal) => oldVal.user.fname === newVal.user.fname)