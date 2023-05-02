//URL, descrption, category, current date (disabled), time (disabled)
export class Photo {
  public id: number;
  public URL: string;
  public description: string;
  public category: string;
  public date: string;
  public time: string;

  constructor(
    id: number,
    URL: string,
    description: string,
    category: string,
    date: string,
    time: string
  ) {
    this.id = id;
    this.URL = URL;
    this.description = description;
    this.category = category;
    this.date = date;
    this.time = time;
  }
}
