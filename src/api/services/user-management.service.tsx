import Service from "@/libs/service";

export default class UserManagement extends Service {
  constructor() {
    super("dms");
  }

  async sendInvitation(data: any): Promise<any> {
    try {
      const response = await this.post(`send-invite`, data, true, true);
      return response;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      return error;
    }
  }

  async reSendInvitation(data: any): Promise<any> {
    try {
      const response = await this.post(`resend-invite`, data, true, true);
      return response;
    } catch (error: any) {
      return error;
      // Re-throw the error with additional context if necessary
    }
  }

  async updateInvitation(id: any, data: any): Promise<any> {
    try {
      const response = await this.patch(
        `update-invitation/${id}`,
        data,
        true,
        true,
      );
      return response;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      throw new Error(`Error sending invitation: ${error.message}`);
    }
  }
  async updateDepartmentInvitation(id: any, data: any): Promise<any> {
    try {
      const response = await this.patch(
        `update-department/${id}`,
        data,
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary

      return error
    }
  }

  async getListById(data: any): Promise<any> {
    try {
      const response = await this.get(`user/${data}`, true, true);
      return response;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      throw new Error(`Error sending invitation: ${error.message}`);
    }
  }

  async getListViewById(data: any): Promise<any> {
    try {
      const response = await this.get(
        `users/${data}/authorization`,
        true,
        true,
      );
      return response;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      throw new Error(`Error sending invitation: ${error.message}`);
    }
  }

  async getList(search: string): Promise<any> {
    try {
      const response = await this.get(`user?search=${search}`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async getListUpdate(search: string,pageParam=1): Promise<any> {
    try {
      const url=`user?search=${search}&page=${pageParam}`
      const response = await this.get(url, true, true);
      
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async remove(id: any): Promise<any> {
    try {
      const response = await this.delete(`user/${id}`, true, true);
      return response;
    } catch (error) {
      return error;
    }
  }

  async removeMultiple(obj: any): Promise<any> {
    try {
      const response = await this.post(`multiple-delete-user`, obj, true, true);
      return response;
    } catch (error) {
      return error;
    }
  }

  async updateRole(id: any, obj: any): Promise<any> {
    try {
      const response = await this.patch(`update-role/${id}`, obj, true, true);
      return response;
    } catch (error) {
      return error;
    }
  }
}
