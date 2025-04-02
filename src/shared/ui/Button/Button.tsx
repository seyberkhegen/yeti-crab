import { ButtonHTMLAttributes, FC } from 'react';
import styles from './button.module.scss';
import cn from 'classnames';

export interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'lg' | 'md';
  variant: 'primary';
  className?: string;
}

const Button: FC<ButtonInterface> = ({
                                       children,
                                       size = 'lg',
                                       variant = 'primary',
                                       type = 'button' as const,
                                       className = '',
                                       ...rest
                                     }) => {
  return (
    <button {...rest} type={type} className={cn(styles.button, styles[variant], styles[size], className)}>
      {children || 'Button'}
    </button>
  );
};
export default Button;
