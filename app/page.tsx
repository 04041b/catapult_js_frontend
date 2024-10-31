'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { launchreq } from "./functions";
import { Label } from "@/components/ui/label";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Button onClick={launchreq} className='bg-red-600 hover:bg-yellow-400'>launch</Button>
        <Label id="status"></Label>
      </main>

    </div>
  );
}
