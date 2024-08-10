import instance from "./instance";

interface Writer {
  id: number;
  nickname: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  writer: Writer;
  createdAt: string;
  updatedAt: string;
}

export type orderOption = "like" | "recent";

interface GetArticlesProps {
  page?: number;
  pageSize: number;
  orderBy?: orderOption;
  keyword?: string;
}

interface Response {
  list: Article[];
  totalCount: number;
}

export default async function getArticles({
  page = 1,
  pageSize,
  orderBy = "recent",
  keyword = "",
}: GetArticlesProps) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}}`;
  const res = await instance.get(`/articles?${query}`);
  const { list, totalCount }: Response = res.data;

  // 예외 처리 및 에러 처리 필요
  return { list, totalCount };
}
