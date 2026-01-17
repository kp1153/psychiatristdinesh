"use client";
import React from "react";

export default function Anxiety() {
  return (
    <>
      {/* Part 1 - Introduction and Symptoms */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
              😰 Anxiety Disorder
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Anxiety disorder involves excessive worry, fear and restlessness that affects daily life.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* What is Anxiety */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-orange-700 mb-6 flex items-center">
                <span className="mr-3">🧠</span> What is Anxiety Disorder?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Anxiety Disorder is a mental health condition where a person experiences excessive worry, nervousness and fear. This is different from normal stress - it persists and affects daily activities.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                In anxiety, a person may experience excessive worry, panic attacks, and physical symptoms like rapid heartbeat and breathing difficulties. It can seriously affect work, relationships and social life.
              </p>
            </div>

            {/* Main Symptoms */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-orange-600">
              <h3 className="text-3xl font-bold text-orange-700 mb-6 flex items-center">
                <span className="mr-3">🔍</span> Main Symptoms
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Mental Symptoms */}
                <div>
                  <h4 className="text-xl font-semibold text-orange-600 mb-4">Mental Symptoms:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>Excessive worry and nervousness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>Feeling restless and tense</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>Excessive fear or apprehension</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>Difficulty concentrating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>Irritability and anger</span>
                    </li>
                  </ul>
                </div>

                {/* Physical Symptoms */}
                <div>
                  <h4 className="text-xl font-semibold text-rose-600 mb-4">Physical Symptoms:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>Rapid heartbeat</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>Breathing difficulty or feeling of suffocation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>Sweating and trembling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>Muscle tension</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>Stomach upset or nausea</span>
                    </li>
                  </ul>
                </div>

                {/* Behavioral Symptoms */}
                <div>
                  <h4 className="text-xl font-semibold text-purple-600 mb-4">Behavioral Symptoms:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>Sleep problems (insomnia)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>Avoiding social situations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>Difficulty making decisions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>Decreased performance at work or school</span>
                    </li>
                  </ul>
                </div>

                {/* Panic Attack Symptoms */}
                <div>
                  <h4 className="text-xl font-semibold text-red-600 mb-4">Panic Attack Symptoms:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">⚠️</span>
                      <span className="font-semibold">Sudden intense fear or panic</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">⚠️</span>
                      <span className="font-semibold">Dizziness or feeling faint</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">⚠️</span>
                      <span className="font-semibold">Fear of dying or losing control</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-lg border-2 border-orange-300">
                <p className="text-sm text-gray-800">
                  <strong className="text-orange-700">💡 Note:</strong> If these symptoms persist and are affecting your daily life, it's important to seek professional help.
                </p>
              </div>
            </div>

            {/* Types of Anxiety */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-orange-700 mb-6 flex items-center">
                <span className="mr-3">📋</span> Types of Anxiety Disorders
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
                  <h4 className="font-bold text-yellow-800 mb-2">1. Generalized Anxiety Disorder (GAD)</h4>
                  <p className="text-gray-700">Excessive and persistent worry about various things</p>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                  <h4 className="font-bold text-orange-800 mb-2">2. Panic Disorder</h4>
                  <p className="text-gray-700">Sudden and intense fear episodes (panic attacks)</p>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-800 mb-2">3. Social Anxiety Disorder</h4>
                  <p className="text-gray-700">Intense fear and embarrassment in social situations</p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                  <h4 className="font-bold text-purple-800 mb-2">4. Specific Phobias</h4>
                  <p className="text-gray-700">Intense fear of a particular object or situation</p>
                </div>

                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-600">
                  <h4 className="font-bold text-pink-800 mb-2">5. Obsessive-Compulsive Disorder (OCD)</h4>
                  <p className="text-gray-700">Recurring thoughts and repetitive behaviors</p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-800 mb-2">6. Post-Traumatic Stress Disorder (PTSD)</h4>
                  <p className="text-gray-700">Anxiety following a traumatic event</p>
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
                    <span className="mr-2">🗣️</span> Psychotherapy and Counseling
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Cognitive Behavioral Therapy (CBT)</span></li>
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Dialectical Behavior Therapy (DBT)</span></li>
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Exposure Therapy</span></li>
                    <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span>Mindfulness-Based Therapy</span></li>
                  </ul>
                </div>

                <div className="p-5 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">💊</span> Medication Management
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>Anti-anxiety medications (Benzodiazepines, Buspirone)</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>SSRI/SNRI antidepressants (Escitalopram, Sertraline, Venlafaxine)</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>Beta-blockers (for physical symptoms)</span></li>
                    <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span><span>Regular monitoring and adjustment</span></li>
                  </ul>
                </div>

                <div className="p-5 bg-purple-50 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">⚡</span> Advanced Therapy Techniques
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>Brain Feedback Therapy (Neurofeedback)</span></li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>TDCS Brain Stimulation</span></li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>Brain Polarization Therapy</span></li>
                    <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>Biofeedback Technique</span></li>
                  </ul>
                </div>

                <div className="p-5 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-amber-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">🧘‍♀️</span> Relaxation and Stress Management
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>Meditation and Mindfulness</span></li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>Yoga and Breathing Exercises</span></li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>Progressive Muscle Relaxation</span></li>
                    <li className="flex items-start"><span className="text-amber-600 mr-2">✓</span><span>Lifestyle Changes and Stress Management</span></li>
                  </ul>
                </div>
              </div>

              <div className="p-5 bg-green-100 rounded-lg border border-green-300">
                <p className="text-gray-800">
                  <strong className="text-green-700">💚 Our Promise:</strong> With proper treatment, anxiety can be effectively controlled. Most people can live calm and happy lives with therapy and appropriate care.
                </p>
              </div>
            </div>

            {/* Self-care Tips */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-teal-700 mb-6 flex items-center">
                <span className="mr-3">🌟</span> Self-care and Helpful Tips
              </h3>
              
              <div className="grid md:grid-cols-3 gap-5">
                <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-800 mb-2">🏃‍♂️ Regular Exercise</h4>
                  <p className="text-sm text-gray-700">Physical activity helps reduce anxiety</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-800 mb-2">😴 Adequate Sleep</h4>
                  <p className="text-sm text-gray-700">Get 7-9 hours of quality sleep</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-800 mb-2">☕ Reduce Caffeine</h4>
                  <p className="text-sm text-gray-700">Limit coffee and energy drinks</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-800 mb-2">🧘‍♀️ Daily Meditation</h4>
                  <p className="text-sm text-gray-700">10-15 minutes mindfulness practice</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-bold text-pink-800 mb-2">🚫 Avoid Alcohol</h4>
                  <p className="text-sm text-gray-700">Alcohol can increase anxiety</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-800 mb-2">👥 Social Connection</h4>
                  <p className="text-sm text-gray-700">Spend time with loved ones</p>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-orange-800 mb-6 text-center flex items-center justify-center">
                <span className="mr-3">✨</span> Hope and Recovery
              </h3>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-lg text-gray-800 mb-4 italic">
                  "Recovery from anxiety is possible. With proper treatment and support, thousands have learned to manage their anxiety and are living full lives."
                </p>
                <p className="text-gray-700 font-semibold">
                  Seeking help is not weakness, it's a sign of courage.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-2xl p-8 inline-block">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  Are you struggling with anxiety?
                </h4>
                <p className="text-gray-600 mb-6 max-w-2xl">
                  We are here to help you. Our expert mental health professionals will provide you with effective treatment and support.
                </p>
                <a
                  href="tel:9447452585"
                  className="inline-block bg-gradient-to-r from-orange-600 to-yellow-600 text-white text-lg font-bold py-4 px-10 rounded-lg shadow-lg hover:from-orange-700 hover:to-yellow-700 transition duration-300 transform hover:scale-105"
                >
                  📞 Contact Now: 9447452585
                </a>
                <p className="text-sm text-gray-600 mt-4">
                  24/7 Consultation Available • Confidentiality Assured • Professional Care
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}