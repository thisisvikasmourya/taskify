import Service from "@/libs/service";

import AutoActionPayload from "../models/auto-action"

export default class AutoActionService extends Service {
  constructor() {
    super("dms");
  }

  async getAutoAction(page: number, searchTerm: string): Promise<any> {
    try {
      const response = await this.get(
        `auto-actions?search=${searchTerm}&page=${page}`,
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch auto action");
    }
  }

  async getAutoActionById(id: any): Promise<any> {
    try {
      const response = await this.get(`auto-actions/${id}`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch auto action");
    }
  }

  async formBuilderFieldsDoctype(doc_type_ids: string[]): Promise<any> {
    try {
      const response = await this.post(
        `doc-type-fields`,
        { doc_type_ids },
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch document type fields");
    }
  }
  async sourcePath(type: string, source_path: string): Promise<any> {
    try {
      const response = await this.post(
        `check-source-path`,
        { type, source_path },
        true,
        true
      );
      return response.data;
    } catch (error) {
      console.log(error, "rere");
      return error;
      // throw new Error("Unable to fetch document type fields");
    }
  }

  async remove(id: any): Promise<any> {
    try {
      const response = await this.delete(`auto-actions/${id}`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to Delete");
    }
  }

  async formBuilderFieldsMaster(master_ids: string[], page?: number): Promise<any> {
    try {
      const response = await this.post(
        `master-fields`,
        { master_ids,page },
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch master fields");
    }
  }

  async createAutoAction(payload: AutoActionPayload): Promise<any> {
    try {
      const response = await this.post("auto-actions", payload, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to create auto action");
    }
  }
  async updateAutoAction(id: string, payload: AutoActionPayload): Promise<any> {
    try {
      const response = await this.patch(
        `auto-actions/${id}`,
        payload,
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to create auto action");
    }
  }

  async getDoctypeListV2(id: any, params: any) {
    try {
      const response = await this.get(
        `doc-type/list-v2?${params}=${id}`,
        true,
        true
      );
      return response;
    } catch (error) {
      throw new Error("Unable to Load the Relative Path");
    }
  }
  async getMasterListV2(id: any, params: any) {
    try {
      const response = await this.get(
        `masters-list-v2?${params}=${id}`,
        true,
        true
      );
      return response;
    } catch (error) {
      throw new Error("Unable to Load the Relative Path");
    }
  }

  // async updateAutoAction(
  //   id: string,
  //   payload: Partial<AutoActionPayload>
  // ): Promise<any> {
  //   try {
  //     const response = await this.put(
  //       `auto-actions/${id}`,
  //       payload,
  //       true,
  //       true
  //     );
  //     return response.data;
  //   } catch (error) {
  //     throw new Error("Unable to update auto action");
  //   }
  // }

  // async listAutoActions(params?: { folder_id?: string }): Promise<any> {
  //   try {
  //     const response = await this.get("auto-actions", true, true,);
  //     return response.data;
  //   } catch (error) {
  //     throw new Error("Unable to fetch auto actions list");
  //   }
  // }

  // async deleteAutoAction(id: string): Promise<any> {
  //   try {
  //     const response = await this.delete(`auto-actions/${id}`, true, true);
  //     return response.data;
  //   } catch (error) {
  //     throw new Error("Unable to delete auto action");
  //   }
  // }

  // async validateAutoAction(payload: AutoActionPayload): Promise<any> {
  //   try {
  //     const response = await this.post(
  //       "auto-actions/validate",
  //       payload,
  //       true,
  //       true
  //     );
  //     return response.data;
  //   } catch (error) {
  //     throw new Error("Unable to validate auto action");
  //   }
  // }
}
