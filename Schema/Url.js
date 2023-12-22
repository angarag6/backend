import mongoose from "mongoose";

const   UrlSchema = new mongoose.Schema({
    shortUrl:String,
    longUrl:String,
    createAt: {
        type: Date,
        default:Date.now(),
        
    }
});

const   Url = mongoose.model('Url', UrlSchema);
export default Url