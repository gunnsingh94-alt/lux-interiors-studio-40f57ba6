import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "../components/site/CustomCursor";
import { SmoothScroll } from "../components/site/SmoothScroll";
import { Nav } from "../components/site/Nav";
import { Hero } from "../components/site/Hero";
import { Showcase } from "../components/site/Showcase";
import { TextureStudio } from "../components/site/TextureStudio";
import { Gallery } from "../components/site/Gallery";
import { Contact } from "../components/site/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative bg-[#0d0d0f] text-white">
      <SmoothScroll />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Showcase />
        <TextureStudio />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}
