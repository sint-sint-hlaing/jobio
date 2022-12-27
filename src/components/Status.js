import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const Status = () => {
  return (
    <div className=" w-5/6 max-w-7xl mx-auto flex  flex-col py-10 gap-10">
      <h1 className=" text-3xl text-center">JobHunt Site Stats</h1>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-2">
        <div className=" w-full rounded-md p-5 flex flex-col items-center gap-3">
          <div className="text-4xl font-extrabold text-green-600">
            <CountUp end={18} redraw={true}>
              {({ countUpRef, start }) => (
                <ReactVisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </ReactVisibilitySensor>
              )}
            </CountUp>
          </div>
          <h3>Jobs Posted</h3>
        </div>
        <div className=" w-full rounded-md p-5 flex flex-col items-center gap-3">
          <div className="text-4xl font-extrabold text-green-600">
            <CountUp end={67} redraw={true}>
              {({ countUpRef, start }) => (
                <ReactVisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </ReactVisibilitySensor>
              )}
            </CountUp>
          </div>
          <h3>Jobs Filled</h3>
        </div>
        <div className=" w-full rounded-md p-5 flex flex-col items-center gap-3">
          <div className="text-4xl font-extrabold text-green-600">
            <CountUp end={34} redraw={true}>
              {({ countUpRef, start }) => (
                <ReactVisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </ReactVisibilitySensor>
              )}
            </CountUp>
          </div>
          <h3>Companies</h3>
        </div>
        <div className=" w-full rounded-md p-5 flex flex-col items-center gap-3">
          <div className="text-4xl font-extrabold text-green-600">
            <CountUp end={91} redraw={true}>
              {({ countUpRef, start }) => (
                <ReactVisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </ReactVisibilitySensor>
              )}
            </CountUp>
          </div>
          <h3>Members</h3>
        </div>
      </div>
    </div>
  );
};

export default Status;
