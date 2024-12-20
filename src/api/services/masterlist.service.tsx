import Service from "@/libs/service";
import MasterList from "@/api/models/master-list";
import { tree } from "next/dist/build/templates/app-page";

export default class masterListService extends Service {
  constructor() {
    super("dms");
  }

  /**
   * Retrieves a list of posts.
   * @returns Promise<Onboarding[]> A promise that resolves to an array of onboarding.
   */
  async list(): Promise<any> {
    try {
      const response = await this.get(`masters-list`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async masterList(
    page: number,
    searchTerm: string
  ): Promise<any> {
    try {
      const response = await this.get(`masters-list?q=${searchTerm}&page=${page}`, true, true);
      console.log(response,"success response master")
      return response.data;
    } catch (error) {
      console.error(error,"master list duplicate rrro")
      throw new Error("Unable to fetch data");
    }
  }
}
