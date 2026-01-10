import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
      <footer className="bg-background border-t border-border py-8">
        <div className="mx-auto w-full px-4 text-sm text-muted md:w-[60%]">
        <div className="flex flex-col items-center gap-6 text-center md:grid md:grid-cols-2 md:gap-12 md:items-start md:text-left">

          {/* Left Block – College Info */}
            <div className="max-w-md">
              <h3 className="text-lg font-semibold text-foreground">
                Babu Banarasi Das Institute of Technology
              </h3>
              <p className="mt-2">
                7th Km from Ghaziabad on NH-58, Delhi-Meerut Road, Near Duhai,
                Ghaziabad, Uttar Pradesh, India
              </p>
              <p className="mt-2">
                &copy; {new Date().getFullYear()} BBDIT — All Rights Reserved
              </p>
            </div>

            {/* Right Block – Contact + Social */}
            <div className="flex flex-col items-center gap-4 md:items-end">

              {/* Contact */}
              <div className="space-y-2">
                <div className="flex items-center justify-center hover:text-primary gap-2 md:justify-end">
                  <FaPhoneAlt className="text-foreground hover:text-primary" />
                  <span>+91 98105 55014</span>
                </div>

                <div className="flex items-center justify-center hover:text-primary gap-2 md:justify-end">
                  <FaPhoneAlt className="text-foreground hover:text-primary" />
                  <span>+91 99115 50453</span>
                </div>

                <div className="flex items-center justify-center hover:text-primary gap-2 md:justify-end">
                  <FaEnvelope className="text-foreground hover:text-primary" />
                  <span>contact@bbdit.edu.in</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-5 text-xl text-foreground">
                <a
                    href="#"
                    aria-label="Facebook"
                    className="hover:text-primary transition-colors"
                >
                  <FaFacebookF />
                </a>

                <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-primary transition-colors"
                >
                  <FaInstagram />
                </a>

                <a
                    href="#"
                    aria-label="X (Twitter)"
                    className="hover:text-primary transition-colors"
                >
                  <FaXTwitter />
                </a>

                <a
                    href="#"
                    aria-label="LinkedIn"
                    className="hover:text-primary transition-colors"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
