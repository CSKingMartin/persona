import ContactCard from '@components/contact-card';
import Grid from '@layouts/grid';
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

const Home = () => (
  <Pageshell>
    <MagicHeader
      heading="Hello,"
      prefix="I "
      middle=" build front-end styleguides "
      variable={
        [
          "cast magic spells",
          "brew and bubble potions",
          "make dreams come true",
          "grant wishes",
          "commit sorcery"
        ]
      }
      suffix="with HTML, CSS, and Javascript!"
    >
      <Paragraph>
        That's not all I do! Technology can help humans tell new stories
        in ways like never before. Accessible at the tips of our fingers
        are beams of light that connect to ideas, music, culture, alongside
        the direct line to hundreds of libraries worth of information.
        Cyberspace is a vast sea. Let me help you navigate!
      </Paragraph>
    </MagicHeader>

    <Wrapper hasRhythm>
      <Heading element="h3">Who am I to make such claims?</Heading>
      <Heading element="h4">I earned a B.A., in Computer Science at Linfield College in 2017.</Heading>
      
      <Heading element="h4">I've been building design-systems and styleguide with React.js for almost 3 years:</Heading>
    </Wrapper>

    <Wrapper size="large" hasRhythm>
      <Grid variant="square" col="3">
        <ResumeCard variant="light" bkg={turn}>
          Turn Agency
        </ResumeCard>
        <ResumeCard variant="light" bkg={seran}>
          Seran Bioscience
        </ResumeCard>
        <ResumeCard>
          Project Mino?
        </ResumeCard>
      </Grid>
    </Wrapper>

    <Wrapper>
      <Heading element="h4">I've had experiences with tools like:</Heading>
    </Wrapper>

    <Wrapper hasRhythm size="small">
      <List variant="grid">
        <List.Item>React.js implementation for static and dynamic sites</List.Item>
        <List.Item>Working with and building custom UI library deliverables like Storybook.js</List.Item>
        <List.Item>Node.js, Webpack, POSTCSS, and other preprocessing / package management.</List.Item>
        <List.Item>Building code in a team environment with Git, peer-review, and collaboration</List.Item>
        <List.Item>Integrating Front-End with popular CMS solutions like Sitecore, Adobe AEM, Umbraco, and Statamic.</List.Item>
      </List>
    </Wrapper>
    <Wrapper>
      <Heading element="h4">I've worked around the area as a...</Heading>
    </Wrapper>
    <Wrapper hasRhythm size="small">
      <div>
        <Heading weight="bold" element="h5">Front End Developer Intern</Heading>
        <Heading element="h6">for <strong>Connective DX</strong> | 2030 NW Pettygrove St., Portland OR</Heading>
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

      <div>
        <Heading weight="bold" element="h5">Software Engineer</Heading>
        <Heading element="h6">also for <strong>Connective DX</strong> | 2030 NW Pettygrove St., Portland OR</Heading>
        <Heading element="h6">June 2017 - January 2019</Heading>
      </div>
      <List variant="grid">
        <List.Item>
          Contributing member on large-scale custom CMS projects integrating a React.js Front-End into a selection of enterprise CMS frameworks
        </List.Item>
        <List.Item>
          Helped define and reach broad practrice goals, maintained internal development stacks, and worked with other team members to lessen tech-debt
        </List.Item>
      </List>

      <div>
        <Heading weight="bold" element="h5">Senior Software Engineer</Heading>
        <Heading element="h6">promoted at <strong>Connective DX</strong> | 2030 NW Pettygrove St., Portland OR</Heading>
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
        <Heading weight="bold" element="h5">Contracting Software Engineer</Heading>
        <Heading element="h6">for <strong>Turn Agency</strong> | 120 SW Crowell Way, Bend OR</Heading>
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
        <Heading weight="bold" element="h5">Developer II</Heading>
        <Heading element="h6">hired full time by <strong>Turn Agency</strong> | 120 SW Crowell Way, Bend OR</Heading>
        <Heading element="h6">January 2020 - April 2020</Heading>
      </div>
      <List variant="grid">
        <List.Item>
          Refactored old Front-End systems into new better-practice ES6 component libraries
        </List.Item>
        <List.Item>
          Raised internal code standards through documentation, implementing a linting solution, and creating Component templates.
        </List.Item>
        <List.Item>
          Researched incoming work, emerging technologies, and creative solutions on a per-client basis to best fit their needs
        </List.Item>
      </List>
    </Wrapper>
    <ContactCard heading="Manning a ship? Searching for a navigator?" cta="Contact me!">
      <Paragraph>I am seeking out opportunities to help channel your web vision!</Paragraph>
    </ContactCard>
  </Pageshell>
)

export default Home
