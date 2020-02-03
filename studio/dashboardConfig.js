export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e382ac02dc1111c5eba461b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-f9bxhgze',
                  apiId: 'd14330cb-691e-497b-94bc-cdaa27d4b721'
                },
                {
                  buildHookId: '5e382ac0019e4f957e8700d4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-eutykw7g',
                  apiId: '8feb8b20-3a12-4387-83a6-a4da5958fd99'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kstulgys/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-eutykw7g.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
