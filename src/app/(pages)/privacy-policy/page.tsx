const PrivacyPolicyPage = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
      <p className="text-sm text-gray-500">Last updated: April 23, 2025</p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
        <p>
          At ReplyQuick, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you use our services. Please read this privacy policy carefully. If you do not
          agree with the terms of this privacy policy, please do not access the site.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
        <h3 className="mt-4 text-xl font-bold text-gray-900">Personal Information</h3>
        <p>We may collect personal information that you voluntarily provide to us when you:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Register for an account</li>
          <li>Express interest in obtaining information about us or our services</li>
          <li>Participate in activities on our services</li>
          <li>Contact us in any way</li>
        </ul>
        <h3 className="mt-4 text-xl font-bold text-gray-900">Usage Data</h3>
        <p>We may also collect information about how you access and use our services, including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Device information</li>
          <li>Log and usage data</li>
          <li>Location information</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide, maintain, and improve our services</li>
          <li>Process your transactions</li>
          <li>Send you technical notices and support messages</li>
          <li>Communicate with you about products, services, and events</li>
          <li>Monitor and analyze trends and usage</li>
          <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Information Sharing and Disclosure</h2>
        <p>We may share your information in the following circumstances:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>With service providers and business partners</li>
          <li>For legal compliance and protection</li>
          <li>In connection with a business transfer</li>
          <li>With your consent</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information against
          unauthorized or unlawful processing, accidental loss, destruction, or damage.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
        <p>You have certain rights regarding your personal information, including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Right to access your personal information</li>
          <li>Right to correct inaccurate information</li>
          <li>Right to request deletion of your information</li>
          <li>Right to restrict or object to processing</li>
          <li>Right to data portability</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy
          Policy on this page and updating the "Last updated" date.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <p>
          By email: <a href="mailto:Info@replyquick.ai" className="text-blue-600 hover:underline">Info@replyquick.ai</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 