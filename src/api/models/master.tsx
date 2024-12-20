export default interface MasterProperty {
  id?: any | null;
  name: string;
  primary_key: string;
  doctype_ids: any[];
  folder_ids: any[];
  form_builder_fields: any[];
  type: string;
  createdby: string;
  created_at: string;
  doc_properties_values_count: number;
  [key: string]: any;
}
  