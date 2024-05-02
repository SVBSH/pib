'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Jobs', [
      {
        company: 'Scoot',
        logo: './assets/logos/scoot.svg',
        logoBackground: 'hsl(36, 87%, 49%)',
        position: 'Senior Software Engineer',
        postedAt: '5h ago',
        contract: 'Full Time',
        location: 'United Kingdom',
        website: 'https://example.com/scoot',
        apply: 'https://example.com/scoot/apply',
        description: 'Scoot is looking for a Senior Software Engineer passionate about building approachable, innovative and user-first experiences to join our small but growing Engineering team. You will be responsible for building and maintaining front end functionality across all of Scoot’s applications, fostering a growing team of software engineers, and helping drive and maintain best software patterns and practices in our codebase.',
        content: 'The ideal candidate is as passionate about solving challenges through technology. They are well-versed in building proof of concepts from scratch and taking these POCs to production and scale. The right fit will have the engineering experience to build and iterate quickly and is comfortable working with product and design to set the technical strategy and roadmap.',
        createdAt: new Date(),
        updatedAt: new Date(),
        hidden: false
      },
      {
        company: 'Blogr',
        logo: './assets/logos/blogr.svg',
        logoBackground: 'hsl(12, 79%, 52%)',
        position: 'Haskell and PureScript Dev',
        postedAt: '20h ago',
        contract: 'Part Time',
        location: 'United States',
        website: 'https://example.com/blogr',
        apply: 'https://example.com/blogr/apply',
        description: 'Blogr is looking for a part-time developer to join our six-strong team of full-stack engineers. Our core development values are strong, static typing and correctness, rigorous automation (in both testing and infrastructure) and everyone having a say.',
        content: 'We are looking to carefully add great developers which care about solving problems & which have been in a relationship with Purescript and/or Haskell for at least 3 years (Not necessarily monogamous though).',
        createdAt: new Date(),
        updatedAt: new Date(),
        hidden: true
      },
      {
        company: 'Some Programmer',
        logo: './assets/logos/blogr.svg',
        logoBackground: 'hsl(12, 79%, 52%)',
        position: 'Python Dev',
        postedAt: '10h ago',
        contract: 'Part Time',
        location: 'Slovakia',
        website: 'https://example.com/blogr',
        apply: 'https://example.com/blogr/apply',
        description: 'Blogr is looking for a part-time developer to join our six-strong team of full-stack engineers. Our core development values are strong, static typing and correctness, rigorous automation (in both testing and infrastructure) and everyone having a say.',
        content: 'We are looking to carefully add great developers which care about solving problems & which have been in a relationship with Purescript and/or Haskell for at least 3 years (Not necessarily monogamous though).',
        createdAt: new Date(),
        updatedAt: new Date(),
        hidden: true
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Jobs', null, {});
  }
};
