import Service from "@/libs/service";
import { trialParams } from "./auth.service";

export interface SubscriptionParams {
  billing_cycle: string;
  name: string;
  region: any;
  plan_id: string;
  company_id: string;
  no_of_users: number;
  no_of_viewers: number;
  billing_address1: string;
  billing_address2?: string; 
  billing_city: string;
  billing_state: string;
  billing_country: string;
  gst_invoice_opted: string;
  company_address_1: string;
  company_address_2?: string; 
  company_billing_city: string;
  company_billing_state: string;
  company_billing_country: string;
  deduct_tds: boolean;
  pan_number?: string; 
  pan_file_path?: string; 
  tan_number?: string; 
  tan_file_path?: string; 
  request_gst_invoice: boolean;
  gst_number?: string; 
  gst_file_path?: string; 
}

export interface paymentOrderParams {
  amount: number;
  email: string;
  invoice_id: string;
  name: string;
}

export interface paymentHDFCParams {
  amount: number;
  email: string;
  // order_id: string;
  name: string;
  customer_id: string;
  contact_no: string;
  subscription_id: string;
}

export interface paymentSuccessParams {
  razorpay_order_id: string,
  razorpay_payment_id: string,
  razorpay_signature: string,
  subscription_id:string
}

export interface orderStatusParams {
  customer_id: string,
  orderId: string,
  subscription_id:string
}


export default class SubscriptionService extends Service {
    constructor() {
        super("subscription");
      }


      async pricingList({billing_cycle, name, region,no_of_users,no_of_viewers,deduct_tds}: any): Promise<any> {
        try {
          const response = await this.post(`pricing-list`,{billing_cycle, name, region,no_of_users,no_of_viewers,deduct_tds},true,true);
          return response.data;
        } catch (error) {
          throw new Error("Unable to retrieve Pricing List");
        }
      }

      async plans(period: string,region: string): Promise<any>{
        try {
          const response = await this.get(`plans?billing_cycle=${period}&region=${region}`, true, true);
          return response.data;
        } catch (error) {
          throw new Error("Unable to retrieve Subscription plans");
        }
      }

      async countries(
        page: number,
        searchTerm: string
      ): Promise<any>{
        try {
          const response = await this.get(`countries?search=${searchTerm}&page=${page}`, true, true);
          return response.data;
        } catch (error) {
          throw new Error("Unable to retrieve countries list.");
        }
      }

      async states(id: string,
        page: number,
        searchTerm: string
      ): Promise<any>{
        try {
          const response = await this.get(`states/${id}?search=${searchTerm}&page=${page}`, true, true);
          return response.data;
        } catch (error) {
          throw new Error("Unable to retrieve states list.");
        }
      }

      async cities(id: string,
        page: number,
        searchTerm: string
      ): Promise<any>{
        try {
          const response = await this.get(`cities/${id}?search=${searchTerm}&page=${page}`, true, true);
          return response.data;
        } catch (error) {
          throw new Error("Unable to retrieve cities list.");
        }
      }

      async getSubscription(params: SubscriptionParams): Promise<any> {
        try {
            const response = await this.post(`subscription`, params, true, true);
            return response.data;
        } catch (error:any) {
          console.error(error,"purchase error subsc")
            throw new Error(error);
        }
    }
  
    async paymentOrder(params: paymentOrderParams): Promise<any> {
      try {
          const response = await this.post(`payment/order`, params,true,true);
          return response.data;
      } catch (error) {
          throw new Error("Unable to request your Order.");
      }
  }

  async paymentOrderHDFC(params: paymentHDFCParams): Promise<any> {
    try {
        const response = await this.post(`payment/session`, params,true,true);
        return response.data;
    } catch (error) {
        throw new Error("Unable to request your Order.");
    }
}


  async paymentSuccess(params: paymentSuccessParams): Promise<any> {
    try {
        const response = await this.post(`payment/success`, params,true,true);
        return response.data;
    } catch (error) {
        throw new Error("Unable to process the payment.");
    }
}

  async paymentFailure(subscription_id:string): Promise<any> {
    try {
        const response = await this.post(`payment/failures`, subscription_id,true,true);
        return response.data;
    } catch (error) {
        throw new Error("Payment Failure error service");
    }
  }

  async paymentStatus(params: orderStatusParams): Promise<any> {
    try {
        const response = await this.post(`payment/orderStatus`, params,true,true);
        return response.data;
    } catch (error:any) {
        throw new Error(error);
    }
  }


  async trial(params: trialParams): Promise<any> {
    try {
        const response = await this.post(`trial-plan`, params,true);
        return response.data;
    } catch (error:any) {
      console.error(error,"trial error plan")
      throw new Error(error);
    }
}

async currentPlan(): Promise<any>{
  try {
    const response = await this.get(`current-plan`, true, true);
    return response.data;
  } catch (error) {
    throw new Error("Unable to retrieve current plan list.");
  }
}

async paymentHistory(): Promise<any>{
  try {
    const response = await this.get(`payment-history`, true, true);
    return response.data;
  } catch (error) {
    throw new Error("Unable to retrive payment history.");
  }
}


}

