
export type User= {
    name:string;
    email:string;
    photo:string;
    gender:string;
    role:string;
    dob:string;
    _id:string;
};


export type Product={
    name:string;
    category:string;
    photo:string;
    price:number;
    stock:number;
    _id:string;
};
export type ShippingInfo={
    address:string;
    city:string;
    state:string;
    country:string;
    pinCode:string;
};
export type CartItem={
    productId:string;
    photo:string;
    price:number;
    quantity:number;
    name:string;
    stock:number;
};
// this will give all property wihtout stock
export type OrderItem= Omit<CartItem,"stock"> & {_id:string};

export type Order ={
    orderItems: OrderItem[];
    shippingInfo: ShippingInfo;
    subtotal:number;
    discount:number;
    tax:number;
    shippingCharges:number;
    total:number;
    _id:string;
    status:string;
    user:{
        name:string;
        _id:string;
    };
};

type CountAndChange = {
    revenue: number;
    product: number;
    user: number;
    order: number;
}
type LatestTransaction ={
    _id: string;
    discount: number;
    amount: number;
    quantity: number;
    status: string;
}

export type Stats ={
    categoryCount:Record<string, number>[];
    percentChange:CountAndChange;
    count:CountAndChange;
    chart: {
        order: number[];
        revenue: number[];
    },
    userRatio:{
        male:number;
        female:number;
    }
    latestTransaction: LatestTransaction[],
}

type RevenueDistribution ={
    netMargin: number;
    discount: number;
    productionCost: number;
    burnt: number;
    marketingCost: number;
    
};

type OrderFullfillment ={
    processing: number;
    shipped: number;
    delivered: number;
}

type UserAgeGroup ={
    teen: number;
    adult: number;
    old: number;
}
export type Pie ={
    orderFullfillment:OrderFullfillment;
    productCategories:Record<string, number>[];
    stockAvailablity:{
        inStock: number;
        outOfStock: number;
    }
    revenueDistribution:RevenueDistribution;
    usersAgeGroup:UserAgeGroup;
    adminCustomer:{
        admin: number;
        customer: number;
    }
}
export type Bar ={
    users: number[];
    products: number[];
    orders:number[];
}
export type Line ={
    users: number[];
    products: number[];
    discount:number[];
    revenue :number[];
}