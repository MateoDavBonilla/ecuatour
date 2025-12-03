import ContactFormCard from "./ContactFormCard";
import ContactInfoCard from "./ContactInfoCard";


export default function ContactPage() {
  return (
    <main className="flex flex-col gap-20 py-10 px-4">
      <ContactInfoCard />
      <ContactFormCard />
    </main>
  );
}
