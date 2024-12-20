import Service from "@/libs/service";
import Settings from "@/api/models/setting-where-to-save";
import DoctypeName from "../models/doctype-name";
import WhereToSave from "../models/where-to-save";
import WhereToSaveStep2 from "../models/where-to-save-step2";
import FormBuilder from "../models/form-builder";

export default class SettingService extends Service {
  constructor() {
    super("dms");
  }

  async list(): Promise<any> {
    try {
      const response = await this.get(`folders/display`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }
  async displayV2( id: any,params:any): Promise<any> {
    try {
      const response = await this.get(`folders/display-v2?${params}=${id}`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async folderList(): Promise<any> {
    try {
      const response = await this.get(`folders/list`, true, true);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async listFolder(): Promise<any> {
    try {
      const response = await this.get(`folders`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  async doctypename({
    // doctype,
    master_name,
    doctype_name,
    draft,
    classification,
  }: DoctypeName): Promise<any> {
    try {
      const data = await this.post(
        `doc-type/save-draft/step-1`,
        {
          master_name,
          doctype_name,
          draft,
          classification,
        },
        true,
        true,
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async wheretosave({
    folder_id,
    doctype_id,
    draft,
  }: WhereToSave): Promise<any> {
    try {
      const data = await this.post(
        `doc-type/save-draft/step-2`,
        {
          folder_id,
          doctype_id,
          draft,
        },
        true,
        true,
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async wheretosavestep2({
    doctype_name,
    master_name,
    classification,
    folder_id,
    draft,
  }: WhereToSaveStep2): Promise<any> {
    try {
      const data = await this.post(
        `doc-type/save-draft/step-1-2`,
        {
          doctype_name,
          master_name,
          classification,
          folder_id,
          draft,
        },
        true,
        true,
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async docProperties({
    form_builder_fields,
    doctype_name,
    master_name,
    folder_id,
    is_draft,
    classification,
  }: FormBuilder): Promise<any> {
    try {
      const data = await this.post(
        `doc-type/save-draft/step-1-2-3`,
        {
          form_builder_fields,
          doctype_name,
          master_name,
          folder_id,
          is_draft,
          classification,
        },
        true,
        true,
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async docPropertiesStep123(
    {
      form_builder_fields,
      doctype_name,
      master_name,
      folder_id,
      is_draft,
      classification,
    }: FormBuilder,
    id: any,
  ): Promise<any> {
    try {
      const data = await this.patch(
        `doc-type/save/step-1-2-3/${id}`,
        {
          form_builder_fields,
          doctype_name,
          master_name,
          folder_id,
          is_draft,
          classification,
        },
        true,
        true,
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async docPropertiesSaveAsDraft({
    doctype_id,
    form_builder_fields,
    draft,
  }: FormBuilder): Promise<any> {
    try {
      const data = await this.post(
        `doc-type/save-draft/step-3`,
        {
          doctype_id,
          form_builder_fields,
          draft,
        },
        true,
        true,
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async docPropertiesUpdate(
    { doctype_id, form_builder_fields, draft }: FormBuilder,
    id: any,
  ): Promise<any> {
    try {
      const data = await this.patch(
        `doc-type/save-draft/step-3/${id}`,
        {
          doctype_id,
          form_builder_fields,
          draft,
        },
        true,
        true,
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async docPropertiesPublish(id: any, data: any): Promise<any> {
    try {
      const response = await this.patch(
        `doc-type/save-draft/publish/${id}`,
        data,
        true,
        true,
      );
      return response.data;
    } catch (error: any) {
      return error;
    }
  }
}
