"use client";

import { useState } from "react";
import Link from "next/link";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import WordMark from "@/components/WordMark";
import ButtonLink from "@/components/ButtonLink";

import { MdMenu, MdClose } from "react-icons/md";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { asLink } from "@prismicio/client";

type NavBaProps = {
  settings: Content.SettingsDocument;
};

export default function NavBar({ settings }: NavBaProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="md-:py-6 px-4 py-4 md:px-6" aria-label="Main">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/" className="z-50" onClick={() => setOpen(false)}>
            <WordMark />
            <span className="sr-only">Alyn-App Homepage</span>
          </Link>

          <button
            type="button"
            className="block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MdMenu />

            <span className="sr-only">Open Menu</span>
          </button>
        </div>

        {/* Mobile Nav */}

        <div
          className={clsx(
            "fixed top-0 right-0 bottom-0 left-0 z-40 flex transform flex-col items-end gap-4 bg-[#070815] pt-14 pr-4 transition duration-300 ease-in-out motion-reduce:transition-none md:hidden",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <button
            type="button"
            className="fixed top-4 right-4 mb-4 block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(false)}
          >
            <MdClose />

            <span className="sr-only">Close Menu</span>
          </button>

          <div className="grid justify-items-end gap-8">
            {settings.data.navigations.map((item) => {
              if (item.cta_button) {
                return (
                  <ButtonLink
                    key={item.label}
                    field={item.link}
                    onClick={() => setOpen(false)}
                    aria-current={
                      pathname.includes(asLink(item.link) as string)
                        ? "page"
                        : undefined
                    }
                  >
                    {item.label}
                  </ButtonLink>
                );
              }
              return (
                <PrismicNextLink
                  key={item.label}
                  field={item.link}
                  className="block px-3 text-3xl first:mt-8"
                  onClick={() => setOpen(false)}
                  aria-current={
                    pathname.includes(asLink(item.link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </PrismicNextLink>
              );
            })}
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden gap-6 md:flex">
          {settings.data.navigations.map((item) => {
            if (item.cta_button) {
              return (
                <li key={item.label}>
                  <ButtonLink
                    field={item.link}
                    aria-current={
                      pathname.includes(asLink(item.link) as string)
                        ? "page"
                        : undefined
                    }
                  >
                    {item.label}
                  </ButtonLink>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <PrismicNextLink
                  field={item.link}
                  className="inline-flex min-h-11 items-center"
                  aria-current={
                    pathname.includes(asLink(item.link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
