import Service from "@/libs/service";
export default class UserService extends Service {
  constructor() {
    super("dms");
  }

  async userList(id: any): Promise<any> {
    try {
      const response = await this.get(`user/${id}`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async userNameUpdate(obj: any, id: any): Promise<any> {
    try {
      const data = await this.patch(`user/${id}`, obj, true, true);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async userCompnyNameUpdate(obj: any): Promise<any> {
    try {
      const data = await this.patch(`update-company`, obj, true, true);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async userProfileUpload(obj: any): Promise<any> {
    try {
      const data = await this.patch(`update-profile-photo`, obj, true, true);
      return data;
    } catch (error: any) {
      return error?.response;
    }
  }

  async userProfilChangePassword(obj: any): Promise<any> {
    try {
      const data = await this.post(`change-password`, obj, true, true);
      return data;
    } catch (error) {
      console.log("Upload error:", error);
      throw new Error("Unable to upload profile photo");
    }
  }
}
