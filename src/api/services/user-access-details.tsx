import Service from "@/libs/service";
import { UploadChunkResponse, CompleteUploadResponse } from "../models/upload";
import UploadDocument from "../models/upload-document";
import UploadNow from "../models/upload-now";

export default class MediaService extends Service {
  constructor() {
    super("media");
  }

  async uploadChunk(formData: FormData): Promise<any> {
    try {
      const headers = { "Content-Type": "multipart/form-data" };
      const response = await this.post(
        `upload-chunk`,
        formData,
        true,
        true,
        headers,
      );
      console.log(response);
      return response;
    } catch (error) {
      throw new Error("Unable to upload data");
    }
  }

  async completeUpload(fileName: string, totalChunks: number): Promise<any> {
    try {
      const response = await this.post(
        `complete-upload`,
        {
          fileName,
          totalChunks,
        },
        true,
        true,
      );
      return response;
    } catch (error) {
      throw new Error("Unable to upload data");
    }
  }
}
