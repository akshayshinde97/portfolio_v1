import React from 'react';
import { ArrowRight, Box, Zap, Asterisk } from 'lucide-react';

const venturesData = [
  {
    title: 'FramerIt',
    description:
      'Create stunning Framer websites in minutes with our Clean & Responsive Templates, and establish an online presence effortlessly.',
    icon: <Box className="w-5 h-5" />,
    link: '#',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDydV7Jm9kUWNqx8VnSfZxcasRBClTXvdxLF1TyY1PXY4VbUu9H9LLFslIgkxvi54gE8HINVQLEAuRPtgXZ-HPmSBOcrPgxWI-zr-mZUWbIULTPzmcXs_0IoZzT0-qSCvFn5-U0wECW2842yw6z4Ao4BJEH-vQ1ApM92x14_Zs7hKS9qQTDTA6Q5fJkovP_yS_2VqDjMGG075Dz-H6DRob1V8bLuxqYhaS35EDLf59facXP6evK76WkaNHMeNwLszUiKgPNqkxoXAAv',
  },
  {
    title: 'Framer',
    description:
      'A true design canvas, not just a visual HTML editor. Framer is the website builder loved by designers worldwide.',
    icon: <Zap className="w-5 h-5" />,
    link: '#',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCsKBN1Szyk-Vmj2yDfHCAzkHvYW27OZM8vsevzs4BySY7pIBTcmGkaTzArTEYy7c07jFbOSxgh18ALBx2loKuBFMfFr5WKmkBmqElhH7LOZLHC-tDUaeGDLtNCGOp1-LaWoInz-hv_1lJnH0BDRjtaFeHxED1Jk5m35hCRU8QY9CT7nbnj1vBm3M4qlwFiTp3u6qmdcY8ctNxp_2Sh06cUnUs3o606xwE5KqRm84f04E7wh5LEMCz64nfk8Tm__XmWvW7x-XWBy1MS',
  },
  {
    title: 'Contra',
    description:
      'Contra is a network of independent creatives, connecting you with the talent and tools to get work underway.',
    icon: <Asterisk className="w-5 h-5" />,
    link: '#',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAvlMJ4RexKSMuHEYN7fSr5zdwsrOtR8N7jCAzVhD6aHaoExX4jV3GOyXpqCBb0fuK6WiKJB8g1ly-SXHaGAD_e5NMHZgh9ZbalHyNAF8aMXFWGUj6MQvJhB6KSsJ9RB1EzmYwlXLE6Ao8iQTfNHBX-OYRGCkR2x66nBSKGICZppR4gFYoDt78juhv-UpUzqgSz4sbB93bTflkWx6NEYE0tbh9kL3c82LwuzqV-UxQj1sVv-XVww8Fgi1R8rqlehHro5uUM6sp3-imj',
  },
];

export const Ventures: React.FC = () => {
  return (
    <div className="space-y-8">
      {venturesData.map((venture, index) => (
        <div
          key={index}
          className="group relative bg-white dark:bg-surface-dark rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col space-y-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">
                {venture.icon}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {venture.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {venture.description}
                </p>
              </div>
              <a
                href={venture.link}
                className="inline-flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-white hover:opacity-70 transition-opacity pt-2"
              >
                <span>Visit site</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="relative aspect-video md:aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src={venture.image}
                alt={venture.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};