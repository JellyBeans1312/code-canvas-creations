import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import Founder from '@/images/team/founder-ceo-aidan.jpg';
import Developer from '@/images/team/developer-aidan.jpg';
import Designer from '@/images/team/designer-aidan.jpg';
import UXer from '@/images/team/user-experience-aidan.jpg';
import Copywriter from '@/images/team/copywriter-aidan.jpg';
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert={false}
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            We believe in loyalty and commitment to our clients and our team. 
            Committed to delivering a solution that is above what is expected.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We believe in trust and transparency. Keeping an open line of communication is 
            a core value of our company.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            You never know what someone is going through at home and we strive to make everyone's life a little easier. 
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Aidan McKay',
        role: 'Founder / CEO',
        image: { src: Founder },
      }
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Aidan McKay',
        role: 'Developer',
        image: { src: Developer },
      },
      {
        name: 'Aidan McKay',
        role: 'Designer',
        image: { src: Designer },
      },
      {
        name: 'Aidan Mckay',
        role: 'User Experience',
        image: { src: UXer },
      },
      {
        name: 'Aidan McKay',
        role: 'Junior Copywriter',
        image: { src: Copywriter },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-accentOne">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-accentOne">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-accentOne">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            CodeCanvas Creations LLC was started by Aidan McKay, a seasoned developer with a passion for creating innovative solutions.
            We noticed that many development teams didn't take the time to understand the client's needs and goals,
            and instead focused on delivering a minimum viable product.
          </p>
          <p>
            We believe that every project deserves the attention and care it deserves, from the smallest detail to the largest scope of work.

          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="5" label="Years of experience" />
          <StatListItem value="4" label="Projects completed" />
          <StatListItem value="$10K" label="Invoices billed" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
