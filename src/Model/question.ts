
export interface Iquestion {
    _id?: any;
    options?: string[];
    explanation?: string;
    answer?: string;
    image?: string;
    instructions?: string;
    year?: string;
    resourceTypes?: number;
    type?: number,
    choosen?: string;
    question?: string;
    topic?: string;
    subject?: string;
}

export interface IexcelQuestion {
    sn?: number;
    question?: string;
    explanation?: string;
    option_a?: string;
    option_b?: string;
    option_c?: string;
    option_d?: string;
    option_e?:  string;
    answer?: string;
    option_number?: number;
    instruction?: string;
    question_type?: number;
    topic?: string;
    resource_type?: number;
    image?: string;
    year?: string;
    mock?: number;
    verified?: number;
}
export interface IquestionParameter {
    type?: number;
    subject?: string;
    amount?: number;
    year?: string;
}