'use client';

import ScrollAnimation from './ScrollAnimation';
import { useTranslations } from 'next-intl';

export default function SeeItInAction() {
  const t = useTranslations('seeItInAction');

  const screenshots = [
    {
      title: t('screenshots.dailyCheckIn.title'),
      description: t('screenshots.dailyCheckIn.description'),
      placeholder: t('screenshots.dailyCheckIn.placeholder')
    },
    {
      title: t('screenshots.easyOnboarding.title'),
      description: t('screenshots.easyOnboarding.description'),
      placeholder: t('screenshots.easyOnboarding.placeholder')
    },
    {
      title: t('screenshots.settings.title'),
      description: t('screenshots.settings.description'),
      placeholder: t('screenshots.settings.placeholder')
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-[#FAF7F2] border-t border-[#E5DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <ScrollAnimation key={index} delay={index * 200}>
              <div className="flex flex-col max-w-xs mx-auto lg:max-w-none">
                <div className="bg-gray-900 p-2 rounded-[2.75rem] shadow-2xl mb-6">
                  <div className="aspect-[1290/2796] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#6B9AC4] to-[#4A7BA7] flex items-center justify-center">
                    {/* Placeholder content */}
                    <div className="text-center text-white p-8">
                      <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm opacity-75">{screenshot.placeholder}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {screenshot.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {screenshot.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
