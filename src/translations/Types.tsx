export interface Translation {
  header: { subtitle: string; choose: string };
  threeMinds: {
    title: string;
    subtitle: string;
    beyond1: string;
    beyond2: string;
    beyond3: string;
  };
  options: {
    title: string;
    subtitle: string;
    text: string[];
    optionList: Option[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    text: string[];
    kairon: string[];
  };
  statement: {
    description: string;
    statementList: {
      title: string[];
      subtitle: string;
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    testimonialList: Testimonial[];
  };
  footer: {
    title: string;
    subtitle: string;
    madeBy: string;
    rightsReserved: string;
  };
  email: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    text: string;
    textMobile: string;
    buttonSend: string;
    buttonCancel: string;
  };
  emailSent: {
    title: string;
    errorTitle: string;
    subtitle: string;
    okButton: string;
  };
}

export type Option = {
  optionTitle: string;
  optionText: string;
};

export type Testimonial = {
  url: string;
  odd: boolean;
  title: string;
  subtitle: string;
  text: string;
};
