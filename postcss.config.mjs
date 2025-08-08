// postcss.config.mjs - project root - PostCSS configuration.
const config = {
  plugins: process.env.SKIP_POSTCSS ? {} : { "@tailwindcss/postcss": {} },
};

export default config;
