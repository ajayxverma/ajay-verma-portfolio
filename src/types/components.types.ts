import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

export interface ProjectType {
  startDate?: string;
  endDate?: string;
  heading?: string;
  description?: string;
  images: ImageInfo[];
  techUsed?: string[];
  demoLink?: string;
  gitHubLink?: string;
  imageOnRight?: boolean;
}

export interface ImageInfo {
  src: StaticImageData | any;
  alt: string;
}

export interface ExperienceType {
  title: string;
  sequence: number;
  companyName: string;
  startDate: string;
  sectionId: string;
  rolesAndResponsibility: string[];
}

export interface SocialLinkType {
  title: string;
  link: string;
  sequence: number;
  icon: IconType;
}

export interface CarouselProps {
  images: string[];
}

export interface HeadingProp {
  heading: string;
  description?: string;
}
export interface OtherProData {
  title: string;
  description: string;
  techUsed: string[];
  demoLink?: string;
  gitHubLink: string;
}

export type TechStackType = {
  title: string;
  description: string;
  frameworks?: string[];
  language?: string[];
  points?: string[];
  readMoreLink?: string;
  icon: IconType;
};
