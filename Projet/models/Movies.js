import {Schema, model} from "mongoose"

const movieSchema = new Schema({
    Poster_Link : {type : String, required : true},
    Series_Title : {type : String, required : true},
    Overview : {type : String, required : true},
    Released_Year : {type : Number, required : true},
    Runtime : {type : String, required : true},
    Genre : {type : String, required : true},
    Director : {type : String, required : true},
    IMDB_Rating : {type : Number, required : true},
    Star1 : {type : String, required : true},
    Star2 : {type : String, required : true},
    Star3 : {type : String, required : true},
    Star4 : {type : String, required : true},
})

export default model("movie", movieSchema)