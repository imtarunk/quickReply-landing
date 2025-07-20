const LLCSubProcessorAgreementPage = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        LLC Sub-Processor Agreement
      </h1>
      <p className="text-sm text-gray-500">Last updated: April 23, 2025</p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
        <p>
          This Sub-Processor Agreement (&quot;Agreement&quot;) governs the
          relationship between ReplyQuick LLC (&quot;Company&quot;) and its
          sub-processors in relation to the processing of personal data.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Definitions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Sub-Processor:</strong> A third-party data processor engaged
            by the Company to process personal data on behalf of the Company.
          </li>
          <li>
            <strong>Personal Data:</strong> Any information relating to an
            identified or identifiable natural person.
          </li>
          <li>
            <strong>Processing:</strong> Any operation performed on personal
            data, such as collection, storage, use, or disclosure.
          </li>
          <li>
            <strong>Data Protection Laws:</strong> All applicable laws and
            regulations relating to the processing of personal data.
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Sub-Processor Obligations
        </h2>
        <h3 className="mt-4 text-xl font-bold text-gray-900">
          General Requirements
        </h3>
        <p>Sub-processors must:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Process personal data only on documented instructions from the
            Company
          </li>
          <li>
            Ensure that persons authorized to process personal data have
            committed themselves to confidentiality
          </li>
          <li>
            Implement appropriate technical and organizational measures to
            ensure security of processing
          </li>
          <li>
            Assist the Company in ensuring compliance with data subject rights
          </li>
        </ul>
        <h3 className="mt-4 text-xl font-bold text-gray-900">
          Security Measures
        </h3>
        <p>
          Sub-processors must implement appropriate security measures,
          including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Encryption of personal data</li>
          <li>Regular security testing and assessment</li>
          <li>Access controls and authentication</li>
          <li>Incident response procedures</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Data Transfers</h2>
        <p>
          Sub-processors may transfer personal data outside the jurisdiction
          where it was collected only if:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The transfer is necessary for the performance of the service</li>
          <li>Appropriate safeguards are in place</li>
          <li>The transfer complies with applicable data protection laws</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Audit Rights</h2>
        <p>The Company has the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Conduct audits of sub-processors&apos; facilities and operations
          </li>
          <li>Request documentation demonstrating compliance</li>
          <li>Inspect security measures and processing activities</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Data Breach Notification
        </h2>
        <p>
          Sub-processors must notify the Company without undue delay after
          becoming aware of a personal data breach, providing:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Description of the nature of the breach</li>
          <li>Categories and approximate number of data subjects affected</li>
          <li>Measures taken or proposed to address the breach</li>
          <li>Contact details for further information</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Termination</h2>
        <p>Upon termination of the agreement, sub-processors must:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Return or delete all personal data</li>
          <li>Provide certification of deletion</li>
          <li>Maintain confidentiality obligations</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
        <p>
          If you have any questions about this Sub-Processor Agreement, please
          contact us:
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

export default LLCSubProcessorAgreementPage;
