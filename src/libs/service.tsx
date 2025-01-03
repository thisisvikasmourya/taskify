

import axios from "axios";
import Url from "@/libs/Url";
import { store } from "@/store";

export default class Service {
  protected http;
  private token: string | null = null;

  constructor(type: string) {
    let location = "http://localhost";
    if (typeof window !== "undefined") {
      location = window.location.href;
    }
    const { protocol, subdomain, domain } = Url.get(location);

    let url = "";
    if (domain === "localhost" || domain === "127.0.0.1") {
      url = `http://localhost:2223/`+type; // Adjust the port as per your local server
    } else {
      url = `${protocol}//${subdomain}.${domain}/api/${type}`;
    }

    this.http = axios.create({
      baseURL: url,
    });
  }

  async initialize() {
    const state = await store.getState();
    this.token = state.auth.token;
  }

  private handleError(error: any): string {
    if (error.code === "ECONNABORTED" || error.message.includes("timeout")) {
      return "The request timed out. Please check your connection.";
    }
    if (error.response) {
      return (
        error.response?.data?.message || "An error occurred during the request."
      );
    }
    return "An unexpected error occurred.";
  }

  async get(url: string, requireToken: boolean = false) {
    await this.initialize();
    const headers = {
      ...(requireToken && this.token
        ? { Authorization: `Bearer ${this.token}` }
        : {}),
    };
    try {
      return this.http.get(url, { headers });
    } catch (error: any) {
      const errorMessage = this.handleError(error);
      throw new Error(errorMessage);
    }
  }

  async post(
    url: string,
    data: any,
    requireToken: boolean = false,
    extraHeaders: object = {}
  ) {
    await this.initialize();
    const headers = {
      ...extraHeaders,
      ...(requireToken && this.token
        ? { Authorization: `Bearer ${this.token}` }
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
    extraHeaders: object = {}
  ) {
    await this.initialize();
    const headers = {
      ...extraHeaders,
      ...(requireToken && this.token
        ? { Authorization: `Bearer ${this.token}` }
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
    requireToken: boolean = false
  ) {
    await this.initialize();
    const headers = {
      ...(requireToken && this.token
        ? { Authorization: `Bearer ${this.token}` }
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
    requireToken: boolean = false
  ) {
    await this.initialize();
    const headers = {
      ...(requireToken && this.token
        ? { Authorization: `Bearer ${this.token}` }
        : {}),
    };
    try {
      return this.http.put(url, data, { headers });
    } catch (error: any) {
      const errorMessage = this.handleError(error);
      throw new Error(errorMessage);
    }
  }

  async delete(url: string, requireToken: boolean = false) {
    await this.initialize();
    const headers = {
      ...(requireToken && this.token
        ? { Authorization: `Bearer ${this.token}` }
        : {}),
    };
    try {
      return this.http.delete(url, { headers });
    } catch (error: any) {
      const errorMessage = this.handleError(error);
      throw new Error(errorMessage);
    }
  }
}
