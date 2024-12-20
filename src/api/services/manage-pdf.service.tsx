import Service from "@/libs/service";

export default class ManagePdfService extends Service {
  constructor() {
    super("manage-pdf");
  }

  //   async getAutoAction(page: number, searchTerm: string): Promise<any> {
  //     try {
  //       const response = await this.get(
  //         `auto-actions?search=${searchTerm}&page=${page}`,
  //         true,
  //         true
  //       );
  //       return response.data;
  //     } catch (error) {
  //       throw new Error("Unable to fetch auto action");
  //     }
  //   }

  //   async getAutoActionById(id: any): Promise<any> {
  //     try {
  //       const response = await this.get(`auto-actions/${id}`, true, true);
  //       return response.data;
  //     } catch (error) {
  //       throw new Error("Unable to fetch auto action");
  //     }
  //   }


  async managePdfMerge(payload: any): Promise<any> {
    try {
      const response = await this.post("pdf/addmergePDFs", payload, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to create auto action");
    }
  }
  
}
