export interface RegisterUser {
    name: string,
    email: string,
    password: string
}

export interface LoginUser {
    email: string,
    password: string
}


export interface UserPassword {
    email: string,
    token: string,
    oldPassword: string,
    newPassword: string
}

export interface UserDetails {
    email: string
    img: string,
    name: string,
    weight: number,
    height: number,
    age: number
}