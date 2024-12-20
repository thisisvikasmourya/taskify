import Service from "@/libs/service";

export default class AdvanceSearch extends Service {
    constructor() {
        super("dms");
      }

      async savedList(search:any, pageParam: string): Promise<any> {
        try {
          const response = await this.get(`save-searches?search=${search}&page=${pageParam}`,true,true);
          return response.data;
        } catch (error) {
          throw new Error("Unable to fetch data");
        }
      }

      async getSavedList(id:any): Promise<any>{
        try {
          const response = await this.get(`save-searches/${id}`, true, true);
          return response.data;
        } catch (error) {
          throw new Error("Unable to get the Saved List");
        }
      }

      async deleteSavedList(id:any): Promise<any>{
        try {
          const response = await this.delete(`save-searches/${id}`, true, true);
          return response.data;
        } catch (error) {
          throw new Error("Unable to delete Saved List.");
        }
      }

      async deleteMultipleSavedList(ids: any): Promise<any>{
        try {
          const response = await this.post(`save-search/multiple-delete`,ids, true, true);
          return response.data;
        } catch (error) {
          throw new Error("Error Deleting Selected Saved List")
        }
      }
    
    async saveAdvanceSearchFilter(name: string,filter_data: any, json_data: any) : Promise<any>{
        try {
            const response = await this.post(
                `save-searches`, {name, filter_data, json_data},true, true
            )
      return response.data;
        } catch (error: any) {
            console.error(error.response.data.message);
            throw new Error(error.response.data.message)
        }
    }

    // async advanceSearchService(query: string, filters: any): Promise<any>{
    //   try {
    //     const response = await this.post(
    //       `db-advance-search`,{query, filters}, true, true
    //     )
    //     return response;
    //   } catch (error:any) {
    //     console.error("Error Searching --- :", error);
    //     throw new Error(error.response.data.message)
    //   }
    // }

    async advanceSearchService(query: string, filters: any, page: number,
      doc_type: boolean,
      classification: boolean,
      master_ids: any,
      master_field_ids:any,
    ): Promise<any> {
      try {
        const response = await this.post(
          `db-advance-search`, { query,
             filters,
              page,
            doc_type,
            classification,
            master_ids,
            master_field_ids
           }, true, true
        );
        return response;
      } catch (error: any) {
        console.error("Error Searching --- :", error);
        throw new Error(error.response.data.message);
      }
    }
    

    async fileExtensionList( 
      page: number,
      searchTerm: string
    ): Promise<any>{
      try {
        const response = await this.get(`file-extension-list?search=${searchTerm}&page=${page}`, true, true);
        return response.data;
      } catch (error) {
        throw new Error("Unable to retrieve File Extension list");
      }
    }

    async uploadedByList(
      page: number,
      searchTerm: string
    ): Promise<any>{
      try {
        const response = await this.get(`uploaded-by/list?search=${searchTerm}&page=${page}`, true, true);
        return response.data;
      } catch (error) {
        throw new Error("Unable to retrieve Uploaded user list");
      }
    }

    async exportToCsvAdvancedSearch({document_ids, query,filters,        doc_type,
      classification,
      master_ids,
      master_field_ids}:any): Promise<any> {
      try {
        const response = await this.post(`advance-search/export-csv`,{document_ids, query,filters,
          doc_type,
          classification,
          master_ids,
          master_field_ids
        }, true, true);
        return response.data;
      } catch (error: any) {
        return error.response;
      }
    }

}