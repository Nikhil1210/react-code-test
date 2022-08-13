import { Button, Typography } from '@material-ui/core'
import React from 'react'
export default React.memo(props => (<div>
    <Typography color="primary">{new Date().toLocaleTimeString()}</Typography>
    <div>Counter: {props.counter}</div>
    <Button onClick={props.onIncrement} variant="contained">+</Button>
</div>))