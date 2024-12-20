import Service from "@/libs/service";

export default class FavoriteService extends Service {
  constructor() {
    super("dms");
  }

  async pinToFavorite(
    user_id: string,
    favouritable_id: string,
    favouritable_type: string
  ): Promise<any> {
    try {
      const response = await this.post(
        `favourites`,
        { user_id, favouritable_id, favouritable_type },
        true,
        true
      );
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }

  async getFavorites(
    userId: string,
    searchTerm: string,
    sortby:string,
    order:string
  ): Promise<any> {
    try {
      // Construct query parameters based on provided values
      let queryParams = searchTerm ? `?search=${searchTerm}` : "";

      // Conditionally append sortby and order if they are provided
      if (sortby) {
        queryParams += queryParams ? `&sortby=${sortby}` : `?sortby=${sortby}`;
      }
      if (order) {
        queryParams += queryParams ? `&order=${order}` : `?order=${order}`;
      }

      // Make the request
      const response = await this.get(
        `favourites/${userId}${queryParams}`,
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch favorites");
    }
  }

  async deleteFavorites(userId: string): Promise<any> {
    try {
      const response = await this.delete(`favourites/${userId}`, true, true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to Delete favorites");
    }
  }

  async deleteMultipleFavorites(favouritable_id: string): Promise<any> {
    try {
      const response = await this.post(
        `multiple-delete-favourite`,
        favouritable_id,
        true,
        true
      );
      return response.data;
    } catch (error) {
      throw new Error("Unable to Delete favorites");
    }
  }
}