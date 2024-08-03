import axiosInstance from "./axiosInstance";

export interface Product {
  createdAt: Date;
  updatedAt: Date;
  description: string;
  favoriteCount: number;
  id: number;
  images: string[];
  name: string;
  ownerId: number;
  price: number;
  tags: string[];
}

export type OrderBy = "recent" | "favorite";

export interface GetProductsProps {
  orderBy?: OrderBy;
  page?: number;
  pageSize: number;
}

/**
 * products get 요청을 보내서 products list와 총 product 개수 (totalCount)를 받아옵니다
 */
async function getProducts({ orderBy = "recent", page = 1, pageSize }: GetProductsProps) {
  const query = `orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`;
  try {
    const response = await axiosInstance.get(`/products?${query}`);
    // if (response.statusText !== 'OK') {
    //   throw new Error('상품정보가 올바르지 않습니다. server error')
    // }
    return response.data;
  } catch (error) {
    console.log(error);
    // throw new Error("상품정보를 받아오지 못했습니다. (getProducts)");
  }
}

export default getProducts;
