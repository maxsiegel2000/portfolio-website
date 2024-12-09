import { ContactForm } from "@/components/contact-form";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-14">
      <div className="container">
        <div className="gradient1 text-slate-900 py-8 px-10 rounded-3xl">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-2 text-center">Contact me!</h2>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
};
