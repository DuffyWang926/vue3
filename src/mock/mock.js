const Mock = require('mockjs')

const hotData = {
  status: 0,
  data: [{
    title: '小米手机',
    hot: 1
  }, {
    title: '笔记本',
    hot: 1
  }, {
    title: '电脑',
    hot: 0
  }, {
    title: '平板',
    hot: 0
  }, {
    title: '液晶电视',
    hot: 1
  }, {
    title: '家电',
    hot: 0
  }, {
    title: '玩具',
    hot: 0
  }]
}

Mock.mock('http://test.happymmall.com/search/hot', hotData)
