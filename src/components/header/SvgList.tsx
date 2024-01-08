import { CSSProperties } from "react";

export interface SvgListProps {
  width: number;
  height: number;
  viewBox: string;
  customStyle: CSSProperties | null;
  paths: Path[];
}

export interface Path {
  fillRule?: "inherit" | "nonzero" | "evenodd" | undefined;
  clipRule?: number | string | undefined;
  d: string;
  fill: string;
  customStyle: CSSProperties | null;
}

const normalStyle = {
  transition: "all 1s ease-in-out",
};

const SvgList: React.FC<{ sVGs: SvgListProps[] }> = ({ sVGs }) => {
  return (
    <>
      {sVGs.map((s, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width={s.width}
          height={s.height}
          viewBox={s.viewBox}
          fill="none"
          style={s.customStyle ? (s.customStyle as CSSProperties) : normalStyle}
        >
          {s.paths.map((path, key) => (
            <path
              key={key}
              fillRule={path.fillRule !== undefined ? path.fillRule : undefined}
              clipRule={path.clipRule !== undefined ? path.clipRule : undefined}
              d={path.d}
              fill={path.fill}
              style={
                path.customStyle
                  ? (path.customStyle as CSSProperties)
                  : undefined
              }
            />
          ))}
        </svg>
      ))}
    </>
  );
};

export default SvgList;
