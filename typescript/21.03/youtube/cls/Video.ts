import axios from "axios";

class Video {
  private url: string;
  private title: string = "";
  private img: string = "";
  private desc: string = "";
  private videoID: string;

  //url: https://www.youtube.com/watch?v=R0ebIzABQm0
  //videoID: R0ebIzABQm0
  constructor(url: string) {
    this.url = url;
    this.videoID = url.split("=")[1];
    this.updateData();
  }

  private updateData = async () => {
    const apiKey = "AIzaSyCTV38_t5fqYC5joDmQZdE_fhB8n7O4zxQ";
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${this.videoID}&fields=items(id%2Csnippet)&key=${apiKey}`;
    const videoMetaData = await axios.get(url);
    this.title = videoMetaData.data.items[0].snippet.title;
    this.desc = videoMetaData.data.items[0].snippet.description;
    this.img = videoMetaData.data.items[0].snippet.thumbnails.medium.url;
    //console.log(this);
  };

  public getSongInfo = () => {
    return this;
  };
}

export default Video;
