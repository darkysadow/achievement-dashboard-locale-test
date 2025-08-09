import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    sassOptions: {
        includePaths: ['app/styles'],
        prependData: `@import "variables.scss";`,
    },
};

export default nextConfig;
