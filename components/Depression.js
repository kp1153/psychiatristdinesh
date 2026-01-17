"use client";
import React from "react";

export default function Depression() {
  return (
    <>
      {/* Part 1 - Introduction and Symptoms */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
              😔 Depression
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Depression is a serious mental health condition that affects your feelings, 
              thoughts, and daily activities.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
                <span className="mr-3">🧠</span> What is Depression?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Depression (Major Depressive Disorder) is a common but serious medical illness that negatively affects how you feel, the way you think, and how you act. It is different from temporary sadness or "being in a bad mood."
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                In depression, a person feels persistent sadness, hopelessness, and a loss of interest in life. It can impact work, relationships, and physical health.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-indigo-600">
              <h3 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
                <span className="mr-3">🔍</span> Key Symptoms
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-indigo-600 mb-4">Emotional Symptoms:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2 font-bold">•</span>
                      <span>Persistent feelings of sadness and emptiness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2 font-bold">•</span>
                      <span>Feelings of hopelessness and helplessness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2 font-bold">•</span>
                      <span>Loss of interest or pleasure in all activities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2 font-bold">•</span>
                      <span>Feelings of worthlessness or excessive guilt</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2 font-bold">•</span>
                      <span>Irritability and outbursts of anger</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-rose-600 mb-4">Physical Symptoms:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>Sleep disturbances (Insomnia or oversleeping)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>Fatigue and loss of energy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>Changes in appetite (Weight loss or gain)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>Headaches or unexplained body aches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>Digestive issues</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-purple-600 mb-4">Cognitive Symptoms:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>Difficulty concentrating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>Trouble making decisions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>Memory problems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>Persistent negative thoughts</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-red-600 mb-4">Severe Symptoms:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">⚠️</span>
                      <span className="font-semibold">Thoughts of death</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">⚠️</span>
                      <span className="font-semibold">Suicidal plans or attempts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">⚠️</span>
                      <span className="font-semibold">Thoughts of self-harm</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50 rounded-lg border-2 border-red-300">
                <p className="text-sm text-gray-800">
                  <strong className="text-red-700">⚠️ Seek Help Immediately:</strong> If you or someone you know is thinking about suicide, contact a doctor immediately or call an emergency helpline.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
                <span className="mr-3">📋</span> Types of Depression
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-800 mb-2">1. Major Depressive Disorder (MDD)</h4>
                  <p className="text-gray-700">Severe depression that significantly impacts daily life.</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                  <h4 className="font-bold text-purple-800 mb-2">2. Persistent Depressive Disorder (Dysthymia)</h4>
                  <p className="text-gray-700">Long-term (2 years or more) but less intense depression.</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-600">
                  <h4 className="font-bold text-pink-800 mb-2">3. Postpartum Depression</h4>
                  <p className="text-gray-700">Depression occurring in women after childbirth.</p>
                </div>
                <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-600">
                  <h4 className="font-bold text-teal-800 mb-2">4. Seasonal Affective Disorder (SAD)</h4>
                  <p className="text-gray-700">Depression triggered by seasonal changes (usually in winter).</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-bold text-orange-800 mb-2">5. Bipolar Depression</h4>
                  <p className="text-gray-700">Part of Bipolar Disorder, involving episodes of both depression and mania.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2 - Treatment and Support */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-green-600">
              <h3 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                <span className="mr-3">💊</span> Our Comprehensive Treatment
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">🗣️</span> Psychotherapy (Talk Therapy)
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Cognitive Behavioral Therapy (CBT)</span></li>
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Interpersonal Therapy (IPT)</span></li>
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Individual Counseling Sessions</span></li>
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Group Therapy</span></li>
                  </ul>
                </div>

                <div className="p-5 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">💊</span> Medication Management
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>Antidepressants (SSRIs, SNRIs)</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>Personalized Dosage Adjustment</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>Monitoring Side Effects</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>Regular Follow-ups</span></li>
                  </ul>
                </div>

                <div className="p-5 bg-purple-50 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">⚡</span> Brain Stimulation Therapy
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>tDCS (Transcranial Direct Current Stimulation)</span></li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>Brain Polarization Therapy</span></li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>Drug-free Treatment Options</span></li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>Advanced Technical Solutions</span></li>
                  </ul>
                </div>

                <div className="p-5 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-amber-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">👨‍👩‍👧‍👦</span> Family and Lifestyle Support
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>Family Therapy and Counseling</span></li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>Lifestyle Counseling</span></li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>Nutrition and Exercise Guidance</span></li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>Stress Management Techniques</span></li>
                  </ul>
                </div>
              </div>

              <div className="p-5 bg-green-100 rounded-lg border border-green-300">
                <p className="text-gray-800">
                  <strong className="text-green-700">💚 Our Promise:</strong> Depression is fully treatable. With timely treatment and proper care, you can lead a normal and happy life. We are with you through your entire journey.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-teal-700 mb-6 flex items-center">
                <span className="mr-3">🌟</span> Self-Care and Tips
              </h3>
              
              <div className="grid md:grid-cols-3 gap-5">
                <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-800 mb-2">🏃‍♂️ Physical Activity</h4>
                  <p className="text-sm text-gray-700">Regular exercise and yoga improve mood.</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-800 mb-2">😴 Sleep Habits</h4>
                  <p className="text-sm text-gray-700">Maintain a consistent sleep schedule.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-800 mb-2">🥗 Healthy Eating</h4>
                  <p className="text-sm text-gray-700">Eat a nutritious and balanced diet.</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-800 mb-2">👥 Social Connection</h4>
                  <p className="text-sm text-gray-700">Stay connected with loved ones.</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-bold text-pink-800 mb-2">🧘‍♀️ Relaxation</h4>
                  <p className="text-sm text-gray-700">Practice meditation and mindfulness.</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-800 mb-2">🎯 Small Goals</h4>
                  <p className="text-sm text-gray-700">Set small, achievable daily goals.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-indigo-600">
              <h3 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
                <span className="mr-3">🆘</span> When to Seek Immediate Help?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-red-600 mr-2 text-xl">⚠️</span>
                    <span>Suicidal thoughts or planning</span>
                  </p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-red-600 mr-2 text-xl">⚠️</span>
                    <span>Thoughts of harming self or others</span>
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-orange-600 mr-2 text-xl">⚠️</span>
                    <span>Total inability to perform daily tasks</span>
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-orange-600 mr-2 text-xl">⚠️</span>
                    <span>Symptoms lasting longer than 2 weeks</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-indigo-800 mb-6 text-center flex items-center justify-center">
                <span className="mr-3">✨</span> Ray of Hope
              </h3>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-lg text-gray-800 mb-4 italic">
                  "Recovering from depression may seem difficult, but it is possible. Thousands have reclaimed their lives with the right treatment."
                </p>
                <p className="text-gray-700 font-semibold">
                  Seeking help at the right time is a sign of strength, not weakness.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl shadow-2xl p-8 inline-block">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  Are you or a loved one struggling with depression?
                </h4>
                <p className="text-gray-600 mb-6 max-w-2xl">
                  We are here to help. Our expert mental health professionals will provide the right treatment and support.
                </p>
                <a
                  href="tel:8789482183"
                  className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white text-lg font-bold py-4 px-10 rounded-lg shadow-lg hover:from-green-700 hover:to-teal-700 transition duration-300 transform hover:scale-105"
                >
                  📞 Contact Now: 878 948 2183
                </a>
                <p className="text-sm text-gray-600 mt-4">
                  24/7 Consultation Available • Confidentiality Guaranteed • Professional Care
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}