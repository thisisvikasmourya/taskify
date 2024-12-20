interface MasterDetails {
  master_id: string;
  master_name: string;
}

interface MasterFieldDetails {
  id: string;
  name: string;
}

interface DocTypeDetails {
  doctype_id: string;
  dcotype_name: string;
}

interface DocTypeFieldDetails {
  id: string;
  name: string;
}

interface FormBuilderField {
  id: string;
  type: "doc_type" | "master_properties" | "doc_properties" | "free_text";
  label: string | null;
  value: string;
  required: boolean;
  master_details?: MasterDetails[];
  master_field_details?: MasterFieldDetails;
  doc_type_details?: DocTypeDetails[];
  doctype_field_details?: DocTypeFieldDetails;
}

export default interface AutoActionPayload {
  folder_id: string;
  auto_index_key_name: string;
  auto_rename_key_name: string;
  separator: string;
  source_path: string;
  form_builder_fields: FormBuilderField[];
  is_auto_rename_files: number;
}
