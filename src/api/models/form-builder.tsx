// Represents a post with optional properties.
export default interface FormBuilder {
  id?: any | null;
  doc_properties_id: string;
  folder_id: string;
  form_data: string;
  doctype: string;
  value: string;
  doc_value_id?: any | null;
  draft: boolean;
  form_builder_id: any;
  doctype_id: any;
  form_builder_fields: any;
 
  doctype_name:any;
  master_name:any;
 
  is_draft:any;
  classification:any;
}
