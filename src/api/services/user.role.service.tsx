import Service from "@/libs/service";

export default class UserRole extends Service {
  constructor() {
    super("dms");
  }

  async createRole(data: any): Promise<any> {
    try {
      const response = await this.post(`roles`, data, true, true);
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      return error;
    }
  }

  async roleIsExists(data: any): Promise<any> {
    try {
      const response = await this.get(`roles/${data}/exists`, true, true);
      return response;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      return error;
    }
  }

  async multipleDelete(data: any): Promise<any> {
    try {
      const response = await this.post(
        `roles/multiple-delete`,
        data,
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      return error;
      // Re-throw the error with additional context if necessary
    }
  }

  async updateRoleUser(id: any, data: any): Promise<any> {
    try {
      const response = await this.patch(`roles/${id}`, data, true, true);
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      return error;
    }
  }

  async getRoleDetail(data: any): Promise<any> {
    try {
      const response = await this.get(`roles/${data}`, true, true);
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      throw new Error(`Error sending invitation: ${error.message}`);
    }
  }

  async getRoleUserList(data: any): Promise<any> {
    try {
      const response = await this.get(`roles/${data}/users`, true, true);
      return response;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      throw new Error(`Error sending invitation: ${error.message}`);
    }
  }

  async getRolePermissionList(data: any): Promise<any> {
    try {
      const response = await this.get(`permissions/${data}/permissions-names`, true, true);
      return response;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      throw new Error(`Error retrieving Permissions: ${error.message}`);
    }
  }



  async getPermissionList(): Promise<any> {
    try {
      const response = await this.get(`/permissions/list`, true, true);
      return response;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      throw new Error(`Error sending invitation: ${error.message}`);
    }
  }

  async getRoleUserParams(data: any): Promise<any> {
    try {
      const response = await this.get(`/roles?search=${data}`, true, true);
      return response;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      throw new Error(`Error sending invitation: ${error.message}`);
    }
  }

  async deleteRoleUser(data: any): Promise<any> {
    try {
      const response = await this.delete(`roles/${data}`, true, true);
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      return error;
    }
  }

  async getList(page: number): Promise<any> {
    try {
      const response = await this.get(`roles?page=${page}`, true, true); // Assume API pagination parameter is "page"
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getListUpdate(page: number, searchText: any): Promise<any> {
    try {
      const response = await this.get(
        `roles/list?search=${searchText}&page=${page}`,
        true,
        true,
      ); // Assume API pagination parameter is "page"
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getListDropDown(page: number): Promise<any> {
    try {
      const response = await this.get(`roles/list?page=${page}`, true, true); // Assume API pagination parameter is "page"
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getUserAccessRights(): Promise<any> {
    try {
      const response = await this.get("user-access-rights/list", true, true);
      return response;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }
}
