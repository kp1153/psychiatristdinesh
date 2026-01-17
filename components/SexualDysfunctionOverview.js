"use client";
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Brain, Pill, Activity, AlertTriangle, Zap, Shield, Stethoscope, MessageCircle } from 'lucide-react';

export default function SexualDysfunctionOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-12 h-12 text-rose-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Sexual Dysfunction
            </h1>
            <Users className="w-12 h-12 text-pink-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete guide to sexual health - types, causes, symptoms and treatment
          </p>
        </header>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="types" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Types
            </TabsTrigger>
            <TabsTrigger value="causes" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Causes
            </TabsTrigger>
            <TabsTrigger value="symptoms" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Symptoms
            </TabsTrigger>
            <TabsTrigger value="treatment" className="flex items-center gap-2">
              <Pill className="w-4 h-4" />
              Treatment
            </TabsTrigger>
            <TabsTrigger value="support" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Support
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50">
                <CardTitle className="text-2xl">What is Sexual Dysfunction?</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sexual dysfunction is a common problem that can affect men and women of any age. It refers to difficulty during any stage of sexual activity - desire, arousal, orgasm, or satisfaction.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Sexual dysfunction can be caused by physical, psychological, or both factors. It can affect relationships and reduce self-esteem, but most cases can be successfully treated.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-rose-500" />
                    Prevalence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Men: 31% (various types)</li>
                    <li>• Women: 43% (various types)</li>
                    <li>• Increases with age</li>
                    <li>• Most cases are treatable</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-pink-500" />
                    Main Causes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Physical health problems</li>
                    <li>• Psychological factors</li>
                    <li>• Medication side effects</li>
                    <li>• Hormonal imbalances</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-red-500" />
                    Important Facts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Don't be embarrassed, talk to a doctor</li>
                    <li>• Most cases are treatable</li>
                    <li>• Partner support is crucial</li>
                    <li>• Lifestyle changes help</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-rose-50 border-rose-200">
              <Heart className="h-4 w-4 text-rose-600" />
              <AlertTitle>Remember</AlertTitle>
              <AlertDescription>
                Sexual health is an important part of overall health. Talking about sexual problems is not embarrassing. Seeking professional help can improve the situation.
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Types Tab */}
          <TabsContent value="types" className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <Brain className="h-4 w-4 text-blue-600" />
              <AlertTitle>Main Types of Sexual Dysfunction</AlertTitle>
              <AlertDescription>
                Sexual dysfunction is divided into four main categories, affecting different stages of the sexual response cycle.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle>1. Desire Disorders</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-purple-500">Most Common</Badge>
                  <p className="text-sm text-gray-700 mb-3">Lack or absence of interest in sexual activity</p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">In Women:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Hypoactive Sexual Desire Disorder (HSDD)</li>
                        <li>• Lack of sexual thoughts or fantasies</li>
                        <li>• Reluctance to initiate sexual activity</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">In Men:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Low libido</li>
                        <li>• Lack of interest in sexual activity</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle>2. Arousal Disorders</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-blue-500">Physical Response</Badge>
                  <p className="text-sm text-gray-700 mb-3">Difficulty achieving or maintaining sexual arousal</p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">In Men:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• <strong>Erectile Dysfunction (ED)</strong></li>
                        <li>• Inability to achieve or maintain erection</li>
                        <li>• More common in 40+ age</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">In Women:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Lack of vaginal lubrication</li>
                        <li>• Blood flow issues to genital area</li>
                        <li>• Difficulty achieving physical arousal</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-rose-50 to-red-50">
                  <CardTitle>3. Orgasm Disorders</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-rose-500">Difficulty with Satisfaction</Badge>
                  <p className="text-sm text-gray-700 mb-3">Delay or inability to reach orgasm</p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">In Men:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• <strong>Premature Ejaculation</strong></li>
                        <li>• <strong>Delayed Ejaculation</strong></li>
                        <li>• <strong>Retrograde Ejaculation</strong></li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">In Women:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Anorgasmia - no orgasm</li>
                        <li>• Difficulty with orgasm despite adequate stimulation</li>
                        <li>• Takes too long to reach orgasm</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                  <CardTitle>4. Pain Disorders</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Badge className="mb-3 bg-amber-500">Pain during sexual activity</Badge>
                  <p className="text-sm text-gray-700 mb-3">Pain associated with sexual activity</p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">In Women (more common):</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• <strong>Dyspareunia</strong> - pain during intercourse</li>
                        <li>• <strong>Vaginismus</strong> - vaginal muscle spasms</li>
                        <li>• Pain during penetration</li>
                        <li>• Burning or discomfort</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">In Men:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Pain in penis</li>
                        <li>• Pain during ejaculation</li>
                        <li>• Peyronie's disease (penile curvature)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          {/* Causes Tab */}
          <TabsContent value="causes" className="space-y-6">
            <Alert className="bg-amber-50 border-amber-200">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertTitle>Multifactorial Problem</AlertTitle>
              <AlertDescription>
                Sexual dysfunction often results from a combination of physical and psychological factors. Sometimes one problem leads to another.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-red-50 to-rose-50">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-red-600" />
                    Physical Causes
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">Medical Conditions:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• <strong>Diabetes</strong> - damages nerves and blood vessels</li>
                        <li>• <strong>Heart disease</strong> - reduced blood flow</li>
                        <li>• <strong>High blood pressure</strong></li>
                        <li>• <strong>Neurological disorders</strong> (Parkinson's, MS)</li>
                        <li>• <strong>Hormonal imbalances</strong> (thyroid, testosterone)</li>
                        <li>• <strong>Kidney or liver disease</strong></li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Other Physical Factors:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Obesity</li>
                        <li>• Smoking and alcohol</li>
                        <li>• Drug use</li>
                        <li>• Surgery or injury</li>
                        <li>• Menopause</li>
                        <li>• Pregnancy and childbirth</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    Psychological Causes
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">Mental Health:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• <strong>Depression</strong></li>
                        <li>• <strong>Anxiety</strong></li>
                        <li>• <strong>Stress</strong> (work, financial, family)</li>
                        <li>• <strong>Low self-esteem</strong></li>
                        <li>• <strong>Past sexual trauma</strong></li>
                        <li>• <strong>Guilt or shame</strong></li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Relationship Issues:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Conflict with partner</li>
                        <li>• Lack of communication</li>
                        <li>• Lack of trust</li>
                        <li>• Different sexual expectations</li>
                        <li>• Relationship dissatisfaction</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Performance Anxiety:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Fear of past failures</li>
                        <li>• Worry about not satisfying partner</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="flex items-center gap-2">
                    <Pill className="w-5 h-5 text-blue-600" />
                    Medication Side Effects
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-gray-700 mb-3">Many medications can affect sexual function:</p>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• <strong>Antidepressants</strong> (SSRI, SNRI)</li>
                    <li>• <strong>Blood pressure medications</strong></li>
                    <li>• <strong>Antihistamines</strong></li>
                    <li>• <strong>Antipsychotics</strong></li>
                    <li>• <strong>Chemotherapy drugs</strong></li>
                    <li>• <strong>Hormone medications</strong></li>
                    <li>• <strong>Pain medications</strong> (opioids)</li>
                  </ul>
                  <Alert className="mt-3 bg-yellow-50 border-yellow-200">
                    <AlertDescription className="text-xs">
                      If you think medication is causing sexual problems, talk to your doctor. Don't stop medication on your own.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    Lifestyle Factors
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• <strong>Smoking</strong> - damages blood vessels</li>
                    <li>• <strong>Excessive alcohol</strong> - reduces sexual response</li>
                    <li>• <strong>Drug use</strong> (marijuana, cocaine, etc.)</li>
                    <li>• <strong>Poor diet</strong></li>
                    <li>• <strong>Lack of exercise</strong></li>
                    <li>• <strong>Obesity</strong></li>
                    <li>• <strong>Lack of sleep</strong></li>
                    <li>• <strong>Excessive stress</strong></li>
                    <li>• <strong>Too much cycling</strong> (in men)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Symptoms Tab */}
          <TabsContent value="symptoms" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle>Symptoms in Men</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div>
                      <Badge className="mb-2">Erection Problems</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Inability to achieve erection</li>
                        <li>• Difficulty maintaining erection</li>
                        <li>• Less rigid erection</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">Ejaculation Problems</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Premature ejaculation (less than 1 minute)</li>
                        <li>• Delayed or no ejaculation</li>
                        <li>• Retrograde ejaculation</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">Lack of Desire</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• No interest in sexual activity</li>
                        <li>• Low libido</li>
                        <li>• Lack of sexual fantasies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50">
                  <CardTitle>Symptoms in Women</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div>
                      <Badge className="mb-2">Arousal Problems</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Insufficient vaginal lubrication</li>
                        <li>• Lack of swelling in genital area</li>
                        <li>• Difficulty achieving physical arousal</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">Orgasm Problems</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Difficulty or inability to reach orgasm</li>
                        <li>• Weak or delayed orgasm</li>
                        <li>• Reduced orgasm intensity</li>
                      </ul>
                    </div>
                    <div>
                     <Badge className="mb-2">Pain and Discomfort</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Pain during intercourse (Dyspareunia)</li>
                        <li>• Vaginal muscle spasms (Vaginismus)</li>
                        <li>• Burning or itching</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">Lack of Desire</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• No interest in sexual activity</li>
                        <li>• Lack of sexual thoughts</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-red-50 border-red-200">
              <Stethoscope className="h-4 w-4 text-red-600" />
              <AlertTitle>When to See a Doctor</AlertTitle>
              <AlertDescription>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• If sexual problems are persistent or recurring</li>
                  <li>• If it's causing concern for you or your partner</li>
                  <li>• If it's affecting your relationship</li>
                  <li>• If there are other symptoms (pain, bleeding, abnormal discharge)</li>
                </ul>
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Treatment Tab */}
          <TabsContent value="treatment" className="space-y-6">
            <Alert className="bg-green-50 border-green-200">
              <Shield className="h-4 w-4 text-green-600" />
              <AlertTitle>Good News</AlertTitle>
              <AlertDescription>
                Most cases of sexual dysfunction can be successfully treated. Treatment depends on the underlying cause.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle>Medical Treatment</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <Badge className="mb-2">Medications for Men</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• <strong>PDE5 inhibitors</strong> (Viagra, Cialis, Levitra) - for ED</li>
                        <li>• <strong>Testosterone replacement</strong> - for low testosterone</li>
                        <li>• <strong>Antidepressants</strong> - for premature ejaculation (SSRI)</li>
                        <li>• <strong>Alprostadil injections</strong> - for ED</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">Medications for Women</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• <strong>Hormone therapy</strong> (Estrogen, testosterone)</li>
                        <li>• <strong>Flibanserin (Addyi)</strong> - for low libido</li>
                        <li>• <strong>Bremelanotide (Vyleesi)</strong> - for desire</li>
                        <li>• <strong>Vaginal lubricants</strong> - for dryness</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">Other Medical Options</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Vacuum devices (for men)</li>
                        <li>• Penile implants (for severe ED)</li>
                        <li>• Pelvic floor therapy</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle>Psychological Treatment</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <Badge className="mb-2">Therapy</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• <strong>Sex therapy</strong> - specialized sexual counseling</li>
                        <li>• <strong>Cognitive Behavioral Therapy (CBT)</strong></li>
                        <li>• <strong>Couples counseling</strong> - with partner</li>
                        <li>• <strong>Psychotherapy</strong> - for underlying issues</li>
                      </ul>
                    </div>
                    <div>
                      <Badge className="mb-2">Techniques</Badge>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Sensate focus exercises</li>
                        <li>• Mindfulness and meditation</li>
                        <li>• Communication skills training</li>
                        <li>• Stress management</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle>Lifestyle Changes</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• <strong>Regular exercise</strong> - improves blood flow and mood</li>
                    <li>• <strong>Healthy diet</strong> - balanced nutrition</li>
                    <li>• <strong>Quit smoking</strong></li>
                    <li>• <strong>Limit alcohol</strong></li>
                    <li>• <strong>Reduce stress</strong> - yoga, meditation</li>
                    <li>• <strong>Adequate sleep</strong> - 7-9 hours</li>
                    <li>• <strong>Weight management</strong></li>
                    <li>• <strong>Communicate with partner</strong></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                  <CardTitle>Alternative Treatments</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-gray-700 mb-3">Some natural options (consult doctor):</p>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• <strong>L-arginine</strong> - improves blood flow</li>
                    <li>• <strong>Ginseng</strong> - traditional remedy</li>
                    <li>• <strong>Yohimbine</strong> - for ED</li>
                    <li>• <strong>Maca root</strong> - for libido</li>
                    <li>• <strong>Acupuncture</strong></li>
                    <li>• <strong>Pelvic floor exercises</strong> (Kegels)</li>
                  </ul>
                  <Alert className="mt-3 bg-yellow-50 border-yellow-200">
                    <AlertDescription className="text-xs">
                      Always consult a doctor before taking supplements, especially if you're on other medications.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    Partner Communication
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-gray-700 mb-3">Open and honest communication is crucial:</p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1 text-green-700">✓ Do:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Share your feelings</li>
                        <li>• Listen and understand</li>
                        <li>• Find solutions together</li>
                        <li>• Be patient</li>
                        <li>• Explore other ways of physical intimacy</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1 text-red-700">✗ Don't:</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Don't blame</li>
                        <li>• Don't criticize</li>
                        <li>• Don't avoid the issue</li>
                        <li>• Don't struggle alone with this problem</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-purple-600" />
                    Self-Care
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• <strong>Self-compassion</strong> - be kind to yourself</li>
                    <li>• Have <strong>realistic expectations</strong></li>
                    <li>• <strong>Stress management</strong> - relaxation techniques</li>
                    <li>• <strong>Positive body image</strong></li>
                    <li>• Maintain <strong>hobbies and interests</strong></li>
                    <li>• Maintain <strong>social connections</strong></li>
                    <li>• Don't hesitate to seek <strong>professional help</strong></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle className="flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-green-600" />
                    Professional Help
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-gray-700 mb-3">Who to consult:</p>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• <strong>Primary care doctor</strong> - initial evaluation</li>
                    <li>• <strong>Urologist</strong> - for men's problems</li>
                    <li>• <strong>Gynecologist</strong> - for women's problems</li>
                    <li>• <strong>Endocrinologist</strong> - for hormonal issues</li>
                    <li>• <strong>Sex therapist</strong> - specialized counseling</li>
                    <li>• <strong>Psychologist/Psychiatrist</strong> - for mental health</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-rose-50 to-red-50">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-rose-600" />
                    Remember
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>• Sexual health is part of overall health</li>
                    <li>• Sexual problems are very common</li>
                    <li>• Nothing to be embarrassed about</li>
                    <li>• Most cases are treatable</li>
                    <li>• May require time and patience</li>
                    <li>• You're not alone - help is available</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Alert className="bg-blue-50 border-blue-200">
              <Heart className="h-4 w-4 text-blue-600" />
              <AlertTitle>Positive Outlook</AlertTitle>
              <AlertDescription>
                Sexual dysfunction is a medical condition, not a personal failure. With proper treatment and support, most people can regain a satisfying sexual life. The first step is seeking help.
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}