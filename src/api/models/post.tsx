// Represents a post with optional properties.
export default interface Post {
  // Unique identifier for the post.
  id?: any | null,

  // Title of the post.
  title: string,

  // Slug for the post, typically used in URLs.
  slug: string,

  // Description or content of the post.
  description: string,

  // Status of the post, indicating whether it's active or not.
  status?: number,

  // Status of the post, indicating whether it's active or not.
  user_id?: number,

}
