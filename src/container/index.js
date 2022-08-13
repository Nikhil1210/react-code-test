import { Divider, Paper, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import styles from './styles'
const Component = ({
    children,
    classes,
    header
}) => (<Paper className={classes.root} elevation={0} variant="outlined">
    <Typography color="primary" variant="h6">{header}</Typography>
    <Divider />
    <Paper className={classes.content} elevation={0} >
        {children}
    </Paper>
</Paper>)
export default withStyles(styles)(Component)