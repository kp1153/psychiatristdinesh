import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const contacts = [
    { icon: Phone, label: "Phone", value: "944 745 2585", href: "tel:+919447452585" },
    { icon: Mail, label: "Email", value: "drdineshrs@gmail.com", href: "mailto:drdineshrs@gmail.com" },
    { icon: MapPin, label: "Address", value: "House No.7, Pearl Garden, Thamalam, Poojappura P.O, Thiruvananthapuram", href: null }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="bg-teal-700 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </div>
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          {contacts.map(({ icon: Icon, label, value, href }, i) => (
            <div key={i} className="flex items-center gap-4 pb-6 border-b last:border-0 last:pb-0">
              <Icon className="w-8 h-8 text-teal-700 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{label}</h3>
                {href ? (
                  <a href={href} className="text-teal-600 hover:text-teal-800 transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="text-gray-700">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}