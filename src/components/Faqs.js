import React, { useState } from "react";

export const Faqs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = [
    {
      text: "What types of loader machines and excavators do you offer?",
      answer:
        "We provide a wide range of loader machines and excavators, including compact, medium, and heavy-duty models designed to suit various construction and industrial needs.",
    },
    {
      text: "Do you offer maintenance and after-sales support?",
      answer:
        "Yes, we provide comprehensive maintenance services and after-sales support to ensure your equipment runs smoothly and efficiently.",
    },
    {
      text: "Are your machines available for rent or lease?",
      answer:
        "Yes, we offer flexible rental and leasing options tailored to your project requirements and budget.",
    },

    {
      text: "What industries do you cater to?",
      answer:
        "Our equipment is suitable for construction, mining, agriculture, infrastructure development, and heavy-duty industrial projects.",
    },
    {
      text: "How can I determine the right machine for my project?",
      answer:
        "Our expert team is available to guide you through the selection process, ensuring you choose the perfect equipment for your specific needs.",
    },
    {
      text: "Do you provide operator training?",
      answer:
        "Yes, we offer training programs to ensure operators are well-versed in handling and maintaining the equipment safely and efficiently.",
    },
    {
      text: "How soon can I get the equipment delivered?",
      answer:
        "Delivery times depend on your location and the equipment’s availability. However, we prioritize prompt service to minimize project downtime.",
    },
    {
      text: "What makes Bilalijaz LLC different from other providers?",
      answer:
        "We combine cutting-edge technology, reliable equipment, expert support, and a proven track record of success, making us a trusted choice for industry leaders worldwide.",
    },
    // ... remaining questions and answers
  ];
  const handleQuestionClick = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  return (
    <div className="bg-black p-8">
      <div className="container mx-auto p-4 ">
        <h1 className="text-2xl font-bold mb-8 text-white underline ">
          Frequently <span className="text-green-800">Asked</span> Questions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions.map((question, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex items-center justify-between font-bold text-lg text-primary mb-2 cursor-pointer text-white"
                onClick={() => handleQuestionClick(index)}
              >
                {question.text}
                {openQuestion === index ? (
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <rect
                        x="0"
                        fill="none"
                        width="24"
                        height="24"
                      ></rect>{" "}
                      <g>
                        {" "}
                        <path d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                ) : (
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="-1.44 -1.44 26.88 26.88"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    stroke="#ffffff"
                    stroke-width="0.00024000000000000003"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#CCCCCC"
                      stroke-width="0.384"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <rect
                        x="0"
                        fill="none"
                        width="24"
                        height="24"
                      ></rect>{" "}
                      <g>
                        {" "}
                        <path d="M10 20l8-8-8-8-1.414 1.414L15.172 12l-6.586 6.586"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                )}
              </button>
              {openQuestion === index && (
                <p className="text-base text-white">{question.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
