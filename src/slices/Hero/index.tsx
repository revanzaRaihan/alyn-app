import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import ButtonLink from "@/components/ButtonLink";
import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <div className="relative">
        <StarGrid />
        {isFilled.richText(slice.primary.heading) && (
          <h1 className="text-center text-5xl font-medium text-balance md:text-7xl">
            <PrismicText field={slice.primary.heading} />
          </h1>
        )}

        {isFilled.richText(slice.primary.body) && (
          <div className="mx-auto mt-6 max-w-md text-balance text-slate-300">
            <PrismicText field={slice.primary.body} />
          </div>
        )}

        {isFilled.link(slice.primary.button) && (
          <ButtonLink className="mt-8" field={slice.primary.button}>
            {slice.primary.button_label}
          </ButtonLink>
        )}

        {isFilled.image(slice.primary.image) && (
          <div className="glass-container mt-16 w-fit">
            <div className="absolute inset-0 -z-10 bg-indigo-500/30 blur-2xl filter"/>
              <PrismicNextImage
                className="rounded-lg"
                field={slice.primary.image}
              />
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default Hero;
