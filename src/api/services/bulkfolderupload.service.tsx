import Service from "@/libs/service";

/**
 * Service class for managing posts.
 */
export default class BulkFolderUploadService extends Service {
  constructor() {
    super("dms");
  }

  async list(): Promise<any> {
    try {
      const response = await this.get(`multiple-folders`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async retrieve(id: string): Promise<any> {
    try {
      const response = await this.get(`folders/${id}`, true, true);
      return response.data;
    } catch (error) {
      throw Error("Unable to fetch data");
    }
  }

  async create({ folders }: { folders: Array<any> }): Promise<any> {
    try {
      const data: any = await this.post(
        `multiple-folders`,
        { folders },
        true,
        true
      );
      return data;
    } catch (error: any) {
      console.error("Error in create method:", error);
      return error; // Re-throw the error instead of returning it
    }
  }

  async newBulkFodlerCreate({
    folders,
  }: {
    folders: Array<any>;
  }): Promise<any> {
    try {
      const data: any = await this.post(
        `bulkfolder-create-new`,
        { folders },
        true,
        true
      );
      return data;
    } catch (error: any) {
      console.error("Error in create method:", error);
      return error; // Re-throw the error instead of returning it
    }
  }

  async updateClassification({ id, obj }: any): Promise<any> {
    try {
      const data: any = await this.patch(
        `update-classification/${id}`,
        obj,
        true,
        true
      );
      return data;
    } catch (error: any) {
      console.error("Error in create method:", error);
      return error; // Re-throw the error instead of returning it
    }
  }

  async updatePerculation({ id, obj }: any): Promise<any> {
    try {
      const data: any = await this.patch(
        `update-percolation/${id}`,
        obj,
        true,
        true
      );
      return data;
    } catch (error: any) {
      console.error("Error in create method:", error);
      return error; // Re-throw the error instead of returning it
    }
  }

  async updateConnector({ id, obj }: any): Promise<any> {
    try {
      const data: any = await this.patch(
        `update-connector/${id}`,
        obj,
        true,
        true
      );
      return data;
    } catch (error: any) {
      console.error("Error in create method:", error);
      return error; // Re-throw the error instead of returning it
    }
  }

  // async createExcel({ file }: { file: any }): Promise<any> {
  //   try {
  //     const data = await this.post(
  //       `folders/import`,
  //       {
  //         file,
  //       },
  //       true,
  //       true,
  //     );
  //     return data;
  //   } catch (error) {
  //     throw new Error("Unable to create post");
  //   }
  // }

  async createExcel(obj: any): Promise<any> {
    try {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      const response = await this.post(
        `folders/import`,
        obj,
        true,
        true,
        headers
      );
      console.log(response);
      return response;
    } catch (error) {
      return error;
      console.error("Error uploading file:", error);
    }
  }

  // async descriptionUpdate({
  //   description,
  //   id,
  // }: {
  //   description: string;
  //   id: string;
  // }): Promise<any> {
  //   try {
  //     const data = await this.patch(
  //       `folders/${id}`,
  //       {
  //         description,
  //       },
  //       true,
  //     );
  //     return data;
  //   } catch (error) {
  //     throw new Error("Unable to update description");
  //   }
  // }

  async remove({ id }: { id: string }): Promise<any> {
    try {
      // Include workspace_id as a query parameter in the URL
      console.log(id);
      const data = await this.delete(`folders/${id}`, true, true);
      return data;
    } catch (error) {
      throw new Error("Unable to delete post");
    }
  }

  async getFolderConnectorDetail(data: any): Promise<any> {
    try {
      const response = await this.get(`get-connectors/${data}`, true, true);
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      throw new Error(`Error sending invitation: ${error.message}`);
    }
  }
}
