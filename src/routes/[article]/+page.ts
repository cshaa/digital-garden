import { fetchArticle } from "$lib/path.ts"
import type { PageLoad } from "./$types.d.ts";

export const load: PageLoad = async ({ fetch, params }) => {
  return await fetchArticle(fetch, params.article);
}
