import Service from "@/libs/service";
import SubMasterProperty from "@/api/models/sub-master";

export interface exportMasterParams {
  master_ids:any;
  incomplete_records?: boolean;
  incomplete_values?: boolean;
  last_record_created_on?: boolean;
  last_document_added_on?: boolean;
  total_document_tagged?: boolean;
  classification?: boolean;
  doc_type?: boolean;
  q?: string;
  created_by: any;
  created_on:any;
  no_of_records:any;
}


export default class SubMasterService extends Service {
  constructor() {
    super("dms");
  }

  async list(page: any,master_id: string, search: string): Promise<any> {
    try {
      const response = await this.get(
        `master-records?id=${master_id}&q=${search}&page=${page}`,
        true,
        true,
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async formBuilderFields(form_builder_ids: any): Promise<any> {
    try {
      const response = await this.post(
        `form-builder-by-ids`,
        { form_builder_ids },
        true,
        true,
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async createMasterRecord(master_id: any, json_data: any): Promise<any> {
    try {
      const response = await this.post(
        `master-records`,
        { master_id, json_data },
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }

  async createBulkMasterRecord(obj: any): Promise<any> {
    try {
      const response = await this.post(`master/import`, obj, true, true);
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }

  async getSubMasterRecordsExcel(obj: any): Promise<any> {
    try {
      const response = await this.get(`master-header/${obj}`, true, true);
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }

  async exportToCsvMasterRecords(master_id: any, ids?: any, name?: any): Promise<any> {
    try {
      const response = await this.post(
        `master/export-csv`,
        { master_id, ids, name },
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }

  async exportToCsvMaster(obj: exportMasterParams): Promise<any> {
    try {
      const response = await this.post(
        `masters/export-csv`,
        obj,
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }

  async updateMasterRecord(
    id: string,
    master_id: string,
    json_data: any,
  ): Promise<any> {
    try {
      const response = await this.patch(
        `master-records/${id}`,
        { master_id, json_data },
        true,
        true,
      );
      return response;
    } catch (error: any) {
      return error.response;
    }
  }

  async deleteSub(masterId: string): Promise<any> {
    try {
      const response = await this.delete(
        `master-records/delete/${masterId}`,
        true,
        true,
      );

      return response.data;
    } catch (error) {
      return error;
    }
  }
  async deleteSubMultiple(master_record_ids: any): Promise<any> {
    try {
      const response = await this.post(
        `multiple-master-records-deletion`,
        master_record_ids,
        true,
        true,
      );

      return response.data;
    } catch (error) {
      throw new Error(`Failed to delete item with ID ${master_record_ids}`);
    }
  }

  async getSubMasterRecords(masterId: any): Promise<any> {
    try {
      const response = await this.get(`master-records/${masterId}`, true, true);

      return response.data;
    } catch (error) {
      return error;
      // throw new Error(`Failed to fetch SubMasterProperties for master ID ${masterId}`);
    }
  }
  async getAttachmentDoc(masterId: any): Promise<any> {
    try {
      const response = await this.get(
        `master-records/attachements/${masterId}`,
        true,
        true,
      );

      return response.data;
    } catch (error) {
      return error;
      // throw new Error(`Failed to fetch SubMasterProperties for master ID ${masterId}`);
    }
  }
}
