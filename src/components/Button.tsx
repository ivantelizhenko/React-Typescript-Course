import { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  el: 'button';
  chidlren?: ReactNode;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  el: 'anchor';
  chidlren?: ReactNode;
};

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return props.el === 'anchor';
}

function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}

export default Button;
