import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { TagList, TagListItem } from '@/components/TagList'
import { List, ListItem } from '@/components/List'
import { Blockquote } from '@/components/Blockquote'
import { StatList, StatListItem } from '@/components/StatList'

export const metadata: Metadata = {
  title: 'Freedom Lawns Documentation',
  description: 'Complete user guide and documentation for Freedom Lawns lawn care management platform.',
}

function ClientGuide() {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Client Guide"
        title="Getting Started with Freedom Lawns"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Welcome to Freedom Lawns! This guide will help you get started with managing your lawn care services efficiently.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end bg-accentOne rounded-4xl py-6">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">Quick Start</h3>
                <List>
                  <ListItem title="Account Setup">
                    Create your account and complete your profile with contact information and service preferences.
                  </ListItem>
                  <ListItem title="Service Scheduling">
                    Browse available services and schedule appointments that fit your schedule.
                  </ListItem>
                  <ListItem title="Payment Setup">
                    Add your preferred payment method for seamless billing and invoicing.
                  </ListItem>
                  <ListItem title="Communication">
                    Stay informed with real-time updates about your service appointments.
                  </ListItem>
                </List>
              </div>
            </FadeIn>
          </div>
          <div className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4 lg:px-0 px-6">
            <h3 className="font-display text-2xl font-semibold text-accentOne mb-6">
              Key Features for Clients
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-accentOne mb-2">Service Scheduling</h4>
                <p className="text-sm text-accentOne">
                  Easily schedule lawn care services through our intuitive calendar interface. Choose from various service types and time slots that work for you.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-accentOne mb-2">Real-time Updates</h4>
                <p className="text-sm text-accentOne">
                  Receive instant notifications about service status, crew arrival times, and any schedule changes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-accentOne mb-2">Payment Management</h4>
                <p className="text-sm text-accentOne">
                  View invoices, make payments, and manage your billing preferences all in one place.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-accentOne mb-2">Service History</h4>
                <p className="text-sm text-accentOne">
                  Access your complete service history, including photos, notes, and maintenance recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function AdminGuide() {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Administrator Guide"
        title="Managing Your Lawn Care Business"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Learn how to effectively manage your lawn care operations, crew, and customer relationships using Freedom Lawns' platform.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="bg-accentOne rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold text-primary mb-6">
                Crew Management
              </h3>
              <List>
                <ListItem title="Team Setup">
                  Add crew members, assign roles, and set up access permissions for different team levels.
                </ListItem>
                <ListItem title="Schedule Management">
                  Create and manage work schedules, assign jobs to crew members, and track time and attendance.
                </ListItem>
                <ListItem title="Performance Tracking">
                  Monitor crew performance, track job completion rates, and identify areas for improvement.
                </ListItem>
                <ListItem title="Mobile Access">
                  Provide crew members with mobile access to view assignments, update job status, and communicate with customers.
                </ListItem>
              </List>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-accentOne rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold text-primary mb-6">
                Customer Management
              </h3>
              <List>
                <ListItem title="Customer Database">
                  Maintain comprehensive customer profiles with service history, preferences, and contact information.
                </ListItem>
                <ListItem title="Service Scheduling">
                  Create and manage service schedules, handle recurring appointments, and optimize routes for efficiency.
                </ListItem>
                <ListItem title="Communication Tools">
                  Send automated notifications, updates, and reminders to keep customers informed about their services.
                </ListItem>
                <ListItem title="Feedback Management">
                  Collect and manage customer feedback, reviews, and satisfaction surveys to improve service quality.
                </ListItem>
              </List>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-accentOne rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold text-primary mb-6">
                Financial Management
              </h3>
              <List>
                <ListItem title="Invoicing System">
                  Generate professional invoices, track payments, and manage billing cycles automatically.
                </ListItem>
                <ListItem title="Payment Processing">
                  Accept various payment methods, process payments securely, and handle recurring billing.
                </ListItem>
                <ListItem title="Financial Reporting">
                  Access detailed financial reports, track revenue, expenses, and profitability metrics.
                </ListItem>
                <ListItem title="Tax Management">
                  Generate tax reports, track deductible expenses, and prepare for tax season efficiently.
                </ListItem>
              </List>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-accentOne rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold text-primary mb-6">
                Analytics & Reporting
              </h3>
              <List>
                <ListItem title="Business Analytics">
                  View comprehensive dashboards with key performance indicators and business metrics.
                </ListItem>
                <ListItem title="Route Optimization">
                  Analyze route efficiency, reduce fuel costs, and optimize crew assignments for maximum productivity.
                </ListItem>
                <ListItem title="Customer Insights">
                  Understand customer behavior, preferences, and satisfaction levels to improve service offerings.
                </ListItem>
                <ListItem title="Growth Planning">
                  Use data-driven insights to identify growth opportunities and make informed business decisions.
                </ListItem>
              </List>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

function StepByStepGuide() {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Step-by-Step Guides"
        title="Detailed Walkthroughs"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Follow these detailed guides to master every aspect of Freedom Lawns and maximize your business efficiency.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="space-y-12">
          <FadeIn>
            <div className="bg-accentOne rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold text-primary mb-6">
                Client Onboarding Process
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Step 1: Account Creation</h4>
                  <p className="text-sm text-accentOne mb-4">
                    New clients can create accounts by providing basic information and verifying their email address.
                  </p>
                  <TagList>
                    <TagListItem>Email verification</TagListItem>
                    <TagListItem>Profile completion</TagListItem>
                    <TagListItem>Service preferences</TagListItem>
                  </TagList>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Step 2: Service Selection</h4>
                  <p className="text-sm text-accentOne mb-4">
                    Clients browse available services and select the ones that meet their lawn care needs.
                  </p>
                  <TagList>
                    <TagListItem>Service catalog</TagListItem>
                    <TagListItem>Pricing information</TagListItem>
                    <TagListItem>Service descriptions</TagListItem>
                  </TagList>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Step 3: Scheduling</h4>
                  <p className="text-sm text-accentOne mb-4">
                    Clients choose convenient time slots and schedule their first service appointment.
                  </p>
                  <TagList>
                    <TagListItem>Calendar interface</TagListItem>
                    <TagListItem>Time slot selection</TagListItem>
                    <TagListItem>Confirmation process</TagListItem>
                  </TagList>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Step 4: Payment Setup</h4>
                  <p className="text-sm text-accentOne mb-4">
                    Clients add payment methods and set up billing preferences for seamless transactions.
                  </p>
                  <TagList>
                    <TagListItem>Payment methods</TagListItem>
                    <TagListItem>Billing preferences</TagListItem>
                    <TagListItem>Security verification</TagListItem>
                  </TagList>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-accentOne rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold text-primary mb-6">
                Administrator Setup Process
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Step 1: Business Profile</h4>
                  <p className="text-sm text-accentOne mb-4">
                    Set up your business profile with company information, service areas, and contact details.
                  </p>
                  <TagList>
                    <TagListItem>Company information</TagListItem>
                    <TagListItem>Service areas</TagListItem>
                    <TagListItem>Contact details</TagListItem>
                  </TagList>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Step 2: Crew Setup</h4>
                  <p className="text-sm text-accentOne mb-4">
                    Add crew members, assign roles, and set up access permissions for your team.
                  </p>
                  <TagList>
                    <TagListItem>Team member profiles</TagListItem>
                    <TagListItem>Role assignments</TagListItem>
                    <TagListItem>Access permissions</TagListItem>
                  </TagList>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Step 3: Service Configuration</h4>
                  <p className="text-sm text-accentOne mb-4">
                    Configure your service offerings, pricing, and scheduling parameters.
                  </p>
                  <TagList>
                    <TagListItem>Service definitions</TagListItem>
                    <TagListItem>Pricing structure</TagListItem>
                    <TagListItem>Scheduling rules</TagListItem>
                  </TagList>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Step 4: System Integration</h4>
                  <p className="text-sm text-accentOne mb-4">
                    Integrate with payment processors, accounting software, and other business tools.
                  </p>
                  <TagList>
                    <TagListItem>Payment gateways</TagListItem>
                    <TagListItem>Accounting integration</TagListItem>
                    <TagListItem>Third-party tools</TagListItem>
                  </TagList>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

function FAQSection() {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Frequently Asked Questions"
        title="Common Questions & Answers"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Find answers to the most common questions about using Freedom Lawns for your lawn care business.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="space-y-6">
              <div className="bg-accentOne rounded-2xl p-6">
                <h4 className="font-semibold text-primary mb-2">How do I reset my password?</h4>
                <p className="text-sm text-accentOne">
                  Click the "Forgot Password" link on the login page and follow the instructions sent to your email address.
                </p>
              </div>
              <div className="bg-accentOne rounded-2xl p-6">
                <h4 className="font-semibold text-primary mb-2">Can I change my service schedule?</h4>
                <p className="text-sm text-accentOne">
                  Yes, you can modify your service schedule through the customer portal up to 24 hours before your scheduled appointment.
                </p>
              </div>
              <div className="bg-accentOne rounded-2xl p-6">
                <h4 className="font-semibold text-primary mb-2">How do I add a new crew member?</h4>
                <p className="text-sm text-accentOne">
                  Go to the Crew Management section in your admin dashboard and click "Add New Member" to create a new team member profile.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="space-y-6">
              <div className="bg-accentOne rounded-2xl p-6">
                <h4 className="font-semibold text-primary mb-2">What payment methods are accepted?</h4>
                <p className="text-sm text-accentOne">
                  We accept all major credit cards, debit cards, and ACH bank transfers for secure payment processing.
                </p>
              </div>
              <div className="bg-accentOne rounded-2xl p-6">
                <h4 className="font-semibold text-primary mb-2">How do I generate financial reports?</h4>
                <p className="text-sm text-accentOne">
                  Navigate to the Analytics section and select "Financial Reports" to generate detailed financial statements and insights.
                </p>
              </div>
              <div className="bg-accentOne rounded-2xl p-6">
                <h4 className="font-semibold text-primary mb-2">Is my data secure?</h4>
                <p className="text-sm text-accentOne">
                  Yes, we use industry-standard encryption and security measures to protect all customer and business data.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

export default function Documentation() {
  return (
    <>
      <PageIntro eyebrow="Documentation" title="Freedom Lawns User Guide">
        <p>
          Welcome to the comprehensive documentation for Freedom Lawns. This guide covers everything you need to know
          about using our lawn care management platform, whether you're a client or an administrator.
        </p>
      </PageIntro>

      <ClientGuide />
      <AdminGuide />
      <StepByStepGuide />
      <FAQSection />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="bg-accentOne rounded-4xl py-12 px-8 text-center">
            <h2 className="font-display text-3xl font-semibold text-primary mb-4">
              Need Additional Help?
            </h2>
            <p className="text-lg text-accentOne mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you get the most out of Freedom Lawns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary text-accentOne px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/work/freedom-lawns"
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-accentOne transition-colors"
              >
                View Case Study
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  )
} 