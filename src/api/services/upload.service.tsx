import Service from "@/libs/service";
import { UploadChunkResponse, CompleteUploadResponse } from "../models/upload";
import UploadDocument from "../models/upload-document";
import UploadNow from "../models/upload-now";

export default class UploadService extends Service {
  constructor() {
    super("dms");
  }

  // async uploadChunk(formData: FormData): Promise<any> {
  //   try {
  //     console.log(formData);
  //     const headers = { "Content-Type": "multipart/form-data" };
  //     const response = await this.post(
  //       `media/upload-chunk`,
  //       formData,
  //       true,
  //       true,
  //       headers
  //     );
  //     console.log(response);
  //     return response;
  //   } catch (error) {
  //     throw new Error("Unable to upload data");
  //   }
  // }

  // async completeUpload(fileName: string, totalChunks: number): Promise<any> {
  //   try {
  //     const response = await this.post(
  //       `media/complete-upload`,
  //       {
  //         fileName,
  //         totalChunks,
  //       },
  //       true,true
  //     );
  //     return response;
  //   } catch (error) {
  //     throw new Error("Unable to DD data");
  //   }
  // }
//
  async UploadSaveAsDraft(
    documents: any[],
    records: any,
    master_record_id: any
  ): Promise<any> {
    try {
      const response = await this.post(
        `multiple-document-upload`,
        {
          documents,
          records,
          master_record_id,
        },
        true,
        true
      );
      return response;
    } catch (error) {
      throw new Error("Unable to DD data");
    }
  }

  async uploadDocumentUpdate(id: any, document: any): Promise<any> {
    try {
      // alert(12);
      const response = await this.patch(
        `document-upload/${id}`,
        {
          ...document,
        },
        true,
        true
      );
      return response;
    } catch (error) {
      throw new Error("Unable to DD data");
    }
  }

  async getRelativeFolderPath({ id, level }: any) {
    try {
      const response = await this.post(
        `folder-path`,
        { id, level },
        true,
        true
      );
      return response;
    } catch (error) {
      throw new Error("Unable to Load the Relative Path");
    }
  }
  async getFolderByDoctype(id: any) {
    try {
      const response = await this.get(
        `doctype-list-by-folder-id/${id}`,
        true,
        true
      );
      return response;
    } catch (error) {
      throw new Error("Unable to Load the Relative Path");
    }
  }
  async getMasterListV2(id: any, params: any) {
    try {
      const response = await this.get(
        `masters-list-v2?${params}=${id}`,
        true,
        true
      );
      return response;
    } catch (error) {
      throw new Error("Unable to Load the Relative Path");
    }
  }
  async getMasterListV2Initial() {
    try {
      const response = await this.get(`masters-list-v2`, true, true);
      return response;
    } catch (error) {
      throw new Error("Unable to Load the Relative Path");
    }
  }

  async getMasterListV22(options: {
    id?: any;
    params?: any;
    page: number;
    searchTerm: string;
  }) {
    try {
      const { id, params, page, searchTerm } = options;
      let url = "masters-list-v2";

      // Start building query parameters
      const queryParams = new URLSearchParams();

      // Always add page and searchTerm
      queryParams.append("page", page.toString());
      queryParams.append("q", searchTerm);

      // Add id and params if they exist
      if (id !== undefined && params !== undefined) {
        queryParams.append(params, id.toString());
      }

      // Append all query parameters to URL
      const queryString = queryParams.toString();
      if (queryString) {
        url += `?${queryString}`;
      }

      const response = await this.get(url, true, true);
      return response;
    } catch (error) {
      throw new Error("Unable to Load the Relative Path");
    }
  }

  async getDoctypeListV22(options: {
    id?: any;
    params?: any;
    page: any;
    searchTerm: any;
  }) {
    try {
      const { id, params, page, searchTerm } = options;
      let url = "doc-type/list-v2";

      // Start building query parameters
      const queryParams = new URLSearchParams();

      // Always add page and searchTerm
      queryParams.append("page", page.toString());
      queryParams.append("q", searchTerm);

      // Add id and params if they exist
      if (id !== undefined && params !== undefined) {
        queryParams.append(params, id.toString());
      }

      // Append all query parameters to URL
      const queryString = queryParams.toString();
      if (queryString) {
        url += `?${queryString}`;
      }

      const response = await this.get(url, true, true);
      return response;
    } catch (error) {
      throw new Error("Unable to Load the Relative Path");
    }
  }

  async getDoctypeListV2(id: any, params: any) {
    try {
      const response = await this.get(
        `doc-type/list-v2?${params}=${id}`,
        true,
        true
      );
      return response;
    } catch (error) {
      throw new Error("Unable to Load the Relative Path");
    }
  }
  async getCountList(id: any, params: any) {
    try {
      const response = await this.get(`get-count?${params}=${id}`, true, true);
      return response;
    } catch (error) {
      throw new Error("Unable to Load the Relative Path");
    }
  }
  async getDoctypeListV2Initial() {
    try {
      const response = await this.get(`doc-type/list-v2`, true, true);
      return response;
    } catch (error) {
      throw new Error("Unable to Load the Relative Path");
    }
  }
  async getFormBuilderBymasterId(id: any) {
    try {
      const response = await this.get(`master-field/lists/${id}`, true, true);
      return response;
    } catch (error) {
      throw new Error("Unable to Load the Relative Path");
    }
  }
  async getMasterFieldValues(id: any) {
    try {
      const response = await this.get(`master-field-values/${id}`, true, true);
      return response;
    } catch (error) {
      throw new Error("Unable to Load the Relative Path");
    }
  }
  async getDocumentBusProgress(id: any) {
    try {
      const response = await this.get(`/bus-progress/${id}`, true, true);
      return response;
    } catch (error) {
      throw new Error("Unable to Load the Relative Path");
    }
  }
  async getFolderByMaster(id: any) {
    try {
      const response = await this.get(
        `master-list-by-folder-id/${id}`,
        true,
        true
      );
      return response;
    } catch (error) {
      throw new Error("Unable to Load the Relative Path");
    }
  }

  async getMasterByDoctype(id: any) {
    try {
      const response = await this.get(
        `master-list-by-doctype-id/${id}`,
        true,
        true
      );
      return response;
    } catch (error) {
      throw new Error("Unable to Load the Master by Doctype");
    }
  }

  async formBuilderFields(form_builder_ids: any): Promise<any> {
    try {
      const response = await this.post(
        `document-form-builders`,
        { form_builder_ids },
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async UploadPublish(docPropertiesId: any) {
    try {
      const response = await this.patch(
        `document-upload/publish/${docPropertiesId}`,
        {},
        true,
        true
      );
      return response;
    } catch (error) {
      throw new Error("Unable to publish data");
    }
  }

  async list(): Promise<any> {
    try {
      const response = await this.get(`doc-type/list`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async docTypeList(page: number, searchTerm: string): Promise<any> {
    try {
      const response = await this.get(
        `doc-type/list?search=${searchTerm}&page=${page}`,
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async formFolderList(docPropertiesId: any): Promise<any> {
    try {
      const response = await this.get(
        `doc-value/form-folder/${docPropertiesId}`,
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async multipleUncategorizedFile(
    uncategorized_documents: any[]
  ): Promise<any> {
    try {
      const response = await this.post(
        `multi-uncat-upload`,
        uncategorized_documents,
        true,
        true
      );
      return response.data;
    } catch (error) {
      console.error("SomeThing went wrong");
      // throw new Error("Unable to fetch data");
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
}
