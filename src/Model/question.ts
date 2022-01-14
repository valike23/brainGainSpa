
export interface Iquestion {
    _id?: any;
    options?: string[];
    explaination?: string;
    answer?: string;
    image?: string;
    instructions?: string;
    year?: string;
    resourceTypes?: number;
}

export interface IexcelQuestion {
    sn?: number;
    question_text?: string;
    answer_explantion?: string;
    option_a?: string;
    option_b?: string;
    option_c?: string;
    option_d?: string;
    opption_e?:  string;
    correct_option?: string;
    option_number?: number;
    instruction?: string;
    question_type?: number;
    fig_slots?: number;
    resource_type?: number;
    image_name?: string;
    year?: string;
    mock?: number;
    verified?: number;
}