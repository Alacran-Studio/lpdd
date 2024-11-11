import * as React from "react";
import { SVGProps } from "react";
const LogoSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Logotipo_trazado"
    data-name="Logotipo trazado"
    viewBox="0 0 500 500"
    {...props}
  >
    <path d="M405.8 365.7c-10.9 10.6-37.4 33-49.9 40.5-9.7 5.8-38.5 20.9-68.2 31.4-25 8.9-53.7 20-76.2 23.7-22.4 3.7-49.9 6.5-74.5-2.2-31.4-11.1-49.4-40.5-46.4-73.6 2.7-30.2 15.5-56.2 31-81.2 23.6-38.1 52.9-70.6 92.6-92.7 13.8-7.7 28.4-12.8 44.5-13.3 38.5-1.2 59 28.7 43.5 64.1-8.5 19.6-23.6 33.9-41.2 45.1-28.5 18-58.3 33.5-91.7 40.6-9.3 2-26.4 3.4-28.2 3.7-1.8.3-4.6.7-5.6.6s5.3-4.6 4-3.6 8-7.5 12.7-9.6c23.4-10.6 47.4-20.1 70.6-31.2 19.9-9.6 37-23.2 47.7-43.2 2.7-5.1 4.9-10.5 6.2-16.1 3.2-13-2.2-22.3-15.4-24.1-8.4-1.1-17.5-.4-25.7 1.8-30.6 8.3-56 24.9-74.8 50.8-19.2 26.4-37.1 53.7-43.4 86.3-2.6 13.5-4 27.9-2 41.4 4.4 29.7 25.3 46 55.8 47.1 33.7 1.2 65.7-6.4 96.3-19.5 27.9-11.9 56-23.8 83.1-37.4 18.3-9.2 35.2-21.2 52.8-31.9 1.8-1.2 6.2-5.4 6.2-4.1s-2.7 4.5-3.9 6.5ZM388.5 126.1c-17.5 31.3-40.6 56.2-76.5 65.7 19.9-28.4 46.8-48.7 76.5-65.7ZM100 148.6c34.5 11.8 62.8 29.3 81.1 61.5-17.7-1.8-70.2-41.5-81.1-61.5ZM309.9 93.2c-12.3-48.1-70.3-72.7-115.4-49.1-35.1 18.4-47.2 58.7-27.9 93.2 20.1 36 67.2 53 105.6 38.2 25.3-9.8 40.9-31.9 41.8-58.2-1.3-8-2-16.3-4-24.1Zm-8.9 35.7c-3.7 16.5-23.7 31.7-45.2 34.4-3.9.5-7.9.6-12.5 1-25.6-1.2-47.2-11.3-61.4-34.1-20.2-32.6-1.6-72.7 36.6-76.9 14.2-1.6 29.7.2 43.4 4.5 30.9 9.8 46.2 39.6 39 71.2Z" />
  </svg>
);

interface FullBrandProps {
  fillColor: string;
}

export const FullBrand = ({ fillColor }: FullBrandProps) => {
  return (
    <>
      <LogoSvg
        width={40}
        height={40}
        aria-description="Logo for Latiné Professional Development Directory"
        fill={fillColor}
      />
      <p className="text-logo-line text-xl tracking-tighter">LPDD</p>
    </>
  );
};