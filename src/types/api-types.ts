import {
  Bar,
  CartItem,
    Line,
    Order,
    Pie,
    Product,
    ShippingInfo,
    Stats,
    User,
  } from "./types";
  
  export type CustomError = {
    status: number;
    data: {
      message: string;
      success: boolean;
    };
  };
  
  export type MessageResponse = {
    success: boolean;
    message: string;
  };
  
  export type AllUsersResponse = {
    success: boolean;
    users: User[];
  };
  
  export type UserResponse = {
    success: boolean;
    user: User;
  };
  
  export type AllProductsResponse = {
    success: boolean;
    products: Product[];
  };
  export type CategoriesResponse = {
    success: boolean;
    categories: string[];
  };
  
  export type SearchProductsResponse = AllProductsResponse & {
    totalPage: number;
  };

  export type AllOrdersResponse = {
    success:boolean;
    orders:Order[];
  };
  export type OrderDetailResponse = {
    success:boolean;
    order:Order;
  };
  
  export type ProductResponse = {
    success: boolean;
    product: Product;
  };

  export type StatsResponse = {
    success:boolean;
    stats:Stats;
  };
  export type PieResponse = {
    success:boolean;
    charts:Pie;
  };
  export type BarResponse = {
    success:boolean;
    charts:Bar;
  };
  export type LineResponse = {
    success:boolean;
    charts:Line;
  };
  
 
  export type NewProductRequest = {
    id: string;
    formData: FormData;
  };
  export type SearchProductsRequest = {
    price: number;
    page: number;
    category: string;
    search: string;
    sort: string;
  }; 
  export type UpdateProductRequest = {
    userId: string;
    productId:string;
    formData: FormData;
  };
  export type DeleteProductRequest = {
    userId: string;
    productId:string;
  };
  export type NewOrderRequest = {
    user:string;
    orderItems:CartItem[];
    subtotal:number;
    discount:number;
    tax:number;
    shippigCharges:number;
    total:number;
    loading:boolean;
    shippingInfo:ShippingInfo;
  };
  export type UpdateOrderRequest = {
    userId:string;
    orderId:string;
  };

export type DeleteUserRequest ={
  userId:string;
  adminUserId:string;
}


