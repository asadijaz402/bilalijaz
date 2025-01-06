import React from "react";

export const Detail = () => {
  return (
    <div className="p-20 sm:py-30 lg:py-23">
      <div className="justify-center">
        <h1 className="text-5xl font-bold tracking-tight text-black sm:text-5xl">
          What is MoveInSync Ion’s{" "}
          <span className="text-green-800">
            {" "}
            Enhance Transportation for Construction{" "}
          </span>{" "}
          Projects?
        </h1>
        <ul class="list-none  grid grid-cols-2 gap-4  ">
          <li className="mt-6 text-lg leading-8">
            Engineered for maximum performance, our loaders are perfect for
            material handling, site preparation, and landscaping tasks.
          </li>
          <li className="mt-6 text-lg leading-8">
            Designed for versatility and power, our excavators are ideal for
            excavation, trenching, and demolition projects.
          </li>
          <li className="mt-6 text-lg leading-8">
            Our dedicated team of professionals provides personalized
            consultation, ensuring you select the perfect machinery for your
            specific needs. We also offer ongoing support and maintenance for
            seamless operations.
          </li>
          <li className="mt-6 text-lg leading-8">
            In addition to outright purchase, we offer flexible leasing and
            rental plans to suit your project timelines and budget.
          </li>
        </ul>
      </div>
    </div>
  );
};
