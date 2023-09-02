const Post =require("../Models/Post");
const User = require("../Models/User");
const { post } = require("../routes/post");

exports.createpost = async(req,res)=>{
    try {
        const newPostData ={
            caption:req.body.caption,
            image:{
                public_id:"req.body.public_id",
                url:'req.body.url',
            },
            owner:req.user._id,
        };

        const post = await Post.create(newPostData);
        
        const user = await User.findById(req.user._id);
        
        user.posts.push(post._id);

        await user.save();
        res.status(201).json({
            success:true,
            post,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}