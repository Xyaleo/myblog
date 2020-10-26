'use strict';
const Service = require('egg').Service;
const Sequelize = require('sequelize');
const config=require('./config');
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});
const User = sequelize.define('user',{
    name:{
        type:Sequelize.CHAR(30),
        primaryKey:true,
        allowNull: false
    },
    password:{
        type:Sequelize.CHAR(32),
        allowNull: false
    },
},{
    tableName:'user',
    timestamps: false
})

class LoginService extends Service {
    async gologin(user,pwd) {
        //some有一个条件成立就返回true
        let data = await User.findAll({
            where:{
                name:user,
                password:pwd
            }
        });
        if(data.length > 0){

            return{
                code:1,
                message:'登陆成功',
            }
        }else{
            return{
                code:-1,
                message:'登陆失败'
            }
        }
    }
}
module.exports = LoginService;
