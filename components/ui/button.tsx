import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
};

export default function Button({
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `
    inline-flex
    items-center
    justify-center
    rounded-xl
    bg-blue-600
    px-5
    py-3
    font-medium
    text-white
    transition
    hover:bg-blue-700
    disabled:opacity-50
    disabled:pointer-events-none
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
