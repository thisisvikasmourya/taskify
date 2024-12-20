import Service from "@/libs/service";
import Folder from "@/api/models/folder";

/**
 * Service class for managing posts.
 */

export interface exportExploreParams {
  folder_id:any;
  ids: any;
  doctype?:any;
  classification?:any;
  master?: any;
  masterproperties?:any;
  search?:any;
}

export default class FolderService extends Service {
  constructor() {
    super("dms");
  }

  /**
   * Retrieves a list of posts.
   * @returns Promise<Post[]> A promise that resolves to an array of posts.
   */

  async testStoragePost(obj: any): Promise<any> {
    try {
      const data = await this.post(
        `check-source-path`,

        obj,

        true,
        true
      );
      return data;
    } catch (error) {
      return error;
    }
  }

  async list(): Promise<any> {
    try {
      const response = await this.get(`folders/list`, true, true);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async emptyBin(): Promise<any> {
    try {
      const response = await this.post(`empty-recycle-bin`, {}, true, true);
      return response;
    } catch (error) {
      return error;
    }
  }

  async folderList(page: number, searchTerm: string): Promise<any> {
    try {
      const response = await this.get(
        `folders/list?search=${searchTerm}&page=${page}`,
        true,
        true
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async folderFilteredList(page: number, searchTerm: string): Promise<any> {
    try {
      const response = await this.get(
        `folder-list?search=${searchTerm}&page=${page}`,
        true,
        true
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async allList(): Promise<any> {
    try {
      const response = await this.get(`folders/list`, true, true);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  /**
   * Retrieves a post by its ID.
   * @param id The ID of the post to retrieve.
   * @returns Promise<Post> A promise that resolves to the retrieved post.
   */

  async retrieve(
    id: string,
    search?: string,
    sortby?: string,
    order?: string
  ): Promise<any> {
    try {
      // Construct query parameters based on provided values
      let queryParams = search ? `?search=${search}` : "";

      // Conditionally append sortby and order if they are provided
      if (sortby) {
        queryParams += queryParams ? `&sortby=${sortby}` : `?sortby=${sortby}`;
      }
      if (order) {
        queryParams += queryParams ? `&order=${order}` : `?order=${order}`;
      }

      // Make the request
      const response = await this.get(
        `folders/${id}${queryParams}`,
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw Error("Unable to fetch data");
    }
  }

  async retrieveFiles(
    id: string,
    search?: string,
    sortby?: string,
    order?: string,
    doctype?: any,
    masterId?: any,
    masterProperties?: any
  ): Promise<any> {
    try {
      // Construct query parameters based on provided values
      let queryParams = search ? `?search=${search}` : "";

      // Conditionally append sortby and order if they are provided
      if (sortby) {
        queryParams += queryParams ? `&sortby=${sortby}` : `?sortby=${sortby}`;
      }
      if (order) {
        queryParams += queryParams ? `&order=${order}` : `?order=${order}`;
      }
      if (doctype) {
        queryParams += queryParams
          ? `&doctype=${doctype}`
          : `?doctype=${doctype}`;
      }
      if (masterId) {
        queryParams += queryParams
          ? `&master=${masterId}`
          : `?master=${masterId}`;
      }

      if (masterProperties) {
        queryParams += queryParams
          ? `&masterproperties=${masterProperties}`
          : `?masterproperties=${masterProperties}`;
      }

      // Make the request
      const response = await this.get(
        `list-view/files/${id}${queryParams}`,
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw Error("Unable to fetch data");
    }
  }

  // async retrieve(
  //   id: string,
  //   search?: string,
  //   sortby?: string,
  //   order?: string
  // ): Promise<any> {
  //   try {
  //     5;
  //     const queryParams = search
  //       ? `?search=${search}`
  //       : "";
  //     const response = await this.get(
  //       `folders/${id}${queryParams}&sortby=${sortby}&order=${order}`,
  //       true,
  //       true
  //     );
  //     return response.data;
  //   } catch (error) {
  //     throw Error("Unable to fetch data");
  //   }
  // }

  /**
   * Creates a new post.
   * @param postData The data for the new post.
   * @returns Promise<any> A promise that resolves to the created post data.
   */
  // async create({ folders,parent_id }: Folder): Promise<any> {
  //    try {
  //       const data = await this.http.post(`folders`, {
  //           folders,
  //           parent_id
  //       });
  //       return data;
  //   } catch (error) {
  //       throw Error("Unable to create post");
  //   }
  // }

  // async create({
  //   folders,
  //   parent_id,
  // }: {
  //   folders: { folder_name: string }[];
  //   parent_id: string;
  // }): Promise<any> {
  //   try {
  //     const formattedFolders = folders.map((folder) => ({
  //       folder_name: folder.folder_name,
  //     }));
  //     const response = await this.post(
  //       `folders`,
  //       {
  //         folders: formattedFolders,
  //         parent_id,
  //       },
  //       true,
  //       true
  //     );
  //     return response;
  //   } catch (error: any) {
  //     console.log(error);
  //     return error?.response?.data;
  //   }
  // }

  async create({
    folder_name,
    parent_id,
    doctype,
    master,
    classification,
    percolation,
  }: {
    folder_name: string;
    parent_id: string;
    doctype: any;
    master: any;
    classification: string;
    percolation: any;
  }): Promise<any> {
    try {
      const response = await this.post(
        `folder-create-new`,
        {
          folder_name,
          doctype,
          master,
          classification,
          percolation,
          parent_id,
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
  async rename(folderId: string, newName: string): Promise<any> {
    try {
      const data = await this.post(
        `rename/${folderId}`,
        { name: newName },
        true,
        true
      );
      return data;
    } catch (error) {
      throw new Error("Unable to rename folder");
    }
  }
  async renameFile(folderId: string, newName: string): Promise<any> {
    try {
      const data = await this.post(
        `document/rename/${folderId}`,
        { name: newName },
        true,
        true
      );
      return data;
    } catch (error) {
      throw new Error("Unable to rename folder");
    }
  }

  /**
   * Updates an existing post Descritption.
   * @param id The ID of the post to update.
   * @param postData The updated data for the post.
   * @returns Promise<any> A promise that resolves to the updated post data.
   */

  async descriptionUpdate({
    description,
    id,
  }: {
    description: string;
    id: string;
  }): Promise<any> {
    try {
      const data = await this.patch(
        `folders/${id}`,
        {
          description,
        },
        true,
        true
      );
      return data;
    } catch (error) {
      return error;
    }
  }

  /**
   * Updates an existing post.
   * @param id The ID of the post to update.
   * @param postData The updated data for the post.
   * @returns Promise<any> A promise that resolves to the updated post data.
   */

  async update(id: any, { name }: Folder): Promise<any> {
    try {
      const data = await this.patch(
        `folders/${id}`,
        {
          name,
        },
        true,
        true
      );
      return data;
    } catch (error) {
      throw Error("Unable to update post");
    }
  }

  async createUncategorizedFolder(obj: any): Promise<any> {
    try {
      const data = await this.post(
        `folder-uncategorized`,

        obj,

        true,
        true
      );
      return data;
    } catch (error:any) {
      console.error(error.response.data,"drag upload service")
      throw Error(error);
    }
  }

  /**
   * Deletes a post by its ID.
   * @param id The ID of the post to delete.
   * @returns Promise<any> A promise that resolves when the post is deleted.
   */
  async remove(id: any): Promise<any> {
    try {
      const data = await this.delete(`folders/${id}`, true, true);
      return data;
    } catch (error: any) {
      console.log(error);
      return error?.response?.data?.message;
    }
  }
  async removeDocument(id: any): Promise<any> {
    try {
      const data = await this.delete(`document/${id}`, true, true);
      return data;
    } catch (error: any) {
      console.log(error);
      return error?.response?.data?.message;
    }
  }

  async deleteMultipleFolder(folderIds: any): Promise<any> {
    try {
      const response = await this.post(
        `multiple-delete-folders`,
        folderIds,
        true,
        true
      );

      return response.data;
    } catch (error: any) {
      console.log(error, "response2121");
      return error?.response;
    }
  }

  async getFolderSearch(folderId: string, search: string = ""): Promise<any> {
    try {
      const queryParams = new URLSearchParams({
        search,
      }).toString();

      const response = await this.get(
        `folders/${folderId}?${queryParams}`,
        true,
        true
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching folder details:", error);
      throw new Error("Unable to fetch folder details");
    }
  }

  async frequenltyView({
    document_id,
    user_id,
    workspace_id,
  }: any): Promise<any> {
    try {
      const response = await this.post(
        `/document-count`,
        { document_id, user_id, workspace_id },
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("unable to increase frequently view count");
    }
  }

  async exportToCsvFolderDocument(obj: exportExploreParams): Promise<any> {
    try {
      const response = await this.post(
        `folder/export-csv`,
        obj,
        true,
        true
      );
      return response.data;
    } catch (error: any) {
      console.log(error.response.data, "Error during export");
      return error.response.data;
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

  async getConnectorSettings(folderId: any): Promise<any> {
    try {
      const response = await this.get(`get-connectors/${folderId}`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to get connectors.");
    }
  }

  async formBuilderFieldsMaster(
    master_ids: string[],
    page?: number
  ): Promise<any> {
    try {
      const response = await this.post(
        `master-fields`,
        { master_ids, page },
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch master fields");
    }
  }
}
