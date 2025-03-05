/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PROD_API_BASE_URL: string; // Add all your environment variables here
    readonly VITE_DEV_API_BASE_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  
