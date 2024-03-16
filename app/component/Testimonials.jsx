import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="mb-20">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          Whats Different About Manage?
        </h2>
        {/* Testimonials Container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Testimonial 1 */}
          <div className="shadow-md flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <Image
              src="/avatar-richard.png"
              alt="profile image"
              width={100}
              height={100}
              className="rounded-full -mt-14 shadow-lg"
            />
            <h5 className="text-lg font-bold">Richard Watts</h5>
            <p className="text-sm text-darkGrayishBlue">
              Manage has supercharged our teams workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.
            </p>
          </div>
          <div className="shadow-md mt-20 md:mt-0 flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <Image
              src="/avatar-anisha.png"
              alt="profile image"
              width={100}
              height={100}
              className="rounded-full -mt-14 shadow-lg"
            />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-darkGrayishBlue">
              Manage has supercharged our teams workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.
            </p>
          </div>
          <div className="shadow-md mt-20 md:mt-0 flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <Image
              src="/avatar-ali.png"
              alt="profile image"
              width={100}
              height={100}
              className="rounded-full -mt-14 shadow-lg"
            />
            <h5 className="text-lg font-bold">Ali Bravo</h5>
            <p className="text-sm text-darkGrayishBlue">
              We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
