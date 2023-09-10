const express = require("express");
const { createpost,likeAndUnlikePost, deletePost, getPostOfFollowing } = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated,createpost);
router.route("/post/:id").get(isAuthenticated, likeAndUnlikePost).delete(isAuthenticated, deletePost);;

router.route("/posts").get(isAuthenticated, getPostOfFollowing);
module.exports = router;
