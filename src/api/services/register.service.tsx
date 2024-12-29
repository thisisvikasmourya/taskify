import Service from "@/libs/service";

export default class RegisterService extends Service {
  constructor() {
    super("auth");
  }

  async create({
    name,
    email,
    password,
    phoneNumber,
    termsAccepted,
  }: {
    name: string;
    email: string;
    password: string;
    phoneNumber: any;
    termsAccepted: string;
  }): Promise<any> {
    try {
      console.log(name,email,"form From Service")
      const data = await this.post(
        `register`,
        {
          name,
          email,
          password,
          phoneNumber,
          termsAccepted,
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
