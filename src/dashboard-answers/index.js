You •
import { withStyles } from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import Container from '../container'
import styles from '../styles'
import Counter from './counter'
import User from './user'
import Weather from './weather'
const Component = ({ data }) => {
    const [counter, setCounter] = useState(0)
    const handleIncrement = useCallback(() => setCounter(counter + 1), [counter])
    return (<Container header="User Dashboard">
        <Container header="Weather">
            <Weather weather={data.weather} />
        </Container>
        <Container header="User">
            <User user={data.user} />
        </Container>
        <Container header="Counter">
            <Counter counter={counter} onIncrement={handleIncrement} />
        </Container>
    </Container>)
}
export default withStyles(styles)(Component)