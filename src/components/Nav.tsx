import { createSignal } from "solid-js";
import { A, useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const [open, setOpen] = createSignal(false);

  const active = (path: string) =>
    location.pathname === path
      ? "border-sky-400 text-white"
      : "border-transparent hover:border-sky-400";

  return (
    <nav class="bg-[#16A34A] shadow-md">
      <div class="container mx-auto">
        {/* Mobile Header */}
        <div class="flex items-center justify-between p-4 md:hidden">
          <h1 class="text-lg font-semibold text-white">VIVIDOXA FOUNDATION</h1>

          <button
            class="text-white"
            onClick={() => setOpen(!open())}
          >
            ☰
          </button>
        </div>

        {/* Navigation */}
        <ul
          class={`${
            open() ? "flex" : "hidden"
          } flex-col items-center justify-center py-3 md:flex md:flex-row md:justify-center md:items-center text-gray-200`}
        >
          <li class={`border-b-2 ${active("/")} mx-2 my-2 md:my-0`}>
            <A href="/" class="block px-3 py-2">
              Home
            </A>
          </li>

          <li class={`border-b-2 ${active("/about")} mx-2 my-2 md:my-0`}>
            <A href="/about" class="block px-3 py-2">
              About
            </A>
          </li>

          <li class={`border-b-2 ${active("/certificate")} mx-2 my-2 md:my-0`}>
            <A href="/certificate" class="block px-3 py-2">
              Certificates
            </A>
          </li>

          <li class={`border-b-2 ${active("/project")} mx-2 my-2 md:my-0`}>
            <A href="/project" class="block px-3 py-2">
              Project
            </A>
          </li>

          <li class={`border-b-2 ${active("/donate")} mx-2 my-2 md:my-0`}>
            <A href="/donate" class="block px-3 py-2">
              Donation
            </A>
          </li>

          <li class={`border-b-2 ${active("/gallery")} mx-2 my-2 md:my-0`}>
            <A href="/gallery" class="block px-3 py-2">
              Gallery
            </A>
          </li>

          <li class={`border-b-2 ${active("/contact")} mx-2 my-2 md:my-0`}>
            <A href="/contact" class="block px-3 py-2">
              Contact Us
            </A>
          </li>
        </ul>
      </div>
    </nav>
  );
}
