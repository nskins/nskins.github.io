import PageLink from "@/lib/page_link";

export default function Running() {
  return (
    <div className="max-w-2xl">
      <div className="text-2xl font-bold px-16 pt-4 pb-2">Nicholas Skinsacos</div>
      <div className="text-xl px-16 py-2"><strong>Email</strong>: <PageLink href="mailto:nskins@umich.edu">nskins@umich.edu</PageLink></div>
      <div className="text-xl px-16 py-2"><strong>Resume</strong>: <PageLink href="/Nicholas Skinsacos - Resume.pdf">Download</PageLink></div>
    </div>
  )
}