import { siteConfig } from "@/config/siteConfig";
import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  //   const posts: PostType[] = await fetchPosts();

  //   const postEntries: MetadataRoute.Sitemap = posts.map(({ _id }) => ({
  //     url: `${siteConfig.baseUrl}/blog/post/${_id}`,
  //   }));
  return [
    {
      url: `${siteConfig.baseUrl}`,
    },

    // ...postEntries,
  ];
}
