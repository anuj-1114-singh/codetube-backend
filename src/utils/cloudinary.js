import fs from "fs"
import { v2 as cloudinary } from 'cloudinary';

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_APT_SECRET 
});

const uploadOnClodinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return 
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log("File is uploaded on cloudinary : ", response.url)
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
            fs.unlinkSync(localFilePath)
            return null
    }
}

export {uploadOnClodinary}