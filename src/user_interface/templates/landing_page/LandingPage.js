import { memo } from "react";
import { useData } from "../../../business_logic/hooks/hooks";
import { useAdaptiveResponsiveContext } from "../../../business_logic/wrappers/AdaptiveResponsive";
import reviews from "../../assets/text/reviews";
import ArticleSubtitle from "./atoms/article_subtitle/ArticleSubtitle";
import ArticleText from "./atoms/article_text/ArticleText";
import ArticleTitle from "./atoms/article_title/ArticleTitle";
import AvatarPhoto from "./atoms/avatar_photo/AvatarPhoto";
import ProfileName from "./atoms/profile_name/ProfileName";
import ProfileQuote from "./atoms/profile_quote/ProfileQuote";
import RightBarVideo from "./atoms/right_bar_video/RightBarVideo";
import TextHighliting from "./atoms/underline/TextHighliting";
import Carousel from "./molecules/carousel/Carousel";
import ContactForm from "./molecules/contact_form/ContactForm";
import DateRangePicker from "./molecules/date_range_picker/DateRangePicker";
import ParticipantsPicker from "./molecules/participants_picker/ParticipantsPicker";
import PaymentForm from "./molecules/payment_form/PaymentForm";
import ProfileCard from "./molecules/profile_card/ProfileCard";
import ReviewCard from "./molecules/review_card/ReviewCard";
import Article from "./organisms/article/Article";
import Page from "./organisms/page/Page";
import ProfileBar from "./organisms/profile_bar/ProfileBar";
import RightBar from "./organisms/right_bar/RightBar";

function LandingPage() {
  const { device } = useAdaptiveResponsiveContext();

  useData();

  const desktopLayout = (
    <Page>
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
        <DateRangePicker />
        <ContactForm />
        <ParticipantsPicker />
        <PaymentForm />
      </Article>
      <RightBar>
        <RightBarVideo />
      </RightBar>
    </Page>
  );

  const mobileLayout = (
    <Page>
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
        <DateRangePicker />
        <ContactForm />
        <ParticipantsPicker />
        <PaymentForm />
      </Article>
    </Page>
  );

  return device === "mobile" ? mobileLayout : desktopLayout;
}

export default memo(LandingPage);
