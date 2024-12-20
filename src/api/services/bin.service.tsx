import Service from "@/libs/service";

export default class BinService extends Service {
  constructor() {
    super("dms");
  }

  async binCreated(
    user_id: string,
    accessed_item_id: string,
    accessed_item_type: string
  ): Promise<any> {
    try {
      const response = await this.post(
          `
        `,
        { user_id, accessed_item_id, accessed_item_type },
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async getBin(): Promise<any> {
    try {
      const response = await this.get(
        `view-bin`,
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch bin");
    }
  }
}
