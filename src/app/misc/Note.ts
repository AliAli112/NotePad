export class Note {
  public id: string;
  public dateCreated: Date;
  public dateModified: Date;
  public title: string;
  public body: string;
  public background: string;
  constructor(
    title: string,
    body: string
  )
  {
    const d = new Date();
    this.dateCreated = d;
    this.id = title + '_' + d.valueOf().toString();
    this.title = title;
    this.body = body;
    const backgrounds: string[] = ['../../../assets/image/nightsky.png',
    '../../../assets/image/nightsky2.png','../../../assets/image/nightsky3.png'];
    this.background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    console.log(this.background);
  }

}
