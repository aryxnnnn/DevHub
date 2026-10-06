import React from "react";
import { Link } from "react-router-dom";
import premiumCover from "../img/ContactCover.png";

function CompanyPage() {
  return (
    <main className="w-full bg-white">
      {/* ================= COVER / HERO ================= */}
      <section className="w-full overflow-hidden">
        <img
          src={premiumCover}
          alt="About DevHub"
          className="block h-auto w-full object-cover"
        />
      </section>

      {/* ================= VISION & VALUES ================= */}
      <section className="px-[8%] py-10">
        <div className="mx-auto grid max-w-[1050px] grid-cols-1 gap-5 md:grid-cols-3">
          {/* Our Vision */}
          <div className="rounded-xl bg-[#f8faff] px-7 py-7">
            <div className="mb-4 text-3xl">🎯</div>

            <h2 className="mb-2 text-[20px] font-bold text-[#111827]">
              Our Vision
            </h2>

            <p className="text-[14px] leading-[1.7] text-[#5f6b7a]">
              Enable meaningful connections and opportunities for every
              developer.
            </p>
          </div>

          {/* Our Values */}
          <div className="rounded-xl bg-[#f8faff] px-7 py-7">
            <div className="mb-4 text-3xl">👥</div>

            <h2 className="mb-3 text-[20px] font-bold text-[#111827]">
              Our Values
            </h2>

            <ul className="space-y-2 text-[14px] text-[#5f6b7a]">
              <li>• Community First</li>
              <li>• Open Sharing</li>
              <li>• Continuous Learning</li>
            </ul>
          </div>

          {/* What We Believe */}
          <div className="rounded-xl bg-[#f8faff] px-7 py-7">
            <div className="mb-4 text-3xl">💡</div>

            <h2 className="mb-2 text-[20px] font-bold text-[#111827]">
              What We Believe
            </h2>

            <p className="text-[14px] leading-[1.7] text-[#5f6b7a]">
              The best developer communities are built around sharing knowledge,
              helping others and growing together.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CREATOR ================= */}
      <section className="px-[8%] pb-10">
        <div className="mx-auto max-w-[1050px] border-b border-[#e5e9f0] pb-10">
          <h2 className="mb-7 text-[28px] font-bold text-[#111827]">
            Meet the Creator
          </h2>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            {/* Avatar */}
            <div className="flex h-[110px] w-[110px] shrink-0 items-center justify-center rounded-full bg-[#e8eef9] text-[50px]">
              👨🏻‍💻
            </div>

            {/* Creator Details */}
            <div>
              <h3 className="text-[22px] font-bold text-[#111827]">
                Aryan Kaushik
              </h3>

              <p className="mt-1 text-[14px] font-medium text-[#6b7280]">
                Developer & Student
              </p>

              <p className="mt-3 max-w-[650px] text-[14px] leading-[1.7] text-[#5f6b7a]">
                I'm a final-year Mechanical Engineering student at NIT Warangal
                with a strong interest in software development, data structures
                and web development.
              </p>

              <p className="mt-2 max-w-[650px] text-[14px] leading-[1.7] text-[#5f6b7a]">
                DevHub started as a personal project to bring developers
                together and make networking simpler, more meaningful and more
                useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="px-[8%] pb-14">
        <div className="mx-auto max-w-[1050px]">
          <h2 className="text-[28px] font-bold text-[#111827]">Contact Us</h2>

          <p className="mt-2 max-w-[550px] text-[14px] leading-[1.7] text-[#5f6b7a]">
            Have questions, suggestions, feedback, or just want to say hi? I'd
            be happy to hear from you.
          </p>

          {/* Contact Information */}
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Email */}
            <a
              href="mailto:aryankaushik38108@gmail.com"
              className="group flex items-center gap-4 rounded-xl border border-[#e1e7f0] bg-white px-5 py-4 transition-all duration-200 hover:-translate-y-[2px] hover:border-[#2878ff] hover:shadow-[0_5px_20px_rgba(40,120,255,0.08)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef4ff] text-xl">
                ✉️
              </div>

              <div>
                <p className="text-[12px] font-medium text-[#7b8799]">Email</p>

                <p className="mt-0.5 text-[14px] font-semibold text-[#2878ff]">
                  YOUR_EMAIL_HERE
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 rounded-xl border border-[#e1e7f0] bg-white px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef4ff] text-xl">
                📍
              </div>

              <div>
                <p className="text-[12px] font-medium text-[#7b8799]">
                  Based in
                </p>

                <p className="mt-0.5 text-[14px] font-semibold text-[#1f2937]">
                  India
                </p>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-center gap-4 rounded-xl border border-[#e1e7f0] bg-white px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef4ff] text-xl">
                🕐
              </div>

              <div>
                <p className="text-[12px] font-medium text-[#7b8799]">
                  Response Time
                </p>

                <p className="mt-0.5 text-[14px] font-semibold text-[#1f2937]">
                  Usually within 1–2 business days
                </p>
              </div>
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/aryxnnnn"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-[#e1e7f0] bg-white px-5 py-4 transition-all duration-200 hover:-translate-y-[2px] hover:border-[#2878ff] hover:shadow-[0_5px_20px_rgba(40,120,255,0.08)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef4ff] text-xl">
                💻
              </div>

              <div>
                <p className="text-[12px] font-medium text-[#7b8799]">GitHub</p>

                <p className="mt-0.5 text-[14px] font-semibold text-[#2878ff]">
                  View DevHub
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CompanyPage;
