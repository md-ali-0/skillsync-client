enum Role {
    TEACHER,
    LEARNER,
    ADMIN
}

enum UserStatus {
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
