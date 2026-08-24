# Duc Pham — Personal Website

Single-page portfolio for a computer architecture / pre-silicon verification
engineer. Next.js App Router, statically exported to plain HTML.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> out/
npm run lint
```

## Layout

```
app/                  Routes and layout only
  layout.tsx            html shell, fonts, metadata (derived from resume data)
  page.tsx              composes the sections; decides their order
  globals.css           Tailwind entry + design tokens
components/
  Nav.tsx, Footer.tsx, Section.tsx
  sections/             Hero, Experience, Projects, Skills, EducationSection
content/
  types.ts              the data contract
  resume.ts             ALL resume content — the single source of truth
public/
  Duc_Pham_resume.pdf   downloadable resume, served at /Duc_Pham_resume.pdf
```

## Updating the resume

1. Edit `content/resume.ts`.
2. Replace `public/Duc_Pham_resume.pdf` with the new export.

No component should need touching. If one does, the type in `content/types.ts`
is probably missing a field.
