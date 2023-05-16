class Song {
  public description: string;
  public img: string;
  public title: string;
  public url: string;
  public id: number;

  constructor(
    description: string,
    img: string,
    title: string,
    url: string,
    id: number
  ) {
    this.description = description;
    this.img = img;
    this.title = title;
    this.url = url;
    this.id = id;
  }
}

export default Song;
