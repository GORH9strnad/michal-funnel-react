import "./App.css";
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
import reviews from "./user_interface/assets/text/reviews";
import ReviewCard from "./user_interface/templates/landing_page/molecules/review_card/ReviewCard";
import DatePicker from "./user_interface/templates/landing_page/molecules/date_range_picker/DatePicker";
import ParticipantsPicker from "./user_interface/templates/landing_page/molecules/participants_picker/ParticipantsPicker";
import ContactForm from "./user_interface/templates/landing_page/molecules/contact_form/ContactForm";
import PaymentForm from "./user_interface/templates/landing_page/molecules/payment_form/PaymentForm";
import { useAdaptiveResponsiveContext } from "./business_logic/wrappers/AdaptiveResponsive";
import ProfileBar from "./user_interface/templates/landing_page/organisms/profile_bar/ProfileBar";

function App() {
  const { device } = useAdaptiveResponsiveContext();

  const desktopLayout = (
    <div className="App">
      <LandingPage>
        <ProfileBar>
          <ProfileCard>
            <AvatarPhoto />
            <ProfileName>Michal Janšta</ProfileName>
            <ProfileQuote>"Jsem lyžařem již 30 let."</ProfileQuote>
          </ProfileCard>
        </ProfileBar>
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
          <DatePicker />
          <ContactForm />
          <ParticipantsPicker />
          <PaymentForm />
        </Article>
        <RightBar>
          <RightBarVideo />
        </RightBar>
      </LandingPage>
    </div>
  );

  const mobileLayout = (
    <LandingPage>
      <ProfileBar>
        <ProfileCard>
          <AvatarPhoto />
          <ProfileName>Michal Janšta</ProfileName>
          <ProfileQuote>"Jsem lyžařem již 30 let."</ProfileQuote>
        </ProfileCard>
      </ProfileBar>
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
        <DatePicker />
        <ContactForm />
        <ParticipantsPicker />
        <PaymentForm />
      </Article>
    </LandingPage>
  );

  return device === "desktop" ? desktopLayout : mobileLayout;
}

export default App;
