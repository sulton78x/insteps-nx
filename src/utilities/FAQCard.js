import Button from "../utilities/Button";
import { Camera } from "react-feather";

const FAQCard = ({ courseTitle }) => {
  return (
    <div className="shadow-md border-2 px-5 py-3 rounded-lg text-center">
      <Camera className="inline" />
      <h3 className="text-darkGray font-semibold">{courseTitle}</h3>
      <h4 className="text-darkGray font-semibold">Interview Questions</h4>
      <Button text="View More" />
    </div>
  );
};

export default FAQCard;
