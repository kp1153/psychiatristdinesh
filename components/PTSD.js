"use client";
import React from "react";

export default function PTSD() {
  return (
    <>
      {/* Part 1 - Introduction and Symptoms */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
              ⚠️ Post-Traumatic Stress Disorder (PTSD)
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A mental health condition triggered by experiencing or witnessing a terrifying event
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* What is PTSD */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-red-700 mb-6 flex items-center">
                <span className="mr-3">🧠</span> What is PTSD?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Post-Traumatic Stress Disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a terrifying event. People with PTSD have recurring memories of the event, nightmares, and severe anxiety.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                PTSD can occur after war experiences, natural disasters, accidents, violence, sexual assault, or any life-threatening situation. It's not limited to soldiers - anyone can be affected by it.
              </p>
            </div>

            {/* Main Symptoms */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-red-600">
              <h3 className="text-3xl font-bold text-red-700 mb-6 flex items-center">
                <span className="mr-3">🔍</span> Main Symptoms of PTSD
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Re-experiencing Symptoms */}
                <div>
                  <h4 className="text-xl font-semibold text-red-600 mb-4">
                    1. Re-experiencing:
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span>Recurring memories of the traumatic event</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span>Frightening dreams and nightmares</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span>Flashbacks - feeling like the event is happening again</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span>Intense emotional or physical reactions when reminded of the event</span>
                    </li>
                  </ul>
                </div>

                {/* Avoidance Symptoms */}
                <div>
                  <h4 className="text-xl font-semibold text-orange-600 mb-4">
                    2. Avoidance:
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>Avoiding things that remind you of the event</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>Avoiding certain places or people</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>Avoiding talking about the event</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">•</span>
                      <span>Unable to remember parts of the event</span>
                    </li>
                  </ul>
                </div>

                {/* Negative Thoughts and Mood */}
                <div>
                  <h4 className="text-xl font-semibold text-purple-600 mb-4">
                    3. Negative Thoughts and Mood:
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>Negative beliefs about yourself or others</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>Persistent fear, anger, guilt, or shame</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>Difficulty experiencing happiness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>Feeling emotionally distant from loved ones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 font-bold">•</span>
                      <span>Lack of interest in activities</span>
                    </li>
                  </ul>
                </div>

                {/* Hyperarousal Symptoms */}
                <div>
                  <h4 className="text-xl font-semibold text-rose-600 mb-4">
                    4. Hyperarousal:
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>Being easily startled or frightened</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>Always being on guard for danger</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>Sleep problems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>Difficulty concentrating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>Irritability or angry outbursts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rose-600 mr-2 font-bold">•</span>
                      <span>Risky or self-destructive behavior</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50 rounded-lg border-2 border-red-300">
                <p className="text-sm text-gray-800">
                  <strong className="text-red-700">💡 Important:</strong> PTSD symptoms can start immediately after the traumatic event or months/years later. If symptoms persist for more than a month, it's essential to seek professional help.
                </p>
              </div>
            </div>

            {/* Causes of PTSD */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-red-700 mb-6 flex items-center">
                <span className="mr-3">⚡</span> What Events Can Cause PTSD?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-red-800 mb-2">War and Military Experience</h4>
                  <p className="text-gray-700 text-sm">Combat, terrorism, or military conflict</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-800 mb-2">Physical or Sexual Violence</h4>
                  <p className="text-gray-700 text-sm">Rape, domestic violence, physical assault</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-800 mb-2">Serious Accidents</h4>
                  <p className="text-gray-700 text-sm">Car accidents, plane crashes, train accidents</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-800 mb-2">Natural Disasters</h4>
                  <p className="text-gray-700 text-sm">Earthquakes, floods, hurricanes, fires</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-bold text-pink-800 mb-2">Serious Medical Events</h4>
                  <p className="text-gray-700 text-sm">Life-threatening illness, ICU stay</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-800 mb-2">Sudden Death of Loved One</h4>
                  <p className="text-gray-700 text-sm">Witnessing death in traumatic circumstances</p>
                </div>
                <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-800 mb-2">Childhood Abuse</h4>
                  <p className="text-gray-700 text-sm">Physical, sexual, or emotional abuse</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-800 mb-2">Other Traumatic Events</h4>
                  <p className="text-gray-700 text-sm">Kidnapping, robbery, witnessing violence</p>
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
                <span className="mr-3">💊</span> Effective Treatments for PTSD
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">🎯</span> Trauma-Focused Therapy
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Prolonged Exposure (PE):</strong> Safely confronting traumatic memories</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Cognitive Processing Therapy (CPT):</strong> Changing thoughts about the traumatic event</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Trauma-focused CBT</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">👁️</span> EMDR Therapy
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Eye Movement Desensitization and Reprocessing (EMDR)</strong> - Highly effective for PTSD
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Helps process traumatic memories</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Bilateral stimulation (eye movements, sounds)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>80-90% patient improvement</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 bg-purple-50 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">💊</span> Medication Treatment
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>SSRI Antidepressants (Sertraline, Paroxetine)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>SNRI medications (Venlafaxine)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Sleep medications (if needed)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Individualized dosing and monitoring</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 bg-amber-50 rounded-lg">
                  <h4 className="font-bold text-amber-800 mb-3 text-lg flex items-center">
                    <span className="mr-2">👥</span> Group and Support Therapy
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Group therapy - connecting with people with similar experiences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Family therapy - family support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Support groups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Peer support programs</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-5 bg-teal-50 rounded-lg mb-6">
                <h4 className="font-bold text-teal-800 mb-3 text-lg flex items-center">
                  <span className="mr-2">⚡</span> Additional Treatment Options
                </h4>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span><span>Mindfulness-Based Stress Reduction (MBSR)</span></li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span><span>Yoga and meditation</span></li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span><span>TDCS Brain Stimulation</span></li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span><span>Neurofeedback therapy</span></li>
                </ul>
              </div>

              <div className="p-5 bg-green-100 rounded-lg border border-green-300">
                <p className="text-gray-800">
                  <strong className="text-green-700">💚 Treatment Success:</strong> PTSD is completely treatable. With proper treatment, 60-80% of patients show significant improvement. EMDR and Prolonged Exposure are the most effective therapies.
                </p>
              </div>
            </div>

            {/* Self-Care Strategies */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-teal-700 mb-6 flex items-center">
                <span className="mr-3">🌟</span> Self-Care and Coping Strategies
              </h3>
              
              <div className="grid md:grid-cols-3 gap-5">
                <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-800 mb-2">🧘‍♀️ Grounding Techniques</h4>
                  <p className="text-sm text-gray-700">Use 5-4-3-2-1 technique to return to present</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-800 mb-2">😴 Sleep Routine</h4>
                  <p className="text-sm text-gray-700">Regular sleep schedule and bedtime rituals</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-800 mb-2">🏃‍♂️ Physical Activity</h4>
                  <p className="text-sm text-gray-700">30 minutes daily exercise or walking</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-800 mb-2">📝 Journaling</h4>
                  <p className="text-sm text-gray-700">Writing down emotions and thoughts</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-bold text-pink-800 mb-2">🚫 Trigger Management</h4>
                  <p className="text-sm text-gray-700">Identify triggers and create coping plan</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-800 mb-2">👥 Social Contact</h4>
                  <p className="text-sm text-gray-700">Spend time with trusted people</p>
                </div>
              </div>
            </div>

            {/* When to Get Immediate Help */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-red-600">
              <h3 className="text-3xl font-bold text-red-700 mb-6 flex items-center">
                <span className="mr-3">🚨</span> When to Seek Immediate Help?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-red-600 mr-2 text-xl">⚠️</span>
                    <span>Thoughts of suicide or self-harm</span>
                  </p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-red-600 mr-2 text-xl">⚠️</span>
                    <span>Thoughts of harming others</span>
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-orange-600 mr-2 text-xl">⚠️</span>
                    <span>Severe flashbacks that make daily functioning impossible</span>
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-gray-800 flex items-start">
                    <span className="text-orange-600 mr-2 text-xl">⚠️</span>
                    <span>Alcohol or substance abuse</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Hope and Recovery */}
            <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-red-800 mb-6 text-center flex items-center justify-center">
                <span className="mr-3">✨</span> Recovery from PTSD is Completely Possible
              </h3>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-lg text-gray-800 mb-4 italic">
                  "Traumatic experiences don't define you. With proper treatment, support, and time, you can live a full and meaningful life again."
                </p>
                <p className="text-gray-700 font-semibold">
                  Millions of people have recovered from PTSD and found happiness. You can too.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-2xl p-8 inline-block">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  Are you or someone you love struggling with PTSD?
                </h4>
                <p className="text-gray-600 mb-6 max-w-2xl">
                  We're here to help. Our trauma specialist mental health professionals provide EMDR, CPT, and other evidence-based treatments.
                </p>
                <a
                  href="tel:9447452585"
                  className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg font-bold py-4 px-10 rounded-lg shadow-lg hover:from-red-700 hover:to-orange-700 transition duration-300 transform hover:scale-105"
                >
                  📞 Contact Now: 9447452585
                </a>
                <p className="text-sm text-gray-600 mt-4">
                  24/7 Consultations Available • Trauma Specialists • Confidential Support
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}