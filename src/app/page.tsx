'use client';

import CommonLayout from '@/components/CommonLayout';
import MainPageProject, {
  ProjectPresentation,
} from './components/MainPageProject';

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
    <CommonLayout>
      {PROJECTS.map((project, index) => (
        <MainPageProject key={index} {...project} />
      ))}
    </CommonLayout>
  );
};

export default Home;
