import * as React from "react";
import ContactForm from "@/components/forms/contact-page-form";
import Header from "@/components/Header";


export default function Services() {
  return (
    <>
      <Header num={0} url={"/assets/images/contactUs-hero-bg.png"}/>
      <ContactForm />
      <iframe
       src="https://maps.google.com/maps?q=Webbuggs+%28Your+Cyber+Space+Existence+Managers%29&t=&z=20&ie=UTF8&iwloc=&output=embed"
        width={"100%"}
        height={393}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
