import Service from "@/libs/service";
import Identity from "@/api/models/identity";
import OTPVerification from "@/api/models/otp-verification";
import ForgotPassword from "../models/forgot-password";
import ResetPassword from "../models/reset-password";
import SignUp from "@/api/models/sign-up";
import Register from "../models/register";
import CreateUser from "../models/create-user";


export interface userSetupParams {
  country_code: string,
  mobile_no: string,
  no_of_employees: string,
  industry_type: string,
  industry_function: string
}

export interface trialParams {
  company_id: string,
  name: string,
}

/**
 * Service class for managing posts.    
 */
export default class AuthService extends Service {
  constructor() {
    super("auth");
  }

  /**
   * Creates a new post.
   * @param Identity The data for the new post.
   * @returns Promise<any> A promise that resolves to the identity data.
   */
  async identity({ email, password }: Identity): Promise<any> {
    try {
      const data = await this.post(`identity`, {
        email,
        password,
      });
      return data;
    } catch (error) {
      // throw Error("Unable to authenticate user");
      console.log(error);
      throw error;
    }
  }

  /**
   * Creates a new post.
   * @param Identity The data for the new post.
   * @returns Promise<any> A promise that resolves to the identity data.
   */
  async signUp({
    name,
    email,
    password,
    confpassword,
    phoneNumber,
    termsAccepted,
  }: SignUp): Promise<any> {
    try {
      const data = await this.post(`register`, {
        name,
        email,
        password,
        confpassword,
        phoneNumber,
        termsAccepted,
      });
      return data;
    } catch (error) {
      // throw Error("Unable to authenticate user");
      console.log(error);
      throw error;
    }
  }

  /**
   * Creates a new post.
   * @param Identity The data for the new post.
   * @returns Promise<any> A promise that resolves to the identity data.
   */
  async register({
    name,
    password,
    confirm_password,
    token,
  }: Register): Promise<any> {
    try {
      const data = await this.post(`register`, {
        name,
        password,
        confirm_password,
        token,
      });
      return data;
    } catch (error) {
      // throw Error("Unable to authenticate user");
      console.log(error);
      throw error;
    }
  }

  /**
   * Send an OTP through email.
   * @param OTPverification The opt to send to an email.
   * @returns Promise<any> A promise that resolves upon sending an email successfully.
   */
  async otpEmail({ email, otp }: OTPVerification): Promise<any> {
    try {
      const data = await this.post(
        `send-otp`,
        {
          email,
          otp,
        },
        true,
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Creates a new post.
   * @param Identity The data for the new post.
   * @returns Promise<any> A promise that resolves to the identity data.
   */
  async otpVerification({ email, otp }: OTPVerification): Promise<any> {
    try {
      const data = await this.post(
        `verify-otp`,
        {
          email,
          otp,
        },
        true,
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Creates a new post.
   * @param Identity The data for the new post.
   * @returns Promise<any> A promise that resolves to the identity data.
   */
  async forgotPassword({ email }: ForgotPassword): Promise<any> {
    try {
      const data = await this.post(
        `forgot-password`,
        {
          email,
        },
        true,
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Creates a new post.
   * @param Identity The data for the new post.
   * @returns Promise<any> A promise that resolves to the identity data.
   */
  async resetPassword({
    token,
    password,
    confirm_password,
  }: ResetPassword): Promise<any> {
    try {
      const data = await this.post(
        `reset-password`,
        {
          token,
          password,
          confirm_password,
        },
        true,
      );
      return data;
    } catch (error) {
      throw error;
    }
  }


  async createUser({
    first_name,
    last_name,
    email,
    password,
    company_name,
    terms_and_conditions,
  }: CreateUser): Promise<any> {
    try {
      const data = await this.post(`create-user`, {
        first_name,
        last_name,
        email,
        password,
        company_name,
        terms_and_conditions,
      });
      return data;
    } catch (error:any) {
      // throw Error("Unable to authenticate user");
      console.error(error,"new user error");
      throw error.response.data.message;
    }
  }

  async otpSignUpVerification({ otp }: any): Promise<any> {
    try {
      const data = await this.post(
        `verify-signup-otp`,
        {
          otp,
        },
        true,
      );
      return data;
    } catch (error:any) {
      console.log(error.response.data.message,"value of otp error")
      throw error.response.data.message;
    }
  }



  async domainSetup(): Promise<any> {
    try {
      const data = await this.get(
        `new-signup`,
        true
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  async createWorkspaces(): Promise<any> {
    try {
      const data = await this.get(
        `create-workspaces`,
        true
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  async userSetup(params: userSetupParams): Promise<any> {
    try {
        const response = await this.post(`update-user-details`, params,true);
        return response.data;
    } catch (error) {
        throw new Error("Unable to setup user details.");
    }
}

}
