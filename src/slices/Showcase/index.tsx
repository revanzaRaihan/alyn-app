import { FC } from "react";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PiGear, PiArrowClockwise } from "react-icons/pi";

import ButtonLink from "@/components/ButtonLink";
import Bounded from "@/components/Bounded";
import clsx from "clsx";

const icons = {
  Gear: <PiGear/>,
  Cycle: <PiArrowClockwise/>
}

/**
 * Props for `Showcase`.
 */
export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>;

/**
 * Component for "Showcase" Slices.
 */
const Showcase: FC<ShowcaseProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative"
    >
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl filter" />

      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading2: ({ children }) => (
            <h2 className="text-5xl text-center font-medium text-balance md:text-7xl">
              {children}
            </h2>
          ),
        }}
      />

      <div className="mt-16 grid rounded-xl border border-blue-50/20 bg-linear-to-b from-slate-50/15 to-slate-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12 items-center gap-8 lg:gap-0">
        <div>

          <div className="w-fit rounded-lg bg-blue-500/35 p-4 text-3xl">
          <>{slice.primary.icon && icons[slice.primary.icon]}</>
          </div>

          <div className="mt-6 text-2xl font-normal">
          <PrismicRichText field={slice.primary.subheading} />
          </div>

          <div className="mt-4 max-w-xl prose prose-invert">
          <PrismicRichText field={slice.primary.body} />
          </div>

          <ButtonLink field={slice.primary.button_link} className="mt-6 ">
            {slice.primary.button_text || "Learn More"}
          </ButtonLink>
        </div>

        <PrismicNextImage field={slice.primary.image} className={clsx("opacity-90 shadow-2xl lg:col-span-2 lg:pt-0", slice.variation === "reverse" ? "lg:order-1 lg:translate-x-[15%] rounded-lg" : "lg:-order-1 lg:translate-x-[-15%] rounded-lg")} />
      </div>
    </Bounded>
  );
};

export default Showcase;
