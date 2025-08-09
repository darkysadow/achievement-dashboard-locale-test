import * as React from "react"

export const ShieldDoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={116}
    height={116}
    fill="none"
  >
    <foreignObject width={71.083} height={89.697} x={22.791} y={14.25}>
      <div
        style={{
          backdropFilter: "blur(.5px)",
          clipPath: "url(#a)",
          height: "100%",
          width: "100%",
        }}
      />
    </foreignObject>
    <g
      data-figma-bg-blur-radius={1}
      filter="url(#b)"
      shapeRendering="crispEdges"
    >
      <path
        fill="url(#c)"
        fillOpacity={0.55}
        d="M58.333 100.946c-9.627-2.856-17.623-8.688-23.99-17.494-6.368-8.806-9.552-18.726-9.552-29.758V27.78L58.333 15.25l33.542 12.531v25.913c0 11.032-3.184 20.952-9.551 29.758-6.368 8.806-14.365 14.638-23.991 17.494Z"
      />
      <path
        stroke="url(#d)"
        strokeWidth={0.5}
        d="M91.624 27.954v25.74c0 10.98-3.167 20.849-9.503 29.612-6.322 8.743-14.251 14.531-23.789 17.379-9.537-2.848-17.465-8.636-23.787-17.38-6.336-8.762-9.504-18.63-9.504-29.612V27.954l33.291-12.437 33.292 12.437Z"
      />
    </g>
    <path
      fill="url(#e)"
      stroke="#BF9162"
      strokeWidth={0.2}
      d="M76.914 47.965 53.3 71.58 39.776 58.056l3.277-3.278L53.23 64.955l.071.07.07-.07 20.266-20.267 3.277 3.277Z"
    />
    <defs>
      <linearGradient
        id="c"
        x1={58.333}
        x2={58.333}
        y1={15.25}
        y2={100.946}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EEE" stopOpacity={0.8} />
        <stop offset={1} stopColor="#AAA" stopOpacity={0.8} />
      </linearGradient>
      <linearGradient
        id="d"
        x1={58.333}
        x2={58.333}
        y1={15.25}
        y2={100.946}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E4E4E4" stopOpacity={0.5} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.5} />
      </linearGradient>
      <linearGradient
        id="e"
        x1={58.346}
        x2={58.346}
        y1={71.722}
        y2={44.547}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#997756" />
        <stop offset={0.5} stopColor="#F4CCA5" />
      </linearGradient>
      <clipPath id="a" transform="translate(-22.791 -14.25)">
        <path d="M58.333 100.946c-9.627-2.856-17.623-8.688-23.99-17.494-6.368-8.806-9.552-18.726-9.552-29.758V27.78L58.333 15.25l33.542 12.531v25.913c0 11.032-3.184 20.952-9.551 29.758-6.368 8.806-14.365 14.638-23.991 17.494Z" />
      </clipPath>
      <filter
        id="b"
        width={71.083}
        height={89.697}
        x={22.791}
        y={14.25}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_231_20" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_231_20"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect2_innerShadow_231_20" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={-2} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend
          in2="effect2_innerShadow_231_20"
          result="effect3_innerShadow_231_20"
        />
      </filter>
    </defs>
  </svg>
)

export const BlockedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={81}
    height={81}
    fill="none"
  >
    <rect
      width={79}
      height={79}
      x={1.167}
      y={1}
      stroke="#252525"
      strokeOpacity={0.6}
      rx={11.5}
    />
    <g filter="url(#a)" opacity={0.2}>
      <foreignObject width={70.103} height={70.103} x={5.62} y={6.438}>
        <div
          style={{
            backdropFilter: "blur(.5px)",
            clipPath: "url(#b)",
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>
      <g
        data-figma-bg-blur-radius={1}
        filter="url(#c)"
        shapeRendering="crispEdges"
      >
        <path
          fill="url(#d)"
          fillOpacity={0.55}
          d="m40.672 73.54-9.757-9.718H17.338V50.246L7.62 40.489l9.718-9.756V17.156h13.577l9.757-9.718 9.756 9.718h13.577v13.577l9.718 9.756-9.718 9.757v13.576H50.428l-9.756 9.719Z"
        />
        <path
          stroke="url(#e)"
          strokeWidth={0.5}
          d="m17.589 50.143-.074-.074-9.543-9.58 9.543-9.58.074-.073v-13.43h13.43l.073-.073 9.58-9.543 9.58 9.543.073.073h13.43v13.43l.073.073 9.54 9.58-9.54 9.58-.073.074v13.43h-13.43l-.073.072-9.58 9.541-9.58-9.54-.074-.074h-13.43v-13.43Z"
        />
      </g>
      <path
        fill="url(#f)"
        stroke="#BF9162"
        strokeWidth={0.2}
        d="m44.342 35.842.023.055.06.004 9.385.831-7.14 6.13-.046.038.014.06 2.144 9.184-8.072-4.895-.052-.031-.052.031-8.073 4.895 2.145-9.184.014-.06-.046-.039-7.141-6.129 9.386-.83.06-.005.023-.055 3.684-8.62 3.684 8.62Z"
      />
    </g>
    <path
      fill="#A7A7A7"
      d="M35.282 50c-.444 0-.824-.158-1.14-.474a1.556 1.556 0 0 1-.475-1.142v-8.769c0-.444.158-.824.474-1.14A1.556 1.556 0 0 1 35.282 38h1.385v-2c0-1.114.388-2.06 1.164-2.836.776-.776 1.722-1.164 2.836-1.164 1.114 0 2.06.388 2.835 1.164.777.777 1.165 1.722 1.165 2.836v2h1.384c.445 0 .825.158 1.141.474.317.317.475.697.475 1.142v8.769c0 .444-.158.824-.475 1.14a1.556 1.556 0 0 1-1.14.475h-10.77Zm5.385-4.5a1.45 1.45 0 0 0 1.066-.434c.29-.289.434-.644.434-1.066 0-.422-.145-.777-.434-1.066a1.449 1.449 0 0 0-1.066-.434c-.422 0-.778.145-1.067.434-.289.289-.433.644-.433 1.066 0 .422.144.777.433 1.066.29.29.645.434 1.067.434Zm-3-7.5h6v-2c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0 0 40.667 33c-.834 0-1.542.292-2.125.875A2.893 2.893 0 0 0 37.667 36v2Z"
    />
    <defs>
      <linearGradient
        id="d"
        x1={40.672}
        x2={40.672}
        y1={7.438}
        y2={73.541}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EEE" stopOpacity={0.8} />
        <stop offset={1} stopColor="#AAA" stopOpacity={0.8} />
      </linearGradient>
      <linearGradient
        id="e"
        x1={40.672}
        x2={40.672}
        y1={7.438}
        y2={73.541}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E4E4E4" stopOpacity={0.5} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.5} />
      </linearGradient>
      <linearGradient
        id="f"
        x1={40.658}
        x2={40.658}
        y1={52.354}
        y2={26.969}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#997756" />
        <stop offset={0.5} stopColor="#F4CCA5" />
      </linearGradient>
      <filter
        id="a"
        width={92}
        height={92}
        x={-5.333}
        y={-5.5}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_231_736"
          stdDeviation={3}
        />
      </filter>
      <filter
        id="c"
        width={70.103}
        height={70.103}
        x={5.62}
        y={6.438}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_231_736" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_231_736"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect2_innerShadow_231_736" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={-2} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend
          in2="effect2_innerShadow_231_736"
          result="effect3_innerShadow_231_736"
        />
      </filter>
      <clipPath id="b" transform="translate(-5.62 -6.438)">
        <path d="m40.672 73.54-9.757-9.718H17.338V50.246L7.62 40.489l9.718-9.756V17.156h13.577l9.757-9.718 9.756 9.718h13.577v13.577l9.718 9.756-9.718 9.757v13.576H50.428l-9.756 9.719Z" />
      </clipPath>
    </defs>
  </svg>
)

export const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={18}
    fill="none"
  >
    <path
      fill="#A7A7A7"
      d="M9.167 13.5h1V8h-1v5.5Zm.5-6.923c.174 0 .32-.059.438-.177a.596.596 0 0 0 .177-.439.596.596 0 0 0-.177-.438.596.596 0 0 0-.438-.177.596.596 0 0 0-.439.177.596.596 0 0 0-.177.439c0 .174.06.32.177.438a.596.596 0 0 0 .439.177ZM9.67 18a8.772 8.772 0 0 1-3.51-.709 9.095 9.095 0 0 1-2.86-1.923 9.081 9.081 0 0 1-1.924-2.856 8.752 8.752 0 0 1-.71-3.509c0-1.244.237-2.414.71-3.51a9.096 9.096 0 0 1 1.922-2.859A9.081 9.081 0 0 1 6.155.709 8.752 8.752 0 0 1 9.663 0c1.245 0 2.415.236 3.51.709a9.096 9.096 0 0 1 2.86 1.922 9.08 9.08 0 0 1 1.924 2.857 8.75 8.75 0 0 1 .71 3.509 8.773 8.773 0 0 1-.709 3.51 9.095 9.095 0 0 1-1.923 2.859 9.08 9.08 0 0 1-2.856 1.925 8.75 8.75 0 0 1-3.51.709Zm-.003-1c2.233 0 4.125-.775 5.675-2.325 1.55-1.55 2.325-3.442 2.325-5.675 0-2.233-.775-4.125-2.325-5.675C13.792 1.775 11.9 1 9.667 1c-2.234 0-4.125.775-5.675 2.325C2.442 4.875 1.667 6.767 1.667 9c0 2.233.775 4.125 2.325 5.675C5.542 16.225 7.433 17 9.667 17Z"
    />
  </svg>
)
