import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F4F9F8] text-gray-800 py-8 sm:py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">

        {/* Contact Information */}
        <div className="xs:col-span-2 md:col-span-1">
          <h2 className="text-sm sm:text-base lg:text-xl font-bold italic text-primary mb-2 sm:mb-3">
            Hearthy Consulting LLC
          </h2>
          <div className="text-xs sm:text-sm opacity-90 leading-relaxed space-y-1.5 sm:space-y-2">
            <div className="flex items-start">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:hearthyceo@hearthyconsulting.com" className="hover:text-primary text-primary transition-colors break-all">hearthyceo@hearthyconsulting.com</a>
            </div>
            <div className="flex items-start">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+18327625070" className="hover:text-primary text-primary transition-colors whitespace-nowrap">(832) 762-5070</a>
            </div>
            <p className="pt-1 sm:pt-2 italic text-xs sm:text-sm">Hearthy is the heart of it all.</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-4">Quick Links</h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            {["About Us", "Our Services", "Training & Events", "Contact Us"].map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-primary hover:translate-x-1 transition-all duration-300 block"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-4"> Consult</h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            {["Mission", "Careers", "Newsroom", "Privacy & Terms"].map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-primary hover:translate-x-1 transition-all duration-300 block"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

     
        <div className="xs:col-span-2 md:col-span-1">
          <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-4">Stay in Touch</h3>
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-3 sm:mb-5">
            {/* Social icons */}
            {[
              {d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z", name: "Twitter"},
              {d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z", name: "YouTube"},
              {d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z", name: "Facebook"}
            ].map((icon, i) => (
              <a key={i} href="#" aria-label={`${icon.name} link`} className="hover:scale-110 transition-transform duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path d={icon.d} />
                </svg>
              </a>
            ))}
          </div>

         
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-gray-400 text-xs sm:text-sm focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="w-full bg-primary hover:bg-black text-white font-medium px-2 py-2.5 sm:px-4 sm:py-2 rounded-lg transition duration-300 text-xs sm:text-"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-600 mt-6 sm:mt-10 md:mt-12 border-t pt-4 sm:pt-6 border-gray-300 italic">
        © {new Date().getFullYear()} <strong>Hearthy Consulting LLC</strong>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;