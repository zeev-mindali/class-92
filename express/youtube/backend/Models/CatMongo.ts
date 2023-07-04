import { Document, Schema, model } from "mongoose";

export interface ICatModel extends Document {
    //don't specify the _id here !!!!!
    name: String;
}

const CatSchema = new Schema<ICatModel>(
    {
        name: {
            type: String,
            required: [true, "missing category name"],
            minlength: [3, "name too short"],
            maxlength: [255, "name too long"],
            trim: true,
            unique: true,
        },
    }, {
    versionKey: false, //do not create _v field for versioning
}
);


export const CatModel = model<ICatModel>("catModel", CatSchema, "categories");


