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
    mail: Mail;
    mailSent: MailSent;
  };
}

export type Option = {
  optionTitle: string;
  optionText: string;
};

export type Testimonial = {
  title: string;
  subtitle: string;
  text: string;
};

export type Mail = {
  title: string;
  subtitle: string;
  name: string;
  email: string;
  text: string;
  buttonSent: string;
  buttonCancel: string;
};

export type MailSent = {
  title: string;
  errorTitle: string;
  subtitle: string;
  okButton: string;
};
