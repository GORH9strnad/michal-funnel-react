import { memo } from "react";
import "./ContactForm.css";
import Input from "../../atoms/input/Input";

function ContactForm() {
  return (
    <div className="contact-form">
      <h1>Vedoucí výpravy</h1>
      <Input type="text" name="Celé jméno" placeholder="Zadejte jméno" />
      <Input
        type="email"
        name="Nejlepší Email :D"
        placeholder="Zadejte email"
      />
      <Input type="phone" name="Telefon" placeholder="Zadejte telefon" />
    </div>
  );
}

export default memo(ContactForm);
