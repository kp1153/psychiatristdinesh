"use client";

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, Brain, Heart, AlertTriangle, Shield, 
  TrendingUp, Pill, Users, Zap, Moon, Sun, 
  Phone, LifeBuoy, Info, CheckCircle2 
} from 'lucide-react';

export default function BipolarDisorderOverview() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-purple-100 rounded-2xl">
              <Brain className="w-10 h-10 text-purple-600" />
            </div>
          </div>
          <h1 className="text-center text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Understanding <span className="text-purple-600">Bipolar Disorder</span>
          </h1>
          <p className="text-center text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive clinical guide to symptoms, latest medical treatments, 
            and long-term management strategies for living a balanced life.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full space-y-8">
          {/* Main Navigation Tabs */}
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-4xl h-auto p-1 bg-slate-200/50">
              <TabsTrigger value="overview" className="py-3"><Info className="w-4 h-4 mr-2" /> Overview</TabsTrigger>
              <TabsTrigger value="symptoms" className="py-3"><Activity className="w-4 h-4 mr-2" /> Symptoms</TabsTrigger>
              <TabsTrigger value="types" className="py-3"><TrendingUp className="w-4 h-4 mr-2" /> Types</TabsTrigger>
              <TabsTrigger value="treatment" className="py-3"><Pill className="w-4 h-4 mr-2" /> Treatment</TabsTrigger>
              <TabsTrigger value="lifestyle" className="py-3"><Heart className="w-4 h-4 mr-2" /> Support</TabsTrigger>
            </TabsList>
          </div>

          {/* Tab 1: Overview Content */}
          <TabsContent value="overview" className="animate-in fade-in duration-500">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="md:col-span-2 shadow-sm border-none ring-1 ring-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">Clinical Definition</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 leading-relaxed space-y-4">
                  <p>
                    Bipolar disorder, formerly called manic depression, is a mental health condition 
                    that causes extreme mood swings that include emotional highs (mania or hypomania) 
                    and lows (depression).
                  </p>
                  <p>
                    Unlike ordinary mood swings, the episodes of bipolar disorder can last for days 
                    or weeks. These shifts in mood can affect sleep, energy, activity, judgment, 
                    behavior, and the ability to think clearly.
                  </p>
                  <div className="flex gap-4 mt-6">
                    <div className="flex-1 p-4 bg-orange-50 rounded-xl border border-orange-100">
                      <span className="font-bold text-orange-700 block">Mania</span>
                      <span className="text-sm">Feeling euphoric, full of energy or unusually irritable.</span>
                    </div>
                    <div className="flex-1 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <span className="font-bold text-blue-700 block">Depression</span>
                      <span className="text-sm">Feeling hopeless, sad, or lacking interest in activities.</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-600 text-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Key Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <span className="text-4xl font-bold">1 in 50</span>
                    <p className="text-purple-100 text-sm mt-1">Adults worldwide are diagnosed with bipolar disorder.</p>
                  </div>
                  <div>
                    <span className="text-4xl font-bold">25 yrs</span>
                    <p className="text-purple-100 text-sm mt-1">Average age when symptoms typically first appear.</p>
                  </div>
                  <div className="pt-4 border-t border-purple-400">
                    <p className="text-xs italic opacity-80">Source: World Health Organization (WHO)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

         {/* Tab 4: Treatment & Medications Content */}
          <TabsContent value="treatment" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Modern Medication Card */}
              <Card className="md:col-span-2 border-l-4 border-l-purple-500 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Pill className="text-purple-600 w-6 h-6" /> Targeted Pharmacotherapy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  
                  {/* Category: Mood Stabilizers */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-600" /> Gold-Standard Mood Stabilizers
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 rounded-lg border">
                        <span className="font-bold text-purple-700">Lithium (Eskalith)</span>
                        <p className="text-sm text-slate-600 mt-1">Primary choice for reducing suicide risk and preventing manic relapses.</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg border">
                        <span className="font-bold text-purple-700">Anticonvulsants</span>
                        <p className="text-sm text-slate-600 mt-1">Divalproex (Depakote) and Lamotrigine (Lamictal) for rapid cycling.</p>
                      </div>
                    </div>
                  </div>

                  {/* Category: Latest Generation Medications */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-orange-500" /> New-Gen FDA Approved (2020-2025)
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary" className="px-3 py-1">Cariprazine (Vraylar)</Badge>
                      <Badge variant="secondary" className="px-3 py-1">Lumateperone (Caplyta)</Badge>
                      <Badge variant="secondary" className="px-3 py-1">Lurasidone (Latuda)</Badge>
                    </div>
                    
                    <Alert className="bg-blue-50 border-blue-200">
                      <Activity className="h-5 w-5 text-blue-600" />
                      <AlertTitle className="text-blue-800 font-bold">Clinical Update</AlertTitle>
                      <AlertDescription className="text-blue-700">
                        <strong>Cariprazine</strong> and <strong>Lumateperone</strong> are now preferred for Bipolar Depression due to high efficacy and minimal weight-gain side effects.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>

              {/* Therapy Side Card */}
              <div className="space-y-6">
                <Card className="bg-slate-50 border shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Interventions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-slate-600">
                    <div className="flex gap-2">
                      <Users className="w-4 h-4 text-indigo-600 shrink-0" />
                      <p><strong>CBT:</strong> Identifies triggers.</p>
                    </div>
                    <div className="flex gap-2">
                      <Moon className="w-4 h-4 text-purple-600 shrink-0" />
                      <p><strong>IPSRT:</strong> Stabilizes daily routine.</p>
                    </div>
                    <div className="flex gap-2">
                      <Zap className="w-4 h-4 text-yellow-600 shrink-0" />
                      <p><strong>TMS/ECT:</strong> For resistant cases.</p>
                    </div>
                  </CardContent>
                </Card>

                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="text-xs font-bold">
                    WARNING: Never stop psychiatric medication without a doctor's supervision.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </TabsContent>
          {/* Tab 2: Symptoms Content */}
          <TabsContent value="symptoms" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-t-4 border-t-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-700">
                    <Sun className="w-5 h-5" /> Mania Symptoms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">• <span className="font-medium text-slate-900">Euphoria:</span> Excessive happiness or feeling "wired".</li>
                    <li className="flex items-start gap-2">• <span className="font-medium text-slate-900">Reduced Sleep:</span> Feeling fully rested after only 2-3 hours.</li>
                    <li className="flex items-start gap-2">• <span className="font-medium text-slate-900">Racing Thoughts:</span> Rapid speech and jumping from one idea to another.</li>
                    <li className="flex items-start gap-2">• <span className="font-medium text-slate-900">Impulsivity:</span> Risky spending, sexual indiscretions, or poor decisions.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <Moon className="w-5 h-5" /> Depressive Symptoms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">• <span className="font-medium text-slate-900">Anhedonia:</span> Total loss of interest in all activities.</li>
                    <li className="flex items-start gap-2">• <span className="font-medium text-slate-900">Fatigue:</span> Extreme lack of energy or feeling "heavy".</li>
                    <li className="flex items-start gap-2">• <span className="font-medium text-slate-900">Cognitive Fog:</span> Inability to concentrate or make simple choices.</li>
                    <li className="flex items-start gap-2">• <span className="font-medium text-slate-900">Suicidality:</span> Recurrent thoughts of death or self-harm.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 3: Types Content */}
          <TabsContent value="types" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-white">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-red-100 text-red-700">Type I</Badge>
                  <CardTitle className="text-xl">Bipolar I Disorder</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Defined by manic episodes that last at least 7 days. Usually, depressive episodes occur as well, typically lasting at least 2 weeks.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-blue-100 text-blue-700">Type II</Badge>
                  <CardTitle className="text-xl">Bipolar II Disorder</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Defined by a pattern of depressive episodes and hypomanic episodes, but not the full-blown manic episodes of Bipolar I.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-green-100 text-green-700">Cyclothymic</Badge>
                  <CardTitle className="text-xl">Cyclothymia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Periods of hypomanic symptoms as well as periods of depressive symptoms lasting for at least 2 years in adults.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          {/* Tab 5: Lifestyle & Support Content */}
          <TabsContent value="lifestyle" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LifeBuoy className="w-6 h-6 text-emerald-600" /> Maintenance & Support Strategies
                </CardTitle>
                <CardDescription>Daily habits that help prevent relapses.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                      <Sun className="w-5 h-5 text-emerald-600 shrink-0" />
                      <div>
                        <p className="font-bold text-sm">Strict Sleep Hygiene</p>
                        <p className="text-xs text-slate-600">Lack of sleep is the #1 trigger for mania. Maintain a 10 PM - 6 AM routine.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                      <Activity className="w-5 h-5 text-emerald-600 shrink-0" />
                      <div>
                        <p className="font-bold text-sm">Mood Tracking</p>
                        <p className="text-xs text-slate-600">Keep a daily journal of moods to identify patterns before they become episodes.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                      <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                      <div>
                        <p className="font-bold text-sm">Substance Avoidance</p>
                        <p className="text-xs text-slate-600">Alcohol and caffeine can destabilize mood and interfere with medications.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <Users className="w-5 h-5 text-blue-600 shrink-0" />
                      <div>
                        <p className="font-bold text-sm">Support Groups</p>
                        <p className="text-xs text-slate-600">Connecting with others who have Bipolar can reduce the feeling of isolation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Emergency Helpline Section */}
        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Phone className="w-8 h-8 text-red-500 animate-pulse" /> Crisis Support
              </h2>
              <p className="text-slate-400">If you or someone you know is in immediate danger or having suicidal thoughts.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="px-6 py-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
                <p className="text-xs text-slate-400 uppercase tracking-widest">India Helpline</p>
                <p className="text-2xl font-black">9152987821</p>
              </div>
              <div className="px-6 py-4 bg-red-600 rounded-2xl shadow-lg">
                <p className="text-xs text-red-200 uppercase tracking-widest">Emergency</p>
                <p className="text-2xl font-black">112</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full"></div>
        </div>

        {/* Footer Disclaimer */}
        <footer className="mt-12 text-center space-y-4">
          <div className="flex justify-center gap-4">
            <Badge variant="outline">Verified Clinical Data</Badge>
            <Badge variant="outline">2025 Edition</Badge>
          </div>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto italic leading-relaxed">
            Medical Disclaimer: This content is for informational purposes only and does not constitute professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider.
          </p>
        </footer>
      </div>
    </div>
  );
}