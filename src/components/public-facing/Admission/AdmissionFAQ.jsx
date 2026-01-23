import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "How do I apply?",
    a: "You can apply online through the admissions portal by filling out the form and submitting the required documents.",
  },
  {
    q: "Is hostel compulsory?",
    a: "No, hostel accommodation is optional. Students may choose day-scholar or hostel facilities based on preference.",
  },
  {
    q: "What is the refund policy?",
    a: "Refunds are processed as per university and institute norms. Detailed policies are shared during admission counseling.",
  },
  {
    q: "Are scholarships available?",
    a: "Yes, students can avail government, merit-based, and need-based scholarships depending on eligibility.",
  },
  {
    q: "Is entrance exam mandatory?",
    a: "Admission may be based on entrance examination scores or merit, depending on the program and regulations.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(-1);

  return (
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          {/* Title */}
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-text">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((item, i) => {
              const isOpen = open === i;

              return (
                  <div
                      key={i}
                      className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
                  >
                    <button
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        className="
                    flex w-full items-center justify-between
                    px-6 py-4 text-left
                    text-sm font-medium text-text
                    hover:bg-overlay
                  "
                    >
                      <span>{item.q}</span>
                      <FaChevronDown
                          className={`transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <div
                        className={`
                    overflow-hidden transition-[max-height] duration-300 ease-out
                    ${isOpen ? "max-h-48" : "max-h-0"}
                  `}
                    >
                      <div className="border-t border-border px-6 py-4 text-sm text-muted leading-relaxed">
                        {item.a}
                      </div>
                    </div>
                  </div>
              );
            })}
          </div>
        </div>
      </section>
  );
};

export default FAQSection;