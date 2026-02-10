import PageLink from "@/lib/page_link";

export default function Home() {
  return (
    <div className="max-w-2xl">
      <div className="text-2xl font-bold px-16 pt-4 pb-2">Hey, I&apos;m Nicholas!</div>
      <div className="text-xl px-16 py-2">I&apos;m a Staff Software Engineer with 8+ years of experience building scalable, reliable, and maintainable software. I am currently employed at <PageLink href="https://vehlo.com">Vehlo</PageLink> and working on best-in-class solutions for the automotive care industry. My primary focus is on technical leadership and user-centered full-stack web development.</div>
      <div className="text-xl px-16 py-2">I&apos;m passionate about building products that users love! In my free time I enjoy running, playing piano, cooking, reading books, and learning foreign languages.</div>
    </div>
  );
}
