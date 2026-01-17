"use client";
import React from "react";
import Link from "next/link";

export default function OCD() {
  return (
    <>
      {/* Part 1 - Introduction and Symptoms */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
              🔁 Obsessive Compulsive Disorder (OCD)
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              OCD involves recurring, unwanted thoughts (Obsessions) and repetitive behaviors (Compulsions) performed to alleviate them.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* What is OCD Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-teal-600">
              <h3 className="text-3xl font-bold text-teal-700 mb-6 flex items-center">
                <span className="mr-3">🧠</span> What is OCD?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Obsessive-Compulsive Disorder (OCD) is a mental health condition where a person experiences frequent, intrusive thoughts (Obsessions) that cause anxiety and distress. To manage this distress, the person engages in repetitive behaviors or mental acts (Compulsions).
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                OCD is not just a "habit" of cleanliness—it is a clinical condition that can severely impact daily life. However, with the right treatment, it can be effectively managed.
              </p>
            </div>

            {/* Symptoms Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-teal-700 mb-6 flex items-center">
                <span className="mr-3">🔍</span> Primary Symptoms
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-teal-50 rounded-lg">
                  <h4 className="text-xl font-semibold text-teal-700 mb-4">💭 Obsessions</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">• Excessive fear of contamination or germs</li>
                    <li className="flex items-start">• Anxiety about things not being organized</li>
                    <li className="flex items-start">• Unwanted thoughts of harming oneself or others</li>
                  </ul>
                </div>

                <div className="p-5 bg-cyan-50 rounded-lg">
                  <h4 className="text-xl font-semibold text-cyan-700 mb-4">🔄 Compulsions</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">• Excessive hand washing or cleaning rituals</li>
                    <li className="flex items-start">• Repeatedly checking doors, locks, or stoves</li>
                    <li className="flex items-start">• Arranging items in a very specific order</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2 - Contact Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-white rounded-xl shadow-2xl p-8 inline-block w-full max-w-2xl border-t-4 border-teal-600">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Dr. DINESH R.S.
              </h2>
              <p className="text-teal-700 font-semibold mb-1">
                BHMS, MBBS, MD (Hom), MD (Psy)
              </p>
              <p className="text-gray-600 text-sm mb-2">
                Consultant Homoeopath & Psychiatrist
              </p>
              <p className="text-gray-600 text-sm mb-6">
                House No.7, Pearl Garden, Thamalam, Poojappura P.O, Thiruvananthapuram
              </p>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  Are you struggling with OCD symptoms? Get expert help today.
                </p>
                <a
                
                  href="tel:9447452585" 
                  className="inline-block bg-teal-700 text-white text-xl font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-teal-800 transition duration-300 transform hover:scale-105"
                >
                  📞 Call Now: 9447452585
                </a>
                
                <div className="mt-4">
                  <Link 
                    href="/contact"
                    className="text-teal-600 font-medium hover:underline"
                  >
                    Visit our Contact Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}