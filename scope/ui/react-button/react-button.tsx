import React, { ReactNode } from 'react';

export type ReactButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function ReactButton({ children }: ReactButtonProps) {
  return (
    <button onClick={launchAlert}>{children}</button>
  );
}

function launchAlert() {
  alert('You clicked me!');
}