export type ExpandType =
  | "topLeft"
  | "top"
  | "topRight"
  | "left"
  | "center"
  | "right"
  | "bottomLeft"
  | "bottom"
  | "bottomRight";

export interface Image {
  id: number;
  small: string;
  big: string;
  alt: string;
  expandType: ExpandType;
  expanded: boolean;
}

export const images: Image[][] = [
  [
    {
      id: 1,
      small: "1-small.png",
      big: "1-large.png",
      alt: "test1",
      expandType: "topLeft",
      expanded: false,
    },
    {
      id: 2,
      small: "2-small.png",
      big: "2-large.png",
      alt: "test2",
      expandType: "top",
      expanded: false,
    },
    {
      id: 3,
      small: "3-small.png",
      big: "3-large.png",
      alt: "test3",
      expandType: "topRight",
      expanded: false,
    },
  ],
  [
    {
      id: 4,
      small: "4-small.png",
      big: "4-large.png",
      alt: "test4",
      expandType: "left",
      expanded: false,
    },
    {
      id: 5,
      small: "5-small.png",
      big: "5-large.png",
      alt: "test5",
      expandType: "center",
      expanded: false,
    },
    {
      id: 6,
      small: "6-small.png",
      big: "6-large.png",
      alt: "test6",
      expandType: "right",
      expanded: false,
    },
  ],
  [
    {
      id: 7,
      small: "7-small.png",
      big: "7-large.png",
      alt: "test7",
      expandType: "bottomLeft",
      expanded: false,
    },
    {
      id: 8,
      small: "8-small.png",
      big: "8-large.png",
      alt: "test8",
      expandType: "bottom",
      expanded: false,
    },
    {
      id: 9,
      small: "9-small.png",
      big: "9-large.png",
      alt: "test9",
      expandType: "bottomRight",
      expanded: false,
    },
  ],
];

export const text = `Unleashing the full spectrum of Creative Excellence! MAJABO is your business partner for Complete Marketing Solution.
MAJABO offers you a range of services, from graphic design and PPC to Social Media Management, SEO & copywriting, video editing, 
UGC videos and website design, ensuring all your marketing needs are covered for a unique brand experience.`;

const firstTopSmall = "0px";
const secondTopSmall = "334px";
const thirdTopSmall = "668px";
const fourthTopSmall = "668px";

const firstLeftSmall = "0px";
const secondLeftSmall = "331px";
const thirdLeftSmall = "662px";

const size1Small = "314px";

export const smallSize: Record<ExpandType, string[]> = {
  topLeft: [firstTopSmall, firstLeftSmall, size1Small, size1Small],
  top: [firstTopSmall, secondLeftSmall, size1Small, size1Small],
  topRight: [firstTopSmall, thirdLeftSmall, size1Small, size1Small],
  left: [secondTopSmall, firstLeftSmall, size1Small, size1Small],
  center: [fourthTopSmall, secondLeftSmall, size1Small, size1Small],
  right: [fourthTopSmall, thirdLeftSmall, size1Small, size1Small],
  bottomLeft: [thirdTopSmall, firstLeftSmall, size1Small, size1Small],
  bottom: [fourthTopSmall, secondLeftSmall, size1Small, size1Small],
  bottomRight: [fourthTopSmall, thirdLeftSmall, size1Small, size1Small],
};

const firstTopLarge = "0px";
const secondTopLarge = "278px";
const thirdTopLarge = "553px";
const fourthTopLarge = "332px";

const firstLeftLarge = "0px";
const secondLeftLarge = "385px";
const thirdLeftLarge = "770px";

const size1Large = "430px";
const size2Large = "645px";
const size3Large = "648px";
const size4Large = "650px";

export const largeSize: Record<ExpandType, string[]> = {
  topLeft: [firstTopLarge, firstLeftLarge, size2Large, size1Large],
  top: [firstTopLarge, secondLeftLarge, size1Large, size3Large],
  topRight: [firstTopLarge, thirdLeftLarge, size1Large, size3Large],
  left: [secondTopLarge, firstLeftLarge, size2Large, size1Large],
  center: [fourthTopLarge, secondLeftLarge, size1Large, size4Large],
  right: [fourthTopLarge, thirdLeftLarge, size1Large, size4Large],
  bottomLeft: [thirdTopLarge, firstLeftLarge, size2Large, size1Large],
  bottom: [fourthTopLarge, secondLeftLarge, size1Large, size4Large],
  bottomRight: [fourthTopLarge, thirdLeftLarge, size1Large, size4Large],
};

export const textArray = [
  "Your VISION isn't just an aim for us...",
  "It's an EXCITING and MEMORABLE JOURNEY that we walk WITH YOU.",
  "That is MAJABO.",
];
