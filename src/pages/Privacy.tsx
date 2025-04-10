
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-auction-primary text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg">
              Last updated: April 10, 2025
            </p>
          </div>
        </div>
        
        {/* Content */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p>
                At Abo Hasan Car, we are committed to protecting your privacy and handling your personal information 
                with transparency. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you use our website and services.
              </p>
              
              <h2>1. Information We Collect</h2>
              <p>
                We collect the following types of information:
              </p>
              <h3>1.1 Personal Information</h3>
              <ul>
                <li>Contact information (name, email address, phone number, mailing address)</li>
                <li>Account credentials (username and password)</li>
                <li>Identity verification information (ID number, driver's license)</li>
                <li>Payment information (credit card details, bank account information)</li>
                <li>Vehicle information (when listing a car for sale)</li>
                <li>Profile information (preferences, profile picture)</li>
              </ul>
              <h3>1.2 Automatically Collected Information</h3>
              <ul>
                <li>Usage information (pages visited, time spent on site, click patterns)</li>
                <li>Device information (browser type, operating system, IP address)</li>
                <li>Location information (general location based on IP address)</li>
                <li>Cookies and similar technologies</li>
              </ul>
              
              <h2>2. How We Collect Information</h2>
              <p>
                We collect information through:
              </p>
              <ul>
                <li>Direct interactions when you create an account, list a vehicle, or make a purchase</li>
                <li>Automated technologies such as cookies and similar tracking technologies</li>
                <li>Third parties, including payment processors, identity verification services, and vehicle history report providers</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>
                We use your information for the following purposes:
              </p>
              <ul>
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and managing bids and listings</li>
                <li>Verifying your identity and preventing fraud</li>
                <li>Sending notifications about bids, listings, and transactions</li>
                <li>Communicating with you about our services</li>
                <li>Improving and personalizing our services</li>
                <li>Marketing and promotional purposes (with your consent)</li>
                <li>Complying with legal obligations</li>
              </ul>
              
              <h2>4. How We Share Your Information</h2>
              <p>
                We may share your information with:
              </p>
              <ul>
                <li>Buyers and sellers to facilitate transactions (limited to necessary information)</li>
                <li>Service providers who perform services on our behalf (payment processors, hosting providers)</li>
                <li>Professional advisors (lawyers, accountants, insurers)</li>
                <li>Government authorities when required by law</li>
                <li>Potential buyers or investors in the event of a business transaction</li>
              </ul>
              <p>
                We do not sell your personal information to third parties for marketing purposes.
              </p>
              
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information, 
                including encryption, access controls, and regular security assessments. However, no method of 
                transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>
              
              <h2>6. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul>
                <li>Access or request a copy of the information we hold about you</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your personal information in certain circumstances</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Data portability (receiving your data in a structured, machine-readable format)</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the details provided at the end of this policy.
              </p>
              
              <h2>7. Cookies and Similar Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities. 
                You can manage your cookie preferences through your browser settings, but please note that disabling 
                certain cookies may impact the functionality of our website.
              </p>
              
              <h2>8. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect 
                personal information from children. If we become aware that we have collected personal information 
                from a child without parental consent, we will take steps to delete that information.
              </p>
              
              <h2>9. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. 
                We ensure appropriate safeguards are in place to protect your information when transferred internationally, 
                in compliance with applicable data protection laws.
              </p>
              
              <h2>10. Retention of Information</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services, comply with legal 
                obligations, resolve disputes, and enforce our agreements. When personal information is no longer needed, 
                we will securely delete or anonymize it.
              </p>
              
              <h2>11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                We will notify you of any material changes by posting the updated policy on our website and, where appropriate, 
                by email or other notification.
              </p>
              
              <h2>12. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, 
                please contact us at:
              </p>
              <p>
                Abo Hasan Car
                <br />
                123 Auction Street
                <br />
                Stockholm, Sweden 12345
                <br />
                Email: privacy@abohasan.car
                <br />
                Phone: +46 123 456 7890
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
