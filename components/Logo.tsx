import Link from "next/link";
import Image from "next/image";

/**
 * Original-Wortmarke der CMS 3 GmbH (freigestelltes Logo).
 * variant "light" = helle Variante für dunkle Hintergründe (Footer).
 */
export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const src = variant === "light" ? "/cms3-logo-light.png" : "/cms3-logo.png";
  return (
    <Link
      href="/"
      aria-label="CMS 3 GmbH – Startseite"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={src}
        alt="CMS 3 GmbH"
        width={200}
        height={90}
        priority
        className="h-full w-auto object-contain"
      />
    </Link>
  );
}
