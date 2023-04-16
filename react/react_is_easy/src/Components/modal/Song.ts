class Song {
  public descption: string;
  public img: string;
  public title: string;
  public url: string;

  constructor(descption: string, img: string, title: string, url: string) {
    this.descption = descption;
    this.img = img;
    this.title = title;
    this.url = url;
  }
}

export default Song;
