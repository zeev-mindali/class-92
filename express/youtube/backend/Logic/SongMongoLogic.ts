import { VideoNotFoundError } from './../../../../fullstack_template/backend/Models/Client-Errors';
import { ICatModel } from './../Models/CatMongo';
import { ISongModel, SongModel } from './../Models/SongMongo';
import { ClientError, VideoNotFound } from './../../../template/Models/Clients-Errors';

//SELECT * FROM songs
const getAllSongs = async (): Promise<ISongModel[]> => {
    //get all songs without virtual fields
    //return SongModel.find().exec();

    //get all songs with virtual field
    return SongModel.find().populate("category").exec();
}

//select * from songs whre id = ???
const getSongById = async (id: string): Promise<ISongModel> => {
    //const singleSong = await SongModel.findById(id).exec();
    const singleSong = await SongModel.findById(id).populate("category").exec();
    if (!singleSong) throw new VideoNotFound(id);
    return singleSong;
}

//insert into songs (create)
const addSong = (newSong: ISongModel): Promise<ISongModel> => {
    const errors = newSong.validateSync();
    if (errors) throw new VideoNotFoundError(errors.message);
    return newSong.save();
}

//update songs set ....
const updateSong = async (song: ISongModel): Promise<ISongModel> => {
    const errors = song.validateSync();
    if (errors) throw new ClientError(400, errors.message);
    const updateSong = await SongModel.findByIdAndUpdate(song._id, song, { returnOriginal: false, }).exec();
    if (!updateSong) throw new VideoNotFoundError(song._id);
    return updateSong;
}

//delete from songs......
const deleteSong = async (id: string): Promise<void> => {
    const deleteSong = await SongModel.findByIdAndDelete(id).exec();
    if (!deleteSong) throw new VideoNotFoundError(id);
}

//select title,url from songs
const getPartialSongInfo = (): Promise<ISongModel[]> => {
    return SongModel.find({}, { title: true, url: true, _id: false }).exec();
}

export {
    getAllSongs,
    getSongById,
    addSong,
    updateSong,
    deleteSong,
    getPartialSongInfo
}


/*
        SQL     : SELECT * FROM songs WHERE category = 1;
        MongoDB : return SongModel.find({category:1}).exec();

        SQL     : SELECT * FROM songs WHERE category = 10 AND name = 'Over the rainbow';
        MongoDB : return SongModel.find({category=10,name='Over the rainbow'});

        SQL     : SELECT * FROM songs WHERE category=10 OR name = 'DUHAST';
        MongoDB : return SongModel.find({$or:[{category:10, name='DUHAST}]}).exec();

        SQL     : SELECT * FROM songs WHERE category BETWEEN 1 AND 3;
        MongoDB : return SongModel.find({category: {$gte1, $lte:3}}).exec();

        SQL     : SELECT category,name FROM songs WHERE category BETWEEN 1 AND 3;
        MongoDB : return SongModel.find({category:{$gte:1, $lte:3}},{name:true, category:true, _id:false}).exec();

        SQL     : SELECT * FROM songs WHERE category BETWEEN 1 AND 3 ORDER BY category ASC name DESC
        MongoDB : return SongModel.find({category:{$gte:1, $lte:3}},null,{sort:{category:1, name:-1}}).exec();

        SQL     : SELECT * FROM products LIMIT 30 SKIP 10 
        MongoDB : return ProductModel.find({},null,{skip:10, limit:30}).exec();

        SQL     : INNER JOIN - get all songs with category for each song
                : SELECT songs.*, name as categoryName
                : FROM songs JOIN categories
                : ON songs.category = category.id
        MongoDB : return SongModel.find({categoryId: {$ne:null}}).populate("category").exec();
*/