'use client';

import clsx from 'clsx';
import { useEffect } from 'react';
import { isEscapeKey } from '../../../utils/utils';
import './overlay.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { getOpenElement, closeElement } from '../../../store/open-element.process';

// ^======================== Overlay ========================^ //

function Overlay(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const openElement = useAppSelector(getOpenElement);

  const onEscKeydown = (e: KeyboardEvent) => {
    if (isEscapeKey(e)) {
      dispatch(closeElement());
      document.removeEventListener('keydown', onEscKeydown);
    }
  };

  useEffect(() => {
    if (openElement) {
      document.addEventListener('keydown', onEscKeydown);
    }

    return () => {
      document.removeEventListener('keydown', onEscKeydown);
    };
  });

  const handleOverlayClick = () => {
    dispatch(closeElement());
  };

  return (
    <div
      className={clsx(
        'overlay',
        { '_visible': openElement }
      )}
      onClick={handleOverlayClick}
    ></div>
  );
}
export default Overlay;