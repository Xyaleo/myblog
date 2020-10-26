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
const Article = sequelize.define('article',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement:true
    },
    name:{
        type:Sequelize.CHAR(30),
        allowNull: false
    },
    title:{
        type:Sequelize.CHAR(80),
        allowNull: false
    },
    text:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    date:{
        type:Sequelize.DATE,
        allowNull: false
    },
    time:{
        type:Sequelize.TIME,
        allowNull: false
    },
},{
    tableName:'article',
    timestamps: false
})

class ArticleService extends Service {
    async goAllarticle() {
        let data = await Article.findAll();
        return data;
        }
    async goOnearticle(aid) {
        let data = await Article.findOne({
            where: {
                id: aid
    }
    });
        return data;
    }

}

module.exports = ArticleService;
