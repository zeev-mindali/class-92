class YouTube {
  private songs: string[] = [];

  public addSong = (url: string) => {
    this.songs.push(url);
  };

  public getSongList = () => {
    return this.songs;
  };

  public getShortList = (txt: string) => {
    return this.songs.filter((item) => item.includes(txt));
  };
}

export default YouTube;
