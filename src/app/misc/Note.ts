export class Note {
  public id: string;
  public dateCreated: Date;
  public dateModified: Date;
  public title: string;
  public body: string;
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
  }

}
