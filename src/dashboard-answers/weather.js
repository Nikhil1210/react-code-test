
import { Typography } from '@material-ui/core'
import React from 'react'
export default React.memo(props => (<div>
    <Typography color="primary">{new Date().toLocaleTimeString()}</Typography>
    <div>{props.weather}</div>
</div>))