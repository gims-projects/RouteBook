export class DeliveryRouteStopProcedureModel {

  public ID: string;
  public StopID: string;
  public ParentID: string = null; // Null if no parent or ID of parent
  public SortOrder: string;
  public Title: string;
  public Summary: string;
  public UrlToHTMLFile: string; // Used to link to an HTML file explaining this procedure in more detail.

  constructor(private id: string,
              private stopID: string,
              private parentID: string,
              private sortOrder: string,
              private title: string,
              private summary: string,
              private urlToHTMLFile: string) {

    this.ID = id;
    this.StopID = stopID;
    this.ParentID = parentID;
    this.SortOrder = sortOrder;
    this.Title = title;
    this.Summary = summary;
    this.UrlToHTMLFile = urlToHTMLFile;

  }
}
