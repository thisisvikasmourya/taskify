import Service from "@/libs/service";

export default class RegisterService extends Service {
  constructor() {
    super("auth");
  }

  async create({
    first_name,
    token,
    password,
    confirm_password,
    last_name,
  }: {
    first_name: string;
    token: string;
    password: string;
    confirm_password: string;
    last_name: string;
  }): Promise<any> {
    try {
      const data = await this.post(
        `register`,
        {
          first_name,
          token,
          password,
          confirm_password,
          last_name,
        },
        true,
      );
      return data;
    } catch (error:any) {
      console.error(error.response.data.message,"errorerror")
      throw new Error(error.response.data.message);
    }
  }
}
