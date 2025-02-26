import clsx from 'clsx';
import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../icon/icon';
import './button.scss';

// ^======================== Button ========================^ //

type CommonProps = {
  className?: string;
  active?: boolean;
  text: string;
  iconSrc?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  } | CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    disabled?: never;
  };

function Button(buttonProps: ButtonProps) {

  const { className, active, text, iconSrc, href, onClick, ...props } = buttonProps;

  const commonProps = {
    className: clsx('button', className, { active }),
  };

  const buttonContent = (
    <>
      {iconSrc &&
        <Icon
          bemClass='button__icon'
          src={iconSrc!}
        />
      }
      <span className='button__text'>
        {text}
      </span>
    </>
  );

  if (href) {
    const isInternalLink = href.startsWith('/');
    return isInternalLink ? (
      <Link to={href} {...commonProps} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {buttonContent}
      </Link>
    ) : (
      <a href={href} {...commonProps} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} onClick={onClick}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      {...commonProps}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      onClick={(e) => {
        if (props.disabled) e.preventDefault();
        onClick?.(e);
      }}
    >
      {buttonContent}
    </button>
  );
}
export default Button;  