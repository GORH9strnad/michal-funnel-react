import { memo } from "react";
import "./ContactForm.css";
import Input from "../../atoms/input/Input";
import { useAdaptiveResponsiveContext } from "../../../../../business_logic/wrappers/AdaptiveResponsive";
import { useContact, useName } from "../../../../../business_logic/hooks/hooks";
import useEmail from "../../../../../business_logic/hooks/useEmail";
import usePhone from "../../../../../business_logic/hooks/usePhone";

function ContactForm() {
  const { device } = useAdaptiveResponsiveContext();

  const [name, setName, nameError] = useName();
  const [email, setEmail, emailError] = useEmail();
  const [phone, setPhone, phoneError] = usePhone();

  useContact();

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const noSpacesValue = value.replace(/\s+/g, "");

    const isNumbersOnly = /^[0-9]*$/.test(noSpacesValue);
    const isLengthValid = noSpacesValue.length <= 9;

    if (isNumbersOnly && isLengthValid) {
      setPhone(noSpacesValue.replace(/(.{3})(?=\S)/g, "$1 "));
    }
  };

  return (
    <form className={`contact-form ${device === "mobile" ? "mobile" : ""}`}>
      <h1>Vedoucí výpravy</h1>
      <Input
        type="text"
        name="Celé jméno"
        placeholder="Zadejte jméno"
        message={nameError}
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <Input
        type="email"
        name="Nejlepší Email"
        placeholder="Zadejte email"
        message={emailError}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        type="phone"
        name="Telefon"
        placeholder="Zadejte telefon"
        message={phoneError}
        onChange={handlePhoneChange}
        value={phone}
      />
    </form>
  );
}

export default memo(ContactForm);
