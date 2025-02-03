// Layout Header
// logo image loaded from external source

import Image from "next/image";

export default function Header() {
  return (
    <header className="text-white text-center p-4">
      <Image
        src="https://www.wus.de/_assets/93cc33772021915c246c29966f71886a/Icons/layout-logo-w-s-weis.svg"
        height={50}
        width={71.6}
        alt="w&s logo"
        className="sm:h-[66] sm:w-[101] h-[50] w-[71.6]"
      />
    </header>
  );
}
