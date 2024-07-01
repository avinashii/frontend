import { CartItem, ShippingInfo, User } from "./types";


export interface userReducerInitialState {
    user: User | null;
    loading:boolean;
}
export interface cartReducerInitialState {
    cartItems:CartItem[];
    subtotal:number;
    discount:number;
    tax:number;
    shippingCharges:number;
    total:number;
    loading:boolean;
    shippingInfo:ShippingInfo;
}