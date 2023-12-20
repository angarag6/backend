import mongoose from "mongoose";

const   UrlSchema = new mongoose.Schema({
    Url:String
});

const   Url = mongoose.model('Url', UrlSchema);
export default Url