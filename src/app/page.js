import Image from "next/image";
import Layout from "./layout/layout";
import Home from "@/home/page";

export default function Main() {
  return (
    <Layout>
      {/* <div className="px-16"> */}
        <Home/>
      {/* </div> */}
    </Layout>
    
  );
}
