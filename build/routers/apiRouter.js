"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _videoController = require("../controllers/videoController");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var apiRouter = _express["default"].Router();
apiRouter.post("/videos/:id([0-9a-f]{24})/view", _videoController.registerView);
apiRouter.post("/videos/:id([0-9a-f]{24})/comment", _videoController.createComment);
var _default = exports["default"] = apiRouter;