"use client";
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, Eye, Clock, Pill, Activity, Heart, AlertTriangle, Sun, Wind, Utensils } from 'lucide-react';

export default function MigraineOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-12 h-12 text-rose-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Migraine
            </h1>
            <Zap className="w-12 h-12 text-purple-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete Information on Neurological Disorder - Symptoms, Phases, Triggers and Treatment
          </p>
        </header>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="phases" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Phases
            </TabsTrigger>
            <TabsTrigger value="types" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Types
            </TabsTrigger>
            <TabsTrigger value="triggers" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Triggers
            </TabsTrigger>
            <TabsTrigger value="treatment" className="flex items-center gap-2">
              <Pill className="w-4 h-4" />
              Treatment
            </TabsTrigger>
            <TabsTrigger value="management" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Management
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50">
                <CardTitle className="text-2xl">What is Migraine?</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed">
                  Migraine is a complex neurological disorder characterized by moderate to severe headaches. It affects the brain's nervous system, blood vessels, and neurochemicals. Approximately 15% of the world's population is affected by migraines, and it is 3 times more common in women than men.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-rose-500" />
                    Main Symptoms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">•</span>
                      <span>Moderate to severe throbbing headache</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">•</span>
                      <span>Nausea and vomiting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">•</span>
                      <span>Sensitivity to light</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">•</span>
                      <span>Sensitivity to sound</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-500" />
                    Duration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>4 to 72 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Episodic: Less than 15 days per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Chronic: 15+ days per month</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-pink-500" />
                    Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600 mt-1">•</span>
                      <span>Work absenteeism</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600 mt-1">•</span>
                      <span>Social life affected</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-600 mt-1">•</span>
                      <span>Depression and anxiety</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-rose-50 border-rose-200">
              <Brain className="h-4 w-4 text-rose-600" />
              <AlertTitle>Genetic Connection</AlertTitle>
              <AlertDescription>
                Migraine has a strong genetic component. If someone in your family has migraines, your risk increases 3-fold.
              </AlertDescription>
            </Alert>
          </TabsContent>
          {/* Phases Tab */}
          <TabsContent value="phases" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    1. Prodrome (Warning)
                  </CardTitle>
                  <CardDescription>24-48 hours before headache</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3">In 80% patients</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• Mood changes</li>
                    <li>• Neck stiffness</li>
                    <li>• Frequent yawning</li>
                    <li>• Food cravings</li>
                    <li>• Fatigue</li>
                    <li>• Light/sound sensitivity</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-blue-600" />
                    2. Aura (Sensory Changes)
                  </CardTitle>
                  <CardDescription>5-60 minutes</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3">In 25-33% patients</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• Flashing lights</li>
                    <li>• Zigzag lines</li>
                    <li>• Blind spots</li>
                    <li>• Numbness or tingling</li>
                    <li>• Speech difficulty</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50">
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-red-600" />
                    3. Headache (Pain Phase)
                  </CardTitle>
                  <CardDescription>4-72 hours</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3">Main Phase</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• Unilateral throbbing pain</li>
                    <li>• Nausea/vomiting</li>
                    <li>• Photophobia</li>
                    <li>• Phonophobia</li>
                    <li>• Worsens with activity</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-purple-600" />
                    4. Postdrome (Hangover)
                  </CardTitle>
                  <CardDescription>24-48 hours</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3">In 80% patients</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• Fatigue and weakness</li>
                    <li>• Mood changes</li>
                    <li>• Difficulty concentrating</li>
                    <li>• Stomach problems</li>
                    <li>• Mild headache</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Types Tab */}
          <TabsContent value="types" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle>Migraine without Aura</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-blue-500">Most Common - 75%</Badge>
                  <p className="text-sm text-gray-700 mb-3">Previously called "Common Migraine"</p>
                  <ul className="space-y-2 text-sm">
                    <li>• No aura symptoms</li>
                    <li>• Direct entry into headache phase</li>
                    <li>• All other migraine symptoms present</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle>Migraine with Aura</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-purple-500">25-33% cases</Badge>
                  <p className="text-sm text-gray-700 mb-3">Previously called "Classical Migraine"</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Aura before or with headache</li>
                    <li>• Visual symptoms most common</li>
                    <li>• Lasts 5-60 minutes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                  <CardTitle>Chronic Migraine</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-orange-500">Severe Form</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• 15+ headache days per month</li>
                    <li>• For at least 3 months</li>
                    <li>• 8+ days with migraine symptoms</li>
                    <li>• Requires specialized treatment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle>Hemiplegic Migraine</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-green-500">Rare Type</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• Temporary one-sided paralysis</li>
                    <li>• With motor aura</li>
                    <li>• Familial or sporadic</li>
                    <li>• Stroke-like symptoms</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50">
                  <CardTitle>Menstrual Migraine</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-rose-500">In Women</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• Linked to menstrual cycle</li>
                    <li>• Due to hormonal changes</li>
                    <li>• Estrogen drop triggers</li>
                    <li>• More severe and longer</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                  <CardTitle>Vestibular Migraine</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-indigo-500">Balance Affected</Badge>
                  <ul className="space-y-2 text-sm">
                    <li>• Vertigo (dizziness)</li>
                    <li>• Balance problems</li>
                    <li>• Tinnitus (ear ringing)</li>
                    <li>• May or may not have headache</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          {/* Triggers Tab */}
          <TabsContent value="triggers" className="space-y-6">
            <Alert className="bg-amber-50 border-amber-200">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertTitle>Identify Triggers</AlertTitle>
              <AlertDescription>
                Each person has different triggers. Keeping a migraine diary helps identify your specific triggers.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-red-600" />
                    Dietary
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Alcohol</strong> (especially red wine)</li>
                    <li>• <strong>Caffeine</strong> (too much or sudden reduction)</li>
                    <li>• <strong>Aged cheeses</strong> (containing tyramine)</li>
                    <li>• <strong>Processed meats</strong> (containing nitrates)</li>
                    <li>• <strong>MSG</strong> (monosodium glutamate)</li>
                    <li>• <strong>Artificial sweeteners</strong> (Aspartame)</li>
                    <li>• <strong>Chocolate</strong></li>
                    <li>• Skipping meals or fasting</li>
                    <li>• Dehydration (lack of water)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    Hormonal
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Menstrual cycle</strong> (Estrogen fluctuations)</li>
                    <li>• <strong>Birth control pills</strong></li>
                    <li>• <strong>Hormone replacement therapy</strong></li>
                    <li>• <strong>Pregnancy</strong> (worse in first trimester, better later)</li>
                    <li>• <strong>Perimenopause & Menopause</strong></li>
                    <li>• <strong>Ovulation</strong></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-blue-600" />
                    Environmental
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Bright lights</strong> (Bright or flickering lights)</li>
                    <li>• <strong>Sun glare</strong></li>
                    <li>• <strong>Loud noises</strong></li>
                    <li>• <strong>Strong odors</strong> (Perfumes, paints, smoke)</li>
                    <li>• <strong>Weather changes</strong> (Barometric pressure)</li>
                    <li>• <strong>Temperature changes</strong> (Heat or cold)</li>
                    <li>• <strong>High altitude</strong></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-green-600" />
                    Lifestyle
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Too little or too much sleep</strong></li>
                    <li>• <strong>Irregular sleep patterns</strong></li>
                    <li>• <strong>Stress</strong> (and post-stress relaxation)</li>
                    <li>• <strong>Physical exertion</strong> (excessive exercise)</li>
                    <li>• <strong>Travel</strong> (Time zone changes)</li>
                    <li>• <strong>Smoking</strong></li>
                    <li>• <strong>Poor posture</strong></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50">
                  <CardTitle className="flex items-center gap-2">
                    <Pill className="w-5 h-5 text-amber-600" />
                    Medications
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Vasodilators</strong> (blood vessel dilators)</li>
                    <li>• <strong>Nitroglycerin</strong></li>
                    <li>• <strong>Some heart medications</strong></li>
                    <li>• <strong>Overuse of pain medications</strong> (Medication-overuse headache)</li>
                    <li>• <strong>Some hormonal medications</strong></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-rose-50 to-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-600" />
                    Other Factors
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Emotional stress</strong> (anxiety, depression)</li>
                    <li>• <strong>Screen time</strong> (Computer, phone)</li>
                    <li>• <strong>Empty stomach</strong></li>
                    <li>• <strong>Weekend migraine</strong> (routine changes)</li>
                    <li>• <strong>TMJ disorders</strong></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Treatment Tab */}
          <TabsContent value="treatment" className="space-y-6">
            <Alert className="bg-red-50 border-red-200">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertTitle>Important Warning</AlertTitle>
              <AlertDescription>
                Take all medications only with doctor's consultation. This information is for educational purposes, not treatment advice.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle>Acute Treatment</CardTitle>
                  <CardDescription>When pain starts</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <Badge className="mb-2">Triptans (First Line)</Badge>
                      <p className="text-sm text-gray-600 mb-2">Serotonin receptor agonists</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Sumatriptan</li>
                        <li>• Rizatriptan</li>
                        <li>• Zolmitriptan</li>
                        <li>• Eletriptan</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">NSAIDs</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Ibuprofen</li>
                        <li>• Naproxen</li>
                        <li>• Diclofenac</li>
                        <li>• Aspirin</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">Antiemetics (for nausea)</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Metoclopramide</li>
                        <li>• Ondansetron</li>
                        <li>• Prochlorperazine</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">CGRP Antagonists (New)</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Ubrogepant</li>
                        <li>• Rimegepant</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle>Preventive Treatment</CardTitle>
                  <CardDescription>For frequent migraines</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <Badge className="mb-2">Beta-Blockers</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Propranolol</li>
                        <li>• Metoprolol</li>
                        <li>• Timolol</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">Antidepressants</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Amitriptyline</li>
                        <li>• Venlafaxine</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">Anticonvulsants</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Topiramate</li>
                        <li>• Valproate</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">CGRP mAbs (Monthly injection)</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Erenumab</li>
                        <li>• Fremanezumab</li>
                        <li>• Galcanezumab</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">Botox</Badge>
                      <p className="text-sm text-gray-700">For chronic migraine (every 3 months)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle>Natural & Alternative</CardTitle>
                  <CardDescription>Non-medication options</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">Supplements</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Magnesium (400-500 mg)</li>
                        <li>• Riboflavin (Vitamin B2) - 400 mg</li>
                        <li>• Coenzyme Q10 - 100-300 mg</li>
                        <li>• Feverfew</li>
                        <li>• Butterbur</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Other Therapies</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Acupuncture</li>
                        <li>• Biofeedback</li>
                        <li>• Massage therapy</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                  <CardTitle>Emergency Treatment</CardTitle>
                  <CardDescription>For severe cases</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <Alert className="mb-3 bg-red-50 border-red-200">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      If regular medications don't work or symptoms are very severe, contact doctor immediately
                    </AlertDescription>
                  </Alert>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• <strong>IV DHE</strong> (Dihydroergotamine)</li>
                    <li>• <strong>IV Corticosteroids</strong></li>
                    <li>• <strong>IV Fluids</strong> (for dehydration)</li>
                    <li>• <strong>Nerve blocks</strong></li>
                    <li>• <strong>Neuromodulation devices</strong></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Management Tab */}
          <TabsContent value="management" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-blue-600" />
                    Lifestyle Changes
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">Sleep Hygiene</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Sleep and wake at same time daily</li>
                        <li>• Get 7-9 hours of sleep</li>
                        <li>• Reduce screen time before bed</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Regular Meals</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Don't skip meals</li>
                        <li>• Stay hydrated (8-10 glasses water)</li>
                        <li>• Avoid trigger foods</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Exercise</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Regular moderate exercise</li>
                        <li>• Yoga and stretching</li>
                        <li>• Avoid excessive exertion</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    Stress Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Meditation</strong> - 10-20 minutes daily</li>
                    <li>• <strong>Deep breathing exercises</strong></li>
                    <li>• <strong>Progressive muscle relaxation</strong></li>
                    <li>• <strong>Cognitive behavioral therapy (CBT)</strong></li>
                    <li>• <strong>Mindfulness practices</strong></li>
                    <li>• <strong>Time management</strong></li>
                    <li>• <strong>Social support</strong> - stay connected with family and friends</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-green-600" />
                    Migraine Diary
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-gray-700 mb-3">Record the following information:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Date and time of pain</li>
                    <li>• Intensity (1-10 scale)</li>
                    <li>• Duration</li>
                    <li>• Symptoms</li>
                    <li>• Possible triggers</li>
                    <li>• Medications taken and effect</li>
                    <li>• Menstrual cycle (for women)</li>
                    <li>• Sleep pattern</li>
                    <li>• Stress level</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-rose-50 to-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-rose-600" />
                    When to See Doctor
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Alert className="mb-3 bg-red-100 border-red-300">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Get immediate emergency help if:</AlertTitle>
                  </Alert>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Sudden, severe "thunderclap" headache</li>
                    <li>• Headache with fever, stiff neck</li>
                    <li>• Vision changes, speech or walking difficulty</li>
                    <li>• Headache after head injury</li>
                    <li>• First headache after age 50</li>
                    <li>• Change in usual pattern</li>
                    <li>• Aura lasting more than 1 hour</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg md:col-span-2">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-indigo-600" />
                    What to Do During Acute Attack
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-sm mb-2 text-green-700">✓ DO:</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Take medication early (first 30-60 minutes)</li>
                        <li>• Rest in dark, quiet room</li>
                        <li>• Apply cold or warm compress</li>
                        <li>• Drink water</li>
                        <li>• Take deep breaths</li>
                        <li>• Eat light food</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-2 text-red-700">✗ DON'T:</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Expose to bright light or noise</li>
                        <li>• Increase screen time</li>
                        <li>• Drink alcohol</li>
                        <li>• Eat heavy food</li>
                        <li>• Do stressful activities</li>
                        <li>• Overuse medication</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-blue-50 border-blue-200">
              <Heart className="h-4 w-4 text-blue-600" />
              <AlertTitle>Remember</AlertTitle>
              <AlertDescription>
                Migraine is a manageable condition. With proper treatment, lifestyle changes, and trigger identification, most people can control their migraines. Be patient and work with your doctor.
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}