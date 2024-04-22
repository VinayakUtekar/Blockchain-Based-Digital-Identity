import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import './About.css'

export function About() {
  return (
    <div className='main-container-aboutpage'>







      <div className='aboutpage-nav-bar'>
        <span className='aboutpage-authenti-chain'>AuthentiChain</span>
        <div className='aboutpage-nav-links'>
          <Link to="/profile" className='aboutpage-nav-btn profile'>
            Profile
          </Link>
          <Link to="/activity" className='aboutpage-nav-btn activity'>
            Activity
          </Link>
          <Link to="/login" className='aboutpage-nav-btn logout'>
            Logout
          </Link>
        </div>
        <div className='aboutpage-lang-icon'>
          <FontAwesomeIcon icon={faGlobe} />
        </div>
      </div>





      <div className='aboutpage-main-section'>


        <div class="aboutpage-side-bar">
          <Link to="/dashboard" className='aboutpage-dashboard'>
            Dashboard
          </Link>
          <Link to="/uploaddocuments" className='aboutpage-upload-documents'>
            Upload Documents
          </Link>
          <Link to="/issueddocuments" className='aboutpage-your-documents'>
            Your Documents
          </Link>
          <Link to="/searchdocuments" className='aboutpage-search-documents'>
            Search Documents
          </Link>
          <Link to="/createtoken" className='aboutpage-token-request'>
            Token Request
          </Link>
          <Link to="/about" className='aboutpage-about'>
            About
          </Link>
        </div>


        <div className="aboutpage-information-section">

          <div className="aboutpage-about-section">
            <h2>About the Project</h2>
            <p>Digital Identity Management using Blockchain Technology is a project
              that aims to revolutionize how identity is managed in the digital era.
              Traditional identity systems are often centralized, leading to
              security vulnerabilities and privacy concerns. In contrast, blockchain
              offers a decentralized, tamper-proof ledger that ensures the integrity
              and security of identity-related data. This project focuses on
              empowering individuals by giving them greater control over their
              digital identities. Through cryptographic keys, users can manage
              access to their identity information securely, reducing the risk of
              identity theft and fraud. Blockchain's transparency and immutability
              enhance trust among users and stakeholders, fostering a more reliable
              digital ecosystem. </p>
            <p>Key features of this project include decentralization, which
              distributes control among network participants, and security, which is
              ensured through blockchain's cryptographic techniques. Privacy is
              prioritized, allowing users to selectively share identity information
              while maintaining confidentiality. Interoperability is also
              emphasized, enabling seamless integration between different identity
              systems and platforms. Overall, Digital Identity Management using
              Blockchain Technology promises to create a future where individuals
              have more control over their digital identities, and trust is built
              upon transparency, security, and collaboration.</p>
          </div>

          <div className="aboutpage-FAQ-section" id='aboutpage-FAQ-section'>
            <h2>FAQ</h2>
            <p>1. What makes blockchain technology suitable for digital identity
              management?
              <br />
              Blockchain's decentralized and immutable nature ensures that
              identity-related data is securely recorded and tamper-proof. This
              eliminates the need for centralized authorities and enhances security
              and trust in identity management. 
            </p>

            <p>2. How does this project prioritize user privacy?
              <br />
              Users have control over their digital identities through cryptographic
              keys, allowing them to selectively share identity information while
              maintaining confidentiality. This granular control over data sharing
              enhances user privacy in the digital ecosystem. 
            </p>

            <p>3. Can blockchain-based identity management systems be integrated with
              existing systems?
              <br />
              Yes, blockchain technology enables interoperability between different
              identity systems and platforms. This allows for seamless integration
              with existing systems, fostering collaboration and adoption across
              diverse industries and applications. 
            </p>

            <p>4. What measures are in place to prevent unauthorized access to
              identity information?
              <br />
              Blockchain's cryptographic techniques and consensus mechanisms ensure
              that identity-related transactions are secure and tamper-proof. Users
              maintain control over their digital identities, reducing the risk of
              identity theft, fraud, and unauthorized access. 
            </p>

            <p>5. How does this project address concerns about scalability and
              performance in blockchain-based identity management?
              <br />
              Scalability and performance are key considerations in the
              implementation of blockchain-based identity management systems. This
              project explores various approaches, such as layer 2 solutions and
              optimized consensus mechanisms, to address these concerns and ensure
              efficient operation at scale
            </p>
            
          </div>
            
          <div className="aboutpage-service-section">
            <h2>Services that we provide</h2>
            <p>Document Storage: Our project offers a secure platform for storing
              digital documents, ensuring confidentiality and accessibility through
              robust encryption and access management systems. 
            </p>

            <p>Digital Identity Generation: We enable the generation and verification
              of digital identities, ensuring authentication and validation of users
              or entities within the system.
            </p>

            <p>Issue Documents: Through our platform, users can effortlessly create
              and customize digital documents while ensuring their authenticity
              through integrated authentication mechanisms, enhancing trust and
              efficiency in document issuance processes.
            </p>
          </div>            
          
          <div className="aboutpage-tc-section" id="aboutpage-tc-section">
            <h2>Terms & Conditions</h2>
            <p>Acceptance of Terms: By accessing or using the Digital Identity
              Management platform, users agree to abide by these terms and
              conditions in their entirety. Failure to comply with these terms may
              result in the suspension or termination of services. 
            </p>
            <p>User Registration: Users must provide accurate and complete
              information during the registration process. They are responsible for
              maintaining the confidentiality of their account credentials and for
              all activities that occur under their account. 
            </p>
            <p>Authorized Use: Users may only use the platform for lawful purposes
              and in accordance with these terms and conditions. Any unauthorized
              use of the platform, including but not limited to hacking, data
              mining, or reverse engineering, is strictly prohibited. 
            </p>
            <p>Intellectual Property: All intellectual property rights in the Digital
              Identity Management platform, including but not limited to trademarks,
              copyrights, and patents, belong to the platform owner. Users may not
              reproduce, distribute, or modify any content from the platform without
              prior written consent. 
            </p>
            <p>Data Integrity: Users are responsible for the accuracy, completeness,
              and legality of the identity-related data they submit to the platform.
              The platform owner reserves the right to verify the authenticity of
              user data and to remove any inaccurate or fraudulent information.
            </p>
            <p>Third-Party Services: The platform may integrate with third-party
              services or applications for identity verification, authentication, or
              other purposes. Users acknowledge and agree to abide by the terms and
              conditions of any third-party services they access through the
              platform. 
            </p>
            <p>Limitation of Liability: The platform owner shall not be liable for
              any direct, indirect, incidental, or consequential damages arising out
              of or in connection with the use of the platform, including but not
              limited to loss of data, loss of profits, or interruption of services.
            </p>
            <p>Indemnification: Users agree to indemnify and hold harmless the
              platform owner, its affiliates, and their respective officers,
              directors, employees, and agents from any claims, liabilities,
              damages, or expenses arising out of or related to their use of the
              platform. 
            </p>
            <p>Modification of Terms: The platform owner reserves the right to modify
              or update these terms and conditions at any time without prior notice.
              Users are responsible for regularly reviewing these terms and for
              continuing to use the platform after any changes have been made.
            </p>
            <p>Governing Law: These terms and conditions shall be governed by and
              construed in accordance with the laws of [Jurisdiction], without
              regard to its conflict of law provisions. Any disputes arising out of
              or in connection with these terms shall be resolved exclusively by the
              courts of [Jurisdiction].
            </p>
          </div>
          
        </div>

    



      </div>




      <div className='aboutpage-footer'>
      <div className='aboutpage-footer-links'>
        <a href='#' className='aboutpage-privacy-policy'>Privacy Policy</a>
        <Link to="/about#aboutpage-tc-section" className='createtoken-terms-and-conditions'>Terms and conditions</Link>
        <a href='#' className='aboutpage-contact-us'>Contact us</a>
      </div>
    </div>





    </div>
  )
}

export default About