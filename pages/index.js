import Image from "next/image";
import { Inter } from "next/font/google";
var ImageMap = require("image-map");

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    setTimeout(()=>{
        $('img[usemap]').imageMap();

    },1000,this)

    return (
      <>
          <img src={"/intro.png"} useMap="#image-map"/>
          <map name="image-map">
          <area target="" alt="" title="home" href="/home" coords="370,808,2,661" shape="rect"/>
          </map>
      </>
  );
}