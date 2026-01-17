import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dr. Dinesh R.S. | Psychiatrist & Homoeopath, Thiruvananthapuram",
  description:
    "Dr. Dinesh R.S. - Experienced Consultant Homoeopath & Psychiatrist in Thiruvananthapuram. Expert treatment for Depression, Anxiety, Bipolar Disorder, Schizophrenia, OCD, ADHD, PTSD, Insomnia, Migraine, Epilepsy. Mental health consultation and treatment. Phone: 9447452585",

  keywords: [
    "Dr Dinesh RS Thiruvananthapuram",
    "Psychiatrist Thiruvananthapuram",
    "Homoeopath Thiruvananthapuram",
    "Mental Health Doctor Thiruvananthapuram",
    "Depression Treatment Thiruvananthapuram",
    "Anxiety Treatment Thiruvananthapuram",
    "Best Psychiatrist in Thiruvananthapuram",
    "Bipolar Disorder Treatment Kerala",
    "Schizophrenia Treatment Thiruvananthapuram",
    "OCD Treatment Thiruvananthapuram",
    "ADHD Treatment Thiruvananthapuram",
    "PTSD Treatment Thiruvananthapuram",
    "Migraine Treatment Thiruvananthapuram",
    "Epilepsy Treatment Thiruvananthapuram",
    "Insomnia Treatment Thiruvananthapuram",
    "Mental Health Trivandrum",
    "Psychiatrist Trivandrum",
    "Homoeopathy Doctor Trivandrum",
  ],

  authors: [{ name: "Dr. Dinesh R.S." }],

  openGraph: {
    title: "Dr. Dinesh R.S. | Psychiatrist & Homoeopath, Thiruvananthapuram",
    description:
      "Expert treatment for mental health and neurological disorders in Thiruvananthapuram. Depression, Anxiety, OCD, ADHD, Migraine, Epilepsy treatment.",
    images: ["https://www.drdineshrs.in/og-image.jpg"],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Dinesh R.S. | Psychiatrist, Thiruvananthapuram",
    description: "Expert mental health treatment in Thiruvananthapuram",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Healthcare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Dinesh R.S.",
              description:
                "Consultant Homoeopath & Psychiatrist specializing in mental health disorders",
              telephone: "+91-9447452585",
              email: "drdineshrs@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "House No.7, Pearl Garden, Thamalam, Poojappura P.O",
                addressLocality: "Thiruvananthapuram",
                addressRegion: "Kerala",
                addressCountry: "IN",
              },
              medicalSpecialty: ["Psychiatry", "Homoeopathy"],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}