import HeaderLink from "./header_link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-row bg-slate-800 h-14">
      <div className="flex flex-row gap-6 px-16 container mx-auto items-center">
        <HeaderLink href="/">
          <Image src="/home.svg" alt="Home" height="20" width="20" />
        </HeaderLink>
        <HeaderLink href="/running">
          Running
        </HeaderLink>
      </div>
    </div>
  )
}