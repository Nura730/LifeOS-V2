import {
  useEffect,
  useRef,
} from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function LandingPage() {

  const heroRef =
    useRef<HTMLDivElement>(null)

  const cardRef =
    useRef<HTMLDivElement>(null)


    const featuresRef =
  useRef<HTMLDivElement>(null)

const analyticsRef =
  useRef<HTMLDivElement>(null)

const founderRef =
  useRef<HTMLDivElement>(null)

const faqRef =
  useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(
  ScrollTrigger
)

    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
      }
    )

    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        scale: 0.9,
        rotate: 3,
      },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1.4,
        delay: 0.2,
        ease: "power4.out",
      }
    )
const sections = [
  featuresRef.current,
  analyticsRef.current,
  founderRef.current,
  faqRef.current,
]

sections.forEach(
  (section) => {

    if (!section) return

    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      }
    )
  }
)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(163,230,53,0.15),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(163,230,53,0.08),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-zinc-900/80 bg-black/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 xl:px-10 h-20 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight">
              Life<span className="text-lime-400">OS</span>
            </h1>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm text-zinc-400 font-medium">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>

            <a href="#analytics" className="hover:text-white transition">
              Analytics
            </a>

            <a href="#system" className="hover:text-white transition">
              System
            </a>

            <a href="#faq" className="hover:text-white transition">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/login"
              className="hidden sm:flex text-zinc-400 hover:text-white transition"
            >
              Login
            </a>

            <a
              href="/register"
              className="rounded-2xl bg-lime-400 px-5 py-3 text-black font-bold hover:scale-[1.03] transition"
            >
              Start Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 xl:px-10 py-24 xl:py-36 grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-lime-400/20 bg-lime-400/10 px-5 py-2">
              <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />

              <span className="text-lime-400 text-sm font-semibold tracking-wide uppercase">
                Behavioral Operating System
              </span>
            </div>

            <h1 className="mt-10 text-6xl md:text-7xl xl:text-8xl font-black leading-none tracking-tight">
              Execute
              <br />

              <span className="text-lime-400">
                Your Life
              </span>

              <br />

              Intentionally.
            </h1>

            <p className="mt-10 text-zinc-400 text-lg xl:text-xl leading-relaxed max-w-2xl">
              LifeOS transforms your habits, focus sessions, journaling,
              emotional patterns, and execution consistency into one intelligent
              behavioral operating system.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-12">
              <a
                href="/register"
                className="rounded-3xl bg-lime-400 px-8 py-5 text-black text-lg font-black hover:scale-[1.03] transition"
              >
                Launch LifeOS
              </a>

              <a
                href="#features"
                className="rounded-3xl border border-zinc-800 px-8 py-5 font-semibold hover:bg-zinc-900 transition"
              >
                Explore Features
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
              <div>
                <h2 className="text-3xl font-black text-lime-400">AI</h2>
                <p className="text-zinc-500 text-sm mt-2">
                  Behavioral insights
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-lime-400">24/7</h2>
                <p className="text-zinc-500 text-sm mt-2">
                  Execution tracking
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-lime-400">100%</h2>
                <p className="text-zinc-500 text-sm mt-2">
                  Self-awareness
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-lime-400">OS</h2>
                <p className="text-zinc-500 text-sm mt-2">
                  Unified life system
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-lime-400/10 rounded-full" />

            <div className="relative rounded-[2rem] border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl p-8 shadow-2xl shadow-lime-400/10">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
                <div>
                  <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs">
                    LifeOS Core
                  </p>

                  <h3 className="text-3xl font-black mt-3">
                    Behavioral Intelligence
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-lime-400 text-black flex items-center justify-center text-2xl font-black">
                  N
                </div>
              </div>

              <div className="space-y-6 mt-8">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-zinc-500 text-sm uppercase">
                        Current Identity
                      </p>

                      <h2 className="text-4xl font-black text-lime-400 mt-3">
                        Builder
                      </h2>
                    </div>

                    <div className="w-16 h-16 rounded-3xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center">
                      <span className="text-2xl font-black text-lime-400">
                        91
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-5">
                    <p className="text-zinc-500 text-sm uppercase">
                      Habits
                    </p>

                    <h3 className="text-5xl font-black mt-4">12</h3>
                  </div>

                  <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-5">
                    <p className="text-zinc-500 text-sm uppercase">
                      Focus Score
                    </p>

                    <h3 className="text-5xl font-black mt-4 text-lime-400">
                      87%
                    </h3>
                  </div>
                </div>

                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-zinc-500 uppercase text-xs tracking-[0.3em]">
                        AI ANALYSIS
                      </p>

                      <p className="text-zinc-300 leading-relaxed mt-5">
                        Your execution consistency is improving emotional
                        stability and long-term behavioral alignment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} id="features" className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 xl:px-10 py-28">
          <div className="max-w-3xl">
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
              Core Features
            </p>

            <h2 className="text-5xl xl:text-6xl font-black mt-6 leading-tight">
              Everything You Need
              <br />
              To Operate Better.
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mt-8">
              LifeOS is not another productivity tracker. It is a behavioral
              execution platform designed to improve consistency, focus, and
              self-awareness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
            {[
              {
                title: 'Habit Engine',
                desc: 'Build identity-driven routines with streak tracking and behavioral reinforcement.',
              },
              {
                title: 'Focus System',
                desc: 'Deep work tracking and execution analysis to maximize cognitive performance.',
              },
              {
                title: 'AI Journaling',
                desc: 'Reflect on emotions, thoughts, and behavioral patterns with intelligent insights.',
              },
              {
                title: 'Mood Analytics',
                desc: 'Visualize emotional trends and execution consistency over time.',
              },
              {
                title: 'Behavior Timeline',
                desc: 'Replay your growth journey through habits, tasks, and reflections.',
              },
              {
                title: 'Identity Engine',
                desc: 'Track your evolution from distracted execution to elite consistency.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-[2rem] border border-zinc-800 bg-zinc-900/40 p-8 hover:border-lime-400/20 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-lime-400" />
                </div>

                <h3 className="text-3xl font-black mt-8">
                  {feature.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed mt-5">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section ref={analyticsRef} id="analytics" className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 xl:px-10 py-28 grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
              Advanced Analytics
            </p>

            <h2 className="text-5xl xl:text-6xl font-black mt-6 leading-tight">
              Understand
              <br />
              Your Patterns.
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mt-8">
              LifeOS transforms your execution data into meaningful behavioral
              insights so you can identify strengths, weaknesses, emotional
              triggers, and consistency trends.
            </p>

            <div className="space-y-6 mt-12">
              {[
                'Weekly execution heatmaps',
                'Mood and emotional tracking',
                'Habit completion analytics',
                'Behavioral consistency metrics',
                'AI-generated reflections',
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-lime-400" />

                  <p className="text-zinc-300 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-10">
            <div className="space-y-8">
              <div>
                <div className="flex items-end justify-between">
                  <span className="text-zinc-500 uppercase text-sm">
                    Consistency Score
                  </span>

                  <span className="text-lime-400 text-5xl font-black">
                    92%
                  </span>
                </div>

                <div className="w-full h-4 rounded-full bg-zinc-900 mt-5 overflow-hidden">
                  <div className="h-full w-[92%] rounded-full bg-lime-400" />
                </div>
              </div>

              <div className="grid grid-cols-7 gap-3 pt-4">
                {[40, 60, 80, 100, 70, 90, 95].map((v, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-lime-400/10 border border-lime-400/20 flex items-end justify-center p-2 h-40"
                  >
                    <div
                      className="w-full rounded-xl bg-lime-400"
                      style={{ height: `${v}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Founder Vision */}
<section
  ref={founderRef}
  className="border-t border-zinc-900"
>
  <div className="max-w-7xl mx-auto px-6 xl:px-10 py-28 grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

    {/* Left */}
    <div ref={heroRef}>
      <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
        Founder Vision
      </p>

      <h2 className="text-5xl xl:text-6xl font-black mt-6 leading-tight">
        Built From
        <br />

        Real Behavioral
        <br />

        Struggles.
      </h2>
    </div>

    {/* Right */}
    <div ref={cardRef} className="space-y-8 text-zinc-400 text-lg leading-relaxed">

      <p>
        Most productivity apps
        track tasks.
        But tasks alone do not
        change behavior.
      </p>

      <p>
        Real growth comes from
        understanding emotional
        patterns, consistency,
        identity, discipline,
        focus, and execution.
      </p>

      <p>
        LifeOS was built to combine
        all of those systems into
        one behavioral operating
        system designed for
        intentional living.
      </p>

      <div className="rounded-3xl border border-lime-400/20 bg-lime-400/10 p-6">

        <p className="text-lime-400 font-semibold leading-relaxed">
          “Your future is created by
          the systems you repeat
          every day.”
        </p>
      </div>
    </div>
  </div>
</section>

      {/* CTA */}
      <section id="system" className="border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 py-28 text-center">
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            Start Your Evolution
          </p>

          <h2 className="text-5xl xl:text-7xl font-black mt-8 leading-tight">
            Your Current Systems
            <br />
            Create Your Future.
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed mt-10 max-w-3xl mx-auto">
            LifeOS helps you transform random effort into measurable execution,
            emotional intelligence, and long-term behavioral growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-14">
            <a
              href="/register"
              className="rounded-3xl bg-lime-400 px-10 py-5 text-black font-black text-lg hover:scale-[1.03] transition"
            >
              Create Account
            </a>

            <a
              href="/login"
              className="rounded-3xl border border-zinc-800 px-10 py-5 font-bold hover:bg-zinc-900 transition"
            >
              Continue Journey
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} id="faq" className="border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 py-28">
          <div className="text-center">
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
              FAQ
            </p>

            <h2 className="text-5xl font-black mt-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6 mt-20">
            {[
              {
                q: 'What is LifeOS?',
                a: 'LifeOS is a behavioral operating system that combines productivity, emotional intelligence, and self-awareness into one platform.',
              },
              {
                q: 'Who is LifeOS built for?',
                a: 'Students, creators, founders, developers, and anyone serious about improving consistency and execution.',
              },
              {
                q: 'Does LifeOS use AI?',
                a: 'LifeOS includes intelligent behavioral analysis and AI-ready infrastructure for future coaching systems.',
              },
              {
                q: 'Can I track moods and journaling?',
                a: 'Yes. LifeOS includes emotional analytics, journaling, reflections, and timeline replay systems.',
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8"
              >
                <h3 className="text-2xl font-black">
                  {faq.q}
                </h3>

                <p className="text-zinc-400 leading-relaxed mt-5 text-lg">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 xl:px-10 py-10 flex flex-col xl:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black">
              Life<span className="text-lime-400">OS</span>
            </h2>

            <p className="text-zinc-500 mt-3">
              Behavioral Operating System.
            </p>
          </div>

          <div className="flex items-center gap-8 text-zinc-500 text-sm">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms
            </a>

            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
