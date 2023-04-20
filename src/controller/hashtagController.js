const {HashtagService} = require('../services/index');

const hastagService = new HashtagService();

const createHashtag = async (req,res) =>{
    try {
        const response = await hastagService.create(req.body);
        return res.status(201).json({
            data: response,
            message: "Hashtag created successfully",
            success : true,
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Something went wrong",
            success: false,
            err: error
        });
    }
}

module.exports = {createHashtag};