import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href="/">
        <div className="text-base sm:text-lg font-[family-name:var(--font-conthrax)] text-primary">
          Mangal<span className="text-secondary">Verse</span>
        </div>
      </Link>

      <div className="flex gap-5 sm:gap-10 [&>a]:hover:underline [&>a]:text-secondary-foreground [&>a]:hover:text-primary-foreground">
        <Link href="/">
          <p className="text-xs">Home</p>
        </Link>

        <Link href="/apod">
          <p className="text-xs">APOD</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
