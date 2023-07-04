import { Document, Schema, model } from "mongoose";
import { CatModel } from "./CatMongo";


//1. model interface describing the data in the model
export interface ISongModel extends Document {
    //don't specify the _id here !!!!!
    url: string;
    title: string;
    songImg: string;
    category: Schema.Types.ObjectId;
    videoFile: string;
}

//2, model schema describing validation, constrains and more:

const SongSchema = new Schema<ISongModel>(
    {
        url: {
            type: String,
            required: [true, "missing url address"],
            minlength: [3, "url too short"],
            maxlength: [255, "url too long"],
            trim: true,
            unique: true,
        },
        title: {
            type: String,
            required: [true, "missing title address"],
            minlength: [3, "title too short"],
            maxlength: [100, "title too long"],
            trim: true,
            unique: false,
        },
        songImg: {
            type: String,
            required: [true, "missing song name"],
            minlength: [3, "song image too short"],
            maxlength: [255, "song image to long"],
            trim: true,
            unique: false,
        },
        videoFile: {
            type: String,
            minlength: [3, "video file too short"],
            maxlength: [255, "video url too long"],
            trim: true,
            unique: true,
        },
        category: {
            type: Schema.Types.ObjectId,
        },
    }, {
    versionKey: false, //do not create _v field for versioning
    toJSON: { virtuals: true }, //when converting db to json - allow bring virtual fields
    //id:false //do not duplicate _id into id field
},
);

SongSchema.virtual("categoryName", {
    ref: CatModel, //which model are you describing
    localField: "category", //which field in our model is it
    foreignField: "_id", //which field on category model is it
    justOne: true, //category is a single object and not an array
})

export const SongModel = model<ISongModel>("SongModel", SongSchema, "songs");

/* just one
{
    "_id": j32983dn923d23d,
    "category":"sci fi",
    "total":28
}
*/

/* 
{
    "_id": j32983dn923d23d,
    "category":[
        {
            name: "sci fi",
            total : 7,
            lastrent:2023-07-01,
            age: "13+",
        },
        {
            name: "space",
            total : 10,
            lastrent:2023-01-01,
            age: "16+",
        }
   ]
}
*/