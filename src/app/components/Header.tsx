import Image from "next/image";

export function Header() {
  return (
    <div className="flex items-center gap-3 mb-12 z-10">
      <Image src="/stars.svg" alt="Decorative stars" width={49} height={50} priority />
      <h1 className="text-4xl font-bold">What&apos;s New?</h1>
    </div>
  );
}
