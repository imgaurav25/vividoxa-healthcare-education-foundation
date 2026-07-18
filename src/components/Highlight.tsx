import { JSX } from "solid-js";

type HighlightProps = {
  children: JSX.Element;
};

export default function Highlight(props: HighlightProps) {
  return (
    <span class="bg-[#16A34A] text-white mt-6 rounded-lg px-6 py-3 font-semibold">
      {props.children}
    </span>
  );
}
