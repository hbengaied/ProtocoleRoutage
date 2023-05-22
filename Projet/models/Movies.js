import {Schema, model} from "mongoose"

const movieSchema = new Schema({
    Poster_Link : {type : String, required : true},
    Series_Title : {type : String, required : true}
})

export default model("movie", movieSchema)