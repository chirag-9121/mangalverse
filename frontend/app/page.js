import { Particles } from "@/components/magicui/particles";
import Image from "next/image";
import Link from "next/link";
import { ROVERS } from "@/lib/constants";

export default function Home() {
  return (
    <section className="flex h-[90vh] flex-col items-center justify-center gap-8 sm:justify-around">
      <div className="fixed z-[-1] h-full w-full overflow-hidden">
        <Particles />
      </div>
      <h3 className="text-secondary-foreground font-michroma text-center">
        Explore{" "}
        <span className="text-foreground font-conthrax text-xl tracking-wider sm:text-3xl">
          MARS
        </span>{" "}
        thorugh the eyes of 4 rovers
      </h3>

      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {ROVERS.map((rover) => (
          <div key={rover.name} className="flex flex-col gap-2">
            <p className="text-primary-foreground font-conthrax large-p font-semibold">
              {rover.name}
            </p>
            <Link
              href={rover.link}
              className="border-secondary hover:bg-secondary bg-background/90 hover:shadow-primary flex h-full w-full items-center justify-center rounded-md border-1 p-4 shadow-md"
            >
              <Image
                src={rover.src}
                alt={rover.name}
                width={300}
                height={300}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
