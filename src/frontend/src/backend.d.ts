import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface ContactSubmission {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export interface OrderInquiry {
    id: bigint;
    name: string;
    message: string;
    timestamp: Time;
    quantity: bigint;
    phone: string;
    product: Product;
}
export enum Product {
    bottle1L = "bottle1L",
    jar20L = "jar20L",
    bottle500ml = "bottle500ml"
}
export interface backendInterface {
    getAllContactSubmissions(adminPassword: string): Promise<Array<ContactSubmission>>;
    getAllOrderInquiries(adminPassword: string): Promise<Array<OrderInquiry>>;
    submitContactForm(name: string, email: string, phone: string, message: string): Promise<void>;
    submitOrderInquiry(name: string, phone: string, product: Product, quantity: bigint, message: string): Promise<void>;
}
