interface JunoButtonProps {
  variant?: 'primary' | 'secondary' | 'outline-light' | 'outline-dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  target?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function JunoButton({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  target,
  children,
  className = '',
  fullWidth = false,
}: JunoButtonProps) {
  // Base classes with shimmer effect
  const baseClasses = 'rounded-lg transition-colors font-body btn-shimmer cursor-pointer';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-accent text-background hover:bg-accent/85 transition-colors',
    secondary: 'bg-primary text-background hover:bg-primary/85',
    'outline-light': 'border-2 border-background text-background hover:bg-background hover:text-primary',
    'outline-dark': 'border-2 border-primary text-primary hover:bg-primary hover:text-background',
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'px-6 py-2 text-base',
    md: 'px-8 py-3 text-lg',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`;
  
  if (href) {
    return (
      <a href={href} target={target} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}