import * as React from "react";

export interface VerticalTimelineProps {
  animate?: boolean | undefined;
  children?: React.ReactNode;
  className?: string | undefined;
  layout?:
    | "1-column"
    | "1-column-left"
    | "1-column-right"
    | "2-columns"
    | undefined;
  lineColor?: string | undefined;
}

export interface VerticalTimelineElementProps {
  children?: React.ReactNode;
  id?: string | undefined;
  className?: string | undefined;
  date?: string | undefined;
  dateClassName?: string | undefined;
  iconClassName?: string | undefined;
  iconOnClick?: (() => void) | undefined;
  iconStyle?: React.CSSProperties | undefined;
  icon?: React.ReactNode | undefined;
  intersectionObserverProps?: any;
  onTimelineElementClick?: (() => void) | undefined;
  position?: string | undefined;
  style?: React.CSSProperties | undefined;
  textClassName?: string | undefined;
  contentStyle?: React.CSSProperties | undefined;
  contentArrowStyle?: React.CSSProperties | undefined;
  visible?: boolean | undefined;
}

export class VerticalTimeline extends React.Component<VerticalTimelineProps> {}
export class VerticalTimelineElement extends React.Component<VerticalTimelineElementProps> {}

interface GameExperience {
  title: string;
  tags: string[];
  description: string;
  btnLink: string;
  btnTitle: string;
}

interface ServiceDetail {
  image: any;
  title: string;
  description: string;
  buttonLink: string;
  buttonText: string;
  order?:number;
}
interface OtherProjectsDetail {
  imageUrl: string;
  title: string;
}

interface MediaCardProps {
  isActive: boolean;
  gameExperience: GameExperience;
}

interface FooterProps {
  footerData: {
    section: string;
    links?: Array<{ text: string; url: string }>;
    address?: string;
    phone?: string;
    email?: string;
    socialMedia?: Array<{ platform: string; icon: string; url: string }>;
  }[];
}

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface progressData {
  title: String;
  subtitle: String;
}

interface portfolio {
  subHeading: string;
  heading: string;
  description: string;
  link: string;
  img: string;
  size: Size;
}
interface Size {
  width: number;
  height: number;
}

interface slide {
  subTitle: string;
  title: {
    t1: string;
    t2: string;
  };
  description: string;
  btns: {
    Styled: boolean;
    text: string;
    link: string;
  }[];
  imagePath: string;
}

interface hero {
  title: string;
  text?: string | undefined;
  des: string;
  image?: string | undefined;
  buttonText?: string | undefined;
}
interface TimeLineType {
  cardTitle: string,
  cardSubtitle: string,
  cardDetailedText: string
}

export type {
  GameExperience,
  ServiceDetail,
  MediaCardProps,
  FooterProps,
  FormData,
  progressData,
  slide,
  hero,
  portfolio,
  TimeLineType,
  OtherProjectsDetail,
};
