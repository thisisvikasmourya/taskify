import Service from "@/libs/service";

export default class Reports extends Service {
  constructor() {
    super("dms");
  }

  async getReports(search: string, pageParam: string): Promise<any> {
    try {
      const response = await this.get(`document-report?q=${search}&page=${pageParam}`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to get the Reports List");
    }
  }

  async createReport(name: string, json_data: any, type: string): Promise<any> {
    try {
      const response = await this.post(`document-report`, { name, json_data, type }, true, true);
      return response.data;
    } catch (error:any) {
      console.log(error.response.data,"value error")
      throw new Error(error.response.data.message)
    }
  }

  async scheduleReport(name: string, json_data: any, type: string, interval: string,
    status: string,
    date: string,
    notify_if_no_results: boolean,
    email: string): Promise<any> {
    try {
      const response = await this.post(`document-report?document-type=schedule`, { name, json_data, type, interval, status, date, notify_if_no_results, email }, true, true);
      return response.data;
    } catch (error: any) {
      console.log(error.response.data,"value report service")
      throw new Error(error.response.data.message);
    }
  }

  async updateReportType({ json_data, type }: any, id: string): Promise<any> {
    try {
      const response = await this.patch(`document-report/${id}`, { json_data, type }, true, true);
      return response.data;
    } catch (error) {
      console.error("Update Report Type Error:", error);
      throw new Error("Unable to Update Report Type");
    }
  }

  // async updateStatus(status: any, id: string): Promise<any> {
  //   try {
  //     const response = await this.patch(`report/${id}/status-change`, status, true, true);
  //     return response.data;
  //   } catch (error: any) {
  //     console.error("Update Status Error:", error);
  //     throw new Error(error.message);
  //   }
  // }
  async updateStatus(status: any, id: string): Promise<any> {
    try {
      const response = await this.patch(`report/${id}/status-change`, status, true, true);
      return response.data;
    } catch (error: any) {
      console.error("Update Status Error:", error);
      throw new Error(error.message);
    }
  }
  

  // async updateScheduleReport({name, interval,
  //   status,
  //   date,
  //   notify_if_no_results,
  //   email}:any, id: string): Promise<any>{
  //   try {
  //     const response = await this.patch(`document-report/${id}?document-type=schedule`,{name, interval,status ,date,notify_if_no_results ,email}, true, true);
  //     return response.data;
  //   } catch (error) {
  //     throw new Error("Unable to Update Schedule Report.. ")
  //   }

  // }

  async updateScheduleReport({ name, interval, status, date, notify_if_no_results, email }: any, id: string): Promise<any> {
    try {
      const response = await this.patch(`document-report/${id}?document-type=schedule`, { name, interval, status, date, notify_if_no_results, email }, true, true);
      return response.data;
    } catch (error) {
      console.error("Update Schedule Report Error:", error);
      throw new Error("Unable to Update Schedule Report");
    }
  }

  async deleteReport(id: string): Promise<any> {
    try {
      const response = await this.delete(`document-report/${id}`, true, true);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }

  async deleteMultipleReports(ids: any): Promise<any> {
    try {
      const response = await this.post(`multiple-delete-report`, ids, true, true);
      return response.data;
    } catch (error: any) {
      throw new Error("Unable to Delete Reports..==>", error);
    }
  }

  async getMasterFields(id: string,
    page: number,
    searchTerm: string
  ): Promise<any> {
    try {
      const response = await this.get(`master-field/lists/${id}?search=${searchTerm}&page=${page}`, true, true)
      return response.data;
    } catch (error) {
      throw new Error("Unable to get Fields Data");
    }
  }

  async getDocTypeByMaster(id: string,
    page: number,
    searchTerm: string
  ): Promise<any> {
    try {
      const response = await this.get(`doc-types-list-by-master/${id}?search=${searchTerm}&page=${page}`, true, true)
      return response.data;
    } catch (error) {
      throw new Error("Unable to get DocType List");
    }
  }

  async getFolderByMaster(id: string,
    page: number,
    searchTerm: string
  ): Promise<any> {
    try {
      const response = await this.get(`folders-list-by-master/${id}?search=${searchTerm}&page=${page}`, true, true)
      return response.data;
    } catch (error) {
      throw new Error("Unable to get Folder List");
    }
  }
  async showReport(id: string): Promise<any> {
    try {
      const response = await this.get(`document-report/${id}`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to Retrive Report");
    }
  }

  async documentStats({ masters,
    doc_types,
    folders,page }: any): Promise<any> {
    try {
      const response = await this.post(`document-statistics`, {
        masters,
        doc_types,
        folders, page
      }, true, true);
      return response.data;
    } catch (error: any) {
      console.log(error,"document stats")
      throw new Error("Unable to Retrive Document Statistics", error);
    }
  }

  async missingDocument({ masters,
    doc_types,
    folders,master_fields,page }: any): Promise<any> {
    try {
      const response = await this.post(`missing-document-report`, {
        masters,
        doc_types,
        folders,
        master_fields,page
      }, true, true);
      return response.data;
    } catch (error: any) {
      console.error(error,"value error")
      throw new Error(error);
    }
  }

  // masters: selectedValues.Master,
  // doc_types: selectedValues.DocType,
  // folders: selectedValues.Folder,
  // master_fields: selectedValues.Field,

  async exportFile({ type,masters,doc_types,folders,master_fields}: any): Promise<any> {
    try {
      const response = await this.postWithResponseType(`export-report`, {
        type,
        masters,doc_types,folders,master_fields
      }, true, true,{
         'Content-Type': 'application/json'
      });
      return response.data;
    } catch (error: any) {
      throw new Error("Unable to Download File", error);
    }
  }



}

