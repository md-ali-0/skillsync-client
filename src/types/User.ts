export enum Role {
    TEACHER,
    LEARNER,
    ADMIN,
    GUEST
}

export enum UserStatus {
    ACTIVE,
    BLOCKED,
}

export type User = {
    id: string;
    name: string;
    role: Role;
    email: string;
    password: string;
    status: UserStatus;
    avatar: string;
    createdAt?: Date;
    updatedAt?: Date;
};
