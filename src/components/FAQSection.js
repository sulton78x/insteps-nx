import Button from "../utilities/Button";
import { Camera } from "react-feather";
import FAQCard from "../utilities/FAQCard";

const FAQSection = ({ courseTitle }) => {
  return (
    <div className="px-10">
      <h2 className="font-bold text-3xl text-midGray text-center">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 my-10">
        <FAQCard courseTitle="Javascript" />
        <FAQCard courseTitle="Python" />
        <FAQCard courseTitle="Data Science" />
        <FAQCard courseTitle="Web Development" />
      </div>
    </div>
  );
};

export default FAQSection;
