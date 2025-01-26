"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoUpload = exports.publicOnlyMiddleware = exports.protectorMiddleware = exports.localsMiddleware = exports.avatarUpload = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _multerS = _interopRequireDefault(require("multer-s3"));
var _awsSdk = _interopRequireDefault(require("aws-sdk"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var s3 = new _awsSdk["default"].S3({
  credentials: {
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET
  }
});
var isHeroku = process.env.NODE_ENV === "production";
var s3ImageUploader = (0, _multerS["default"])({
  s3: s3,
  bucket: "wetubeee/images",
  acl: "public-read"
});
var s3VideoUploader = (0, _multerS["default"])({
  s3: s3,
  bucket: "wetubeee/videos",
  acl: "public-read"
});
var localsMiddleware = exports.localsMiddleware = function localsMiddleware(req, res, next) {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user || {};
  res.locals.isHeroku = isHeroku;
  next();
};
var protectorMiddleware = exports.protectorMiddleware = function protectorMiddleware(req, res, next) {
  if (req.session.loggedIn) {
    return next();
  } else {
    req.flash("error", "Log in first.");
    return res.redirect("/login");
  }
};
var publicOnlyMiddleware = exports.publicOnlyMiddleware = function publicOnlyMiddleware(req, res, next) {
  if (!req.session.loggedIn) {
    return next();
  } else {
    req.flash("error", "Not authorized");
    return res.redirect("/");
  }
};
var avatarUpload = exports.avatarUpload = (0, _multer["default"])({
  dest: "uploads/avatars/",
  limits: {
    fileSize: 3000000
  },
  storage: isHeroku ? s3ImageUploader : undefined
});
var videoUpload = exports.videoUpload = (0, _multer["default"])({
  dest: "uploads/videos/",
  limits: {
    fileSize: 10000000
  },
  storage: isHeroku ? s3VideoUploader : undefined
});