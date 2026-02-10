import HeaderLink from "./header_link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-row bg-green-700 px-16 gap-6 h-14 items-center">
      <HeaderLink href="/">
        <Image src="/home.svg" alt="Home" height="20" width="20" />
      </HeaderLink>
      <HeaderLink href="/running" children="running" />
      <HeaderLink href="/contact" children="contact" />
    </div>
  )
}