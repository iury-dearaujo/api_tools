// src/api/controllers/yumi.js
var xlsx = require("xlsx");
var all = (resquest, response) => {
  const _resquest_H = resquest.headers;
  response.status(200);
  response.send("I love you! <3<3<3");
};
module.exports = {
  all
};
