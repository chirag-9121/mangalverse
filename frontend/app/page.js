import { Particles } from "@/components/magicui/particles";

export default function Home() {
  return (
    <section className="flex h-full flex-col items-center justify-around">
      <div className="fixed z-[-1] h-full w-full overflow-hidden">
        <Particles />
      </div>
      <h3 className="text-secondary-foreground font-michroma">
        Explore{" "}
        <span className="text-foreground font-conthrax text-3xl tracking-wider">
          MARS
        </span>{" "}
        thorugh the eyes of 4 rovers
      </h3>
    </section>
  );
}
