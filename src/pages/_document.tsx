import { getCssText } from '@/styles'
import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }}></style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}