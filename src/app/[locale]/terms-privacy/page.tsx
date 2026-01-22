'use client';

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslations, useLocale } from 'next-intl';

export default function TermsPrivacyPage() {
  const tApp = useTranslations();
  const tTerms = useTranslations('terms');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          {tApp('appName')} – {locale === 'zh' ? '使用条款与隐私政策' : locale === 'hu' ? 'Felhasználási feltételek és adatvédelmi irányelvek' : 'Terms of Use & Privacy Policy'}
        </h1>
        <p className="text-sm text-gray-500 mb-12">
          {locale === 'zh' ? '最后更新：2026年1月' : locale === 'hu' ? 'Utolsó frissítés: 2026. január' : 'Last updated: January 2026'}
        </p>

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            1. {tTerms('sections.overview')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              {tTerms('overview.para1', { appName: tApp('appName') })}
            </p>
            <p>
              {tTerms('overview.para2')}
            </p>
          </div>
        </section>

        {/* Terms of Use Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            2. {tTerms('sections.termsOfUse')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              {tTerms('termsOfUse.intendedUse.title')}
            </h3>
            <p>
              {tTerms.rich('termsOfUse.intendedUse.para1', {
                appName: tApp('appName'),
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>
            <p className="font-semibold">
              {tTerms('termsOfUse.intendedUse.para2')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              {tTerms('termsOfUse.automatedAlerts.title')}
            </h3>
            <p>
              {tTerms('termsOfUse.automatedAlerts.para1')}
            </p>
            <p>{tTerms('termsOfUse.automatedAlerts.para2')}</p>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('termsOfUse.automatedAlerts.list') as unknown as unknown as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              {tTerms('termsOfUse.accuracyOfInformation.title')}
            </h3>
            <p>{tTerms('termsOfUse.accuracyOfInformation.para1')}</p>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('termsOfUse.accuracyOfInformation.list') as unknown as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>
              {tTerms('termsOfUse.accuracyOfInformation.para2')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              {tTerms('termsOfUse.noLiability.title')}
            </h3>
            <p>
              {tTerms('termsOfUse.noLiability.para1', {
                appName: tApp('appName')
              })}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('termsOfUse.noLiability.list') as unknown as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              {tTerms('termsOfUse.userResponsibility.title')}
            </h3>
            <p>{tTerms('termsOfUse.userResponsibility.para1')}</p>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('termsOfUse.userResponsibility.list') as unknown as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            3. {tTerms('sections.privacyPolicy')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              {tTerms('privacyPolicy.whatDataWeCollect.title')}
            </h3>
            <p>
              {tTerms('privacyPolicy.whatDataWeCollect.para1', { appName: tApp('appName') })}
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              {tTerms('privacyPolicy.whatDataWeCollect.storedOnDevice.title')}
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('privacyPolicy.whatDataWeCollect.storedOnDevice.list') as unknown as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              {tTerms('privacyPolicy.whatDataWeCollect.syncedToIcloud.title')}
            </h4>
            <p>
              {tTerms('privacyPolicy.whatDataWeCollect.syncedToIcloud.para1')}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('privacyPolicy.whatDataWeCollect.syncedToIcloud.list') as unknown as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="font-semibold">
              {tTerms('privacyPolicy.whatDataWeCollect.syncedToIcloud.important')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              {tTerms('privacyPolicy.howDataIsUsed.title')}
            </h3>
            <p>
              {tTerms.rich('privacyPolicy.howDataIsUsed.para1', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('privacyPolicy.howDataIsUsed.list') as unknown as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p className="font-semibold">{tTerms('privacyPolicy.howDataIsUsed.weDoNot')}</p>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('privacyPolicy.howDataIsUsed.doNotList') as unknown as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              {tTerms('privacyPolicy.emailSending.title')}
            </h3>
            <p>
              {tTerms.rich('privacyPolicy.emailSending.para1', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>
            <p>{tTerms('privacyPolicy.emailSending.para2')}</p>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('privacyPolicy.emailSending.list') as unknown as string[]).map((item, index) => (
                <li key={index}>
                  {typeof item === 'string' && item.includes('<strong>')
                    ? <span dangerouslySetInnerHTML={{ __html: item }} />
                    : item}
                </li>
              ))}
            </ul>
            <p>
              {tTerms('privacyPolicy.emailSending.para3')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              {tTerms('privacyPolicy.dataStorageAndSecurity.title')}
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              {tTerms('privacyPolicy.dataStorageAndSecurity.localStorage.title')}
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('privacyPolicy.dataStorageAndSecurity.localStorage.list') as unknown as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              {tTerms('privacyPolicy.dataStorageAndSecurity.cloudStorage.title')}
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('privacyPolicy.dataStorageAndSecurity.cloudStorage.list') as unknown as string[]).map((item, index) => (
                <li key={index}>
                  {typeof item === 'string' && item.includes('<strong>')
                    ? <span dangerouslySetInnerHTML={{ __html: item }} />
                    : item}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              {tTerms('privacyPolicy.dataRetention.title')}
            </h3>
            <p>
              {tTerms('privacyPolicy.dataRetention.para1')}
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              {tTerms('privacyPolicy.dataRetention.onYourDevice.title')}
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('privacyPolicy.dataRetention.onYourDevice.list') as unknown as string[]).map((item, index) => (
                <li key={index}>
                  {typeof item === 'string' && item.includes('<strong>')
                    ? <span dangerouslySetInnerHTML={{ __html: item }} />
                    : item}
                </li>
              ))}
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              {tTerms('privacyPolicy.dataRetention.inIcloud.title')}
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('privacyPolicy.dataRetention.inIcloud.list') as unknown as string[]).map((item, index) => (
                <li key={index}>
                  {typeof item === 'string' && item.includes('<strong>')
                    ? <span dangerouslySetInnerHTML={{ __html: item }} />
                    : item}
                </li>
              ))}
            </ul>
            <ol className="list-decimal pl-6 space-y-2">
              {(tTerms.raw('privacyPolicy.dataRetention.inIcloud.steps') as unknown as string[]).map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <p>
              {tTerms('privacyPolicy.dataRetention.inIcloud.para')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              {tTerms('privacyPolicy.yourRightsAndControl.title')}
            </h3>
            <p>{tTerms('privacyPolicy.yourRightsAndControl.para1')}</p>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('privacyPolicy.yourRightsAndControl.list') as unknown as string[]).map((item, index) => (
                <li key={index}>
                  {typeof item === 'string' && item.includes('<strong>')
                    ? <span dangerouslySetInnerHTML={{ __html: item }} />
                    : item}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              {tTerms('privacyPolicy.thirdPartyServices.title')}
            </h3>
            <p>{tTerms('privacyPolicy.thirdPartyServices.para1', { appName: tApp('appName') })}</p>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              {tTerms('privacyPolicy.thirdPartyServices.icloud.title')}
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('privacyPolicy.thirdPartyServices.icloud.list') as unknown as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              {tTerms('privacyPolicy.thirdPartyServices.sendgrid.title')}
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('privacyPolicy.thirdPartyServices.sendgrid.list') as unknown as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>
              {tTerms('privacyPolicy.thirdPartyServices.para2')}
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              {tTerms('privacyPolicy.dataSharingAndDisclosure.title')}
            </h3>
            <p>{tTerms('privacyPolicy.dataSharingAndDisclosure.para1')}</p>
            <p>{tTerms('privacyPolicy.dataSharingAndDisclosure.para2')}</p>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('privacyPolicy.dataSharingAndDisclosure.list') as unknown as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>
              {tTerms('privacyPolicy.dataSharingAndDisclosure.para3')}
            </p>
          </div>
        </section>

        {/* Children's Privacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            4. {tTerms('sections.childrensPrivacy')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              {tTerms('childrensPrivacy.para1', { appName: tApp('appName') })}
            </p>
            <p>
              {tTerms('childrensPrivacy.para2')}
            </p>
          </div>
        </section>

        {/* International Users Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            5. {tTerms('sections.internationalUsers')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              {tTerms('internationalUsers.para1')}
            </p>
            <p>
              {tTerms('internationalUsers.para2')}
            </p>
            <p className="font-semibold">
              {tTerms('internationalUsers.chinaNote')}
            </p>
          </div>
        </section>

        {/* Changes to This Policy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            6. {tTerms('sections.changesToPolicy')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              {tTerms('changesToPolicy.para1')}
            </p>
            <p className="font-semibold">
              {tTerms('changesToPolicy.para2')}
            </p>
            <p>
              {tTerms('changesToPolicy.para3')}
            </p>
          </div>
        </section>

        {/* Your Consent Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            7. {tTerms('sections.yourConsent')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              {tTerms('yourConsent.para1', { appName: tApp('appName') })}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('yourConsent.list') as unknown as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">8. {tTerms('sections.contact')}</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              {tTerms('contact.para1')}
            </p>
            <div className="bg-white border border-[#E5DCC8] rounded-2xl p-6 my-6">
              <p className="font-semibold text-gray-900">
                {tTerms('contact.support.title', { appName: tApp('appName') })}
              </p>
              <p>
                {tTerms('contact.support.email')}
                <a
                  href="mailto:avdev2024@gmail.com"
                  className="text-[#4A7BA7] hover:text-[#3d6a8f] underline"
                >
                  avdev2024@gmail.com
                </a>
              </p>
            </div>
            <p>
              {tTerms('contact.para2')}
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              {(tTerms.raw('contact.steps') as unknown as string[]).map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <p>
              {tTerms('contact.para3')}
            </p>
          </div>
        </section>

        {/* Legal Basis for Processing (GDPR) Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            9. {tTerms('sections.gdpr')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              {tTerms('gdpr.para1')}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('gdpr.list') as unknown as string[]).map((item, index) => (
                <li key={index}>
                  {typeof item === 'string' && item.includes('<strong>')
                    ? <span dangerouslySetInnerHTML={{ __html: item }} />
                    : item}
                </li>
              ))}
            </ul>
            <p>{tTerms('gdpr.para2')}</p>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('gdpr.rights') as unknown as string[]).map((right, index) => (
                <li key={index}>{right}</li>
              ))}
            </ul>
            <p>
              {tTerms('gdpr.para3')}
              <a
                href="mailto:avdev2024@gmail.com"
                className="text-[#4A7BA7] hover:text-[#3d6a8f] underline"
              >
                avdev2024@gmail.com
              </a>
              .
            </p>
          </div>
        </section>

        {/* California Privacy Rights (CCPA) Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#4A7BA7] mb-6">
            10. {tTerms('sections.ccpa')}
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>{tTerms('ccpa.para1')}</p>
            <ul className="list-disc pl-6 space-y-2">
              {(tTerms.raw('ccpa.list') as unknown as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>
              {tTerms('ccpa.para3')}
              <a
                href="mailto:avdev2024@gmail.com"
                className="text-[#4A7BA7] hover:text-[#3d6a8f] underline"
              >
                avdev2024@gmail.com
              </a>
              .
            </p>
          </div>
        </section>

        {/* Final Note */}
        <section className="bg-white border border-[#E5DCC8] rounded-2xl p-8 mb-12">
          <p className="text-gray-700 text-center italic">
            {tTerms('finalNote', { appName: tApp('appName') })}
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}