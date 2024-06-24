import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section   [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-accentTwo after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-accentOne sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-300">
        <p>
        CodeCanvas Creations LLC begins every project with a comprehensive Discovery 
        phase designed to deeply understand our clients' vision and objectives. 

        This phase starts with an initial {' '}
        <strong className='font-semibold text-accentOne'>consultation</strong>{' '}
        where we prioritize listening to your ideas, 
        challenges, and aspirations. 

        </p>
        <p>
          We prioritize collaboration and communication, aiming to deliver solutions 
          that not only meet but exceed your expectations. By fostering a proactive and 
          transparent process, we lay a solid foundation for {' '}
          <strong className="font-semibold text-accentOne">successful project execution,</strong> {' '}
          setting the stage for innovative and high-quality software development 
          tailored to your unique needs.
        </p>
        <p>
          Our goal is to achieve mutual {' '}
          <strong className="font-semibold text-accentOne">agreement</strong> on the project roadmap, 
          encompassing timelines, milestones, and responsibilities.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-accentOne">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Project Vision and Objectives</TagListItem>
        <TagListItem>Requirements Documentation</TagListItem>
        <TagListItem>Project Scope Definition</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Budget Estimate</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-300">
        <p>
          In the Build phase at CodeCanvas Creations LLC, 
          we embody our core values of creativity, innovation, 
          and quality to transform ideas into robust software solutions. 
          Beginning with meticulous architecture design, we prioritize 
          creative and scalable solutions that align closely with your project's vision.
        </p>
        <p>
          Prototyping and development are conducted iteratively, 
          allowing us to validate concepts early and incorporate feedback seamlessly.
          Throughout feature implementation, we emphasize creative
          problem-solving and user-centric design, aiming to enhance
          user experience while pushing boundaries in functionality and innovation.
        </p>
        <p>
        Client involvement is integral; we actively seek and integrate
         your feedback to refine features and ensure alignment with your evolving needs. 
        </p>
        <p>
          Comprehensive documentation and knowledge transfer further 
          empower your team to maintain and leverage the developed 
          solution effectively, solidifying our commitment to delivering
          not just software, but solutions that inspire confidence 
          and drive innovation in your organization.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        CodeCanvas Creations LLC were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-300">
        <p>
        The Deliver phase is where your software vision becomes{' '}
          <strong className="font-semibold text-accentOne">
            reality
          </strong>{' '}
          through meticulous deployment and comprehensive testing. 
          We ensure your solution is robust and secure by conducting
          rigorous unit, integration, and user acceptance tests.
        </p>
        <p>
          We believe in continuous improvement and maintain an open 
          feedback loop post-deployment to make iterative 
          {' '}<strong className="font-semibold text-accentOne">
            enhancements
          </strong> {' '}based on your experiences.

          At CodeCanvas Creations LLC, our dedication to excellence guarantees
          a solution that meets your immediate needs and positions you for future growth and innovation.
        </p>
        <p>
          Our commitment extends beyond deployment with
          We ensure that the main pages of the site are{' '}
          <strong className="font-semibold text-accentOne">
            ongoing support
          </strong>{' '}
          for troubleshooting, 
          updates, and modifications, ensuring your software remains{' '}
          <strong className="font-semibold text-accentOne">
            cutting-edge
          </strong>{' '}
          and efficient. 
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-accentOne">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem invert={false} title="Deployment and Testing">
          Seamless deployment with rigorous unit, integration, and user acceptance tests
          to ensure a robust and secure software solution.
        </ListItem>
        <ListItem invert={false} title="Continuous Improvement">
          Open feedback loops and periodic updates to keep the 
          software aligned with the latest advancements and ensure long-term success.
        </ListItem>
        <ListItem invert={false} title="Support & Maintennance">
          Ongoing support and maintenance to assist with troubleshooting, 
          updates, and modifications, ensuring the software remains efficient and cutting-edge.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-secondary">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_10%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
        By harmonizing proven practices with inventive approaches, 
        we deliver software that not only meets your current needs
         but also anticipates future challenges.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem invert={true} title="Meticulous">
            Our approach ensures every detail is scrutinized, 
            resulting in software that is both robust and reliable. 
          </GridListItem>
          <GridListItem invert={true} title="Efficient">
            By optimizing performance and minimizing waste, we deliver software 
            that boosts productivity and accelerates your business growth.
          </GridListItem>
          <GridListItem invert={true} title="Adaptable">
            Every business has unique needs and our greatest challenge is
            ensuring your system remains relevant and effective, providing long-term value in a dynamic market.
          </GridListItem>
          <GridListItem invert={true} title="Honest">
            By providing clear communication and setting realistic expectations, 
            we ensure that you are always informed and confident in the progress and outcomes of your project.
          </GridListItem>
          <GridListItem invert={true} title="Loyal">
            Our commitment is to your success, ensuring dedicated support and collaboration throughout your journey. 
            We prioritize building lasting partnerships by consistently delivering value and exceeding expectations.
          </GridListItem>
          <GridListItem invert={true} title="Innovative">
            We continuously explore new technologies and creative methodologies to deliver 
            unique and forward-thinking products tailored to your needs.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. At CodeCanvas Creations LLC,
          we combine these principles with a dedication to creativity, collaboration, and continuous innovation. 
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
