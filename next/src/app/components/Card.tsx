interface CardProps {
  children: React.ReactNode;
  horizontal?: boolean;
}

export default function Card({ children, horizontal = false }: CardProps) {
  const className = horizontal ? "c-card c-card--horizontal" : "c-card";
  return <div className={className}>{children}</div>;
}
