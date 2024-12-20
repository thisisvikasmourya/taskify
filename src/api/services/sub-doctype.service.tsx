import Service from "@/libs/service";
import SubMasterProperty from "@/api/models/sub-master";

export default class SubDocService extends Service {
  constructor() {
    super("dms");
  }

  async list(docId: string, searchTerm: string): Promise<any> {
    try {
      const response = await this.get(
        `docproperties-records-list?id=${docId}&q=${searchTerm}`,
        true,
        true
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
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async createDocRecord(doc_type_id: any, json_data: any): Promise<any> {
    try {
      const response = await this.post(
        `docproperties-records`,
        { doc_type_id, json_data },
        true,
        true
      );
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }
  async updateDocRecord(
    id: any,
    doc_type_id: string,
    json_data: any
  ): Promise<any> {
    try {
      const response = await this.patch(
        `docproperties-records/${id}`,
        { doc_type_id, json_data },
        true,
        true
      );
      return response;
    } catch (error: any) {
      return error.response;
    }
  }

  async getAttachmentDoc(masterId: any): Promise<any> {
    try {
      const response = await this.get(
        `docType-records/attachements/${masterId}`,
        true,
        true
      );

      return response.data;
    } catch (error) {
      return error;
      // throw new Error(`Failed to fetch SubMasterProperties for master ID ${masterId}`);
    }
  }

  async deleteSub(masterId: string): Promise<any> {
    try {
      const response = await this.delete(
        `docproperties-records/${masterId}`,
        true,
        true
      );
      return response;
    } catch (error) {
      return error;
    }
  }

  async getSubDocRecords(docId: any): Promise<any> {
    try {
      const response = await this.get(
        `docproperties-records/${docId}`,
        true,
        true
      );

      return response.data;
    } catch (error) {
      return error;
      // throw new Error(`Failed to fetch SubMasterProperties for master ID ${masterId}`);
    }
  }

  async deleteSubDocMultiple(ids: any): Promise<any> {
    try {
      const response = await this.post(
        `docproperties-records/multiple-delete`,
        ids,
        true,
        true
      );

      return response.data;
    } catch (error) {
      throw new Error(`Failed to delete item with ID ${ids}`);
    }
  }
}
