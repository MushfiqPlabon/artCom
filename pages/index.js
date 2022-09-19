import Head from "next/head";
import BlogExerp from "../components/BlogExerp";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div className="sm:prose-sm">
      <Head>
        <title>artCom</title>
      </Head>
      <main>
        <NavBar />
        <HeroSection />
        <BlogExerp />
        <ProductList />
      </main>
    </div>
  );
}
