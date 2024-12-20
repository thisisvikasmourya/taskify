
import Service from "@/libs/service";
import Onboarding from "@/api/models/onboarding";


export default class OnboardingService extends Service {
    
  constructor() {
    super("dms");
  }

  /**
   * Retrieves a list of posts.
   * @returns Promise<Onboarding[]> A promise that resolves to an array of onboarding.
   */
  async list(): Promise<any> {
    try {
      const response = await this.get(`onboarding`,true,true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }
}