import * as React from "react";
import { SVGProps } from "react";

const AnimatedWave = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={500}
    viewBox="0 0 1014 1014"
    width={500}
    xmlns="http://ww w.w3.org/2000/svg"
    {...props}
  >
    <circle
      className="animate-appear"
      cx={506.5}
      cy={506.5}
      r={140.75}
      stroke="url(#paint0_linear_1601_1334)"
      strokeWidth={1.5}
    />
    <circle
      className="animate-[appear_0.6s_ease-in-out]"
      cx={506.5}
      cy={506.5}
      r={231.75}
      stroke="url(#paint1_linear_1601_1334)"
      strokeWidth={1.5}
    />
    <circle
      className="animate-[appear_0.8s_ease-in-out]"
      cx={506.5}
      cy={506.5}
      r={377.75}
      stroke="url(#paint2_linear_1601_1334)"
      strokeWidth={1.5}
    />
    <circle
      className="animate-[appear_1s_ease-in-out]"
      cx={507}
      cy={507}
      r={506.25}
      stroke="url(#paint3_linear_1601_1334)"
      strokeWidth={1.5}
    />
    <circle
      className="animate-[appear_1s_ease]"
      cx={659.5}
      cy={332.5}
      fill="black"
      r={11.5}
    />
    <circle
      className="animate-[appear_1s_ease]"
      cx={659.5}
      cy={332.5}
      r={10.75}
      stroke="#0070F3"
      strokeOpacity={0.6}
      strokeWidth={1.5}
    />
    <circle
      className="animate-[appear_1s_ease]"
      cx={285.5}
      cy={200.5}
      fill="black"
      r={11.5}
    />
    <circle
      className="animate-[appear_1s_ease]"
      cx={285.5}
      cy={200.5}
      r={10.75}
      stroke="#0070F3"
      strokeOpacity={0.6}
      strokeWidth={1.5}
    />
    <circle
      className="animate-[appear_1s_ease]"
      cx={129.5}
      cy={526.5}
      fill="black"
      r={11.5}
    />
    <circle
      className="animate-[appear_1s_ease]"
      cx={129.5}
      cy={526.5}
      r={10.75}
      stroke="#7928CA"
      strokeOpacity={0.6}
      strokeWidth={1.5}
    />
    <circle
      className="animate-[appear_1s_ease]"
      cx={882.5}
      cy={549.5}
      fill="black"
      r={11.5}
    />
    <circle
      className="animate-[appear_1s_ease]"
      cx={882.5}
      cy={549.5}
      r={10.75}
      stroke="#7928CA"
      strokeOpacity={0.6}
      strokeWidth={1.5}
    />
    <circle
      className="animate-[appear_1s_ease]"
      cx={408.5}
      cy={407.5}
      fill="black"
      r={11.5}
    />
    <circle
      className="animate-[appear_1s_ease]"
      cx={408.5}
      cy={407.5}
      r={10.75}
      stroke="white"
      strokeOpacity={0.4}
      strokeWidth={1.5}
    />
    <circle
      className="animate-[appear_1s_ease]"
      cx={670.5}
      cy={165.5}
      fill="black"
      r={11.5}
    />
    <circle
      className="animate-[appear_1s_ease]"
      cx={670.5}
      cy={165.5}
      r={10.75}
      stroke="white"
      strokeOpacity={0.4}
      strokeWidth={1.5}
    />
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint0_linear_1601_1334"
        x1={506.5}
        x2={506.5}
        y1={365}
        y2={630}
      >
        <stop stopColor="white" stopOpacity={0.4} />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint1_linear_1601_1334"
        x1={506.5}
        x2={506.5}
        y1={274}
        y2={739}
      >
        <stop stopColor="white" stopOpacity={0.4} />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint2_linear_1601_1334"
        x1={506.5}
        x2={506.5}
        y1={128}
        y2={847.5}
      >
        <stop stopColor="white" stopOpacity={0.4} />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint3_linear_1601_1334"
        x1={507}
        x2={515.5}
        y1={-2.5332e-7}
        y2={1014}
      >
        <stop stopColor="white" stopOpacity={0.4} />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default AnimatedWave;
