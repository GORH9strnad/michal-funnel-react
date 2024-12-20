import { memo } from "react";
import Page from "./organisms/page/Page";
import Article from "./molecules/article/Article";
import ArticleHeader from "./atoms/article_header/ArticleHeader";
import ArticleSubheader from "./atoms/article_subheader/ArticleSubheader";
import ArticleVideo from "./atoms/article_video/ArticleVideo";
import ArticleText from "./atoms/article_text/ArticleText";

function ThankingPage() {
  return (
    <Page>
      <Article>
        <ArticleHeader>Velice si vážím Vaši volby!</ArticleHeader>
        <ArticleSubheader>Platba proběhla úspěšně.</ArticleSubheader>
        <ArticleVideo />
        <ArticleText>
          --- Brzy Vám přijde e-mail s bližšími informacemi o kurzu ---
        </ArticleText>
      </Article>
    </Page>
  );
}

export default memo(ThankingPage);
