export interface Iuser {
    id?: number;
    first_nname?: string;
    last_name?: string;
    middle_name?: string;
    user_name?: string;
    email?: string;
    phone?: string;
    gender?: number | string;
    password?: string;
    profile_pics?: string;
    date_of_birth?: Date;
    created_date?: Date;
    updated_date?: Date;
    token?: string;
    is_active?: boolean;
    confirm_number?: boolean;
    confirm_email?: boolean;
    type?: string;
}
export interface Istudent {

}