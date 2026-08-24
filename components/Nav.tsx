import { NavLinks } from "@/components/NavLinks";

/** Server Component. The interactive part is pushed down into <NavLinks />. */
export function Nav() {
  return (
    <nav className="sticky top-0 z-10 border-b border-line bg-background">
      <div className="mx-auto max-w-3xl px-6 py-5">
        <NavLinks />
      </div>
    </nav>
  );
}
