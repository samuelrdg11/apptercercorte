import {Sequelize} from 'sequelize'

const db = new Sequelize('dbcrud', 'root', '1234Sr',{
    host:'localhost',
    dialect:'mysql'
})

export default db