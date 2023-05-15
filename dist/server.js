var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/api/controllers/rExcelController.js
var require_rExcelController = __commonJS({
  "src/api/controllers/rExcelController.js"(exports, module2) {
    var xlsx = require("xlsx");
    var PATH_XLSX = process.env.PATH_XLSX || "./downloads";
    var all = (resquest, response) => {
      const _resquest = resquest.headers;
      const workbook = xlsx.readFile(`${PATH_XLSX}/yumi.xlsx`);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const dataJ = worksheet;
      const dynamicDate = {
        "resquest": {
          "user-agent": resquest.headers["user-agent"],
          "host": resquest.headers["host"]
        },
        "file_info": dataJ["!ref"].split(":")
      };
      response.status(200);
      response.send(dynamicDate);
    };
    module2.exports = {
      all
    };
  }
});

// src/api/controllers/yumi.js
var require_yumi = __commonJS({
  "src/api/controllers/yumi.js"(exports, module2) {
    var xlsx = require("xlsx");
    var all = (resquest, response) => {
      const _resquest_H = resquest.headers;
      response.status(200);
      response.send("I love you! <3<3<3");
    };
    module2.exports = {
      all
    };
  }
});

// src/api/controllers/home.js
var require_home = __commonJS({
  "src/api/controllers/home.js"(exports, module2) {
    var all = (resquest, response) => {
      response.status(200);
      response.send("OK");
    };
    module2.exports = {
      all
    };
  }
});

// src/api/router.js
var require_router = __commonJS({
  "src/api/router.js"(exports, module2) {
    var express = require("express");
    var router = express.Router();
    var rExcelController = require_rExcelController();
    var yumi = require_yumi();
    var home = require_home();
    router.get("/excel", rExcelController.all);
    router.get("/yumi", yumi.all);
    router.get("/", home.all);
    module2.exports = router;
  }
});

// src/app.js
var require_app = __commonJS({
  "src/app.js"(exports, module2) {
    var express = require("express");
    var cors = require("cors");
    var router = require_router();
    var app2 = express();
    app2.set("trust proxy", true);
    app2.use(cors());
    app2.use(router);
    module2.exports = app2;
  }
});

// src/server.js
var app = require_app();
var dotenv = require("dotenv");
dotenv.config();
var PORT_NAME = process.env.PORT || 54581;
app.listen(PORT_NAME, () => {
  console.log(`Listening on port ${PORT_NAME}`);
});
