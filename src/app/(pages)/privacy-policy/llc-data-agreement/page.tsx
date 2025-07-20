const LLCDataAgreementPage = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        LLC Data Agreement
      </h1>
      <p className="text-sm text-gray-500">Last updated: April 23, 2025</p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
        <p>
          This Data Agreement (&quot;Agreement&quot;) is entered into between
          ReplyQuick LLC (&quot;Company&quot;) and the user (&quot;User&quot;)
          of our services. This Agreement governs the processing of data in
          connection with the use of our services.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Definitions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Data Controller:</strong> The entity that determines the
            purposes and means of processing personal data.
          </li>
          <li>
            <strong>Data Processor:</strong> The entity that processes personal
            data on behalf of the Data Controller.
          </li>
          <li>
            <strong>Personal Data:</strong> Any information relating to an
            identified or identifiable natural person.
          </li>
          <li>
            <strong>Processing:</strong> Any operation performed on personal
            data, such as collection, storage, use, or disclosure.
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Data Processing</h2>
        <h3 className="mt-4 text-xl font-bold text-gray-900">
          Scope of Processing
        </h3>
        <p>
          The Company will process personal data only for the following
          purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Providing and maintaining our services</li>
          <li>Improving user experience</li>
          <li>Communicating with users</li>
          <li>Complying with legal obligations</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
        <p>
          The Company implements appropriate technical and organizational
          measures to ensure a level of security appropriate to the risk,
          including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Encryption of personal data</li>
          <li>Regular security assessments</li>
          <li>Access controls and authentication</li>
          <li>Data backup and recovery procedures</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Data Subject Rights
        </h2>
        <p>Users have the following rights regarding their personal data:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Right to access their personal data</li>
          <li>Right to rectification of inaccurate data</li>
          <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Data Transfers</h2>
        <p>
          The Company may transfer personal data to third parties only when
          necessary and in compliance with applicable data protection laws. Such
          transfers may include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Service providers and business partners</li>
          <li>Legal and regulatory authorities</li>
          <li>Professional advisors</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
        <p>
          The Company will retain personal data only for as long as necessary to
          fulfill the purposes for which it was collected, including for the
          purposes of satisfying any legal, accounting, or reporting
          requirements.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Compliance and Cooperation
        </h2>
        <p>The Company will:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Comply with all applicable data protection laws</li>
          <li>Cooperate with supervisory authorities</li>
          <li>Implement appropriate technical and organizational measures</li>
          <li>Maintain records of processing activities</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
        <p>
          If you have any questions about this Data Agreement, please contact
          us:
        </p>
        <p>
          By email:{" "}
          <a
            href="mailto:Info@replyquick.ai"
            className="text-blue-600 hover:underline"
          >
            Info@replyquick.ai
          </a>
        </p>
      </div>
    </div>
  );
};

export default LLCDataAgreementPage;
