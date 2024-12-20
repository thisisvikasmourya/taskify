import Service from "@/libs/service";

export default class workSpaceList extends Service {
  constructor() {
    super("dms");
  }

  /**
   * Retrieves a list of posts.
   * @returns Promise<Onboarding[]> A promise that resolves to an array of onboarding.
   */
  async list(): Promise<any> {
    try {
      const response = await this.get(`/workspace`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }
  async workSpaceList(id: any): Promise<any> {
    try {
      const response = await this.get(`workspace-by-user/${id}`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }
}
