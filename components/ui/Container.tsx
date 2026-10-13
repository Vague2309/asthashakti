import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * Centered max-width content wrapper with consistent horizontal padding.
 * Use for the inner content of every section/header/footer.
 */
export default function Container<T extends ElementType = "div">({
  as,
  children,
  className = "",
  ...props
}: ContainerProps<T>) {
  const Component = as || "div";
  return (
    <Component
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
