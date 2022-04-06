
import type { Iuser } from "./accounts";
import { dbconfig } from "./public";

export interface ItoolTip {
    padding?: string;
    borderRadius?: string;
}
export interface IoptionNode {
    type?: string;
    tooltip?: ItoolTip
}
export interface IoptionLink {
    aspect?: string;
}
export interface IchartOption {
    maxSize?: number;
    minSize?: number;
    link?: IoptionLink;
    node?: IoptionNode
}
export interface Istyle {
    "background-fit"?: string,
    backgroundImage?: string;
    color?: string;
    size?: 30;
}
export interface IchartData {
    id?: string;
    parent?: string;
    type?: string;
    name?: string;
    style?: Istyle;
    value?: number;
}
export interface IchartConfig {
    type?: string;
    backgroundColor?: string;
    options?: IchartOption;
    series?: any
}



