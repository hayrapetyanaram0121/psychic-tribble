export const metadata = {
    
}

export default function PrivacyPolicy() {
    return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen mt-21 px-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-7xl h-full m-auto">
            <h1 className="text-4xl">Privacy Policy</h1>
            <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>

            <Section 
            title="1. Information We Collect"
            content={(
                <>
                <p className="mb-2">We collect several types of information in order to provide and improve our service to you:</p>
                <ul className="pl-5 list-disc mb-1">
                    <li><strong>Personal Information:</strong> When you register on our website or interact with us, we may collect personally identifiable information, such as your name, email address, phone number, and payment details.</li>
                    <li><strong>Usage Data:</strong> We may collect information on how our website is accessed and used, including your device's IP address, browser type, browser version, and pages visited on our site.</li>
                    <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track the activity on our website and improve our services. You can control cookies through your browser settings.</li>
                </ul>
                </>
            )}
            />

            <Section 
            title="2. How We Use Your Information"
            content={(
                <>
                <ul className="pl-5 list-disc mb-1">
                    <li><strong>To Provide Services:</strong> To provide, maintain, and improve our services and features.</li>
                    <li><strong>Communication:</strong> To contact you with updates, promotions, and important information related to our services.</li>
                    <li><strong>Personalization:</strong> To personalize your experience on our website, such as showing you relevant content or advertisements.</li>
                    <li><strong>Analytics:</strong> To analyze website usage and optimize user experience.</li>
                </ul>
                </>
            )}
            />

            <Section 
            title="3. Sharing of Your Information"
            content={(
                <>
                <p className="mb-2">We do not sell, rent, or trade your personal information to third parties. However, we may share your information in the following circumstances:</p>
                <ul className="pl-5 list-disc mb-1">
                    <li><strong>Service Providers:</strong> We may share your data with trusted third-party service providers who assist us in operating our website or delivering services, such as payment processors or hosting providers. These third parties are obligated to keep your information secure.</li>
                    <li><strong>Legal Compliance:</strong> We may disclose your information if required by law or to protect our legal rights.</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
                </ul>
                </>
            )}
            />

            <Section 
            title="4. Data Retention"
            content={(
                <p className="mb-2">We will retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. If you request that we delete your information, we will comply, unless we need to retain it for legal reasons or to resolve disputes.</p>
            )}
            />

            <Section 
            title="5. Security of Your Information"
            content={(
                <p className="mb-2">We take reasonable precautions to protect your personal information from unauthorized access, alteration, or destruction. However, please note that no method of electronic transmission or storage is 100% secure, and we cannot guarantee its absolute security.</p>
            )}
            />

            <Section 
            title="6. Your Rights"
            content={(
                <>
                <p className="mb-2">Depending on your location and applicable law, you may have the following rights regarding your personal data:</p>
                <ul className="pl-5 list-disc mb-1">
                    <li><strong>Access and Correction:</strong> You can request access to and correct any inaccurate or incomplete information we have about you.</li>
                    <li><strong>Deletion:</strong> You may request that we delete your personal data, subject to certain exceptions.</li>
                    <li><strong>Opt-Out of Marketing Communications:</strong> You can opt-out of receiving promotional emails or newsletters from us at any time.</li>
                </ul>
                <p>If you wish to exercise any of these rights, please contact us at <a href="mailto:[Insert Contact Email]">[Insert Contact Email]</a>.</p>
                </>
            )}
            />

            <Section 
            title="7. Third-Party Links"
            content={(
                <p className="mb-2">Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites. We encourage you to read the privacy policies of any third-party websites you visit.</p>
            )}
            />

            <Section 
            title="8. Children’s Privacy"
            content={(
                <p className="mb-2">Our services are not intended for use by individuals under the age of 13, and we do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child under 13, we will take steps to delete that information.</p>
            )}
            />

            <Section 
            title="9. Changes to This Privacy Policy"
            content={(
                <p className="mb-2">We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we do, we will update the "Effective Date" at the top of this page. We encourage you to periodically review this page for the latest information.</p>
            )}
            />

            <Section 
            title="10. Contact Us"
            content={(
                <>
                <p className="mb-2">If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
                <ul className="pl-5 list-disc mb-1">
                    <li><strong>Test Task</strong></li>
                    <li>Laniakea Supercluster, Milky Way, Solar System, Planet Earth</li>
                    <li>Email: <a href="mailto:test@task.com">test@task.com</a></li>
                    <li>Phone: +00000000</li>
                </ul>
                </>
            )}
            />
        </main>
    </div>
}

const Section = ({ title, content }) => (
    <section>
      <h2 className="text-2xl">{title}</h2>
      <div className="mt-2">{content}</div>
    </section>
);