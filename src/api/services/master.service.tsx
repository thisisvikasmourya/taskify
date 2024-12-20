import Service from "@/libs/service";

interface ListParams {
  page: number;
  searchTerm?: string;
  created_by?: string;
  created_on?: string;
  no_of_records?: number;
  incomplete_records?: boolean;
  incomplete_values?: boolean;
  last_record_created_on?: boolean;
  last_document_added_on?: boolean;
  total_document_tagged?: boolean;
  classification?: boolean;
  doc_type?: boolean;
}

export default class MasterService extends Service {
  constructor() {
    super("dms");
  }

  async createMaster(
    name: string,
    primary_key: string,
    doctype_ids: any[],
    folder_ids: any[],
    form_builder_fields: any[],
    classification: string
  ): Promise<any> {
    try {
      const response = await this.post(
        `masters`,
        {
          name,
          primary_key,
          doctype_ids,
          folder_ids,
          form_builder_fields,
          classification,
        },
        true,
        true
      );
      return response.data;
    } catch (error: any) {
      console.log(error);
      return error?.response?.data;
    }
  }
  async doctypeFolder(doc_type_ids: any[]): Promise<any> {
    try {
      const response = await this.post(
        `doc-type-folder`,
        {
          doc_type_ids,
        },
        true,
        true
      );
      return response;
    } catch (error: any) {
      console.log(error);
      return error?.response?.data;
    }
  }
  async formBuilderUnion(doctype_ids: any[]): Promise<any> {
    try {
      const response = await this.post(
        `masters-form-builders`,
        { doctype_ids },
        true,
        true
      );
      return response.data;
    } catch (error: any) {
      console.log(error);
      return error?.response?.data;
      ``;
    }
  }

  async createMasterGroup({ name, master_ids }: any): Promise<any> {
    try {
      const response = await this.post(
        `master-groups`,
        { name, master_ids },
        true,
        true
      );
      return response.data;
    } catch (error: any) {
      console.log(error);
      return error?.response?.data;
    }
  }

  async checkPrimaryKey(doctype_ids: any[]): Promise<any> {
    try {
      const response = await this.post(
        `master-primary-keys`,
        { doctype_ids },
        true,
        true
      );
      return response.data;
    } catch (error: any) {
      console.log(error);
      return error?.response?.data;
    }
  }

  async updateMaster(
    id: string,
    name: string,
    primary_key: string,
    doctype_ids: any[],
    folder_ids: any[],
    form_builder_fields: any[],
    classification: any
  ): Promise<any> {
    try {
      const response = await this.patch(
        `masters/${id}`,
        {
          name,
          primary_key,
          doctype_ids,
          folder_ids,
          form_builder_fields,
          classification,
        },
        true,
        true
      );
      return response.data;
    } catch (error: any) {
      console.log(error);
      return error?.response?.data;
    }
  }

  async list(
    page: number,
    searchTerm?: any,
    created_by?: any,
    created_on?: any,
    no_of_records?: any,
    incomplete_records?: any,
    incomplete_values?: any,
    last_record_created_on?: any,
    last_document_added_on?: any,
    total_document_tagged?: any,
    classfication?: any,
    doc_type?: any
  ): Promise<any> {
    try {
      const response = await this.get(
        `masters?q=${
          searchTerm || ""
        }&page=${page}&created_by=${created_by}&created_on=${created_on}&no_of_records=${no_of_records}&incomplete_records=${incomplete_records}&incomplete_values=${incomplete_values}&last_record_created_on=${last_record_created_on}&last_document_added_on=${last_document_added_on}&total_document_tagged=${total_document_tagged}&classfication=${classfication}&doc_type=${doc_type}`,
        true,
        true
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async deleteMaster(id: string): Promise<any> {
    try {
      const response = await this.delete(`master/delete/${id}`, true, true);
      return response;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  }
  async getMasterById(id: string): Promise<any> {
    try {
      const response = await this.get(`masters/${id}`, true, true);
      return response.data;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  }

  async deleteMultipleMaster(docPropertiesId: any): Promise<any> {
    try {
      const response = await this.post(
        `multiple-master-deletion`,
        docPropertiesId,
        true,
        true
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async masterValExist(data: any): Promise<any> {
    try {
      const response = await this.post(`master-exists`, data, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to update data");
    }
  }
}
