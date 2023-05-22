import {Schema, model} from "mongoose"

const movieSchema = new Schema({
    Poster_Link : {type : String, required : false},
    Series_Title : {type : String, required : true},
    Overview : {type : String, required : true},
    Released_Year : {type : Number, required : true},
    Runtime : {type : String, required : true },
    Genre : {type : String, required : true},
    Director : {type : String, required : true},
    IMDB_Rating : {type : Number, required : true},
    Star1 : {type : String, required : false},
    Star2 : {type : String, required : false},
    Star3 : {type : String, required : false},
    Star4 : {type : String, required : false},
})

export default model("movie", movieSchema)