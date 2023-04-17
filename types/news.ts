export type News = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  title: string,
  test: {
    fieldId: string,
    test: string, 
  },
  category: {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    name: string,
  },
  image: {
    url: string,
    height: number,
    width: number,
  },
  test3?: string,
};