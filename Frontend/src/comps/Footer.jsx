// import React from 'react'

// function Footer() {
//   return (
//       <footer className="footer sm:footer-horizontal bg-base-300 text-neutral-content items-center p-4 px-8">
//         <aside className="grid-flow-col items-center">
//           <p>💻 Copyright © {new Date().getFullYear()} - All right reserved</p>
//         </aside>
//         <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
//           <a>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               className="fill-current">
//               <path
//                 d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//             </svg>
//           </a>
//           <a>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               className="fill-current">
//               <path
//                 d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//             </svg>
//           </a>
//           <a>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               className="fill-current">
//               <path
//                 d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//             </svg>
//           </a>
//         </nav>
//       </footer>
//   )
// }

// export default Footer


import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-base-300 text-neutral-content mt-10">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-8 pt-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">


          {/* ================= DEVHUB ================= */}
          <div>

            <h2 className="text-3xl font-bold text-yellow-500 mb-3">
              &lt;/&gt; DevHub👨‍💻
            </h2>

            <p className="text-lg opacity-70 mb-6">
              Connect. Learn. Build.
            </p>


            {/* SOCIAL LINKS */}
            <div className="flex gap-3">

              {/* GitHub */}
              <a
                href="#"
                className="btn btn-square btn-ghost"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.98 3.23 9.2 7.7 10.7.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1 1.66.72 2.06 1.33.1-.73.39-1.23.7-1.51-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.04.76 2.1v3.12c0 .3.2.65.77.54 4.46-1.5 7.69-5.72 7.69-10.7C23.25 5.48 18.27.5 12 .5z" />
                </svg>
              </a>


              {/* LinkedIn */}
              <a
                href="#"
                className="btn btn-square btn-ghost"
                aria-label="LinkedIn"
              >
                <span className="font-bold text-lg">
                  in
                </span>
              </a>


              {/* Twitter */}
              <a
                href="#"
                className="btn btn-square btn-ghost"
                aria-label="Twitter"
              >
                🐦
              </a>

            </div>

          </div>


          {/* ================= PRODUCT ================= */}
          <div>

            <h3 className="font-bold text-lg uppercase mb-5">
              Product
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/products"
                className="link link-hover text-base"
              >
                Explore DevHub
              </Link>

              <Link
                to="/products"
                className="link link-hover text-base"
              >
                Premium
              </Link>

              <Link
                to="/products"
                className="link link-hover text-base"
              >
                Features
              </Link>

            </div>

          </div>


          {/* ================= COMPANY ================= */}
          <div>

            <h3 className="font-bold text-lg uppercase mb-5">
              Company
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/company"
                className="link link-hover text-base"
              >
                About Us
              </Link>

              <Link
                to="/company"
                className="link link-hover text-base"
              >
                Contact Us
              </Link>

            </div>

          </div>


          {/* ================= LEGAL ================= */}
          <div>

            <h3 className="font-bold text-lg uppercase mb-5">
              Legal
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/privacy-policy"
                className="link link-hover text-base"
              >
                Privacy Policy
              </Link>


              <Link
                to="/terms-and-conditions"
                className="link link-hover text-base"
              >
                Terms & Conditions
              </Link>


              <Link
                to="/cancellation-refund"
                className="link link-hover text-base"
              >
                Cancellation & Refund Policy
              </Link>

            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-base-content/10">

        <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* COPYRIGHT */}
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} DevHub. All rights reserved.
          </p>


          {/* RAZORPAY PAYMENT INFO */}
          <div className="flex items-center gap-2 text-sm opacity-70">

            <span className="text-lg">
              🔒
            </span>

            <span>
              Secure payments powered by Razorpay
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;