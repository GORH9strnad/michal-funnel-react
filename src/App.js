import "./App.css";
import LeftBar from "./user_interface/templates/landing_page/organisms/left_bar/LeftBar";
import LandingPage from "./user_interface/templates/landing_page/LandingPage";
import ProfileCard from "./user_interface/templates/landing_page/molecules/profile_card/ProfileCard";
import AvatarPhoto from "./user_interface/templates/landing_page/atoms/avatar_photo/AvatarPhoto";
import ProfileName from "./user_interface/templates/landing_page/atoms/profile_name/ProfileName";
import ProfileQuote from "./user_interface/templates/landing_page/atoms/profile_quote/ProfileQuote";
import RightBar from "./user_interface/templates/landing_page/organisms/right_bar/RightBar";
import RightBarVideo from "./user_interface/templates/landing_page/atoms/right_bar_video/RightBarVideo";
import Article from "./user_interface/templates/landing_page/organisms/article/Article";
import ArticleTitle from "./user_interface/templates/landing_page/atoms/article_title/ArticleTitle";
import TextHighliting from "./user_interface/templates/landing_page/atoms/underline/TextHighliting";
import ArticleSubtitle from "./user_interface/templates/landing_page/atoms/article_subtitle/ArticleSubtitle";
import ArticleText from "./user_interface/templates/landing_page/atoms/article_text/ArticleText";
import Carousel from "./user_interface/templates/landing_page/molecules/carousel/Carousel";
import RatingStars from "./user_interface/templates/landing_page/atoms/rating_stars/RatingStars";
import reviews from "./user_interface/assets/text/reviews";
import ReviewCard from "./user_interface/templates/landing_page/molecules/review_card/ReviewCard";
import RatingPhoto from "./user_interface/templates/landing_page/atoms/rating_photo/RatingPhoto";

function App() {
  return (
    <div className="App">
      <LandingPage>
        <LeftBar>
          <ProfileCard>
            <AvatarPhoto />
            <ProfileName>Michal Janšta</ProfileName>
            <ProfileQuote>"Jsem lyžařem již 30 let."</ProfileQuote>
          </ProfileCard>
        </LeftBar>
        <Article>
          <ArticleTitle>
            Naučte se lyžovat nebo zlepšete své dovednosti již za{" "}
            <TextHighliting>5 dní</TextHighliting>, a to i v případě, že jste na{" "}
            <TextHighliting>lyžích ještě nikdy nestáli</TextHighliting>!
          </ArticleTitle>
          <ArticleSubtitle>
            "Podstupte náš ověřený 5denní kurz, který z Vás{" "}
            <TextHighliting>rychle a bez stresu</TextHighliting> i od nuly udělá
            sebevědomého lyžaře."
          </ArticleSubtitle>
          <ArticleText>
            Snili jste někdy o tom, že se budete elegantně prohánět po
            sjezdovkách? A přitom s lyžováním nemáte zatím žádné zkušenosti? S
            naším 5denním unikátním systémem se můžete stát sebevědomým lyžařem
            během ani ne jednoho týdne, a to i přesto, že jste na lyžích nikdy
            nestáli!
          </ArticleText>
          <Carousel>
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </Carousel>
        </Article>
        <RightBar>
          <RightBarVideo />
        </RightBar>
      </LandingPage>
    </div>
  );
}

export default App;
