import PageLink from "@/lib/page_link";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-start">
        <img src="me.jpg" className="pl-16 pr-16 lg:pr-4 py-8 w-lg" />
        <div className="flex flex-col lg:pt-8 pb-8">
          <div className="text-2xl font-bold pl-16 pr-16 lg:pl-8 pb-2">Hey, I&apos;m Nicholas!</div>
          <div className="text-xl pl-16 pr-16 lg:pl-8 py-2">I&apos;m a Staff Software Engineer with 9+ years of experience designing and implementing secure, reliable software products. I have served both as a technical leader and as an individual contributor; my ideal position consists of coding, mentoring engineers, and establishing a sensible technical strategy.</div>
          <div className="text-xl pl-16 pr-16 lg:pl-8 py-2">In my current professional capacity, I use C# and TypeScript for full-stack application development; however, I also have extensive experience in other technologies. In the open source community, I have contributed to <PageLink href="https://github.com/tokio-rs/tokio/pulls?q=is%3Apr+author%3Anskins">Tokio, an asynchronous runtime in Rust</PageLink>; <PageLink href="https://github.com/elixir-nx/axon/pulls?q=is%3Apr+author%3Anskins">Axon, a neural network library in Elixir</PageLink>; and <PageLink href="https://github.com/cpeikert/Lol/pull/19">Λ⚬λ, a cryptography library in Haskell</PageLink>. I love learning and am confident in my ability to pick up new technologies as needed.</div>
          <div className="text-xl pl-16 pr-16 lg:pl-8 py-2">In my personal life, I am working towards my goal of completing a marathon in under 3 hours. I also enjoy playing piano, cooking, reading books, and learning foreign languages. I recently passed the Japanese-Language Proficiency Test (JLPT) at the N4 level.</div>
          <div className="text-xl pl-16 pr-16 lg:pl-8 py-2">Feel free to reach out via email to <PageLink href="mailto:nskins@umich.edu">nskins@umich.edu</PageLink> or to check out my <PageLink href="/Nicholas Skinsacos - Resume.pdf">résumé</PageLink>!</div>
        </div>
      </div>
    </div>
  );
}
