interface GameExperience {
  title: string;
  tags: string[];
  description: string;
  btnLink: string;
  btnTitle: string;
}

interface ServiceDetail {
  imagePath: any;
  title: string;
  description: string;
  buttonLink: string;
  buttonText: string;
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

interface HeroSectionProps {
  items: {
    text: string;
    title: string;
    des: string;
  };
  image: {src: string};
}

interface progressData {
  title: String;
  subtitle: String;
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

export type {GameExperience, ServiceDetail, MediaCardProps, FooterProps, FormData, HeroSectionProps, progressData, slide};
