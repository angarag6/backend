import mongoose from "mongoose";

const   UrlSchema = new mongoose.Schema({
    shortUrl:String,
    longUrl:String,
    createAt: {
        type: Date,
        
    }
});

const   Url = mongoose.model('Url', UrlSchema);
export default Url