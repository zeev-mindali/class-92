import Cat from "./Cat";

class Song {
  public id: number;
  public url: string;
  public songName: string;
  public songImg: string;
  public category: number;
  public categoryName: string;
  public videoFile: string;
  constructor(
    url: string,
    songName: string,
    songImg: string,
    category: number,
    categoryName: string,
    videoFile: string
  ) {
    this.url = url;
    this.songName = songName;
    this.songImg = songImg;
    this.category = category;
    this.categoryName = categoryName;
    this.videoFile = videoFile;
  }
}

export default Song;
