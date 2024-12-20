// Represents a post with optional properties.
export default interface DocValue {
  id?: any | null;
  name: string;
  updated_at: string;
  updated_by: string;
  folders: any;
  deletePost: any;
}
