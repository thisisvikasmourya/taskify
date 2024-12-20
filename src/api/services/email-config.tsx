import Service from "@/libs/service";

export default class MailConfigure extends Service {
  constructor() {
    super("dms");
  }

  async postMailStepOne(data: any): Promise<any> {
    try {
      const response = await this.post(
        `mail-settings/create-step-one`,
        data,
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      return error;
    }
  }

  //   async roleIsExists(data: any): Promise<any> {
  //     try {
  //       const response = await this.get(`roles/${data}/exists`, true, true);
  //       return response;
  //     } catch (error: any) {
  //       // Re-throw the error with additional context if necessary
  //       return error;
  //     }
  //   }

  //   async multipleDelete(data: any): Promise<any> {
  //     try {
  //       const response = await this.post(
  //         `roles/multiple-delete`,
  //         data,
  //         true,
  //         true,
  //       );
  //       return response.data;
  //     } catch (error: any) {
  //       return error;
  //       // Re-throw the error with additional context if necessary
  //     }
  //   }

  async updateStoarage(id: any, data: any): Promise<any> {
    try {
      const response = await this.patch(
        `storage-settings/${id}`,
        data,
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      return error;
    }
  }

  async updateStoarageStatus(id: any): Promise<any> {
    try {
      const response = await this.patch(
        `storage-settings/${id}`,
        {},
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      return error;
    }
  }

  async updateEmailConfig(id: any, data: any): Promise<any> {
    try {
      const response = await this.post(
        `mail-settings/create-step-two/${id}`,
        data,
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      return error;
    }
  }

  async TestSmptpEmailConfig(data: any): Promise<any> {
    try {
      const response = await this.post(`check-smtp-server`, data, true, true);
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      return error;
    }
  }

  async TestImapEmailConfig(data: any): Promise<any> {
    try {
      const response = await this.post(`check-imap-server`, data, true, true);
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      return error;
    }
  }

  async updateEmailthree(id: any, data: any): Promise<any> {
    try {
      const response = await this.post(
        `mail-settings/create-step-three/${id}`,
        data,
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      return error;
    }
  }

  async updateEmailFour(id: any, data: any): Promise<any> {
    try {
      const response = await this.post(
        `mail-settings/create-step-four/${id}`,
        data,
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      // Re-throw the error with additional context if necessary
      return error;
    }
  }

  //   async getRoleDetail(data: any): Promise<any> {
  //     try {
  //       const response = await this.get(`roles/${data}`, true, true);
  //       return response.data;
  //     } catch (error: any) {
  //       // Re-throw the error with additional context if necessary
  //       throw new Error(`Error sending invitation: ${error.message}`);
  //     }
  //   }

  //   async getRoleUserList(data: any): Promise<any> {
  //     try {
  //       const response = await this.get(`roles/${data}/users`, true, true);
  //       return response;
  //     } catch (error: any) {
  //       // Re-throw the error with additional context if necessary
  //       throw new Error(`Error sending invitation: ${error.message}`);
  //     }
  //   }

  //   async getPermissionList(): Promise<any> {
  //     try {
  //       const response = await this.get(`/permissions/list`, true, true);
  //       return response;
  //     } catch (error: any) {
  //       // Re-throw the error with additional context if necessary
  //       throw new Error(`Error sending invitation: ${error.message}`);
  //     }
  //   }

  //   async getRoleUserParams(data: any): Promise<any> {
  //     try {
  //       const response = await this.get(`/roles?search=${data}`, true, true);
  //       return response;
  //     } catch (error: any) {
  //       // Re-throw the error with additional context if necessary
  //       throw new Error(`Error sending invitation: ${error.message}`);
  //     }
  //   }

  //   async deleteRoleUser(data: any): Promise<any> {
  //     try {
  //       const response = await this.delete(`roles/${data}`, true, true);
  //       return response.data;
  //     } catch (error: any) {
  //       // Re-throw the error with additional context if necessary
  //       return error;
  //     }
  //   }

  //   async getList(page: number): Promise<any> {
  //     try {
  //       const response = await this.get(`roles?page=${page}`, true, true); // Assume API pagination parameter is "page"
  //       return response.data;
  //     } catch (error) {
  //       return error;
  //     }
  //   }

  async getListUpdate(page: number, searchText: any): Promise<any> {
    let searchData: any;

    if (searchText === "") {
      searchData = null;
    } else {
      searchData = searchText;
    }
    try {
      const response = await this.get(
        `storage-settings?search=${searchData}&page=${page}`,
        true,
        true,
      ); // Assume API pagination parameter is "page"
      return response;
    } catch (error) {
      return error;
    }
  }

  //   async getListDropDown(page: number): Promise<any> {
  //     try {
  //       const response = await this.get(`roles/list?page=${page}`, true, true); // Assume API pagination parameter is "page"
  //       return response.data;
  //     } catch (error) {
  //       return error;
  //     }
  //   }

  //   async getUserAccessRights(): Promise<any> {
  //     try {
  //       const response = await this.get("user-access-rights/list", true, true);
  //       return response;
  //     } catch (error) {
  //       throw new Error("Unable to fetch data");
  //     }
  //   }
}
