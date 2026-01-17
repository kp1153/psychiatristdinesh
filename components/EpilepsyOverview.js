"use client";
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, Zap, Activity, AlertTriangle, Pill, Heart, Shield, 
  Stethoscope, Clock, Users, CheckCircle2, Info, Eye, Microscope 
} from 'lucide-react';

export default function EpilepsyOverview() {
  const [selectedSeizureType, setSelectedSeizureType] = useState(null);

  const seizureTypes = [
    {
      id: 'focal',
      name: 'Focal Seizures',
      color: 'bg-blue-500',
      description: 'Starts in one specific area of the brain.',
      percentage: 60
    },
    {
      id: 'generalized',
      name: 'Generalized Seizures',
      color: 'bg-purple-500',
      description: 'Affects both sides of the brain simultaneously.',
      percentage: 40
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <Badge className="bg-blue-600 text-white mb-4">Medical Reference 2026</Badge>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <Brain className="w-12 h-12 text-blue-600" /> Epilepsy Clinical Guide
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive overview of neurological seizure disorders, diagnostic pathways, and emergency management.
          </p>
        </header>

        {/* Emergency Alert */}
        <Alert className="mb-8 border-2 border-red-200 bg-red-50 shadow-sm">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <AlertTitle className="text-red-800 font-bold">Medical Emergency (Status Epilepticus)</AlertTitle>
          <AlertDescription className="text-red-700">
            If a seizure lasts longer than 5 minutes or occurs in clusters, call emergency services immediately.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-7 mb-8 h-auto p-1 bg-white shadow-sm border">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="types">Types</TabsTrigger>
            <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
            <TabsTrigger value="causes">Causes</TabsTrigger>
            <TabsTrigger value="diagnosis">Diagnosis</TabsTrigger>
            <TabsTrigger value="treatment">Treatment</TabsTrigger>
            <TabsTrigger value="management">Management</TabsTrigger>
          </TabsList>

          {/* 1. Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="border-none ring-1 ring-slate-200 shadow-lg">
              <CardHeader className="bg-slate-900 text-white rounded-t-lg">
                <CardTitle>Understanding Epilepsy</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 text-slate-700 space-y-4">
                <p className="text-lg">
                  Epilepsy is a chronic non-communicable disorder of the brain that affects people of all ages. 
                  It is characterized by recurrent seizures, which are brief episodes of involuntary movement 
                  that may involve a part of the body or the entire body.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-center">
                    <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <p className="text-2xl font-bold">50M+</p>
                    <p className="text-xs text-slate-500">Global Patients</p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100 text-center">
                    <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
                    <p className="text-2xl font-bold">70%</p>
                    <p className="text-xs text-slate-500">Treatable with Medication</p>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-100 text-center">
                    <Activity className="w-6 h-6 mx-auto mb-2 text-amber-600" />
                    <p className="text-2xl font-bold">1 in 10</p>
                    <p className="text-xs text-slate-500">Have 1 Seizure in Life</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 2. Types Tab */}
          <TabsContent value="types" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {seizureTypes.map((type) => (
                <Card key={type.id} className="hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">{type.name}</CardTitle>
                      <Badge className={type.color}>{type.percentage}% Cases</Badge>
                    </div>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Progress value={type.percentage} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 3. Symptoms Tab */}
          <TabsContent value="symptoms" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Eye className="text-amber-500"/> Aura Phase</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">Strange smells, Déjà vu, sudden anxiety, or visual disturbances before an attack.</CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Zap className="text-blue-500"/> Ictal Phase</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">Loss of consciousness, muscle rigidity (tonic), jerking (clonic), or blank staring.</CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2"><Clock className="text-purple-500"/> Postictal Phase</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">Confusion, extreme fatigue, headache, or temporary memory loss after seizure.</CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 4. Causes Tab */}
          <TabsContent value="causes" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-blue-500">
                <CardHeader><CardTitle>Structural/Acquired</CardTitle></CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <li>• Stroke & Vascular Diseases</li>
                  <li>• Head Trauma & Brain Injury</li>
                  <li>• Tumors & Cortical Dysplasia</li>
                  <li>• Infections (Meningitis, Cysticercosis)</li>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-purple-500">
                <CardHeader><CardTitle>Genetic & Unknown</CardTitle></CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <li>• Idiopathic (Unknown origin in 50% cases)</li>
                  <li>• Genetic mutations (Ion channel disorders)</li>
                  <li>• Developmental conditions (Autism)</li>
                  <li>• Metabolic abnormalities</li>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 5. Diagnosis Tab */}
          <TabsContent value="diagnosis" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2 font-bold"><Microscope className="text-blue-600"/> EEG Testing</CardTitle></CardHeader>
                <CardContent className="text-sm">Records electrical activity. Crucial for classifying seizure types and focal points.</CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="flex items-center gap-2 font-bold"><Stethoscope className="text-purple-600"/> Imaging (MRI/CT)</CardTitle></CardHeader>
                <CardContent className="text-sm">Identifies structural causes such as scars, lesions, or vascular abnormalities.</CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 6. Treatment Tab */}
          <TabsContent value="treatment" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white border-b-4 border-blue-600">
                <CardHeader><CardTitle className="text-blue-600 flex items-center gap-2"><Pill /> Medication (AEDs)</CardTitle></CardHeader>
                <CardContent className="text-sm">First-line therapy. Daily dosage to stabilize brain's electrical activity.</CardContent>
              </Card>
              <Card className="bg-white border-b-4 border-purple-600">
                <CardHeader><CardTitle className="text-purple-600 flex items-center gap-2"><Shield /> Resective Surgery</CardTitle></CardHeader>
                <CardContent className="text-sm">Removing the seizure focus area if drugs fail to control symptoms.</CardContent>
              </Card>
              <Card className="bg-white border-b-4 border-emerald-600">
                <CardHeader><CardTitle className="text-emerald-600 flex items-center gap-2"><Heart /> Neuromodulation</CardTitle></CardHeader>
                <CardContent className="text-sm">VNS (Vagus Nerve Stimulation) or DBS for medication-resistant cases.</CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 7. Management Tab */}
          <TabsContent value="management" className="space-y-6">
            <Card className="bg-slate-900 text-white">
              <CardHeader><CardTitle className="flex items-center gap-2 font-bold text-blue-400 underline decoration-blue-400">Seizure First Aid</CardTitle></CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="text-emerald-400 font-bold uppercase tracking-wider">Do:</h4>
                  <p className="text-sm">✅ Roll the person onto their side.</p>
                  <p className="text-sm">✅ Cushion their head with something soft.</p>
                  <p className="text-sm">✅ Remove glasses & clear sharp objects nearby.</p>
                  <p className="text-sm">✅ Time the seizure with a watch.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-red-400 font-bold uppercase tracking-wider">Don't:</h4>
                  <p className="text-sm">❌ NEVER put anything in the person's mouth.</p>
                  <p className="text-sm">❌ Do NOT restrain their movements.</p>
                  <p className="text-sm">❌ Do NOT give water until they are fully awake.</p>
                  <p className="text-sm">❌ Do NOT leave them alone until recovered.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <footer className="mt-20 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
          Copyright © 2026 Epilepsy Awareness Portal. All clinical data follows current WHO protocols.
        </footer>
      </div>
    </div>
  );
}