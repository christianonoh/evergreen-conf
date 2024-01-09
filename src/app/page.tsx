import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import EventProgram from "@/components/program/EventProgram";
import SpeakersAndHosts from "@/components/speakers-and-hosts";
import Registration from "@/components/registration";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-dark text-lg">
      <Hero />
      <EventProgram />
      <SpeakersAndHosts />
      <Partners />
      {/* <ContactForm /> */}
      <Registration />
      <Footer />
    </main>
  );
}
