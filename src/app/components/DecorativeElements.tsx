import Image from "next/image";

export function DecorativeElements() {
  return (
    <>
      <div className="absolute left-0 top-1/3 w-32 h-64 overflow-hidden">
        <Image
          src="/sq1.svg"
          alt="Decorative square"
          width={128}
          height={256}
          className="opacity-90"
        />
      </div>
      <div className="absolute right-0 bottom-1/4 w-32 h-64 overflow-hidden">
        <Image
          src="/sq2.svg"
          alt="Decorative square"
          width={128}
          height={256}
          className="opacity-90"
        />
      </div>
    </>
  );
}
