// Represents a post with optional properties.
export default interface UploadDocument {
  id?: any | null;
  name: string;
  doc_properties_id: string;
  folders: string;
  form_builder: string;
  size: any;
  doc_properties_value: any;
  mime_type: any;
  draft: any;
}
