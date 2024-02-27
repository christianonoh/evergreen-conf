import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import WhoShouldAttend from "@/components/who-should-attend";
import WhyAttend from "@/components/why-attend";
import ThePlan from "@/components/the-plan";
import EventProgram from "@/components/program/EventProgram";
import SpeakersAndHosts from "@/components/speakers-and-hosts";
import Registration from "@/components/registration";
import Footer from "@/components/footer";
import CallUs from "@/components/shared/CallUs";

export default function Home() {
  return (
    <main className="flex min-h-screen !overflow-x-clip flex-col text-dark text-lg">
      <Hero />
      <CallUs />
      <WhoShouldAttend />
      <WhyAttend />
      <ThePlan />
      <EventProgram />
      <SpeakersAndHosts />
      <Partners />
      {/* <ContactForm /> */}
      <Registration />
      <Footer />
    </main>
  );
}
