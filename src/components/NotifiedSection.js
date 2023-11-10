import Layout from "./Layout";
import CommonCarousel from "./common/CommonCarousel";
import CommonTextContent from "./common/CommonTextContent";

import BellIcon from "../images/Bell.svg";

const textContent = {
  heading: "Get notified when a highly correlated whale makes a move",
  subheading:
    "Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.",
};

export default function NotifiedSection() {
  return (
    <Layout>
      <CommonTextContent
        heading={textContent.heading}
        subheading={textContent.subheading}
        textAlign={"left"}
        icon={BellIcon}
        classes="bell"
      />
      <CommonCarousel />
    </Layout>
  );
}
