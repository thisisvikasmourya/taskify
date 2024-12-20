// Represents a post with optional properties.
export default interface Settings {
  // Unique identifier for the post.
  id?: any | null;

  // Title of the post.
  name: string;

  // Slug for the post, typically used in URLs.
  type: string;

  // Description or content of the post.
  size: number;

  // Status of the post, indicating whether it's active or not.
  shared_with?: string;

  // Status of the post, indicating whether it's active or not.
  parent_id?: string;

  created_by: string;

  updated_at: string;

  created_at: string;

  folders: any;

  // Title of the post.
  description: string;
  subfolder: string[];
}
