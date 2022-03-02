
export interface Iquestion {
    _id?: any;
    options?: string[];
    explanation?: string;
    answer?: string;
    image?: string;
    instructions?: string;
    year?: string;
    resourceTypes?: number;
    duration?: number;
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
export interface Itopic {
    topicId?: number;
    courseId?: number;
    topicName?:string;
    description?: string;
    topicImage?: string;
    
}
export interface Icourse {
    courseId?: number;
    courseCode?: string;
    courseName?: string;
    courseImage?: string;
    topics?: Itopic[]

}

export interface Ifaculty {
    facultyName?: string;
    facultyId?: number;
    description?: string;
    courses?:Icourse[]
}
export interface Iresource {
    _id?: any;
    resourceTypeName?: string;
    description?: string;
    faculties?: Ifaculty[]
}
export interface IstudentQuiz {
    studentId?: number;
    topicId?: number;
    createdDate?: Date | string;
    score?: number;

}
export interface IquestionReport {
    question_id?: number;
    quizCount?: number;
    choosen?: string;
    correct?: boolean;
}
export interface IresultObject {
    _id?: any;
    student_id?: number;
    topic_id?: number;
    topic_name?: string;
    results?: IquestionReport[]
}