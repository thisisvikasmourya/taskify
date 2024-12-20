import Service from "@/libs/service";

export default class DocValueService extends Service {
  constructor() {
    super("dms");
  }

  async list(
    page: number,
    searchTerm?: string,
    update_by?: any,
    updated_on?: any,
    no_properties?: any,
    primaryKey?: any,
    masterConnected?: any,
    classification?: any,
  ): Promise<any> {
    try {
      const response = await this.get(
        `doc-type?search=${searchTerm}&page=${page}&update_by=${update_by}&updated_on=${updated_on}&no_properties=${no_properties}&primaryKey=${primaryKey}&masterName=${masterConnected}&isClassification=${classification}`,
        true,
        true,
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }
  async view(id: any): Promise<any> {
    try {
      const response = await this.get(`doc-type/${id}`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async primaryKeyByMasterId(id: any): Promise<any> {
    try {
      const response = await this.get(
        `primary-key-form-builders/${id}`,
        true,
        true,
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async doctypeGrouping(obj: any): Promise<any> {
    try {
      const response = await this.post(`doc-type-group`, obj, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async remove(id: any): Promise<any> {
    try {
      const response = await this.delete(`doc-value/${id}`, true, true);
      return response;
    } catch (error) {
      return error;
    }
  }

  // New update method
  async update(id: any, data: any): Promise<any> {
    try {
      const response = await this.patch(
        `doc-type/save-draft/step-1/${id}`,
        data,
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      return error;
    }
  }

  async docValExist(data: any): Promise<any> {
    try {
      const response = await this.post(`doc-type/exists`, data, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to update data");
    }
  }

  async deleteMultipleDocTypes(doc_type_id: any): Promise<any> {
    try {
      const response = await this.post(
        `doc-type/multiple-destroy`,
        doc_type_id,
        true,
        true,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async exportToCsvDocProperties(docType_id: any, ids?: any): Promise<any> {
    try {
      const response = await this.post(
        `doc-properties/export-csv`,
        { docType_id, ids },
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }

  async exportToCsvDocType({ids,primaryKey, masterName, isClassification,name,updateBy ,updateOn ,noProperties}:any): Promise<any> {
    try {
      const response = await this.post(`doc-type/export-csv`, {ids,primaryKey, masterName, isClassification,name,updateBy ,updateOn ,noProperties}, true, true);
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
}
