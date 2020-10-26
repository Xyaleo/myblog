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
    name:{
        type:Sequelize.CHAR(30),
        primaryKey:true,
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

class UploadService extends Service {
    async goupload(uname, title, text, date, time) {
        let data = await Article.findAll({
            where:{
                name:uname,
                title:title
            }
        });
        if (data.length > 0) {
            return {
                code: -1,
                message: '发布失败，已经存在相同标题文章',
            }
        } else {
            let dat = await Article.create({
                name: uname,
                title: title,
                text: text,
                date: date,
                time: time
            });
            return {
                code: 1,
                message: '上传成功',
            }

        }
    }
}

module.exports = UploadService;
