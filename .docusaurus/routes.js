
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
  component: ComponentCreator('/docs','cb2'),
  
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
  path: '/docs/overleaf/bibliography-and-citation-styles/aabbrv',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/aabbrv','3cd'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/aalpha',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/aalpha','3e8'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/abbrv',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/abbrv','a83'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/abbrv-fr',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/abbrv-fr','6bb'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/abbrv-letters',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/abbrv-letters','c9d'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/abbrvcnb',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/abbrvcnb','9a5'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/abbrvdin',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/abbrvdin','254'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/abbrvhtml',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/abbrvhtml','f5e'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/abbrvnat',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/abbrvnat','953'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/abbrvnat-fr',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/abbrvnat-fr','81d'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/abbrvurl',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/abbrvurl','26a'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/abntex2-alf',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/abntex2-alf','16c'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/abntex2-num',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/abntex2-num','3a4'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/achemso',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/achemso','1ca'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/achicago',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/achicago','b79'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/acm',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/acm','9a8'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/acm-fa',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/acm-fa','9ef'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/address',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/address','2ed'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/address-html',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/address-html','d38'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/address-ldif',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/address-ldif','c4c'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/address-vcard',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/address-vcard','6dd'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/adfathesis',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/adfathesis','4c5'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/adrbirthday',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/adrbirthday','1f8'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/adrconv',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/adrconv','0d3'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/adrfax',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/adrfax','9e5'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/aer',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/aer','2f3'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/aertt',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/aertt','ed9'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/agecon',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/agecon','c2d'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/agsm',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/agsm','afa'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/agu',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/agu','f35'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/agu04',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/agu04','631'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/agufull',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/agufull','846'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/agufull04',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/agufull04','73a'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/aiaa',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/aiaa','74f'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/aichej',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/aichej','813'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/aipauth4-1',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/aipauth4-1','e3b'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/aipnum4-1',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/aipnum4-1','7d2'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ajae',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ajae','0ac'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ajl',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ajl','1f5'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/alpha',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/alpha','b60'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/alpha-fr',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/alpha-fr','320'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/alpha-letters',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/alpha-letters','0d4'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/alphadin',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/alphadin','1e6'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/alphahtml',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/alphahtml','497'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/alphahtmldate',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/alphahtmldate','f0d'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/alphahtmldater',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/alphahtmldater','238'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/alphaurl',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/alphaurl','2ad'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ametsoc',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ametsoc','6ea'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/amsra',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/amsra','924'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/amsrn',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/amsrn','880'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/amsrs',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/amsrs','397'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/amsru',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/amsru','578'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/amsry',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/amsry','f34'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/angew',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/angew','d27'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/anotit',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/anotit','a63'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/aomalpha',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/aomalpha','af1'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/aomplain',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/aomplain','02a'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/apacann',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/apacann','34c'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/apacannx',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/apacannx','ba5'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/apacite',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/apacite','0d3'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/apacitex',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/apacitex','c83'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/apalike',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/apalike','263'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/apalike-fr',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/apalike-fr','679'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/apalike-letters',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/apalike-letters','eb6'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/apalike2',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/apalike2','6e8'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/apecon',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/apecon','f05'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/aplain',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/aplain','d33'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/apsr',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/apsr','8c6'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/apsrev',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/apsrev','d74'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/apsrev4-1',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/apsrev4-1','5cb'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/apsrevM',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/apsrevM','077'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/apsrmp',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/apsrmp','ced'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/apsrmp4-1',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/apsrmp4-1','ae2'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/apsrmpM',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/apsrmpM','cd2'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/asa-fa',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/asa-fa','3a9'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ascelike',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ascelike','48a'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/aunsnot',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/aunsnot','3dd'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/aunsrt',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/aunsrt','f9f'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/bababbr3',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/bababbr3','9c1'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/bababbr3-fl',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/bababbr3-fl','4b4'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/bababbr3-lf',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/bababbr3-lf','9a8'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/bababbrv',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/bababbrv','d07'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/bababbrv-fl',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/bababbrv-fl','51d'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/bababbrv-lf',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/bababbrv-lf','65e'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/babalpha',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/babalpha','98a'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/babalpha-fl',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/babalpha-fl','dbf'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/babalpha-lf',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/babalpha-lf','7f0'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/babamspl',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/babamspl','b2e'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/babplai3',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/babplai3','ca3'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/babplai3-fl',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/babplai3-fl','3d2'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/babplai3-lf',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/babplai3-lf','7ec'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/babplain',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/babplain','373'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/babplain-fl',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/babplain-fl','bcd'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/babplain-lf',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/babplain-lf','520'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/babunsrt',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/babunsrt','205'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/babunsrt-fl',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/babunsrt-fl','136'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/babunsrt-lf',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/babunsrt-lf','74e'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/besjournals',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/besjournals','47e'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/bgteuabbr',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/bgteuabbr','6d2'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/bgteuabbr2',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/bgteuabbr2','e96'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/bgteupln',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/bgteupln','c2c'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/bgteupln2',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/bgteupln2','17c'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/bgteupln3',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/bgteupln3','257'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/biochem',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/biochem','469'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/birthday',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/birthday','a93'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/cascadilla',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/cascadilla','23c'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/cc',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/cc','4af'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/cc2',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/cc2','f41'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/cell',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/cell','6f7'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ChemCommun',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ChemCommun','2d3'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ChemEurJ',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ChemEurJ','d30'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/chetref',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/chetref','1fb'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/chicago',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/chicago','349'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/chicago-annote',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/chicago-annote','b83'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/chicago-fa',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/chicago-fa','afb'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/chronological',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/chronological','9bb'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/chscite',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/chscite','461'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/cje',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/cje','153'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/cmpj',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/cmpj','155'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/cv',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/cv','2a0'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/databib',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/databib','b59'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/dcbib',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/dcbib','018'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/dcu',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/dcu','4b9'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/dinat',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/dinat','d0a'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/dk-abbrv',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/dk-abbrv','214'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/dk-alpha',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/dk-alpha','57b'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/dk-apali',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/dk-apali','2dc'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/dk-plain',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/dk-plain','b71'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/dk-unsrt',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/dk-unsrt','968'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/dlfltxbbibtex',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/dlfltxbbibtex','ede'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/dtk',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/dtk','35b'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ecca',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ecca','fa6'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ecta',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ecta','b20'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/elsarticle-harv',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/elsarticle-harv','d88'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/elsarticle-num',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/elsarticle-num','98d'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/elsarticle-num-names',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/elsarticle-num-names','b01'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/email',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/email','031'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/email-html.',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/email-html.','9f5'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/en-mtc',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/en-mtc','0ff'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/erae',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/erae','de1'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/expcites',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/expcites','e13'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/expkeys',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/expkeys','4f0'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/export',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/export','022'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/fbs',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/fbs','111'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/figbib',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/figbib','0fb'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/figbib1',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/figbib1','171'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/finplain',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/finplain','6d7'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/fr-mtc',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/fr-mtc','e00'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/francais',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/francais','2b9'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/francaissc',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/francaissc','420'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/frplainnat-letters',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/frplainnat-letters','df4'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gatech-thesis',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gatech-thesis','ef1'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gatech-thesis-losa',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gatech-thesis-losa','bd5'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gerabbrv',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gerabbrv','707'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/geralpha',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/geralpha','c96'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gerapali',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gerapali','16a'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gerplain',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gerplain','b60'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gerunsrt',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gerunsrt','072'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/glsplain',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/glsplain','3e1'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/glsshort',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/glsshort','b72'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gost2003',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gost2003','828'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gost2003s',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gost2003s','06a'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gost2008',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gost2008','27a'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gost2008l',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gost2008l','d9f'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gost2008ls',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gost2008ls','371'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gost2008n',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gost2008n','ec8'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gost2008ns',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gost2008ns','d34'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gost2008s',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gost2008s','bed'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gost705',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gost705','ee7'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gost705s',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gost705s','ec5'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gost780',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gost780','498'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/gost780s',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/gost780s','3fa'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/hc-de',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/hc-de','f9b'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/hc-en',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/hc-en','0c2'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ieeepes',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ieeepes','2e2'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ieeetr',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ieeetr','377'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ieeetr-fa',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ieeetr-fa','82d'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ieeetr-fr',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ieeetr-fr','a01'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/IEEEtran',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/IEEEtran','58f'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/IEEEtranM',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/IEEEtranM','abb'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/IEEEtranMN',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/IEEEtranMN','ca4'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/IEEEtranN',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/IEEEtranN','465'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/IEEEtranS',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/IEEEtranS','9bf'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/IEEEtranSA',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/IEEEtranSA','b2a'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/IEEEtranSN',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/IEEEtranSN','7d9'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ier',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ier','ec5'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ijmart',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ijmart','9e1'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ijqc',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ijqc','f5e'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/imac',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/imac','9b1'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/inlinebib',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/inlinebib','856'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/InorgChem',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/InorgChem','c76'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/iopart-num',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/iopart-num','bbd'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/itaxpf',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/itaxpf','1a1'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jabbrv',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jabbrv','352'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jae',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jae','01f'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jalpha',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jalpha','3b4'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/JAmChemSoc',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/JAmChemSoc','1ce'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/JAmChemSoc_all',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/JAmChemSoc_all','2ef'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jcc',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jcc','be6'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jipsj',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jipsj','6e7'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jmr',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jmr','8b3'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jname',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jname','eea'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jneurosci',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jneurosci','55d'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jorsj',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jorsj','1c4'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jox',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jox','fba'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jpc',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jpc','856'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jpe',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jpe','ede'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jphysicsB',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jphysicsB','b0c'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jplain',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jplain','6cf'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jss2',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jss2','a6e'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/junsrt',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/junsrt','e9a'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jurabib',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jurabib','6cb'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jurarsp',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jurarsp','65d'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jureco',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jureco','d70'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/jurunsrt',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/jurunsrt','c3b'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/klunamed',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/klunamed','bb0'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/klunum',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/klunum','bf8'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/kluwer',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/kluwer','d72'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ksfh_nat',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ksfh_nat','6ba'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/letter',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/letter','ed4'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/listbib',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/listbib','4ee'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ltugbib',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ltugbib','0a1'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/mbplain',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/mbplain','562'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/mbunsrtdin',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/mbunsrtdin','ea7'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/mslapa',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/mslapa','3a9'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/munich',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/munich','6bd'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/natdin',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/natdin','f4f'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/naturemag',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/naturemag','1ee'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/nddiss2e',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/nddiss2e','c1d'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/nederlands',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/nederlands','562'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/newapave',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/newapave','02e'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/oega',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/oega','7b3'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/opcit',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/opcit','a1e'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/papalike',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/papalike','566'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/pccp',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/pccp','58e'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/perception',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/perception','da0'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/phone',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/phone','e90'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/plabbrv',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/plabbrv','72d'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/plain',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/plain','e4e'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/plain-fa',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/plain-fa','3c1'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/plain-fr',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/plain-fr','6dd'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/plain-letters',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/plain-letters','9f6'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/plaindin',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/plaindin','7f2'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/plainhtml',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/plainhtml','ae9'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/plainhtmldate',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/plainhtmldate','c4a'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/plainhtmldater',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/plainhtmldater','f8f'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/plainnat',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/plainnat','575'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/plainnat-fa',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/plainnat-fa','66d'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/plainnat-fr',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/plainnat-fr','d25'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/plainnat-letters',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/plainnat-letters','c5b'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/plainurl',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/plainurl','8ab'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/plalpha',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/plalpha','938'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/plplain',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/plplain','2a3'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/plunsrt',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/plunsrt','db8'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/pnas2009',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/pnas2009','7a6'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/psuthesis',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/psuthesis','dc3'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/regstud',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/regstud','b44'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/resphilosophica',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/resphilosophica','49f'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/revcompchem',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/revcompchem','067'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/rsc',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/rsc','e0b'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/rusnat',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/rusnat','08c'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/sageep',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/sageep','d8f'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/sapthesis',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/sapthesis','2f2'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/savetrees',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/savetrees','cf4'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/seuthesis',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/seuthesis','daf'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/siam',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/siam','3f2'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/siam-fr',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/siam-fr','ba7'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/siam-letters',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/siam-letters','04d'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/spiebib',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/spiebib','2a5'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/sweabbrv',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/sweabbrv','725'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/swealpha',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/swealpha','13c'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/sweplain',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/sweplain','c7b'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/sweplnat',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/sweplnat','2b4'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/sweunsrt',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/sweunsrt','5ac'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/tandfx',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/tandfx','97a'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/texsis',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/texsis','7d8'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/thesnumb',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/thesnumb','6dc'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/thubib',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/thubib','1b4'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/tieice',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/tieice','654'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/tipsj',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/tipsj','eff'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/udesoftec',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/udesoftec','9f6'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/uestcthesis',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/uestcthesis','293'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ugost2003',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ugost2003','72b'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ugost2003s',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ugost2003s','112'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ugost2008',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ugost2008','05b'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ugost2008l',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ugost2008l','f51'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ugost2008ls',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ugost2008ls','d19'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ugost2008n',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ugost2008n','7bb'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ugost2008ns',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ugost2008ns','185'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ugost2008s',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ugost2008s','323'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/UNAMThesis',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/UNAMThesis','909'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/unsrt',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/unsrt','ead'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/unsrt-fa',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/unsrt-fa','8e8'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/unsrt-fr',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/unsrt-fr','dcb'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/unsrtdin',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/unsrtdin','548'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/unsrthtml',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/unsrthtml','b5a'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/unsrtnat',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/unsrtnat','39c'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/unsrtnat-fr',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/unsrtnat-fr','774'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/unsrturl',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/unsrturl','3c4'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/usmeg-a',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/usmeg-a','974'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/usmeg-n',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/usmeg-n','ba6'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/ussagus',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/ussagus','11c'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/vak',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/vak','8af'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/vancouver',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/vancouver','3cf'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/worlddev',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/worlddev','df1'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/xagsm',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/xagsm','3d0'),
  exact: true,
},
{
  path: '/docs/overleaf/bibliography-and-citation-styles/xplain',
  component: ComponentCreator('/docs/overleaf/bibliography-and-citation-styles/xplain','a2a'),
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
