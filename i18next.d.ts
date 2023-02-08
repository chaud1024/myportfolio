// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import en from "locales/en/home.json";
import ko from "locales/ko-KR/home.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "ns1";
    // custom resources type
    resources: {
      en: typeof en;
      ko: typeof ko;
    };
    // other
  }
}