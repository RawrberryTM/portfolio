import Image from "next/image";

export const SwiperItem = ({
  id,
  imgSrc,
}: {
  id: number;
  imgSrc: string;
}): JSX.Element => (
  <div
    style={{
      height: "15rem",
      width: "20rem",
      overflow: "hidden",
    }}
  >
    <Image draggable="false" src={imgSrc} width={500} alt="movie image" />
  </div>
);
