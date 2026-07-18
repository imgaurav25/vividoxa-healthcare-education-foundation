import { A } from "@solidjs/router";
import Highlight from "../components/Highlight";

export default function Home() {
  return (
    <main>
      <section class="relative">
        <img
          src="https://ngodemo.dotskills.in/uploads/slider/1771146298_1767604543_Gemini_Generated_Image_13e1zi13e1zi13e1%20(1).jpg"
          alt="Vivodoxa Foundation"
          class="h-[220px] w-full object-cover sm:h-[320px] md:h-[450px] lg:h-[600px]"
        />

        <div class="absolute inset-0 bg-black/50"></div>

        <div class="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-white">
          <h1 class="text-2xl font-bold sm:text-3xl md:text-5xl">
            Together We Can Make a Difference
          </h1>

          <p class="mt-3 max-w-2xl text-sm sm:text-base md:text-xl">
            Helping communities through education, healthcare and social
            welfare.
          </p>

          <Highlight>
            <A href="/donated" class="mt-6">
              Donate Now
            </A>
          </Highlight>
        </div>
      </section>
    </main>
  );
}
