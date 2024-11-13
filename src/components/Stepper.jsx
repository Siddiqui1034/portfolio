"use client";
import React, { Fragment, useState } from "react";

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const handlePrevStep = () => {
    if (steps.length > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  return (
    <div className="h-full lg:h-full flex flex-col items-center justify-center lg:m-20 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="w-1/3 lg:h-full lg:p-24 rounded-md md:bg-red-400">
        {steps.map(({ label}, index) => {
          return (
            <div key={`label_${index}`} className="stepper-container">
              <div
                className={`step-number ${
                  currentStep >= index ? "active" : ""
                }`}
              >
                {index + 1}
                {index < steps.length - 1 && (
                  <div
                    className={`step-line ${
                      currentStep > index ? "active" : ""
                    }`}
                  ></div>
                )}
              </div>
              <div className="step-label">{label}</div>
            </div>
          );
        })}
      </div>

      <div  className="w-2/3 lg:h-full rounded-md lg:p-24 bg-red-100">
        <div>
          {steps[currentStep].content.map(({ title, desc, date, company }, index) => {
            return (
              <Fragment key={`exp_${index}`}>
                <div className="bg-white p-2 text-center font-semibold rounded-md">
                  {title}
                </div>
                <div className="p-2 text-justify text-sm italic">{desc}</div>
                <div className="p-2 text-red-400 text-sm text-right font-semibold">
                  {date}{" "}
                </div>
                <div className="pb-2 px-2 rounded text-black text-sm font-semibold w-fit">
                  {company}
                </div>
              </Fragment>
            );
          })}
        </div>

        <div className="stepper-cotrols lg:p-3 w-full">
          <button
            disabled={currentStep == 0}
            className="rounded-md right-1 p-2 mr-2 ring-black bg-black text-white"
            onClick={handlePrevStep}
          >
            prev
          </button>
          <button
            disabled={currentStep == steps.length}
            className="rounded-md right-1 p-2 ring-black bg-black text-white "
            onClick={handleNextStep}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
