import Layout from "./Layout";
import CommonTextContent from "./common/CommonTextContent";
import Cohorts from "../images/Cohorts11.png";
import EyeIcon from "../images/Eye.svg";

const textContent = {
  heading: "Watch what the whales are doing",
  subheading:
    "All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.",
};

export default function WatchSection() {
  return (
    <Layout>
      <div className="w-full h-[320px] lg:w-[480px] lg:h-[450px] ">
        <img src={Cohorts} alt="cohorts" className="w-full h-full" />
      </div>
      <div className="w-full pt-6 lg:pt-0">
        <CommonTextContent
          heading={textContent.heading}
          subheading={textContent.subheading}
          textAlign={"right"}
          icon={EyeIcon}
          classes="eye"
        />
      </div>
    </Layout>
  );
}
