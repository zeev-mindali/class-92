class Song {
  public descption: string;
  public img: string;
  public title: string;
  public url: string;
  public id: number;

  constructor(
    descption: string,
    img: string,
    title: string,
    url: string,
    id: number
  ) {
    this.descption = descption;
    this.img = img;
    this.title = title;
    this.url = url;
    this.id = id;
  }
}

export default Song;
