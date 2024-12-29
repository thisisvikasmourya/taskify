// import axios, { AxiosError } from "axios";
// import Url from "@/libs/Url";
// import { store } from "@/store";

// export default class Service {
//   protected http;
//   private token: string | null = null;

//   constructor(type: string) {
//     let location = "http://localhost";
//     if (typeof window !== "undefined") {
//       location = window.location.href;
//     }
//     const { protocol, subdomain, domain } = Url.get(location);

//     let url = "";
//     if (domain === "localhost" || domain === "127.0.0.1") {
//       url = `http://localhost:2223/${type}`; // Adjust the port as per your local server
//     } else {
//       url = `${protocol}//${subdomain}.${domain}/api/${type}`;
//     }

//     this.http = axios.create({
//       baseURL: url,
//     });
//   }

//   async initialize() {
//     const state = await store.getState();
//     this.token = state.auth?.token || null;
//   }

//   private handleError(error: AxiosError): string {
//     // Log the error for debugging
//     console.error("API Error:", error);

//     if (error.code === "ECONNABORTED" || error.message.includes("timeout")) {
//       return "The request timed out. Please check your connection.";
//     }

//     if (error.response) {
//       const { status, data } = error.response;

//       // Handle specific HTTP status codes
//       switch (status) {
//         case 400:
//           return data?.message || "Bad Request. Please check your input.";
//         case 401:
//           // Handle unauthorized error
//           this.handleUnauthorized();
//           return "Unauthorized. Please log in again.";
//         case 403:
//           return "Forbidden. You do not have permission to perform this action.";
//         case 404:
//           return "The requested resource was not found.";
//         case 500:
//           return "Internal Server Error. Please try again later.";
//         default:
//           return data?.message || "An error occurred during the request.";
//       }
//     }

//     if (error.request) {
//       return "No response received from the server. Please try again.";
//     }

//     return "An unexpected error occurred.";
//   }

//   private handleUnauthorized() {
//     // Redirect to login or clear token (customize as needed)
//     console.warn("Unauthorized access detected. Redirecting to login...");
//     // Example: Clear token and redirect to login page
//     this.token = null;
//     // window.location.href = "/login"; // Uncomment if you want to redirect
//   }

//   async get(url: string, requireToken: boolean = false) {
//     await this.initialize();
//     const headers = {
//       ...(requireToken && this.token
//         ? { Authorization: `Bearer ${this.token}` }
//         : {}),
//     };
//     try {
//       return await this.http.get(url, { headers });
//     } catch (error: any) {
//       const errorMessage = this.handleError(error);
//       throw new Error(errorMessage);
//     }
//   }

//   async post(
//     url: string,
//     data: any,
//     requireToken: boolean = false,
//     extraHeaders: object = {}
//   ) {
//     await this.initialize();
//     const headers = {
//       ...extraHeaders,
//       ...(requireToken && this.token
//         ? { Authorization: `Bearer ${this.token}` }
//         : {}),
//     };
//     try {
//       return await this.http.post(url, data, { headers });
//     } catch (error: any) {
//       const errorMessage = this.handleError(error);
//       throw new Error(errorMessage);
//     }
//   }

//   async postWithResponseType(
//     url: string,
//     data: any,
//     requireToken: boolean = false,
//     extraHeaders: object = {}
//   ) {
//     await this.initialize();
//     const headers = {
//       ...extraHeaders,
//       ...(requireToken && this.token
//         ? { Authorization: `Bearer ${this.token}` }
//         : {}),
//     };
//     try {
//       return await this.http.post(url, data, { headers, responseType: "blob" });
//     } catch (error: any) {
//       const errorMessage = this.handleError(error);
//       throw new Error(errorMessage);
//     }
//   }

//   async patch(url: string, data: any, requireToken: boolean = false) {
//     await this.initialize();
//     const headers = {
//       ...(requireToken && this.token
//         ? { Authorization: `Bearer ${this.token}` }
//         : {}),
//     };
//     try {
//       return await this.http.patch(url, data, { headers });
//     } catch (error: any) {
//       const errorMessage = this.handleError(error);
//       throw new Error(errorMessage);
//     }
//   }

//   async put(url: string, data: any, requireToken: boolean = false) {
//     await this.initialize();
//     const headers = {
//       ...(requireToken && this.token
//         ? { Authorization: `Bearer ${this.token}` }
//         : {}),
//     };
//     try {
//       return await this.http.put(url, data, { headers });
//     } catch (error: any) {
//       const errorMessage = this.handleError(error);
//       throw new Error(errorMessage);
//     }
//   }

//   async delete(url: string, requireToken: boolean = false) {
//     await this.initialize();
//     const headers = {
//       ...(requireToken && this.token
//         ? { Authorization: `Bearer ${this.token}` }
//         : {}),
//     };
//     try {
//       return await this.http.delete(url, { headers });
//     } catch (error: any) {
//       const errorMessage = this.handleError(error);
//       throw new Error(errorMessage);
//     }
//   }
// }










