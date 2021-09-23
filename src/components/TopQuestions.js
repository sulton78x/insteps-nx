import { useState } from "react";
import Link from "next/link";
import QuestionCard from "../utilities/QuestionCard";

const TopQuestions = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="bg-lightGreen mx-4 sm:mx-8 px-5 rounded-lg py-10 my-8">
      <h2 className="font-bold text-xl text-darkGray text-center mb-3">
        Top Interview Questions
      </h2>
      <div className="text-center">
        <select className="px-3 py-2 rounded-lg my-3">
          <option>Javascript</option>
          <option>Python</option>
          <option>Web Development</option>
          <option>Data Science</option>
        </select>
      </div>

      <div className="">
        <div className=""></div>

        <h3>Questions</h3>

        <div>
          <QuestionCard
            questionNo="1"
            question="What will be the result of `console.log(x * 5)?"
          />
          <QuestionCard
            questionNo="2"
            question="What will be the result of `console.log(x * 5)?"
          />
          <QuestionCard
            questionNo="3"
            question="What will be the result of `console.log(x * 5)?"
          />
          <QuestionCard
            questionNo="4"
            question="What will be the result of `console.log(x * 5)?"
          />
          <QuestionCard
            questionNo="5"
            question="What will be the result of `console.log(x * 5)?"
          />
          <QuestionCard
            questionNo="6"
            question="What will be the result of `console.log(x * 5)?"
          />
          <QuestionCard
            questionNo="7"
            question="What will be the result of `console.log(x * 5)?"
          />
          <QuestionCard
            questionNo="8"
            question="What will be the result of `console.log(x * 5)?"
          />
          <QuestionCard
            questionNo="9"
            question="What will be the result of `console.log(x * 5)?"
          />
          <QuestionCard
            questionNo="10"
            question="What will be the result of `console.log(x * 5)?"
          />
        </div>

        <Link href="/">
          <a className="text-blue font-semibold text-lg">View More Questions</a>
        </Link>
      </div>
    </div>
  );
};

export default TopQuestions;
