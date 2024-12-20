import Service from "@/libs/service";

export default class RecentlyService extends Service {
  constructor() {
    super("dms");
  }

  async recentlyAccessed(
    accessed_item_id: string,
    accessed_item_type: string
  ): Promise<any> {
    try {
      const response = await this.post(
        `recently-accessed`,
        { accessed_item_id, accessed_item_type },
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async getRecently(
    searchTerm: string,
    sortby?: string,
    order?: string
  ): Promise<any> {
    try {

  let queryParams = searchTerm ? `?search=${searchTerm}` : "";

  // Conditionally append sortby and order if they are provided
  if (sortby) {
    queryParams += queryParams ? `&sortby=${sortby}` : `?sortby=${sortby}`;
  }
  if (order) {
    queryParams += queryParams ? `&order=${order}` : `?order=${order}`;
  }

  // Make the request
  const response = await this.get(
    `recently-accessed/${queryParams}`,
    true,
    true
  );


      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch recently-accessed");
    }
  }
}