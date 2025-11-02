"use server";

import { JSX } from "react";
import { Content, isFilled } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import Bounded from "@/components/Bounded";

export type CaseStudiesProps = SliceComponentProps<Content.CaseStudiesSlice>;

const CaseStudies = async ({
  slice,
}: CaseStudiesProps): Promise<JSX.Element> => {
  const client = createClient();

  // Ambil semua relasi case_study dari repeatable field 'sections'
  const relatedStudies = await Promise.all(
    (slice.primary.sections ?? []).map(async (section: any) => {
      if (isFilled.contentRelationship(section.case_study)) {
        try {
          const doc = await client.getByID<Content.CaseStudyDocument>(
            section.case_study.id,
          );
          return doc;
        } catch {
          return null;
        }
      }
      return null;
    }),
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="max-w-2xl text-center text-5xl font-medium text-balance md:text-7xl">
        <PrismicText field={slice.primary.heading} />
      </h2>

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        <PrismicRichText field={slice.primary.body} />
      </div>

      <div className="mt-20 grid gap-16">
        {relatedStudies.map(
          (caseStudy, index) =>
            caseStudy && (
              <div
                key={caseStudy.id}
                className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
              >
                <div className="col-span-1 flex flex-col justify-center gap-4">
                  <h3 className="text-4xl">
                    <PrismicText field={caseStudy.data.company} />
                  </h3>

                  <div className="max-w-md">
                    <PrismicRichText field={caseStudy.data.description} />
                  </div>

                  <PrismicNextLink
                    document={caseStudy}
                    className="after:absolute after:inset-0 hover:underline"
                  >
                    Read <PrismicText field={caseStudy.data.company} /> case
                    study
                  </PrismicNextLink>
                </div>

                <PrismicNextImage
                  field={caseStudy.data.logo_image}
                  quality={100}
                  className={clsx(
                    "rounded-xl lg:col-span-2",
                    index % 2 && "md:-order-1",
                  )}
                />
              </div>
            ),
        )}
      </div>
    </Bounded>
  );
};

export default CaseStudies;
