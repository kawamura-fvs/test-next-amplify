import { client } from "libs/client";
import type { News } from "types/news";

type Props = {
  news: News;
};

export default function Home({ news }: Props) {
  return (
    <div>
      <h1>{news.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: news.test.test }} />
    </div>
  )
}


export const getStaticProps = async () => {
  const news = await client.get({ endpoint: "news", contentId: "671211508175" });
  return {
    props: {
      news: news,
    },
  };
};