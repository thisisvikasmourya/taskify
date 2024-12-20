import Service from "@/libs/service";

export default class Notification extends Service {
  constructor() {
    super("");
  }


  async getNotification(
    page?: number,
    // searchTerm: string
  ): Promise<any>{
    try {
      const response = await this.get(`notification/notifications`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to get the Notifications");
    }
  }

  async markAsRead(id:string) : Promise<any>{
  try {
      const response = await this.patch(
          `notification/notifications/${id}/read`, true, true
      )
return response.data;
  } catch (error:any) {
      console.error("Error Marking the read notification:", error.response.data.message);
      throw new Error(error.response.data.message)
  }
}


async markAllAsRead() : Promise<any>{
  try {
      const response = await this.patch(
          `notification/notifications/mark-all-read`, true, true
      )
return response.data;
  } catch (error:any) {
      console.error("Error Marking the read notification:", error.response.data.message);
      throw new Error(error.response.data.message)
  }
}


//   async checkerDocList(
//     page: number,
//     searchTerm: string,
//     status: string
//   ): Promise<any>{
//     try {
//       const response = await this.get(`checker-document-list/${status}?search=${searchTerm}&page=${page}`, true, true);
//       return response.data;
//     } catch (error) {
//       throw new Error("Unable to get the Checker List");
//     }
//   }

//   async getMakerCheckerById(
// id: string
//   ): Promise<any>{
//     try {
//       const response = await this.get(`folder-checker/${id}`, true, true);
//       return response.data;
//     } catch (error) {
//       throw new Error("Unable to get the Maker Checker.");
//     }
//   }


//   async createMakerChecker(params: makerCheckerParams) : Promise<any>{
//     try {
//         const response = await this.post(
//             `folder-checker`, params,true, true
//         )
//   return response.data;
//     } catch (error:any) {
//         console.error("Error saving Maker Checker:Error message", error.response.data.message);
//         throw new Error(error.response.data.message)
//     }
// }


// async updateMakerChecker(id:string,params: updateMakerCheckerParams) : Promise<any>{
//   try {
//       const response = await this.patch(
//           `folder-checker/${id}`, params,true, true
//       )
// return response.data;
//   } catch (error:any) {
//       console.error("Error updating Maker Checker:Error message", error.response.data.message);
//       throw new Error(error.response.data.message)
//   }
// }

//   async listByFolderId(id: any) : Promise<any>{
//     try {
//       const response = await this.get(`list/${id}`, true, true);
//       return response.data;
//     } catch (error: any) {
//       throw new Error("Unable to retrive Users and Roles list:", error);
//     }
//   }

// async deleteMakerChecker(id: string, status: string): Promise<any> {
//   try {
//     const response = await this.delete(`folder-checker/${id}?status=${status}`, true, true);
//     return response.data;
//   } catch (error:any) {
//     throw new Error(error.response.data.data.toString());
//   }
// }

// async deleteMultipleMakerChecker(folderIds: any, status: string): Promise<any>{
//   try {
//     const response = await this.post(`multiple-delete?status=${status}`, folderIds, true, true);
//     return response.data;
//   } catch (error: any) {
//     throw new Error("Unable to Delete Departments..!");
//   }
// }


// async rejectDoc(    document_id:string,
//   comment:string,
//   status: string
// ): Promise<any>{
//   try {
//     const response = await this.post(`documents/comment/new`, {document_id,comment,status}, true, true);
//     return response.data;
//   } catch (error: any) {
//     throw new Error("Unable to Delete Departments..!");
//   }
// }


}
