import axios from "axios";
import Url from "@/libs/Url";
import { store } from "@/store";
// import { AxiosError } from "axios";

export default class Service {
  protected http;
  private token: string | null = null;
  private company: string | null = null;

//   constructor(type: string) {
//     let location = "http://local.dmacq.com/auth/identity";
//     if (typeof window !== "undefined") {
//       location = window.location.href;
//     }
//     const { protocol, subdomain, domain, path } = Url.get(location);

//     // console.log(subdomain, "sub", domain, "domain");
//     let url = "";
//     if (domain === "localhost") {
//       url = "https://dev2.dmacq.net/api/" + type;
//     } else {
//       url = protocol + "//" + subdomain + "." + domain + "/api/" + type;
//     }
//     this.http = axios.create({
//       baseURL: url,
//       // timeout: 5000, // Set timeout to 5 seconds for all requests
//     });
//   }

constructor(type: string) {
    let location = "http://local.dmacq.com/auth/identity";
    if (typeof window !== "undefined") {
      location = window.location.href;
    }
    const { protocol, subdomain, domain, path } = Url.get(location);
  
    let url = "";
    if (domain === "localhost" || domain === "127.0.0.1") {
      // Use a specific URL for localhost
      url = `http://localhost:3000/api/${type}`; // Adjust the port as per your local server
    } else {
      // Construct URL for other environments
      url = `${protocol}//${subdomain}.${domain}/api/${type}`;
    }
  
    this.http = axios.create({
      baseURL: url,
      // timeout: 5000, // Set timeout to 5 seconds for all requests
    });
  }
  




  async initialize() {
    const state = await store.getState();
    this.token = state.auth.token;
    this.company = state.auth.companyId;
  }

  // Helper method to handle errors
  //AxiosError
  private handleError(error: any): string {
    if (error.code === "ECONNABORTED" || error.message.includes("timeout")) {
      return "The request timed out. Please check your connection.";
    }
    if (error.response) {
      // Handle other response errors
      return (
        error.response?.data?.message || "An error occurred during the request."
      );
    }
    return "An unexpected error occurred.";
  }

  async get(
    url: string,
    requireToken: boolean = false,
    includeWorkspace: boolean = false,
  ) {
    await this.initialize();
    const headers = {
      ...(requireToken && this.token
        ? { Authorization: `Bearer ${this.token}` }
        : {}),
      ...(includeWorkspace && this.company
        ? { "X-Workspace-Id": this.company }
        : {}),
    };
    try {
      return this.http.get(url, { headers });
    } catch (error: any) {
      const errorMessage = this.handleError(error);

      console.log(errorMessage, "errorMessage");

      throw new Error(errorMessage);
    }
  }

  async post(
    url: string,
    data: any,
    requireToken: boolean = false,
    includeWorkspace: boolean = false,
    extraHeaders: object = {},
  ) {
    await this.initialize();
    const headers = {
      ...extraHeaders,
      ...(requireToken && this.token
        ? { Authorization: `Bearer ${this.token}` }
        : {}),
      ...(includeWorkspace && this.company
        ? { "X-Workspace-Id": this.company }
        : {}),
    };
    try {
      return this.http.post(url, data, { headers });
    } catch (error: any) {
      const errorMessage = this.handleError(error);
      throw new Error(errorMessage);
    }
  }

  async postWithResponseType(
    url: string,
    data: any,
    requireToken: boolean = false,
    includeWorkspace: boolean = false,
    extraHeaders: object = {},
  ) {
    await this.initialize();
    const headers = {
      ...extraHeaders,
      ...(requireToken && this.token
        ? { Authorization: `Bearer ${this.token}` }
        : {}),
      ...(includeWorkspace && this.company
        ? { "X-Workspace-Id": this.company }
        : {}),
    };
    try {
      return this.http.post(url, data, { headers, responseType: "blob" });
    } catch (error: any) {
      const errorMessage = this.handleError(error);
      throw new Error(errorMessage);
    }
  }

  async patch(
    url: string,
    data: any,
    requireToken: boolean = false,
    includeWorkspace: boolean = false,
  ) {
    await this.initialize();
    const headers = {
      ...(requireToken && this.token
        ? { Authorization: `Bearer ${this.token}` }
        : {}),
      ...(includeWorkspace && this.company
        ? { "X-Workspace-Id": this.company }
        : {}),
    };
    try {
      return this.http.patch(url, data, { headers });
    } catch (error: any) {
      const errorMessage = this.handleError(error);
      throw new Error(errorMessage);
    }
  }

  async put(
    url: string,
    data: any,
    requireToken: boolean = false,
    includeWorkspace: boolean = false,
  ) {
    await this.initialize();
    const headers = {
      ...(requireToken && this.token
        ? { Authorization: `Bearer ${this.token}` }
        : {}),
      ...(includeWorkspace && this.company
        ? { "X-Workspace-Id": this.company }
        : {}),
    };
    try {
      return this.http.put(url, data, { headers });
    } catch (error: any) {
      const errorMessage = this.handleError(error);
      throw new Error(errorMessage);
    }
  }

  async delete(
    url: string,
    requireToken: boolean = false,
    includeWorkspace: boolean = false,
  ) {
    await this.initialize();
    const headers = {
      ...(requireToken && this.token
        ? { Authorization: `Bearer ${this.token}` }
        : {}),
      ...(includeWorkspace && this.company
        ? { "X-Workspace-Id": this.company }
        : {}),
    };
    try {
      return this.http.delete(url, { headers });
    } catch (error: any) {
      const errorMessage = this.handleError(error);
      return error;
    }
  }
}
