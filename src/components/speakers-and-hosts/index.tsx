import { hosts, speakers } from "@/constants";
import Presenter from "./Presenter";

const SpeakersAndHosts = () => {
  return (
    <section className=" pt-36" id="speakers">
      <div className="event-program max-w-7xl mx-auto px-5 md:px-10">
        <h2 className=" font-bold text-3xl text-center sm:text-4xl md:text-5xl mb-12 capitalize">
          meet the hosts and speakers
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold  mb-8">
          Hosts
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {hosts.map((host) => (
            <Presenter key={host.name} presenter={host} />
          ))}
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold  mt-12 mb-8">
          Speakers
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {speakers.map((speaker) => (
            <Presenter key={speaker.name} presenter={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersAndHosts;
