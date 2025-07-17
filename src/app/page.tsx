'use client';

import PageLayout from '@/components/PageLayout';
import Project, { ProjectPresentation } from './components/Project';

const PROJECTS: ProjectPresentation[] = [
  {
    title: 'Proper Wild',
    description:
      'As the Senior Brand Designer at Proper Wild, I lead all design efforts, overseeing creative execution across both digital and print channels. My work includes digital ads, motion graphics, photo retouching, Amazon assets, email campaigns, and POS materials. I ensure consistent brand alignment across emails, social media, and printed collateral.',
    id: 'proper-wild',
    labels: [
      {
        text: 'senior brand designer',
        color: 'bg-hot-pink',
      },
      {
        text: 'senior brand designer',
        color: 'bg-electric-lime',
      },
      {
        text: 'senior brand designer',
        color: 'bg-lime-green',
      },
    ],
  },
  {
    title: 'Spring Break by Proper Wild',
    description:
      'As the Senior Brand Designer at Proper Wild, I lead all design efforts, overseeing creative execution across both digital and print channels. My work includes digital ads, motion graphics, photo retouching, Amazon assets, email campaigns, and POS materials. I ensure consistent brand alignment across emails, social media, and printed collateral.',
    id: 'spring-break',
    labels: [
      {
        text: 'art direction',
        color: 'bg-hot-pink',
      },
      {
        text: '360 campaign',
        color: 'bg-electric-lime',
      },
      {
        text: 'identity design',
        color: 'bg-lime-green',
      },
    ],
  },
];

const Home = () => {
  return (
    <PageLayout>
      {PROJECTS.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </PageLayout>
  );
};

export default Home;
