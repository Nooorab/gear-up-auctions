
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-auction-primary text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms and Conditions</h1>
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
                Please read these terms and conditions carefully before using the Abo Hasan Car platform. 
                By accessing or using our service, you agree to be bound by these terms.
              </p>
              
              <h2>1. Definitions</h2>
              <p>
                <strong>"Platform"</strong> refers to the Abo Hasan Car website and all related services.
                <br />
                <strong>"User"</strong> refers to any individual or entity that accesses or uses our Platform.
                <br />
                <strong>"Buyer"</strong> refers to a User who purchases or bids on vehicles through our Platform.
                <br />
                <strong>"Seller"</strong> refers to a User who lists vehicles for sale on our Platform.
                <br />
                <strong>"Listing"</strong> refers to any vehicle advertisement placed on our Platform.
              </p>
              
              <h2>2. Account Registration</h2>
              <p>
                2.1. To use certain features of our Platform, Users must register for an account by providing accurate and complete information.
              </p>
              <p>
                2.2. Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account.
              </p>
              <p>
                2.3. Users must be at least 18 years old to create an account.
              </p>
              <p>
                2.4. We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.
              </p>
              
              <h2>3. Listing Guidelines</h2>
              <p>
                3.1. Sellers must provide accurate and complete information about the vehicles they list.
              </p>
              <p>
                3.2. All vehicles must undergo our professional inspection before being listed.
              </p>
              <p>
                3.3. Sellers must have legal ownership or the authority to sell the vehicle being listed.
              </p>
              <p>
                3.4. We reserve the right to refuse or remove any listing at our sole discretion.
              </p>
              
              <h2>4. Bidding and Purchasing</h2>
              <p>
                4.1. By placing a bid, Buyers commit to purchasing the vehicle if they are the winning bidder.
              </p>
              <p>
                4.2. For auction listings, the highest valid bid at the end of the auction period wins.
              </p>
              <p>
                4.3. For Buy Now listings, the first User to complete the purchase process will secure the vehicle.
              </p>
              <p>
                4.4. We reserve the right to cancel bids that we determine, in our sole discretion, to be fraudulent or in violation of these terms.
              </p>
              
              <h2>5. Fees and Payments</h2>
              <p>
                5.1. Sellers will be charged a commission based on the final selling price of their vehicle. The exact commission rate will be clearly communicated before listing.
              </p>
              <p>
                5.2. Buyers will be charged a buyer's premium in addition to the final purchase price. The exact premium rate will be clearly displayed before bidding or purchasing.
              </p>
              <p>
                5.3. All payments must be made through our secure payment system. Cash transactions are not permitted.
              </p>
              <p>
                5.4. Failure to complete payment for a won auction or confirmed purchase may result in account suspension and additional fees.
              </p>
              
              <h2>6. Vehicle Inspection and Condition</h2>
              <p>
                6.1. All vehicles listed on our Platform undergo a professional inspection conducted by our certified team.
              </p>
              <p>
                6.2. While we strive for accuracy, inspection reports represent a point-in-time assessment and we cannot guarantee that all issues will be identified.
              </p>
              <p>
                6.3. Buyers are encouraged to review inspection reports carefully and, when possible, inspect vehicles in person before bidding or purchasing.
              </p>
              <p>
                6.4. Unless otherwise stated, vehicles are sold "as is" without any warranties, express or implied.
              </p>
              
              <h2>7. Delivery and Collection</h2>
              <p>
                7.1. Buyers are responsible for arranging collection of the vehicle or paying for delivery services.
              </p>
              <p>
                7.2. Risk of loss transfers to the Buyer upon collection or delivery of the vehicle.
              </p>
              <p>
                7.3. Delivery times are estimates and not guaranteed.
              </p>
              
              <h2>8. Cancellation and Returns</h2>
              <p>
                8.1. Once a bid is won or a purchase is confirmed, cancellations are generally not permitted.
              </p>
              <p>
                8.2. In exceptional circumstances, we may, at our sole discretion, allow a cancellation with an applicable fee.
              </p>
              <p>
                8.3. If a vehicle is significantly misrepresented or has undisclosed major issues not captured in the inspection report, Buyers may request a review within 24 hours of collection or delivery.
              </p>
              
              <h2>9. Intellectual Property</h2>
              <p>
                9.1. All content on our Platform, including but not limited to text, graphics, logos, images, and software, is the property of Abo Hasan Car or our licensors and is protected by intellectual property laws.
              </p>
              <p>
                9.2. Users may not reproduce, distribute, modify, or create derivative works from any content on our Platform without our express written permission.
              </p>
              
              <h2>10. Limitation of Liability</h2>
              <p>
                10.1. To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to the use of our Platform.
              </p>
              <p>
                10.2. Our total liability for any claim arising out of or relating to these terms or our Platform shall not exceed the amounts paid by the User to Abo Hasan Car in the 12 months preceding the claim.
              </p>
              
              <h2>11. Dispute Resolution</h2>
              <p>
                11.1. Any dispute arising out of or relating to these terms or our Platform shall first be resolved through good faith negotiations.
              </p>
              <p>
                11.2. If negotiations fail, disputes shall be resolved through arbitration in Stockholm, Sweden, under the rules of the Swedish Arbitration Association.
              </p>
              
              <h2>12. Changes to Terms</h2>
              <p>
                12.1. We reserve the right to modify these terms at any time, with changes effective upon posting to our Platform.
              </p>
              <p>
                12.2. Continued use of our Platform after changes constitutes acceptance of the modified terms.
              </p>
              
              <h2>13. Contact Information</h2>
              <p>
                For questions about these terms, please contact us at:
                <br />
                Abo Hasan Car
                <br />
                123 Auction Street
                <br />
                Stockholm, Sweden 12345
                <br />
                Email: legal@abohasan.car
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

export default Terms;
