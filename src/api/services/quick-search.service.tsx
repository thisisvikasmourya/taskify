import Service from "@/libs/service";

/**
 * Service class for managing posts.
 */

export default class QuickSearchService extends Service {
  constructor() {
    super("dms");
  }

  async searchList({ name, categories }: any): Promise<any> {
    try {
      const response = await this.get(
        `quick-search?q=${name}&categories=${categories}`,
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }
  async searchContent({search }: any): Promise<any> {
    try {
      const response = await this.get(
        `ocr-docuemnt-list?search=${search}`,
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async getRecentSearchList(): Promise<any> {
    try {
      const response = await this.get(`recent-searches`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async viewMoreGetList(type: any, name: any): Promise<any> {
    try {
      const response = await this.get(
        `view-more-details?type=${type}&q=${name}&limit=10&page=1`,
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw Error("Unable to fetch data");
    }
  }

  async viewMoreGetListUpdate(number:any,type: any, name: any,): Promise<any> {

    const buildViewMoreDetailsUrl= `view-more-details?type=${type}&q=${name}&limit=10&page=${number}`;
    
    try {
      const response = await this.get(
        buildViewMoreDetailsUrl,
        true,
        true
      );
      return response;
    } catch (error) {
return error    }
  }

  async createRecentSearch(keyword_name: string): Promise<any> {
    try {
      const data = await this.post(
        "recent-searches",
        { keyword_name },
        true,
        true
      );
      return data;
    } catch (error) {
      throw new Error("Unable to create recent search");
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

  //   async createExcel(formData: FormData): Promise<any> {
  //     try {
  //       const headers = {
  //         "Content-Type": "multipart/form-data",
  //       };
  //       const response = await this.post(
  //         `folders/import`,
  //         formData,
  //         true,
  //         true,
  //         headers,
  //       );
  //       console.log(response);
  //       return response;
  //     } catch (error) {
  //       console.error("Error uploading file:", error);
  //       throw new Error("Unable to upload data");
  //     }
  //   }

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

  //   async remove({ id }: { id: string }): Promise<any> {
  //     try {
  //       // Include workspace_id as a query parameter in the URL
  //       console.log(id);
  //       const data = await this.delete(`folders/${id}`, true, true);
  //       return data;
  //     } catch (error) {
  //       throw new Error("Unable to delete post");
  //     }
  //   }
}
