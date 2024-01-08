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
      small: "01-small.png",
      big: "01-large.png",
      alt: "test1",
      expandType: "topLeft",
      expanded: false,
    },
    {
      id: 2,
      small: "02-small.png",
      big: "02-large.png",
      alt: "test2",
      expandType: "top",
      expanded: false,
    },
    {
      id: 3,
      small: "03-small.png",
      big: "03-large.png",
      alt: "test3",
      expandType: "topRight",
      expanded: false,
    },
  ],
  [
    {
      id: 4,
      small: "04-small.png",
      big: "04-large.png",
      alt: "test4",
      expandType: "left",
      expanded: false,
    },
    {
      id: 5,
      small: "05-small.png",
      big: "05-large.png",
      alt: "test5",
      expandType: "center",
      expanded: false,
    },
    {
      id: 6,
      small: "06-small.png",
      big: "06-large.png",
      alt: "test6",
      expandType: "right",
      expanded: false,
    },
  ],
  [
    {
      id: 7,
      small: "01-small.png",
      big: "01-large.png",
      alt: "test7",
      expandType: "bottomLeft",
      expanded: false,
    },
    {
      id: 8,
      small: "02-small.png",
      big: "02-large.png",
      alt: "test8",
      expandType: "bottom",
      expanded: false,
    },
    {
      id: 9,
      small: "03-small.png",
      big: "03-large.png",
      alt: "test9",
      expandType: "bottomRight",
      expanded: false,
    },
  ],
];

export const text = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has survived not only
  five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s with
  the release of Letraset sheets containing Lorem Ipsum passages, and
  more recently with desktop publishing software like Aldus PageMaker
  including versions of Lorem Ipsum.`;
