import { memo } from "react";
import "./ContactForm.css";
import Input from "../../atoms/input/Input";
import { useAdaptiveResponsiveContext } from "../../../../../business_logic/wrappers/AdaptiveResponsive";

function ContactForm() {
  const { device } = useAdaptiveResponsiveContext();

  return (
    <div className={`contact-form ${device === "mobile" ? "mobile" : ""}`}>
      <h1>Vedoucí výpravy</h1>
      <Input
        type="text"
        name="Celé jméno"
        placeholder="Zadejte jméno"
        message="validation test"
      />
      <Input type="email" name="Nejlepší Email" placeholder="Zadejte email" />
      <Input type="phone" name="Telefon" placeholder="Zadejte telefon" />
    </div>
  );
}

export default memo(ContactForm);
