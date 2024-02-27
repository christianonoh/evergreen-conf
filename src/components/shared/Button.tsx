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
        "block w-max border-2 transition-all duration-200 ease-in-out mt-8 mx-auto bg-winered border-winered text-light hover:text-winered hover:bg-light rounded-md px-6 py-3 text-lg font-semibold",
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
        "block w-max border-2 transition-all duration-200 ease-in-out mt-8 mx-auto bg-winered border-winered text-light hover:text-winered hover:bg-light rounded-md px-6 py-3 text-lg font-semibold",

        className
      )}
    >
      {text}
    </Link>
  );
};

export default Button;
