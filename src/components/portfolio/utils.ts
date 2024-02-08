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

interface ImageSize {
  width: string;
  height: string;
}

export interface MobileImage {
  id: number;
  black: string;
  color: string;
  alt: string;
  width: number;
  height: number;
  // size: ImageSize[];
}

const imageHeight = 422;
const num1 = 0.9;
const num2 = 0.8;

export const mobileImages: MobileImage[] = [
  {
    id: 1,
    black: "01-SmallBlack.png",
    color: "01-SmallColor.png",
    alt: "test1",
    width: 633,
    height: imageHeight,
    // size: [
    //   { width: (633).toString(), height: imageHeight.toString() },
    //   {
    //     width: (633 * num1).toString(),
    //     height: (imageHeight * num1).toString(),
    //   },
    //   {
    //     width: (633 * num2).toString(),
    //     height: (imageHeight * num2).toString(),
    //   },
    // ],
  },
  // {
  //   id: 2,
  //   black: "02-SmallBlack.png",
  //   color: "02-SmallColor.png",
  //   alt: "test2",

  // },
  // {
  //   id: 3,
  //   black: "03-SmallBlack.png",
  //   color: "03-SmallColor.png",
  //   alt: "test3",

  // },
  // {
  //   id: 4,
  //   black: "04-SmallBlack.png",
  //   color: "04-SmallColor.png",
  //   alt: "test4",
  // },
  // {
  //   id: 5,
  //   black: "05-SmallBlack.png",
  //   color: "05-SmallColor.png",
  //   alt: "test5",
  // },
  // {
  //   id: 6,
  //   black: "06-SmallBlack.png",
  //   color: "06-SmallColor.png",
  //   alt: "test6",
  // },
  // {
  //   id: 7,
  //   black: "07-SmallBlack.png",
  //   color: "07-SmallColor.png",
  //   alt: "test7",
  // },
  // {
  //   id: 8,
  //   black: "08-SmallBlack.png",
  //   color: "08-SmallColor.png",
  //   alt: "test8",
  // },
  // {
  //   id: 9,
  //   black: "09-SmallBlack.png",
  //   color: "09-SmallColor.png",
  //   alt: "test9",
  // },
  // {
  //   id: 10,
  //   black: "10-SmallBlack.png",
  //   color: "10-SmallColor.png",
  //   alt: "test10",
  // },
  // {
  //   id: 11,
  //   black: "11-SmallBlack.png",
  //   color: "11-SmallColor.png",
  //   alt: "test11",
  // },
  // {
  //   id: 12,
  //   black: "12-SmallBlack.png",
  //   color: "12-SmallColor.png",
  //   alt: "test12",
  // },
  // {
  //   id: 13,
  //   black: "13-SmallBlack.png",
  //   color: "13-SmallColor.png",
  //   alt: "test13",
  // },
  // {
  //   id: 14,
  //   black: "14-SmallBlack.png",
  //   color: "14-SmallColor.png",
  //   alt: "test14",
  // },
  // {
  //   id: 15,
  //   black: "15-SmallBlack.png",
  //   color: "15-SmallColor.png",
  //   alt: "test15",
  // },
  // {
  //   id: 16,
  //   black: "16-SmallBlack.png",
  //   color: "16-SmallColor.png",
  //   alt: "test16",
  // },
  // {
  //   id: 17,
  //   black: "17-SmallBlack.png",
  //   color: "17-SmallColor.png",
  //   alt: "test17",
  // },
  // {
  //   id: 18,
  //   black: "18-SmallBlack.png",
  //   color: "18-SmallColor.png",
  //   alt: "test18",
  // },
];

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

const firstTopLarge = "20px";
const secondTopLarge = "292px";
const thirdTopLarge = "570px";
const fourthTopLarge = "354px";

const firstLeftLarge = "112px";
const secondLeftLarge = "385px";
const thirdLeftLarge = "658px";

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
