/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVICE_KEY: string;
  readonly VITE_TEMPLATE_KEY: string;
  readonly VITE_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.css";

declare module "*.{png,jpg,jpeg,svg,pdf}" {
  const value: string;
  export default value;
}
