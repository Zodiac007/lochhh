import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../index.css";
import CarousalCard from "./CarousalCard";
import BellIcon from "../../images/Bell.svg";
import BarIcon from "../../images/bar-chart-2.svg";
import ClockIcon from "../../images/clock.svg";

const carousalData = [
  {
    id: "1",
    icon: BellIcon,
    content: "We’ll be sending notifications to you here",
    input: true,
    price: "",
    days: "",
  },
  {
    id: "2",
    icon: BarIcon,
    content: "Notify me when any wallets move more than",
    input: false,
    price: "1000",
    days: "",
  },
  {
    id: "3",
    icon: ClockIcon,
    content: "Notify me when any wallet dormant for",
    input: false,
    price: "",
    days: ">30 days<",
  },
];

const animation = { duration: 25000, easing: (t) => t };

export default function CommonCarousel() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.5,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        perView: 2,
      },
      "(min-width: 1200px)": {
        perView: 3,
      },
    },
    loop: true,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {carousalData.map((item, idx) => (
        <CarousalCard
          key={idx}
          icon={item?.icon}
          content={item?.content}
          input={item?.input}
          price={item?.price}
          days={item?.days}
        />
      ))}
    </div>
  );
}
