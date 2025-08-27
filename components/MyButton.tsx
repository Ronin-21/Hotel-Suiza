import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  size?: keyof typeof buttonVariants.size;
  variant?: keyof typeof buttonVariants.variant;
  className?: string;
}

const buttonVariants = {
  variant: {
    default:
      "bg-primary text-white font-semibold hover:bg-dark cursor-pointer transition duration-500 font-secondary text-lg",
    outline:
      "outline-2 bg-transparent text-primary font-semibold hover:bg-primary hover:text-white cursor-pointer transition duration-500 font-secondary text-lg",
    secondary:
      "bg-secondary text-white font-semibold hover:bg-primary cursor-pointer transition duration-500 font-secondary text-lg text-shadow-md text-shadow-dark/20",
  },
  size: {
    default: "px-4 py-2",
    lg: "py-3 px-8 text-2xl",
  },
};

const MyButton = ({
  children,
  size = "default",
  variant = "default",
  href,
  onClick,
  className = "",
}: ButtonProps) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`${buttonVariants.size[size]} ${buttonVariants.variant[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`${buttonVariants.size[size]} ${buttonVariants.variant[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default MyButton;
