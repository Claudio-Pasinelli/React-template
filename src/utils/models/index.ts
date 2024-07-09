export interface User {
    id?: string;
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
    // recipes: Recipe[];
    createdAt?: Date;
    updatedAt?: Date;
  }