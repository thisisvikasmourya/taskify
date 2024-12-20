import Service from "@/libs/service";

export default class ConfigService extends Service {
  constructor() {
    super("dms");
  }

  async list(): Promise<any> {
    try {
      const response = await this.get(`configuration`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async getDoctypeConfig(): Promise<any> {
    try {
      const response = await this.get(`doc-type/folder-count`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async getUserAccessConfig(): Promise<any> {
    try {
      // alert(4853459);
      const response = await this.get(`user-access`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async getFolderRoleViewerConfig(): Promise<any> {
    try {
      const response = await this.put(`role-folder/viewer`, {}, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  // // New update method
  async update(data: any): Promise<any> {
    try {
      const response = await this.patch(`update-config`, data, true, true);
      return response.data;
    } catch (error: any) {
      return error;
    }
  }

  async remove(): Promise<any> {
    try {
      const response = await this.delete(`doc-type-folder/delete`, true, true);
      return response.data;
    } catch (error: any) {
      return error;
    }
  }

  async userAccessRemove(): Promise<any> {
    try {
      const response = await this.put(`user-access/public`, {}, true, true);
      return response.data;
    } catch (error: any) {
      return error;
    }
  }
  async roleFolderViewer(): Promise<any> {
    try {
      const response = await this.get(`role-folder`, true, true);
      return response.data;
    } catch (error: any) {
      return error;
    }
  }

  async multipleAccessLevelView(): Promise<any> {
    try {
      const response = await this.get(`roles/multiple-access-level/off`, true, true);
      return response.data;
    } catch (error: any) {
      return error;
    }
  }

  async inheritLevelView(): Promise<any> {
    try {
      const response = await this.get(`roles/percolation/off`, true, true);
      return response.data;
    } catch (error: any) {
      return error;
    }
  }

  async unlinkMastersFromFolders(): Promise<any> {
    try {
      const response = await this.get(
        `unlink-masters-from-folders`,
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      return error;
    }
  }
  async totalMasters(): Promise<any> {
    try {
      const response = await this.get(`total-masters`, true, true);
      return response.data;
    } catch (error: any) {
      return error;
    }
  }

  async getUnCategorizedCount(): Promise<any> {
    try {
      const response = await this.get(`uncategorized/count`, true, true);
      return response.data;
    } catch (error: any) {
      return error;
    }
  }
  async getUnCategorizedDelete(): Promise<any> {
    try {
      const response = await this.get(`uncategorized/delete`, true, true);
      return response.data;
    } catch (error: any) {
      return error;
    }
  }
  async getDepartMentCount(): Promise<any> {
    try {
      const response = await this.get(`department/count`, true, true);
      return response.data;
    } catch (error: any) {
      return error;
    }
  }
  async unLinkDepartMent(): Promise<any> {
    try {
      const response = await this.get(`user/unlink-department`, true, true);
      return response.data;
    } catch (error: any) {
      return error;
    }
  }

  // async deleteMultipleDocTypes(doc_type_id: any): Promise<any> {
  //   try {
  //     const response = await this.post(
  //       `doc-type/multiple-destroy`,
  //       doc_type_id,
  //       true,
  //       true,
  //     );
  //     return response.data;
  //   } catch (error) {
  //     return error;
  //   }
  // }
}
