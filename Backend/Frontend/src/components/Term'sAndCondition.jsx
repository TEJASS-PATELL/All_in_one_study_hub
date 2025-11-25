import React from "react";
import "../style/TermsConditions.css";

export default function TermsConditions() {
  return (
    <section className="terms-section">
      <div className="terms-card">
        <h1>Terms & Conditions</h1>
         {/* Add you terms and condition according to your website  */}
        <div className="terms-content">
            <p className="demo">Add you terms and condition according to your website</p>
          <p>
            Welcome to our Skeleton Web App. By using our service, you agree to the following terms and conditions:
          </p>
          <ul>
            <li>You must be at least 18 years old to use this app.</li>
            <li>All data you provide must be accurate and up-to-date.</li>
            <li>You are responsible for maintaining the confidentiality of your account.</li>
            <li>Use the app for lawful purposes only.</li>
            <li>We may update the Terms & Conditions at any time. Continued use indicates acceptance of any changes.</li>
            <li>Free demo or basic access is limited; premium features require payment.</li>
            <li>We are not liable for any loss of data or technical issues.</li>
          </ul>
          <p>
            By signing up, you acknowledge that you have read and agree to these Terms & Conditions.
          </p>
        </div>
      </div>
    </section>
  );
}
