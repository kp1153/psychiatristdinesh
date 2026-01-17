"use client";
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  Moon, Pill, Leaf, Brain, Activity, Stethoscope, 
  CheckCircle2, ShieldAlert, Clock, AlertCircle 
} from 'lucide-react';

export default function InsomniaOverview() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Medical Hero Header */}
        <header className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-100 border-none px-4 py-1">
            Clinical Resource 2026
          </Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Insomnia <span className="text-indigo-600">Disorder</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Evidence-based clinical guide to diagnosis, newest pharmacological treatments (DORAs), 
            and Gold-Standard CBT-I protocols.
          </p>
        </header>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12 h-auto p-1 bg-slate-200/50">
            <TabsTrigger value="overview" className="py-3 font-semibold">Overview</TabsTrigger>
            <TabsTrigger value="diagnosis" className="py-3 font-semibold">Diagnosis</TabsTrigger>
            <TabsTrigger value="medications" className="py-3 font-semibold">Pharmacology</TabsTrigger>
            <TabsTrigger value="natural" className="py-3 font-semibold">Natural</TabsTrigger>
            <TabsTrigger value="cbt" className="py-3 font-semibold">CBT-I</TabsTrigger>
          </TabsList>

          {/* Tab 1: Overview */}
          <TabsContent value="overview" className="space-y-8 outline-none">
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 border-none shadow-sm ring-1 ring-slate-200">
                <CardHeader>
                  <CardTitle className="text-3xl text-slate-800">The Hyperarousal State</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 text-lg leading-relaxed space-y-4">
                  <p>
                    Insomnia is no longer viewed just as a "lack of sleep," but as a <strong>24-hour hyperarousal disorder</strong>. 
                    It involves both a failure of sleep-inducing systems and an overactivity of wake-promoting systems in the brain.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                      <div className="flex items-center gap-2 mb-2 text-indigo-600 font-bold">
                        <Activity className="w-5 h-5" /> PHYSIOLOGICAL
                      </div>
                      <p className="text-sm text-gray-700">Elevated cortisol levels and increased metabolic rate throughout the night.</p>
                    </div>
                    <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                      <div className="flex items-center gap-2 mb-2 text-rose-600 font-bold">
                        <Brain className="w-5 h-5" /> COGNITIVE
                      </div>
                      <p className="text-sm text-gray-700">Sleep-related anxiety and "conditioned arousal" where the bed becomes a trigger for wakefulness.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* सुधारा हुआ Clinical Markers कार्ड - अब बिल्कुल साफ़ दिखेगा */}
              <Card className="bg-slate-900 text-white border-none shadow-xl ring-2 ring-indigo-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white uppercase tracking-wider text-sm font-bold">
                    <AlertCircle className="w-5 h-5 text-indigo-400" /> Clinical Markers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Sleep Latency > 30 minutes",
                    "Wake After Sleep Onset (WASO) > 30 mins",
                    "Early morning awakening",
                    "Significant daytime impairment",
                    "Mood irritability & fatigue"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm border-b border-slate-800 pb-3 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" strokeWidth={3} />
                      <span className="font-medium text-rose-600">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 2: Diagnosis */}
          <TabsContent value="diagnosis" className="space-y-6">
            <Card className="border-none shadow-md overflow-hidden">
              <div className="bg-slate-900 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Stethoscope className="w-8 h-8 text-indigo-400" />
                  <h3 className="text-3xl font-bold">DSM-5-TR Diagnostic Criteria</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-white/10 rounded-xl">
                    <p className="text-indigo-300 font-bold mb-1">Frequency</p>
                    <p className="text-xl">3+ Nights / Week</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl">
                    <p className="text-indigo-300 font-bold mb-1">Duration</p>
                    <p className="text-xl">3+ Months</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl">
                    <p className="text-indigo-300 font-bold mb-1">Context</p>
                    <p className="text-xl">Adequate Opportunity</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Tab 3: Pharmacology */}
          <TabsContent value="medications" className="space-y-6">
            <Alert className="bg-rose-50 border-rose-200 border-l-4">
              <ShieldAlert className="h-5 w-5 text-rose-600" />
              <AlertTitle className="text-rose-900 font-bold">Safety Protocol</AlertTitle>
              <AlertDescription className="text-rose-800">
                Always prioritize non-pharmacological therapy (CBT-I) first. Use medications only as adjunct therapy.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-indigo-200 shadow-md">
                <CardHeader className="bg-indigo-50/50">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-indigo-900 flex items-center gap-2 font-bold text-xl">
                      DORAs (The Modern Class)
                    </CardTitle>
                    <Badge className="bg-indigo-600">Recommended</Badge>
                  </div>
                  <CardDescription>Dual Orexin Receptor Antagonists: These turn off the "wake" signal rather than forcing sedation.</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="p-4 bg-white border rounded-xl hover:border-indigo-400 transition-colors">
                    <p className="font-bold text-lg text-slate-900">Daridorexant (Quviviq)</p>
                    <p className="text-sm text-gray-700 mb-2">The latest FDA-approved DORA (2022-2024). Proven to improve daytime performance without the "hangover" effect.</p>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">Dose: 25-50mg</span>
                  </div>
                  <div className="p-4 bg-white border rounded-xl">
                    <p className="font-bold text-lg text-slate-900">Lemborexant (Dayvigo)</p>
                    <p className="text-sm text-gray-700">Highly effective for both falling asleep and staying asleep. Less respiratory depression risk.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md border-slate-200">
                <CardHeader className="bg-slate-50">
                  <CardTitle className="text-slate-900 flex items-center gap-2 font-bold text-xl">
                    Sedative-Hypnotics (Z-Drugs)
                  </CardTitle>
                  <CardDescription>Traditional GABA-A modulators for short-term relief.</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="p-4 bg-white border rounded-xl">
                    <p className="font-bold text-lg text-slate-900">Zolpidem (Ambien/Edluar)</p>
                    <p className="text-sm text-gray-700">Standard for sleep onset. Requires caution due to risk of "sleep-driving" or parasomnias.</p>
                  </div>
                  <div className="p-4 bg-white border rounded-xl">
                    <p className="font-bold text-lg text-slate-900">Eszopiclone (Lunesta)</p>
                    <p className="text-sm text-gray-700">Effective for maintenance. Common side effect: metallic taste (parageusia).</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 4: Natural & Herbal */}
          <TabsContent value="natural" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-emerald-700">
                    <Leaf className="w-5 h-5" /> Melatonin
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700 leading-relaxed">
                  Best used for circadian disruptions (Jet lag, shift work). Dose: 0.5mg to 5mg taken 2 hours before bed.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-emerald-700">
                    <Activity className="w-5 h-5" /> Magnesium
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700 leading-relaxed">
                  Magnesium Glycinate helps regulate neurotransmitters that calm the nervous system.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-emerald-700">
                    <Moon className="w-5 h-5" /> Valerian Root
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700 leading-relaxed">
                  Mild sedative properties; some evidence for reducing time to fall asleep over long-term use.
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 5: CBT-I */}
          <TabsContent value="cbt" className="space-y-6">
            <Card className="border-indigo-600 border-2 shadow-2xl overflow-hidden">
              <div className="bg-indigo-600 text-white p-6">
                <CardTitle className="text-2xl">First-Line Therapy: CBT-I</CardTitle>
                <p className="opacity-90 mt-2 font-medium italic">Better long-term outcomes than any medication.</p>
              </div>
              <CardContent className="pt-8 grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-indigo-100 p-2 rounded-lg h-fit text-indigo-700 font-bold">01</div>
                    <div>
                      <p className="font-bold text-lg">Stimulus Control</p>
                      <p className="text-sm text-gray-700">Get out of bed if not asleep in 20 mins. Bed is ONLY for sleep and intimacy.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-indigo-100 p-2 rounded-lg h-fit text-indigo-700 font-bold">02</div>
                    <div>
                      <p className="font-bold text-lg">Sleep Restriction</p>
                      <p className="text-sm text-gray-700">Strictly limiting time in bed to the actual hours spent sleeping to build "sleep pressure".</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <h4 className="font-bold mb-4 flex items-center gap-2"><Clock className="w-5 h-5 text-indigo-600" /> Sleep Hygiene</h4>
                  <ul className="text-sm space-y-3 text-gray-700">
                    <li className="flex gap-2">🟢 Keep room at 18°C (65°F)</li>
                    <li className="flex gap-2">🟢 No blue light 60 mins before bed</li>
                    <li className="flex gap-2">🟢 Zero caffeine after 12:00 PM</li>
                    <li className="flex gap-2">🟢 Direct sunlight exposure within 30 mins of waking</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Closing Footer */}
        <footer className="mt-20 pt-10 border-t border-slate-200 text-center">
          <p className="text-gray-600 text-sm italic mb-6">
            Clinical Resource Disclaimer: This platform provides medical information based on 2026 guidelines. 
            It is not a substitute for professional clinical diagnosis.
          </p>
          <div className="flex justify-center gap-6">
            <Badge variant="outline" className="text-gray-600">FDA Approved Data</Badge>
            <Badge variant="outline" className="text-gray-600">2026 Treatment Protocols</Badge>
          </div>
        </footer>
      </div>
    </div>
  );
}