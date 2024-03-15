export interface RegisterUser {
    name: string,
    email: string,
    password: string
}

export interface LoginUser {
    email: string,
    password: string
}

export interface UpdateUser {
    email: string,
    token: string,
    age: number,
    weight: number,
    height: number
}

export interface UserPassword {
    email: string,
    token: string,
    oldPassword: string,
    newPassword: string
}