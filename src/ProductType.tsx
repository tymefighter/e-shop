export interface ProductType {
    name: string;
    price: string;
    description: string;
    imagePath: string;
};

export type ProductTypeWithId = ProductType & {id: string};

export type ProductListType = ProductTypeWithId[];