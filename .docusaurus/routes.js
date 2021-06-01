
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','b64'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','a35'),
  exact: true,
},
{
  path: '/blog/tags/citedrive',
  component: ComponentCreator('/blog/tags/citedrive','1ba'),
  exact: true,
},
{
  path: '/blog/tags/docs',
  component: ComponentCreator('/blog/tags/docs','a1e'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','30e'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','2de'),
  
  routes: [
{
  path: '/docs/bibtex',
  component: ComponentCreator('/docs/bibtex','c69'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/address',
  component: ComponentCreator('/docs/bibtex/field-types/address','dc3'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/annote',
  component: ComponentCreator('/docs/bibtex/field-types/annote','045'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/author',
  component: ComponentCreator('/docs/bibtex/field-types/author','d5f'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/booktitle',
  component: ComponentCreator('/docs/bibtex/field-types/booktitle','0d7'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/chapter',
  component: ComponentCreator('/docs/bibtex/field-types/chapter','03e'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/crossref',
  component: ComponentCreator('/docs/bibtex/field-types/crossref','565'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/doi',
  component: ComponentCreator('/docs/bibtex/field-types/doi','c5f'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/edition',
  component: ComponentCreator('/docs/bibtex/field-types/edition','f39'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/editor',
  component: ComponentCreator('/docs/bibtex/field-types/editor','5f7'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/email',
  component: ComponentCreator('/docs/bibtex/field-types/email','598'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/howpublished',
  component: ComponentCreator('/docs/bibtex/field-types/howpublished','f96'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/institution',
  component: ComponentCreator('/docs/bibtex/field-types/institution','11d'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/journal',
  component: ComponentCreator('/docs/bibtex/field-types/journal','137'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/key',
  component: ComponentCreator('/docs/bibtex/field-types/key','f01'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/month',
  component: ComponentCreator('/docs/bibtex/field-types/month','015'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/note',
  component: ComponentCreator('/docs/bibtex/field-types/note','301'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/number',
  component: ComponentCreator('/docs/bibtex/field-types/number','445'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/organization',
  component: ComponentCreator('/docs/bibtex/field-types/organization','b10'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/pages',
  component: ComponentCreator('/docs/bibtex/field-types/pages','e64'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/publisher',
  component: ComponentCreator('/docs/bibtex/field-types/publisher','8d6'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/school',
  component: ComponentCreator('/docs/bibtex/field-types/school','92f'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/series',
  component: ComponentCreator('/docs/bibtex/field-types/series','10b'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/title',
  component: ComponentCreator('/docs/bibtex/field-types/title','e08'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/type',
  component: ComponentCreator('/docs/bibtex/field-types/type','d0a'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/volume',
  component: ComponentCreator('/docs/bibtex/field-types/volume','f69'),
  exact: true,
},
{
  path: '/docs/bibtex/field-types/year',
  component: ComponentCreator('/docs/bibtex/field-types/year','855'),
  exact: true,
},
{
  path: '/docs/bibtex/intro',
  component: ComponentCreator('/docs/bibtex/intro','91b'),
  exact: true,
},
{
  path: '/docs/export',
  component: ComponentCreator('/docs/export','684'),
  exact: true,
},
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','e84'),
  exact: true,
},
{
  path: '/docs/overleaf',
  component: ComponentCreator('/docs/overleaf','8d0'),
  exact: true,
},
{
  path: '/docs/overleaf/intro',
  component: ComponentCreator('/docs/overleaf/intro','301'),
  exact: true,
},
{
  path: '/docs/r-markdown',
  component: ComponentCreator('/docs/r-markdown','533'),
  exact: true,
},
{
  path: '/docs/r-markdown/bibliography-and-citation-styles/toast',
  component: ComponentCreator('/docs/r-markdown/bibliography-and-citation-styles/toast','47a'),
  exact: true,
},
{
  path: '/docs/share-project',
  component: ComponentCreator('/docs/share-project','c93'),
  exact: true,
},
{
  path: '/docs/word-processor',
  component: ComponentCreator('/docs/word-processor','37f'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
