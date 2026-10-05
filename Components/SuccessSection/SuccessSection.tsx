"use client";

import CountUp from "react-countup";
import Image from "next/image";

// Sample stats data matching the provided image
const statsData = [
  {
    id: 1,
    icon: "/assets/success-doctor.png",
    number: 199,
    suffix: "+",
    title: "Total Doctors",
  },
  {
    id: 2,
    icon: "/assets/success-review.png",
    number: 467,
    suffix: "+",
    title: "Total Reviews",
  },
  {
    id: 3,
    icon: "/assets/success-patients.png",
    number: 1900,
    suffix: "+",
    title: "Patients",
  },
  {
    id: 4,
    icon: "/assets/success-staffs.png",
    number: 300,
    suffix: "+",
    title: "Total Stuffs",
  },
];

export default function SuccessSection() {
  return (
    <section className="w-full py-16 px-4" id="blogs">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            We Provide Best Medical Services
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-normal">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
          </p>
        </div>

        {/* 4 Square Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-start justify-center transition-transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6 relative w-14 h-14">
                <Image
                  src={stat.icon}
                  alt={stat.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* Number with Counting Animation */}
              <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-2">
                <CountUp end={stat.number} duration={2.5} />
                <span>{stat.suffix}</span>
              </div>

              {/* Title */}
              <p className="text-gray-500 text-base font-medium">
                {stat.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}