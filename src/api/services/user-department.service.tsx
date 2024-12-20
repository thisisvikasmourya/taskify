import Service from "@/libs/service";

export default class UserDepartment extends Service {
  constructor() {
    super("dms");
  }

  async getDepartments(search: string): Promise<any> {
    try {
      const response = await this.get(
        `department?search=${search}`,
        true,
        true,
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to get the Department List");
    }
  }

  async getDepartmentsUpdate(search: string, page: any): Promise<any> {
    try {
      let nsearch
      if(search===""){
        nsearch=null
      }else{
        nsearch=search
      }
      const response = await this.get(
        `department/list?search=${nsearch}&page${page}`,
        true,
        true,
      );
      return response;
    } catch (error) {
      throw new Error("Unable to get the Department List");
    }
  }

  
  async getDepartmentsTable(search: string, page: any): Promise<any> {
    try {
      let nsearch
      if(search===""){
        nsearch=""
      }else{
        nsearch=search
      }
      const response = await this.get(
        `department?search=${nsearch}&page${page}`,
        true,
        true,
      );
      return response;
    } catch (error) {
      throw new Error("Unable to get the Department List");
    }
  }

  async createDepartment(departments: any): Promise<any> {
    try {
      const response = await this.post(`department`, departments, true, true);
      return response.data;
    } catch (error: any) {
      console.error(
        "Error saving departments:Error message",
        error.response.data.message,
      );
      throw new Error(error.response.data.message);
    }
  }

  async userListByDept(id: any): Promise<any> {
    try {
      const response = await this.get(
        `user-list-by-department/${id}`,
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      throw new Error("Unable to retrive Users:", error);
    }
  }

  async deleteDepartment(id: string): Promise<any> {
    try {
      const response = await this.delete(`department/${id}`, true, true);
      return response.data;
    } catch (error: any) {
      console.error(error.response.data,"department service")
      throw new Error(error.response.data.message.toString());
    }
  }

  async deleteMultipleDepartment(departmentIds: any): Promise<any> {
    try {
      const response = await this.post(
        `departments/multiple-delete`,
        departmentIds,
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      throw new Error("Unable to Delete Departments..!");
    }
  }
}
