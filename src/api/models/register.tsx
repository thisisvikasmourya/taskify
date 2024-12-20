// Represents a post with optional properties.
export default interface Register {
  name: string;
  // Email of the user.
  token: string;

  // Password of user.
  password: string;
  confirm_password: string;
}
