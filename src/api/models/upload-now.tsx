// Represents a post with optional properties.
export default interface UploadNow {
  id?: any | null;
  name: string;
  doc_properties_id: string;
  size: any;
  doc_properties_value: any;
  mime_type: any;
  draft: any;

  parent_id: any;
  workspace_id:any;
}
