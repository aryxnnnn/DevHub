import React from "react";
import premiumCover from "../img/ProductsCover.png";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    description: "Get started with the basics.",
    price: "₹0",
    period: "/ forever",
    features: [
      "Create your profile",
      "Connect with developers",
      "Access to global feed",
      "Basic search",
      "Join communities",
    ],
    button: "Current Plan",
    style: "free",
  },
  {
    name: "Silver",
    description: "More tools to grow faster.",
    price: "₹5",
    period: "/ month",
    features: [
      "Everything in Free",
      "Advanced search & filters",
      "Extended profile customisation",
      "Priority in recommendations",
      "Early access to new features",
    ],
    button: "Upgrade to Silver",
    style: "silver",
    popular: true,
  },
  {
    name: "Pro",
    description: "Maximum visibility and opportunities.",
    price: "₹10",
    period: "/ month",
    features: [
      "Everything in Silver",
      "Premium profile badge",
      "Highlight your projects",
      "Access to exclusive communities",
      "Priority support",
      "Early access to all new features",
    ],
    button: "Upgrade to Pro",
    style: "pro",
  },
];

function ProductsPage() {
  return (
    <main className="w-full bg-white">
      {/* ================= COVER IMAGE ================= */}
      <section className="w-full overflow-hidden">
        <img
          src={premiumCover}
          alt="DevHub Premium"
          className="block h-auto w-full object-cover"
        />
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section className="bg-[#f8faff] px-[8%] py-14">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-180 text-center">
          <span className="mb-2 block text-[12px] font-bold tracking-[1px] text-[#52627a]">
            CHOOSE A PLAN
          </span>

          <h1 className="m-0 text-[34px] font-bold leading-tight text-[#111827]">
            Find the right plan for you
          </h1>

          <p className="mx-auto mt-3 max-w-155 text-[15px] leading-[1.6] text-[#5f6b7a]">
            Whether you are just getting started or looking for more
            opportunities, we have a plan that fits your journey.
          </p>
        </div>

        {/* ================= PRICING CARDS ================= */}
        <div className="mx-auto grid max-w-262.5 grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative flex min-h-97.5 flex-col rounded-[10px]
                bg-white px-5.5 pb-4.5 pt-6.25
                shadow-[0_3px_12px_rgba(20,40,80,0.04)]
                ${plan.style === "free" ? "border border-[#dce3ed]" : ""}
                ${
                  plan.style === "silver"
                    ? "border border-[#74a7ff] shadow-[0_5px_20px_rgba(59,130,246,0.08)]"
                    : ""
                }
                ${
                  plan.style === "pro"
                    ? "border border-[#f4b72d] shadow-[0_5px_20px_rgba(245,158,11,0.08)]"
                    : ""
                }
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute right-3 top-3 rounded-md bg-[#3b82f6] px-2.5 py-1 text-[11px] font-semibold text-white">
                  Most Popular
                </span>
              )}

              {/* Plan Header */}
              <div>
                <h2 className="m-0 text-[20px] font-bold text-[#111827]">
                  {plan.name}
                </h2>

                <p className="mt-1 text-[12px] text-[#65728a]">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="my-5.5 flex items-baseline">
                <span className="text-[30px] font-bold text-[#111827]">
                  {plan.price}
                </span>

                <span className="ml-1.5 text-[12px] text-[#65728a]">
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="m-0 flex flex-col gap-2.5 p-0">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-[12px] leading-[1.4] text-[#39465a]"
                  >
                    <span
                      className={`
                        shrink-0 text-[13px] font-bold
                        ${plan.style === "free" ? "text-[#6d88b8]" : ""}
                        ${plan.style === "silver" ? "text-[#2878ff]" : ""}
                        ${plan.style === "pro" ? "text-[#e9a900]" : ""}
                      `}
                    >
                      ✓
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                type="button"
                className={`
                  mt-auto w-full rounded-[7px] px-3.75 py-2.5
                  text-[12px] font-semibold
                  transition-transform duration-150
                  hover:-translate-y-px
                  ${plan.style === "free" ? "bg-[#edf2f8] text-[#64748b]" : ""}
                  ${plan.style === "silver" ? "bg-[#2878ff] text-white" : ""}
                  ${plan.style === "pro" ? "bg-[#fbbd18] text-[#111827]" : ""}
                `}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>

        {/* ================= PAYMENT INFORMATION ================= */}
        <div className="mx-auto mt-3 grid max-w-262.5 grid-cols-1 gap-3 rounded-[9px] border border-[#dce3ed] bg-white px-4.5 py-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Secure Payments */}
          <div className="flex items-center gap-2 px-3 py-1">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center text-[18px]">
              🛡️
            </div>

            <div>
              <h3 className="m-0 text-[12px] font-semibold text-[#1f2937]">
                Secure Payments
              </h3>

              <p className="mt-0.5 text-[10px] text-[#68758a]">
                Powered by Razorpay
              </p>
            </div>
          </div>

          {/* Instant Activation */}
          <div className="flex items-center gap-2 px-3 py-1">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center text-[18px]">
              ⚡
            </div>

            <div>
              <h3 className="m-0 text-[12px] font-semibold text-[#1f2937]">
                Instant Activation
              </h3>

              <p className="mt-0.5 text-[10px] text-[#68758a]">
                Get access immediately
              </p>
            </div>
          </div>

          {/* Data Safety */}
          <div className="flex items-center gap-2 px-3 py-1">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center text-[18px]">
              🔒
            </div>

            <div>
              <h3 className="m-0 text-[12px] font-semibold text-[#1f2937]">
                Your Data is Safe
              </h3>

              <p className="mt-0.5 text-[10px] text-[#68758a]">
                We never store card details
              </p>
            </div>
          </div>

          {/* Support */}
          <div className="flex items-center gap-2 px-3 py-1">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center text-[18px]">
              🎧
            </div>

            <div>
              <h3 className="m-0 text-[12px] font-semibold text-[#1f2937]">
                Need Help?
              </h3>

              <Link
                to="/company"
                className="mt-0.5 text-[10px] text-[#2878ff] hover:underline"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductsPage;
