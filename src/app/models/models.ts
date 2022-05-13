export interface Asset {
    path: string;
}

export interface Product {
    description: string;
    image: Asset;
    name: string;
    price: number;
    slug: string;
}

export interface Category {
    slug: string;
    name: string;
    products: Product[]
}