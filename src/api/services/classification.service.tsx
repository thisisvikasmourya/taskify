import Service from "@/libs/service";

export default class ClassificationService extends Service {
  constructor() {
    super("dms");
  }

  async getClassification(): Promise<any> {
    try {
      const response = await this.get(`user-access/details`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch bin");
    }
  }

  async updateClassification(
    { classification }: any,
    id: string
  ): Promise<any> {
    try {
      const response = await this.patch(
        `document-classification/${id}`,
        { classification },
        true,
        true
      );
      return response.data;
    } catch (error) {
      console.error("Update Classification:", error);
      throw new Error("Unable Classification");
    }
  }
  async updateClassificationFolder(
    { classification }: any,
    id: string
  ): Promise<any> {
    try {
      const response = await this.patch(
        `update-classification/${id}`,
        { classification },
        true,
        true
      );
      return response.data;
    } catch (error) {
      console.error("Update Classification:", error);
      throw new Error("Unable Classification");
    }
  }
}
