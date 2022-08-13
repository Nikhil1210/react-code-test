You •
import { Button, Select, withStyles } from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom'
import { getUser, randomWeather, userNames } from './data'
import styles from './styles'
import Dashboard from './dashboard'
const Component = ({ classes }) => {
    const [data, setData] = useState({ user: getUser(userNames[0]), weather: '' })

    const [selUser, setSelUser] = useState(userNames[0])
    const handleUserChange = useCallback(e => setSelUser(e.target.value))
    const handleFetchUser = useCallback(() => setData({ user: getUser(selUser), weather: data.weather }))
    const handleWeather = useCallback(() => setData({ user: getUser(selUser), weather: randomWeather() }))
    const handleDashboard = useCallback(() => setData({ user: getUser(selUser), weather: randomWeather() }))
    return (<div className={classes.root}>
        <div className={classes.container}>
            <Select className={classes.select} value={selUser} onChange={handleUserChange}>
                {userNames.map(user => <div key={user} value={user}>{user}</div>)}
            </Select>
            <Button color="primary" onClick={handleFetchUser} variant="contained">FETCH USER</Button>
            <Button color="primary" onClick={handleWeather} variant="contained">UPDATE WEATHER</Button>
            <Button color="primary" onClick={handleDashboard} variant="contained">UPDATE DASHBOARD</Button>
        </div>
        <Dashboard data={data} />
    </div>)
}
const Main = withStyles(styles)(Component)
ReactDOM.render(
    <Main />,
    document.getElementById('root')
)