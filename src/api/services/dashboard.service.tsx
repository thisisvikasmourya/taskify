import Service from "@/libs/service";

export default class Dashboard extends Service {
    constructor() {
        super("dms");
      }

      async dashboardData(workspace_id: any,duration: any,time_zone:any): Promise<any>{
        try {
          const response = await this.post(`dashboard`,{workspace_id, duration,time_zone}, true, true);
          return response;
        } catch (error:any) {
            console.error(error.response?.data?.message || "An error occurred");
            throw new Error; 
        }
      }

      async dashboardFrequentlyViewed(workspace_id: any,duration: any,time_zone:any,page: any): Promise<any>{
        try {
          const response = await this.post(`frequently-viewed-files/list`,{workspace_id,duration,time_zone,page}, true, true);
          return response;
        } catch (error) {
          console.error(error);
          throw new Error;
        }
      }

      async dashboardDoctypeInsights(workspace_id: any,duration: any, time_zone: any,page: any): Promise<any>{
        try {
          const response = await this.post(`doctype-insights/list`,{workspace_id,duration,time_zone,page}, true, true);
          return response;
        } catch (error) {
          console.error(error);
          throw new Error;
        }
      }

      async dashboardRecentlyUploaded(workspace_id: any,duration: any,time_zone:any,page: any): Promise<any>{
        try {
          const response = await this.post(`get-all-recently-uploaded-files`,{workspace_id,duration,time_zone,page}, true, true);
          return response;
        } catch (error) {
          console.error(error);
          throw new Error;
        }
      }

      async dashboardSavedSearches(workspace_id: any,duration: any,time_zone: any,page: any): Promise<any>{
        try {
          const response = await this.post(`recent-saved-search/list`,{workspace_id,duration,time_zone,page}, true, true);
          return response;
        } catch (error) {
          console.error(error);
          throw new Error;
        }
      }

    }

