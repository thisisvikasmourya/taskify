import Service from "@/libs/service";

export default class DocumentService extends Service {
  constructor() {
    super("dms");
  }

  async getDocumentView(userId: string, option: string): Promise<any> {
    try {
   
      const response = await this.get(
        `document-upload/${userId}?meta-data=${option}`,
        true,
        true
      );

      return response.data;
    } catch (error:any) {
      
      throw new Error(error.response.data.message);
    }
  }

  async getDocumentDownload(docId: any): Promise<any> {
    try {
      const response = await this.get(`download-document/${docId}`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to download document.");
    }
  }

  async documentBulkDownload(document_ids: any): Promise<any> {
    try {
      const response = await this.post(
        `document/bulk-download`,
        { document_ids },
        true,
        true
      );
      return response.data;
    } catch (error: any) {
      console.error(error, "unable to downoad");
      throw new Error("Unable to Download.");
    }
  }

  async getDVCDocumentShow(
    page: number,
    searchTerm: string,
    docId: any
  ): Promise<any> {
    try {
      const response = await this.get(
        `dvc-show/${docId}?search=${searchTerm}&page=${page}`,
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch auto action");
    }
  }

  async createDVCsavePdf(payload: any): Promise<any> {
    try {
      const response = await this.post("dvc-upload", payload, true, true);
      return response.data;
    } catch (error:any) {
      throw new Error(error.response.data.message);
    }
  }
}
