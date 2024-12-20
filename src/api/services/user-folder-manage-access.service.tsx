import Service from "@/libs/service";

export default class UserManageAccess extends Service {
  constructor() {
    super("dms");
  }

  async createRollFolderAccessManage(data: any): Promise<any> {
    try {
      const response = await this.post(
        `roles/add-with-access`,
        data,
        true,
        true,
      );
      return response;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      return error;
    }
  }

  async updateRole(data: any): Promise<any> {
    try {
      const response = await this.patch(
        `roles/${data.id}/permission`,
        data.obj,
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      return error;
    }
  }

  async deleteManageRole(data: any): Promise<any> {
    try {
      const response = await this.delete(
        `roles/delete-the-access/${data}`,
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      return error;
    }
  }

  async updateuserAccessRight(data: any): Promise<any> {
    try {
      const response = await this.patch(
        `roles/${data.id}/user-access-rights`,
        data.obj,
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      return error;
    }
  }

  async getRoleDetail(data: any): Promise<any> {
    try {
      const response = await this.get(`roles/with-access/${data}`, true, true);
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      throw new Error(`Error sending invitation: ${error.message}`);
    }
  }

  //   async deleteRoleUser(data: any): Promise<any> {
  //     try {
  //       const response = await this.delete(`roles/${data}`);
  //       return response.data;
  //     } catch (error: any) {
  //       // Re-throw the error with additional context if necessary
  //       throw new Error(`Error sending invitation: ${error.message}`);
  //     }
  //   }

  //   async getList(): Promise<any> {
  //     try {
  //       const response = await this.get("roles", true, true);
  //       return response.data;
  //     } catch (error) {
  //       throw new Error("Unable to fetch data");
  //     }
  //   }
}
