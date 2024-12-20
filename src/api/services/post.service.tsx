
import Service from "@/libs/service";
import Post from "@/api/models/post";

/**
 * Service class for managing posts.
 */
export default class PostService extends Service {
    
  constructor() {
    super("auth");
  }

  /**
   * Retrieves a list of posts.
   * @returns Promise<Post[]> A promise that resolves to an array of posts.
   */
  async list(): Promise<any> {
    try {
      const response = await this.get(`posts`,true,true);
      return response.data;
    } catch (error) {
      throw new Error("Unable to fetch data");
    }
  }

  /**
   * Retrieves a post by its ID.
   * @param id The ID of the post to retrieve.
   * @returns Promise<Post> A promise that resolves to the retrieved post.
   */
  async retrieve(id: number): Promise<Post> {
    try {
      const response = await this.get(`posts/${id}`,true,true);
      return response.data;
    } catch (error) {
      throw Error("Unable to fetch data");
    }
  }

  /**
   * Creates a new post.
   * @param postData The data for the new post.
   * @returns Promise<any> A promise that resolves to the created post data.
   */
  async create({ title, slug, description,user_id }: Post): Promise<any> {
     try {
        const data = await this.post(`posts`, {
            title,
            description,
            slug,
            status: 1,
            user_id,
        },true,true);
        return data;
    } catch (error) {
        throw Error("Unable to create post");
    }
  }

  /**
   * Updates an existing post.
   * @param id The ID of the post to update.
   * @param postData The updated data for the post.
   * @returns Promise<any> A promise that resolves to the updated post data.
   */
  async update(id: any, { title, slug, description,status,user_id }: Post): Promise<any> {
     try {
        const data = await this.patch(`posts/${id}`, {
            title,
            slug,
            description,
            status,
            user_id
        },true);
        return data;
    } catch (error) {
        throw Error("Unable to update post");
    }
  }

  /**
   * Deletes a post by its ID.
   * @param id The ID of the post to delete.
   * @returns Promise<any> A promise that resolves when the post is deleted.
   */
  async remove(id: any): Promise<any> {
     try {
        const data = await this.delete(`posts/${id}`,true);
        return data;
    } catch (error) {
        throw Error("Unable to delete post");
    }
  }
}
