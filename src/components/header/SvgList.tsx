export interface SvgListProps {
  width: number;
  height: number;
  viewBox: string;
  paths: Path[];
}

export interface Path {
  fillRule?: "inherit" | "nonzero" | "evenodd" | undefined;
  clipRule?: number | string | undefined;
  d: string;
  fill: string;
}

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
          style={{ transition: "all 1s ease-in-out" }}
        >
          {s.paths.map((path, key) => (
            <path
              key={key}
              fillRule={path.fillRule !== undefined ? path.fillRule : undefined}
              clipRule={path.clipRule !== undefined ? path.clipRule : undefined}
              d={path.d}
              fill={path.fill}
            />
          ))}
        </svg>
      ))}
    </>
  );
};

export default SvgList;
