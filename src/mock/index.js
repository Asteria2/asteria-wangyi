const Mock = require("mockjs");
const categoryData = require('./category.json')
const categoryListData = require('./categoryList.json')
const homeData = require('./homeData.json')
const worthData = require('./deserveToBuy.json')

Mock.mock('/home', { code: 0, data: homeData });
Mock.mock('/categoryList', { code: 0, data: categoryListData });
Mock.mock('/category', { code: 0, data: categoryData }); 
Mock.mock('/worth', { code: 0, data: worthData }); 