import type { PageLoad } from "./$types.d.ts";
import type { Article } from "../../../static/articles.d.ts"

export const load: PageLoad = async ({ fetch }) => {
  const articles: Article[] = await (await fetch("/articles.json")).json();
  return { articles };
}
