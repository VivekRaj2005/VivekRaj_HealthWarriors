import Navbar from "../Components/Navbar";
import "./Terms.scss";

function Terms() {
  return (
    <>
      <Navbar />
      <div className="termsAndConditions fadeIn">
        <h1 className="termsAndConditionsHeading">Terms Of Service</h1>
        <h4 className="spangleWelcome">Welcome to Health Warrior</h4>
        <p className="termsParagraphIntro">
          Welcome to Health Warrior! Health Warrior connects rural communities
          with urban healthcare professionals and services, aiming to improve
          access to quality medical assistance. By accessing or using our
          website, you agree to these terms and conditions, as well as any
          additional guidelines, policies, or updates we may implement.
        </p>
        <div className="serviceLeadingSection">
          <h4>
            <span className="sn blue">1.</span>
            <span className="st blue">Agreement to Terms</span>
          </h4>
          <p className="spl">
            By using Health Warrior, you accept and agree to comply with these
            Terms and Conditions. If you disagree with any part of the terms,
            please discontinue use of the platform.
          </p>
        </div>

        <div className="serviceLeadingSection">
          <h4>
            <span className="sn orange">2.</span>
            <span className="st orange">Services Provided</span>
          </h4>
          <p className="spl">
            Health Warrior provides a platform to facilitate communication
            between rural patients and urban medical professionals, allowing
            users to:
          </p>
          <div className="serviceInfoContainer">
            <h6 className="serviceLead">
              Access health information and resources.
            </h6>
            <div className="secionLine lineColorOrange"></div>
          </div>
          <div className="serviceInfoContainer">
            <h6 className="serviceLead">
              Connect with healthcare providers for consultations.
            </h6>
            <p className="serviceDetails">
              Note: Health Warrior is a facilitator and does not offer direct
              medical care. All health information and professional
              consultations are provided by licensed third-party healthcare
              providers.
            </p>
            <div className="secionLine lineColorOrange"></div>
          </div>
          <div className="serviceInfoContainer">
            <h6 className="serviceLead">
              Use available tools for scheduling, guidance, and health tracking.
            </h6>

            <div className="secionLine lineColorOrange"></div>
          </div>
        </div>
        <div className="serviceLeadingSection">
          <h4>
            <span className="sn lightGreen">3.</span>
            <span className="st lightGreen">User Responsibilities</span>
          </h4>
          <div className="serviceInfoContainer">
            <h6 className="serviceLead">Legitamcy</h6>
            <p className="serviceDetails">
              Provide accurate, current, and complete information when creating
              an account or participating in consultations.
            </p>
            <div className="secionLine lineColorGreen"></div>
          </div>
          <div className="serviceInfoContainer">
            <h6 className="serviceLead">Adherance to Law</h6>
            <p className="serviceDetails">
              Use the platform respectfully, adhering to privacy and data
              protection laws.
            </p>
            <div className="secionLine lineColorGreen"></div>
          </div>
          <div className="serviceInfoContainer">
            <h6 className="serviceLead">
              Following the Rules and Directions of Health Care professional
            </h6>
            <p className="serviceDetails">
              Follow any advice from healthcare professionals responsibly,
              understanding that Health Warrior is not liable for personal
              decisions made based on consultations.
            </p>
            <div className="secionLine lineColorGreen"></div>
          </div>
        </div>
        <div className="serviceLeadingSection">
          <h4>
            <span className="sn purple">4.</span>
            <span className="st purple">Healthcare Disclaimer</span>
          </h4>
          <p className="spl">
            Health Warrior does not guarantee the accuracy or reliability of any
            medical information or advice given by third-party professionals.
            This platform is intended to support— but not replace—consultations
            with licensed healthcare providers. For medical emergencies, always
            contact local emergency services.
          </p>
        </div>
        <h4 className="closeTerms">CLOSE TERMS AND CONDITIONS</h4>
      </div>
    </>
  );
}

export default Terms;
