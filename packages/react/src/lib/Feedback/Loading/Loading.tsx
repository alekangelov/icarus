import {
  clsx,
  loadingAnimations,
  loadingModal,
  loadingParent,
} from '@icarus/core';
import { useEffect, useState } from 'react';
import { LoadingIcon } from '../../Icons';
import { useDelayedUnmount } from '../../internal/hooks/useDelayedUnmount';
import { Portal } from '../../internal/Portal';

type P = {
  fullscreen?: boolean;
  visible?: boolean;
};

export const LoadingBase = ({ fullscreen, visible }: P) => {
  const animation = visible ? loadingAnimations.in : loadingAnimations.out;

  return (
    <div
      className={clsx(
        loadingParent.default,
        fullscreen && loadingParent.fullscreen
      )}
      style={{
        animation,
      }}
    >
      <div
        className={clsx(
          loadingModal({
            fullscreen,
          })
        )}
      >
        <LoadingIcon size="xxxl" />
      </div>
    </div>
  );
};

export const Loading = ({ visible, fullscreen }: P) => {
  const [mounted, setMounted] = useState(visible || false);
  const shouldRender = useDelayedUnmount(mounted, 250);
  useEffect(() => {
    if (typeof visible === 'boolean')
      setMounted((prevMounted) => {
        if (prevMounted !== visible) {
          return visible;
        }
        return prevMounted;
      });
  }, [visible]);
  return (
    <Portal>
      {shouldRender && (
        <LoadingBase fullscreen={fullscreen} visible={mounted} />
      )}
    </Portal>
  );
};
