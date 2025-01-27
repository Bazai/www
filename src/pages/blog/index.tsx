import type { GetStaticProps } from "next";
import type { BlogProps } from "@views/Blog";

import { notesMetadata } from "@services/network";
import { Blog as BlogPage } from "@views/Blog";

export const getStaticProps: GetStaticProps<BlogProps> = () => {
  return {
    props: {
      posts: notesMetadata(),
    },
  };
};

export default BlogPage;
