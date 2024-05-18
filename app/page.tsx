import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckIcon, MountainIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
      <header className="px-4 sticky top-0 lg:px-6 h-14 flex items-center bg-white dark:bg-gray-900">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6 text-blue-600" />
          <span className="sr-only">Acme Finance</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-600 dark:text-gray-400"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-600 dark:text-gray-400"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-600 dark:text-gray-400"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-600 dark:text-gray-400"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-gray-100">
                    Unlock the Power of Your Finances
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400">
                    Our financial dashboard provides you with a comprehensive
                    view of your financial health, empowering you to make
                    informed decisions and achieve your financial goals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-300 px-3 py-1 text-sm text-gray-700 dark:bg-gray-600 dark:text-gray-300">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
                  Streamline Your Financial Management
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our financial dashboard offers a suite of powerful tools to
                  help you gain complete control over your finances.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        Comprehensive Reporting
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Get detailed insights into your income, expenses, and
                        overall financial health.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        Intelligent Budgeting
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Create and manage your budgets with ease, and receive
                        smart recommendations to optimize your spending.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        Seamless Integration
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Connect your bank accounts, credit cards, and investment
                        accounts for a unified view of your finances.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900"
          id="pricing"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-300 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
                  Affordable Plans for Everyone
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that best suits your needs and budget.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 h-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Basic
                  </h3>
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    $9
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 flex-1">
                  Perfect for individuals who want to manage their personal
                  finances.
                </p>
                <ul className="grid gap-2 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                    Comprehensive Reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                    Intelligent Budgeting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                    Seamless Integration
                  </li>
                </ul>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
              <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 h-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Premium
                  </h3>
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    $19
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 flex-1">
                  Designed for small businesses and freelancers who need
                  advanced features.
                </p>
                <ul className="grid gap-2 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                    Comprehensive Reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                    Intelligent Budgeting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                    Seamless Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                    Tax Preparation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                    Invoicing
                  </li>
                </ul>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
              <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 h-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Enterprise
                  </h3>
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    $49
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 flex-1">
                  Tailored for large organizations and corporations with complex
                  financial needs.
                </p>
                <ul className="grid gap-2 flex-1">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                    Comprehensive Reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                    Intelligent Budgeting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                    Seamless Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                    Tax Preparation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                    Invoicing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                    Dedicated Support
                  </li>
                </ul>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32  bg-gray-200 border-y">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900 dark:text-gray-100">
                Trusted by Thousands of Users
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our financial dashboard has helped individuals and businesses
                alike to take control of their finances and achieve their
                financial goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Get Started
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View Testimonials
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-300 dark:border-gray-700">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900 dark:text-gray-100">
                Take Control of Your Finances Today
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Sign up for our financial dashboard and start making informed
                decisions about your money.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  type="submit"
                >
                  Get Started
                </Button>
              </form>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                By signing up, you agree to our
                <Link
                  className="underline underline-offset-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
                  href="#"
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-300 dark:border-gray-700">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          © 2024 Acme Finance. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs text-gray-600 hover:underline underline-offset-4 dark:text-gray-400"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs text-gray-600 hover:underline underline-offset-4 dark:text-gray-400"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
