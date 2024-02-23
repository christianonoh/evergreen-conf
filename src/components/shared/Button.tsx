import { cx } from "@/utils";
import Link from "next/link";

interface ButtonProps {
  href: string;
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ href, text, className = "" }) => {
  const isExternal = href.startsWith("http") || href.startsWith("https");

  return isExternal ? (
    <a
      href={href}
      aria-label={text}
      target="_blank"
      rel="noopener noreferrer"
      className={cx(
        "block w-max border-2 border-dark bg-dark font-semibold p-4 text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-dark",
        className
      )}
    >
      {text}
    </a>
  ) : (
    <Link
      href={href}
      aria-label={text}
      className={cx(
        "block w-max border-2 border-dark bg-dark font-semibold p-4 text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-dark ",
        className
      )}
    >
      {text}
    </Link>
  );
};

export default Button;
