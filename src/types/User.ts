export const user_role = {
    admin: 'admin',
    user: 'user',
  } as const;
  
  export const user_status = {
    active: 'active',
    blocked: 'blocked',
  } as const;


export type User = {
    _id: string;
    name: string;
    company?: string;
    role: keyof typeof user_role;
    email: string;
    password: string;
    status: keyof typeof user_status;
    credit: number;
    avatar: string;
    phone?: string;
    city?: string;
    zipCode: string;
    state?: string;
    street?: string;
    country?: string;
    birthdate?: string;
    passwordChangedAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
  };