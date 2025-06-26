import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href="/">
        <div className="text-base font-[family-name:var(--font-conthrax)] text-primary">
          Mangal<span className="text-secondary">Verse</span>
        </div>
      </Link>

      <div className="flex gap-5 sm:gap-10 [&>a]:hover:underline [&>a]:text-secondary-foreground [&>a]:hover:text-primary-foreground">
        <Link href="/">
          <div className="text-xs">Home</div>
        </Link>

        <Link href="/apod">
          <div className="text-xs">APOD</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
