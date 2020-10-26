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
    }
},{
    tableName:'user',
    timestamps: false
})

class RegistryService extends Service {
    async goregistry(user, pwd) {
        let data = await User.findAll({
            where:{
                name:user
            }
        });
        if (data.length > 0) {
            return {
                code: -1,
                message: '注册失败,用户已存在',
            }
        } else {

            let dat = await User.create({
                name: user,
                password: pwd
            });
            return {
                code: 1,
                message: '注册成功',
                dat
            }
        }

    }
}

module.exports = RegistryService;
