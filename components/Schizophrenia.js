"use client";
import React from "react";

export default function Schizophrenia() {
  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">
            🧩 Schizophrenia
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Schizophrenia is a serious mental disorder in which contact with reality is broken and thoughts, emotions and behavior are affected. It impacts how a person thinks, feels, and behaves.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-600">
            <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
              <span className="mr-2">🔍</span> What is Schizophrenia?
            </h3>
            <p className="text-gray-700 mb-4">
              Schizophrenia is a chronic and severe mental health condition that affects how a person thinks, feels, and behaves. People with schizophrenia may seem like they have lost touch with reality.
            </p>
            <p className="text-gray-700 mb-4">
              It typically develops in late adolescence or early adulthood and affects about 1 in 100 people worldwide.
            </p>
            <p className="text-gray-700">
              While there is no cure, schizophrenia is treatable. With proper treatment, many people with schizophrenia can lead productive lives.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-600">
            <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
              <span className="mr-2">📊</span> Key Facts
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span>Affects approximately 1% of population</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span>Typically begins in late teens to early 30s</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span>Men often show symptoms earlier than women</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span>Genetics and environment both play a role</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span>Treatment is most effective when started early</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
              <span className="mr-2">⚠️</span> Risk Factors
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span><strong>Family history</strong> - genetic predisposition</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span><strong>Brain chemistry</strong> - neurotransmitter imbalance</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span><strong>Pregnancy complications</strong> - birth defects or malnutrition</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span><strong>Drug use</strong> - especially during teen years</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span><strong>Severe stress</strong> - trauma or major life changes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-600">
            <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center">
              <span className="mr-2">🔍</span> Positive Symptoms
            </h3>
            <p className="text-sm text-gray-600 mb-4 italic">
              "Positive" means symptoms that add abnormal experiences to reality
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span><strong>Delusions</strong> - false beliefs not based in reality (e.g., believing you're being persecuted, have exceptional abilities, or that someone is in love with you)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span><strong>Hallucinations</strong> - seeing, hearing, smelling, or feeling things that don't exist. Hearing voices is most common</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span><strong>Disorganized thinking</strong> - difficulty organizing thoughts, jumping between unrelated topics, making up nonsense words</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span><strong>Abnormal motor behavior</strong> - childlike silliness, unpredictable agitation, resistance to instructions, inappropriate posture</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-600">
            <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center">
              <span className="mr-2">📉</span> Negative Symptoms
            </h3>
            <p className="text-sm text-gray-600 mb-4 italic">
              "Negative" means reduction or absence of normal functions
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">•</span>
                <span><strong>Flat affect</strong> - reduced emotional expression, monotone voice, lack of facial expressions</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">•</span>
                <span><strong>Lack of motivation (Avolition)</strong> - unable to initiate or sustain activities, poor hygiene</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">•</span>
                <span><strong>Social withdrawal</strong> - isolation from friends and family</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">•</span>
                <span><strong>Reduced speech (Alogia)</strong> - speaking very little, even when forced to interact</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">•</span>
                <span><strong>Inability to experience pleasure (Anhedonia)</strong> - loss of interest in activities once enjoyed</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-600">
            <h3 className="text-2xl font-bold text-amber-700 mb-4 flex items-center">
              <span className="mr-2">🧠</span> Cognitive Symptoms
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 font-bold">•</span>
                <span><strong>Attention problems</strong> - difficulty focusing or paying attention</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 font-bold">•</span>
                <span><strong>Memory issues</strong> - problems with working memory</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 font-bold">•</span>
                <span><strong>Executive function deficits</strong> - difficulty planning, organizing, or using information</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2 font-bold">•</span>
                <span><strong>Reduced processing speed</strong> - slower thinking and understanding</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-600">
            <h3 className="text-2xl font-bold text-pink-700 mb-4 flex items-center">
              <span className="mr-2">🚨</span> Warning Signs
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Early intervention improves outcomes. Seek help if you notice:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-600 mr-2 font-bold">•</span>
                <span>Withdrawing from friends and family</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2 font-bold">•</span>
                <span>Drop in performance at school or work</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2 font-bold">•</span>
                <span>Trouble thinking clearly or concentrating</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2 font-bold">•</span>
                <span>Suspiciousness or unusual fear</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2 font-bold">•</span>
                <span>Lack of personal hygiene</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2 font-bold">•</span>
                <span>Hearing or seeing things that aren't there</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2 font-bold">•</span>
                <span>Strong, inappropriate emotions or no emotions at all</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-600 max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
            <span className="mr-2">💊</span> Our Comprehensive Treatment Approach
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Medication Management</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Antipsychotic medications</strong> - First-line treatment to manage positive symptoms (hallucinations, delusions)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Second-generation antipsychotics</strong> - Fewer side effects, better tolerance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Mood stabilizers</strong> - When needed for mood symptoms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Regular monitoring</strong> - Adjusting dosage for optimal results with minimal side effects</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Psychotherapy</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Cognitive Behavioral Therapy (CBT)</strong> - Managing symptoms and changing thought patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Individual therapy</strong> - One-on-one counseling sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Group therapy</strong> - Peer support and shared experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Cognitive Enhancement Therapy</strong> - Improving thinking and social skills</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Advanced Treatments</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>TDCS Brain Stimulation</strong> - Non-invasive treatment to improve cognitive function and reduce negative symptoms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>ECT (Electroconvulsive Therapy)</strong> - For severe cases not responding to other treatments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Coordinated Specialty Care</strong> - Team-based approach for first-episode psychosis</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Rehabilitation Services</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Social skills training</strong> - Improving communication and interpersonal abilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Vocational rehabilitation</strong> - Employment support and job training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Supported housing</strong> - Assistance with independent living</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Life skills training</strong> - Daily living activities and self-care</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Family Support & Education</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Family therapy</strong> - Involving loved ones in treatment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Psychoeducation</strong> - Teaching families about schizophrenia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Support groups</strong> - Connecting with other families</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Crisis planning</strong> - Preparing for difficult situations</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Long-term Management</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Regular monitoring</strong> - Ongoing assessments and check-ups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Relapse prevention</strong> - Identifying triggers and early warning signs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Medication adherence support</strong> - Ensuring consistent treatment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span><strong>Lifestyle counseling</strong> - Diet, exercise, stress management</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-gray-700 mb-2">
              <strong className="text-green-700">Important Note:</strong> With early diagnosis, proper medication, and comprehensive psychosocial support, many people with schizophrenia can manage their symptoms effectively and lead fulfilling lives.
            </p>
            <p className="text-sm text-gray-700">
              Treatment is most effective when started early and continued long-term. Never stop medication without consulting your doctor, as this can lead to relapse.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <span className="mr-2">💡</span> Living Well with Schizophrenia
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Self-Care Tips</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Take medications as prescribed</li>
                <li>• Maintain regular sleep schedule</li>
                <li>• Eat nutritious meals</li>
                <li>• Exercise regularly</li>
                <li>• Avoid alcohol and drugs</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Stay Connected</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Keep in touch with family and friends</li>
                <li>• Join support groups</li>
                <li>• Engage in social activities</li>
                <li>• Communicate openly with your care team</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Manage Stress</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Practice relaxation techniques</li>
                <li>• Learn to recognize triggers</li>
                <li>• Set realistic goals</li>
                <li>• Create a daily routine</li>
                <li>• Ask for help when needed</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg max-w-6xl mx-auto mb-12">
          <h3 className="text-xl font-bold text-yellow-800 mb-3 flex items-center">
            <span className="mr-2">⚠️</span> When to Seek Emergency Help
          </h3>
          <p className="text-gray-700 mb-3">
            Call emergency services (102 or 108) or go to the nearest emergency room if:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2 font-bold">•</span>
              <span>The person talks about suicide or dying</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2 font-bold">•</span>
              <span>Exhibits violent or aggressive behavior</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2 font-bold">•</span>
              <span>Shows severe confusion or disorientation</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2 font-bold">•</span>
              <span>Unable to care for basic needs (eating, drinking, hygiene)</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <a
            href="tel:9450016305"
            className="inline-block bg-red-600 text-white text-lg font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
          >
            📞 Contact for Expert Schizophrenia Treatment
          </a>
          <p className="text-gray-600 mt-4 text-sm">
            Available 24/7 for consultations and emergency support
          </p>
        </div>
      </div>
    </section>
  );
}