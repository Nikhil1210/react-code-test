import weathers from './weathers.json'
import users from './users.json'
export const userNames = users.map(user => user.fname)
export const getUser = fname => Object.create(users.find(user => user.fname === fname))
export const randomWeather = () => weathers[Math.floor(Math.random() * weathers.length)]