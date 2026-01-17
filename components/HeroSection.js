"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const images = ["/1.jpg", "/2.jpg"];

  // Calculate years of experience automatically
  const getExperience = () => {
    const startYear = 2010; // Approximate start year for Dr. Dinesh
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Doctor Info */}
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-teal-700 mb-3">
                Dr. DINESH R.S.
              </h1>
              <p className="text-lg text-indigo-700 font-semibold mb-2">
                {getExperience()}+ Years of Experience
              </p>
              <p className="text-base text-gray-600 font-medium mb-6">
                Thousands of Patients Successfully Treated
              </p>

              {/* Qualifications */}
              <div className="space-y-2 mb-6">
                <div className="flex items-start">
                  <span className="text-teal-600 mr-2">🎓</span>
                  <span className="text-gray-700">BHMS</span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-600 mr-2">🎓</span>
                  <span className="text-gray-700">MBBS</span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-600 mr-2">🎓</span>
                  <span className="text-gray-700">MD (Homoeopathy)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-600 mr-2">🎓</span>
                  <span className="text-gray-700">MD (Psychiatry)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-600 mr-2">🏥</span>
                  <span className="text-gray-700">
                    Consultant Homoeopath & Psychiatrist
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-600 mr-2">📋</span>
                  <span className="text-gray-700">
                    Reg.No: 32680, 5723(H)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-600 mr-2">📍</span>
                  <span className="text-gray-700 font-semibold">
                    Thiruvananthapuram, Kerala
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-600 mr-2">📞</span>
                  <span className="text-gray-700 font-semibold">
                    9447452585
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Slider */}
          <div className="order-1 md:order-2">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Dr Dinesh RS ${idx + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    idx === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}