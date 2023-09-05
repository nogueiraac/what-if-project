import { PageTitleProps } from "@/types";
import Head from "next/head";

export function PageTitle(props: PageTitleProps) {
  const { title, description} = props;
  return(
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}