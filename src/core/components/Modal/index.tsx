import React, {FC, useCallback, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import style from './style.less';
import useIcon from 'src/core/hooks/useIcon';

export interface IModalProps {
  close: VoidFunction;
  className?: string;
  overlayClassName?: string;
  fullScreen?: boolean;
  onClose?: VoidFunction;
  onEnter?: VoidFunction;
}

const ModalContent: FC<IModalProps> = ({
  fullScreen = false,
  overlayClassName,
  className,
  children,
  onClose,
  close
}) => {
  const backgroundRef = useRef<HTMLDivElement>();
  const closeIcon = useIcon('close');

  const overlayClass = cn(style.overlay, {
    [overlayClassName]: !!overlayClassName
  });

  const containerClassName = cn(style.container, {
    [style.fullScreen]: !!fullScreen,
    [className]: !!className
  });

  const onCloseCallback = useCallback(() => {
    onClose?.();
    close();
  }, [onClose]);

  const onOverlayClick = useCallback(() => {
    onCloseCallback();
  }, [onCloseCallback]);

  useEffect(() => {
    setTimeout(() => {
      backgroundRef.current?.classList.add(style.show);
    });
  }, []);

  return (
    <div className={overlayClass}>
      <div className={style.background} onClick={onOverlayClick} ref={backgroundRef} />
      <div className={containerClassName}>
        <div className={style.content}>{children}</div>
        <div className={cn(style.close, closeIcon.style)} onClick={onCloseCallback} />
      </div>
    </div>
  );
};

export const Modal = (component: React.ReactElement, props: Omit<IModalProps, 'close'> = {}) => {
  const element = document.getElementById('modal');
  const close = () => {
    ReactDOM.unmountComponentAtNode(element);
  };
  const content = (
    <ModalContent {...props} close={close}>
      {component}
    </ModalContent>
  );

  ReactDOM.render(content, element);

  return {
    close
  };
};
