import { whyAttend } from "@/constants";

interface Props {
  why: {
    title: string;
    description: string;
    icon: React.FC;
  };
}

const WhyCard = ({ why }: Props) => {
  return (
    <div className="bg-light relative py-16">
      <div className="h-40 w-40 bg-[#f1f6f9] p-4 rounded-full absolute -top-24 right-1/2 translate-x-1/2">
        {<why.icon />}
      </div>

      <h3 className="text-lg font-bold mt-8 mb-4">{why.title}</h3>
      <p className="mb-8">{why.description}</p>
    </div>
  );
};

export default WhyCard;
