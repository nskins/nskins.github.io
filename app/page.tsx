import PageLink from "@/lib/page_link";

export default function Home() {
  return (
    <div className="max-w-2xl">
      <div className="text-2xl font-bold px-16 pt-4 pb-2">Hey, I&apos;m Nicholas!</div>
      <div className="text-xl px-16 py-2">I&apos;m a Staff Software Engineer with 9+ years of experience designing and implementing secure, reliable software products. I have served both as a technical leader and as an individual contributor; my ideal position consists of coding, mentoring engineers, and establishing a sensible technical strategy.</div>
      <div className="text-xl px-16 py-2">In my current professional capacity, I use C# and TypeScript for full-stack application development; however, I also have extensive experience in other technologies. In the open source community, I have contributed to <PageLink href="https://github.com/tokio-rs/tokio/pulls?q=is%3Apr+author%3Anskins">Tokio, an asynchronous runtime in Rust</PageLink>; <PageLink href="https://github.com/elixir-nx/axon/pulls?q=is%3Apr+author%3Anskins">Axon, a neural network library in Elixir</PageLink>; and <PageLink href="https://github.com/cpeikert/Lol/pull/19">Λ⚬λ, a cryptography library in Haskell</PageLink>. I love learning and am confident in my ability to pick up new technologies as needed.</div>
      <div className="text-xl px-16 py-2">I love running! I am currently working towards my goal of completing a marathon in under 3 hours. I also enjoy playing piano, cooking, reading books, and learning foreign languages. I recently passed the Japanese-Language Proficiency Test (JLPT) at the N4 level.</div>
    </div>
  );
}
