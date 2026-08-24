import { NavLinks } from "@/components/NavLinks";

/** Server Component. The interactive part is pushed down into <NavLinks />. */
export function Nav() {
  return (
    <nav className="sticky top-0 z-10 border-b-4 border-edge bg-paper">
      <div className="mx-auto max-w-4xl px-5 py-3 sm:px-8">
        <NavLinks />
      </div>
      {/* Reading progress. Driven by scroll(), no JS, and it simply never
          animates on browsers without scroll-timeline support. */}
      <div
        aria-hidden
        className="scroll-progress absolute inset-x-0 bottom-[-4px] h-1 bg-navy"
      />
    </nav>
  );
}
