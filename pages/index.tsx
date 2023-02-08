import Layout from "../layouts/Layout";
import { serverSideTranslations} from "next-i18next/serverSideTranslations"

export async function getStaticProps({locale}: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'experience', 'project']))
    }
  }
}

export default function Home() {
  return (
    <>
      <Layout />
    </>
  );
}
