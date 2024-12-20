import Service from "@/libs/service";

export default class UserPermission extends Service {
  constructor() {
    super("dms");
  }

  async getPermissions(searchTerm: string): Promise<any>{
    try {
      const response = await this.get(`permissions?search=${searchTerm}`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to get the Permission List");
    }
  }

  async getPermissionsUpdate(searchTerm: string,page:any): Promise<any>{
    try {
      const response = await this.get(`permissions?search=${searchTerm}&page=${page}`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to get the Permission List");
    }
  }
  
  // async searchPermissions(searchTerm: string): Promise<any> {
  //   try {
  //     const response = await this.get(`permissions?search=${searchTerm}`, true, true);
  //     return response.data;
  //   } catch (error: any) {
  //     console.error("Error searching permissions:", error.response?.data?.message || error.message);
  //     throw new Error(error.response?.data?.message || "Unable to search permissions.");
  //   }
  // }


  async getPermissionById(id: string): Promise<any> {
    try {
      const response = await this.get(`permissions/${id}`, true, true);
      return response.data;
    } catch (error:any) {
      console.error(error);
      throw new Error(error.response.data.data.toString());
    }
  }

  async getRolesById(id: any): Promise<any> {
    try {
      const response = await this.get(`permissions/${id}/roles`, true, true);
      return response.data;
    } catch (error:any) {
      console.error(error);
      throw new Error("Unable to get Roles Info:", error)
    }
  }

  async createPermission(permission: any) : Promise<any>{
    try {
        const response = await this.post(
            `permissions`, permission,true, true
        )
  return response.data;
    } catch (error:any) {
        console.error("Error saving Permission:", error.response.data.message);
        throw new Error(error)
    }
}

async updatePermission(id: string, permissionData: any): Promise<any> {
  try {
    const response = await this.patch(`permissions/${id}`, permissionData, true, true);
    return response.data;
  } catch (error: any) {
    console.error(error.response);
    throw new Error(error.response.data.message);
  }
}


async deletePermission(id: string): Promise<any> {
  try {
    const response = await this.delete(`permissions/${id}`, true, true);
    return response.data;
  } catch (error:any) {
    throw new Error(error.response.data.message.toString());
  }
}


async deleteMultiplePermissions(ids: any): Promise<any>{
  try {
    const response = await this.post(`permissions/multiple-delete`, ids, true, true);
    return response.data;
  } catch (error: any) {
    throw new Error("Unable to Delete Permissions..==>", error);
  }
}

}
