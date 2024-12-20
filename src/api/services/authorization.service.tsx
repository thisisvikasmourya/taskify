import Service from "@/libs/service";

export default class AuthorizationService extends Service {
  constructor() {
    super("dms");
  }

  async getAuthorization(): Promise<any> {
    try {
      const response = await this.get(`users/authorization`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("authorization");
    }
  }
}
