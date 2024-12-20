import Service from "@/libs/service";

export default class ViewDetails extends Service {
  constructor() {
    super("dms");
  }

  /**
   * Retrieves a list of posts.
   * @returns Promise<Onboarding[]> A promise that resolves to an array of onboarding.
   */
  async folder(id: any): Promise<any> {
    try {
      const response = await this.get(`/folder/info/${id}`, true, true);
      return response;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async document(id: any): Promise<any> {
    try {
      const response = await this.get(`/document/info/${id}`, true, true);
      return response;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async doctype(id: any): Promise<any> {
    try {
      const response = await this.get(`doc-type/info/${id}`, true, true);
      return response;
    } catch (error) {
      return error;
    }
  }
  async master(id: any): Promise<any> {
    try {
      const response = await this.get(`master/info/${id}`, true, true);
      return response;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }
  // async workSpaceList(id: any): Promise<any> {
  //   try {
  //     const response = await this.get(`workspace-by-user/${id}`, true, true);
  //     return response.data;
  //   } catch (error) {
  //     throw new Error("Unable to fetch data");
  //   }
  // }
}
