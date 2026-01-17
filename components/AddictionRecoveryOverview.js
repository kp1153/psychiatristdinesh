"use client";
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  Wine, Cigarette, Pill, Brain, Heart, AlertTriangle, 
  Shield, Users, Zap, Activity, Phone, BookOpen, Sun, Target
} from 'lucide-react';

export default function AddictionRecoveryEnglish() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-12 h-12 text-orange-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Addiction Recovery
            </h1>
            <Heart className="w-12 h-12 text-amber-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guide to overcoming addiction—understanding types, symptoms, and the journey to a clean life.
          </p>
        </header>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="overview" className="flex items-center gap-2"><Brain className="w-4 h-4" /> Overview</TabsTrigger>
            <TabsTrigger value="types" className="flex items-center gap-2"><Pill className="w-4 h-4" /> Types</TabsTrigger>
            <TabsTrigger value="signs" className="flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Signs</TabsTrigger>
            <TabsTrigger value="treatment" className="flex items-center gap-2"><Activity className="w-4 h-4" /> Treatment</TabsTrigger>
            <TabsTrigger value="recovery" className="flex items-center gap-2"><Heart className="w-4 h-4" /> Recovery</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
                <CardTitle className="text-2xl">What is Addiction?</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Addiction is a complex brain disorder characterized by compulsive substance use or behaviors despite harmful consequences. It affects the brain's reward, motivation, and memory circuits.
                </p>
                <p className="text-gray-700 leading-relaxed italic">
                  "Addiction is a medical illness, not a moral failure. With proper treatment and support, full recovery is possible."
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-600"><Users className="w-5 h-5" /> Prevalence</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 space-y-2">
                  <p>• Millions affected by alcohol & drugs globally.</p>
                  <p>• Rapidly increasing among youth.</p>
                  <p>• Impacts families and communities deeply.</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-600"><Brain className="w-5 h-5" /> Primary Causes</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 space-y-2">
                  <p>• Genetic predisposition (40-60%).</p>
                  <p>• Environmental triggers & stress.</p>
                  <p>• Underlying mental health conditions.</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-yellow-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-yellow-600"><Shield className="w-5 h-5" /> The Hope</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 space-y-2">
                  <p>• Science-backed treatment options.</p>
                  <p>• Support groups provide a safety net.</p>
                  <p>• Thousands live a successful sober life.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Types Tab */}
          <TabsContent value="types" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-md">
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2"><Wine className="w-5 h-5 text-red-600" /> Alcohol</CardTitle>
                  <Badge className="w-fit bg-red-500">Most Common</Badge>
                </CardHeader>
                <CardContent className="pt-4 text-sm space-y-2">
                  <p><strong>Impacts:</strong> Liver cirrhosis, heart disease, brain damage, and family dysfunction.</p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader className="bg-slate-50">
                  <CardTitle className="flex items-center gap-2"><Cigarette className="w-5 h-5 text-slate-600" /> Tobacco</CardTitle>
                  <Badge className="w-fit bg-slate-500">Highest Mortality</Badge>
                </CardHeader>
                <CardContent className="pt-4 text-sm space-y-2">
                  <p><strong>Impacts:</strong> Lung cancer, oral cancer, COPD, and stroke. One of the hardest habits to break.</p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="flex items-center gap-2"><Pill className="w-5 h-5 text-purple-600" /> Narcotics & Illicit Drugs</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 text-sm space-y-3">
                  <p><strong>Opioids:</strong> Heroin, Smack, Opium. High risk of fatal overdose.</p>
                  <p><strong>Stimulants:</strong> Cocaine, Meth. Causes severe cardiovascular and mental stress.</p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="flex items-center gap-2"><Zap className="w-5 h-5 text-blue-600" /> Prescription Abuse</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 text-sm space-y-2">
                  <p>Misuse of painkillers (Opioids), sedatives (Benzos), and cough syrups containing Codeine.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Signs Tab */}
          <TabsContent value="signs" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-red-500">
                <CardHeader><CardTitle>Physical Signs</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-1 text-gray-600">
                  <li>• Bloodshot eyes / dilated pupils</li>
                  <li>• Sudden weight changes</li>
                  <li>• Tremors, slurred speech, or sweating</li>
                  <li>• Poor physical grooming/hygiene</li>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader><CardTitle>Behavioral Signs</CardTitle></CardHeader>
                <CardContent className="text-sm space-y-1 text-gray-600">
                  <li>• Secretiveness and lying</li>
                  <li>• Neglecting responsibilities (work/school)</li>
                  <li>• Financial problems or stealing</li>
                  <li>• Loss of interest in former hobbies</li>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Treatment Tab */}
          <TabsContent value="treatment" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg border-indigo-100">
                <CardHeader className="bg-indigo-50">
                  <CardTitle>1. Medical Detox</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 text-sm text-gray-600">
                  <p className="mb-2 font-bold text-indigo-700">The First Step</p>
                  <p>Safely clearing substances from the body under 24/7 medical supervision to manage dangerous withdrawal symptoms.</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-emerald-100">
                <CardHeader className="bg-emerald-50">
                  <CardTitle>2. Behavioral Therapies</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 text-sm text-gray-600">
                  <p className="mb-2 font-bold text-emerald-700">Changing the Mindset</p>
                  <p>Cognitive Behavioral Therapy (CBT), Motivational Interviewing, and Family Therapy to address the roots of addiction.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Recovery Tab */}
          <TabsContent value="recovery" className="space-y-6">
            <Card className="bg-slate-900 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Sun className="text-amber-400" /> Daily Sobriety Checklist</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2"><Target className="w-4 h-4" /> Avoid Triggers</div>
                <div className="flex items-center gap-2"><Activity className="w-4 h-4" /> Exercise Daily</div>
                <div className="flex items-center gap-2"><Users className="w-4 h-4" /> Attend Meetings</div>
                <div className="flex items-center gap-2"><Heart className="w-4 h-4" /> Practice Patience</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Emergency Section */}
        <div className="mt-12">
          <Card className="shadow-2xl bg-gradient-to-r from-red-600 to-orange-600 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Phone className="w-8 h-8 animate-pulse" /> 
                Emergency Support & Helplines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <h3 className="font-bold mb-2">India Helplines</h3>
                  <p className="text-sm">• National Drug Helpline: <strong>1800-11-0031</strong></p>
                  <p className="text-sm">• NIMHANS Support: <strong>080-26995000</strong></p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <h3 className="font-bold mb-2">Global Helplines</h3>
                  <p className="text-sm">• SAMHSA (USA): <strong>1-800-662-HELP</strong></p>
                  <p className="text-sm">• NHS (UK): <strong>111</strong></p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}