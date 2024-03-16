import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src="https://unpkg.com/jquery/dist/jquery.js"></script>
        <script src="https://unpkg.com/image-map/dist/image-map.jquery.js"></script>
        {/*<script>*/}
        {/*    setTimeout(function () {*/}
        {/*        $('img[usemap]').imageMap()*/}
        {/*    },1000)*/}
        {/*</script>*/}
      </body>
    
    </Html>
  );
}