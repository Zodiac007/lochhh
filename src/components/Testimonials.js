import Logo from "../images/Vector.svg";
import TestimonialCard from "./common/TestimonialCard";

const TestimonialContent = [
  {
    id: "1",
    username: "Jack F",
    designation: "Ex Blackrock PM",
    quote:
      "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
  },
  {
    id: "2",
    username: "Yash P",
    designation: "Research, 3poch Crypto Hedge Fund",
    quote:
      "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
  },
];

export default function Testimonials() {
  return (
    <div className="my-6 px-8 lg:px-24">
      <h2 className="text-4xl text-white text-right">Testimonials</h2>
      <div className="py-6">
        <hr className="opacity-50" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="col-span-1 flex items-end">
          <img src={Logo} alt="logo" />
        </div>
        {TestimonialContent.map((t) => (
          <>
            <TestimonialCard
              username={t.username}
              designation={t.designation}
              quote={t.quote}
            />
          </>
        ))}
      </div>
    </div>
  );
}
