import ContactCard from '@components/contact-card';
import Grid from '@layouts/grid';
import GlobalFooter from '@components/global-footer';
import Heading from '@tags/heading';
import Icon from '@tags/icon';
import Link from '@tags/link';
import List from '@tags/list';
import MagicHeader from '@components/magic-header';
import Pageshell from '@layouts/pageshell';
import Paragraph from '@tags/paragraph';
import ResumeCard from '@components/resume-card';
import Wrapper from '@layouts/wrapper';

import seran from '@assets/images/seran-screenshot.png';
import turn from '@assets/images/turn-screenshot.png';
// import engagement from '@assets/images/engagement-screenshot.png';
// import fuzzy from '@assets/images/fuzzy-screenshot.png';
import everence from '@assets/images/everence-screenshot.png';
import louisa from '@assets/images/louisa-foods-screenshot.png';
import grc from '@assets/images/grc-screenshot.png';
import tradeshift from '@assets/images/tradeshift-screenshot.png';
import nwn from '@assets/images/nwn-screenshot.png';
import saladandgo from '@assets/images/salad-and-go-screenshot.png';
import arryved from '@assets/images/arryved-screenshot.png';
import cruciallearning from '@assets/images/crucial-learning-screenshot.png';

const Home = () => (
  <Pageshell>
    <MagicHeader>
      <Heading>Hello,</Heading>
      <Heading element="h4">My name is Conner Parsley. My quest, unknown.</Heading>
      <Heading element="h5">
        I build front-end styleguides to transform imagination into
        reality
      </Heading>
      <Paragraph>
        But that's not all I do. Technology can help humans tell new stories
        in ways like never before. Accessible at the tips of our fingers
        are beams of light that connect to ideas, music, culture, alongside
        the direct line to hundreds of libraries worth of information.
        Cyberspace is a vast sea. Let me help you navigate!
      </Paragraph>
    </MagicHeader>
    <Wrapper size="small" hasRhythm>
      <Heading element="h3">Here's some of my work:</Heading>
      <Grid variant="square" col="3">
        <ResumeCard target="_blank" href="https://turnwith.us/" variant="light" bkg={turn}>
          Turn Agency
        </ResumeCard>
        <ResumeCard target="_blank" href="https://www.seranbio.com/" variant="light" bkg={seran}>
          Seran Bioscience
        </ResumeCard>
        <ResumeCard target="_blank" href="https://www.everence.com/" variant="dark" bkg={everence}>
          Everence
        </ResumeCard>
        <ResumeCard target="_blank" href="https://www.everence.com/" variant="dark" bkg={tradeshift}>
          Tradeshift
        </ResumeCard>
        <ResumeCard target="_blank" href="https://www.everence.com/" variant="dark" bkg={grc}>
          Rock 'n Roll Camp for Girls
        </ResumeCard>
        <ResumeCard target="_blank" href="https://www.everence.com/" variant="dark" bkg={louisa}>
          Louisa Foods
        </ResumeCard>
        <ResumeCard target="_blank" href="https://www.everence.com/" variant="dark" bkg={nwn}>
          NW Natural
        </ResumeCard>
        <ResumeCard target="_blank" href="https://cruciallearning.com/" variant="dark" bkg={cruciallearning}>
          Crucial Learning
        </ResumeCard>
        <ResumeCard target="_blank" href="https://arryved.com/" variant="dark" bkg={arryved}>
          Arryved
        </ResumeCard>
        <ResumeCard target="_blank" href="https://saladandgo.com/" variant="dark" bkg={saladandgo}>
          Salad and Go
        </ResumeCard>
        {/* pending site launch / finish
          <ResumeCard target="_blank" href="https://www.everence.com/" variant="light" bkg={everence}>
            Spirit Mountain Community Fund
          </ResumeCard>
          <ResumeCard target="_blank" href="https://www.everence.com/" variant="light" bkg={everence}>
            The Confederated Tribes of Grand Ronde
          </ResumeCard>
        */}
      </Grid>
    </Wrapper>

    {/*<Wrapper className="is-centered">
      <Heading element="h4">I've had experiences with tools like:</Heading>
    </Wrapper>

    <Wrapper hasRhythm size="small">
      <List variant="grid">
        <List.Item>React.js implementation for static and dynamic sites</List.Item>
        <List.Item>Working with and building custom UI library deliverables like Storybook.js</List.Item>
        <List.Item>Node.js, Webpack, POSTCSS, and other preprocessing / package management</List.Item>
        <List.Item>Building code in a team environment with Git, peer-review, and collaboration</List.Item>
        <List.Item>Integrating Front-End with popular CMS solutions like Sitecore, Adobe AEM, Umbraco, and Statamic</List.Item>
      </List>
    </Wrapper>
    */}
    <Wrapper hasRhythm size="small">
      <Heading element="h4">I've worked around the area as a ...</Heading>
      <div>
        <Heading weight="bold" element="h5">Developer</Heading>
        <Heading element="h6">hired by <strong>VOLTAGE LLC</strong> | 608 Main St. Louisville, CO</Heading>
        <Heading element="h6">August 2021 - July 2022</Heading>
      </div>
      <List variant="grid">
        <List.Item>
          Led a React and Wordpress full-stack project
        </List.Item>
        <List.Item>
          Learnt in-depth PHP skills to grow 'fullstack' title
        </List.Item>
        <List.Item>
          Raised internal boilerplate standards; established a 'starter pack' Gutenburg theme for internal use
        </List.Item>
        <List.Item>
          Maintained and contributed new features to existing Wordpress eCommerce sites
        </List.Item>
      </List>
      
      <div>
        <Heading weight="bold" element="h5">Contracting Software Developer</Heading>
        <Heading element="h6">contracted by <strong>VOLTAGE LLC</strong> | 608 Main St. Louisville, CO</Heading>
        <Heading element="h6">June 2021 - August 2021</Heading>
      </div>
      <List variant="grid">
        <List.Item>
          Contributed to Wordpress Gutenburg development of Crucial Learning net-new site
        </List.Item>
        <List.Item>
          Crafted PHP views, SCSS, and integrated Alpine.js Wordpress plugin
        </List.Item>
        <List.Item>
          Provided additional support on internal Shopify projects
        </List.Item>
      </List>
      
      <div>
        <Heading weight="bold" element="h5">Developer II</Heading>
        <Heading element="h6">hired full-time by <strong>Turn Agency</strong> | 120 SW Crowell Way, Bend, OR</Heading>
        <Heading element="h6">January 2020 - April 2021</Heading>
      </div>
      <List variant="grid">
        <List.Item>
          Refactored old Front-End systems into new better-practice ES6 component libraries
        </List.Item>
        <List.Item>
          Raised internal code standards through documentation, implementing a linting solution, and creating Component templates
        </List.Item>
        <List.Item>
          Researched incoming work, emerging technologies, and creative solutions on a per-client basis to best fit their needs
        </List.Item>
      </List>

      <div>
        <Heading weight="bold" element="h5">Contracting Software Engineer</Heading>
        <Heading element="h6">for <strong>Turn Agency</strong> | 120 SW Crowell Way, Bend, OR</Heading>
        <Heading element="h6">September 2019 - January 2020</Heading>
      </div>
      <List variant="grid">
        <List.Item>
          Independently built small-scale Storybook catalogs for projects using Umbraco, Statamic, and Wordpress Gutenburg CMSs
        </List.Item>
        <List.Item>
          Consulted on technology solutions on advancing and current projects
        </List.Item>
      </List>

      <div>
        <Heading weight="bold" element="h5">Senior Software Engineer</Heading>
        <Heading element="h6">promoted at <strong>Connective DX</strong> | 2030 NW Pettygrove St., Portland, OR</Heading>
        <Heading element="h6">January 2019 - September 2019</Heading>
      </div>
      <List variant="grid">
        <List.Item>
          Prototyped, consulted, and led development on enterprise CMS projects
        </List.Item>
        <List.Item>
          Selected and trained candidates for internal internship program, and new hires
        </List.Item>
        <List.Item>
          Spearheaded research and integration of new technologies into internal Front End practice
        </List.Item>
        <List.Item>
          Collaborated often with UI / UX team members on animations, user-experience solutions, and prototyping
        </List.Item>
      </List>

      <div>
        <Heading weight="bold" element="h5">Software Engineer</Heading>
        <Heading element="h6">also for <strong>Connective DX</strong> | 2030 NW Pettygrove St., Portland, OR</Heading>
        <Heading element="h6">June 2017 - January 2019</Heading>
      </div>
      <List variant="grid">
        <List.Item>
          Contributing member on large-scale custom CMS projects integrating a React.js Front-End into a selection of enterprise CMS frameworks
        </List.Item>
        <List.Item>
          Helped define and reach broad practice goals, maintained internal development stacks, and worked with other team members to lessen tech-debt
        </List.Item>
      </List>

      <div>
        <Heading weight="bold" element="h5">Front End Developer Intern</Heading>
        <Heading element="h6">for <strong>Connective DX</strong> | 2030 NW Pettygrove St., Portland, OR</Heading>
        <Heading element="h6">May 2016 - August 2016</Heading>
      </div>
      <List variant="grid">
        <List.Item>
          Gained experience with Webpack, Node.js, and Gulp-based preprocessing
        </List.Item>
        <List.Item>
          Contributed HTML and CSS to production projects
        </List.Item>
      </List>
    </Wrapper>
    <ContactCard heading="Manning a ship? Searching for a navigator?" href="mailto:conner.c.wells@gmail.com" cta="Contact me!">
      <Paragraph>I am seeking out opportunities to help channel your web vision!</Paragraph>
    </ContactCard>
    <GlobalFooter>
      <Paragraph>Made at home by Conner</Paragraph>
      <Paragraph>Want to learn more? See my <Link target="_blank" href="https://github.com/CSKingMartin/persona"><Icon name="github" /></Link>code</Paragraph>
    </GlobalFooter>
  </Pageshell>
)

export default Home
