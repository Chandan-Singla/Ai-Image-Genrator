const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
   

const openai = new OpenAIApi(configuration);

const genrateimg=async(req,res)=>{
    const{prompt,size}=req.body;
    imgsize=size==='small'?'256x256':size==='medium'?'512x512':'1024x1024';
    try {
        const response=await openai.createImage({
            prompt,
            n:1,// number of images to create
            size:imgsize
        });
        const imgurl=response.data.data[0].url;
        res.status(200).json({
            success:true,
         data:imgurl
         });
    } catch (error) {
        res.status(400).json({

            success:false,
            error:'Image not genrated'
        });
    }
    };
    module.exports={genrateimg};