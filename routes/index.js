const express = require('express')
let Home = require('../controller/home')

const router = express.Router()

module.exports = function () {
  router.get('/', function (req, res, next) {
    let home = new Home(req, res)

    home.render()
  })

  return router
}