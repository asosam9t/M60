export interface User {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  status: string;
}
export interface userWithoutPassword {
  _id: string;
  email: string;
}

export interface Token {
  userId: string;
  hash: string;
}

export interface PaginatedUser {
  user: User[];
  totalContent: number;
  totalPages: number;
}
