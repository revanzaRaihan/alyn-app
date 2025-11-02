import React, { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import StarBackground from "./StarBackground";
import Image from "next/image";

import {
  FaDigitalOcean,
  FaCloudflare,
  FaGithub,
  FaFly,
  FaNpm,
  FaFigma,
} from "react-icons/fa6";

import background from "./background.jpg";
import StylizedLogoMark from "./StylizedLogoMark";
import clsx from "clsx";

/**
 * Props for `Integrations`.
 */
export type IntegrationsProps = SliceComponentProps<Content.IntegrationsSlice>;

/**
 * Component for "Integrations" Slices.
 */
const Integrations: FC<IntegrationsProps> = ({ slice }) => {
  const icon = {
    digitalocean: <FaDigitalOcean />,
    cloudflare: <FaCloudflare />,
    github: <FaGithub />,
    fly: <FaFly />,
    npm: <FaNpm />,
    figma: <FaFigma />,
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden"
    >
      <Image
        src={background}
        alt=""
        fill
        className="object-cover"
        quality={90}
      />
      <StarBackground />

      <div className="relative">
        <h2 className="mx-auto max-w-2xl text-center text-5xl font-medium text-balance md:text-7xl">
          <PrismicText field={slice.primary.heading} />
        </h2>

        <div className="mx-auto mt-6 max-w-md text-center text-balance text-slate-300">
          <PrismicRichText field={slice.primary.body} />
        </div>

        <div className="mx-auto mt-20 flex flex-col items-center md:flex-row">
          {slice.primary.sections.map((item, index) => (
            <React.Fragment key={index}>
              {index === Math.floor(slice.primary.sections.length / 2) && (
                <>
                  <StylizedLogoMark />
                  <div className="signal-line rotate-180 bg-linear-to-t" />
                </>
              )}
              <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
                {item.icon && icon[item.icon]}
              </div>
              {index !== slice.primary.sections.length -1 &&(

                <div
                className={clsx(
                  "signal-line",
                  index >= Math.floor(slice.primary.sections.length / 2)
                  ? "rotate-180"
                  : "rotate-0",
                )}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Integrations;
