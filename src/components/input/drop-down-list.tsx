import React, { SyntheticEvent, useEffect, useState } from 'react';
import styles from './drop-down-list.module.css';
import classNames from 'classnames';
import { createPortal } from 'react-dom';

export const DropDownList = ({
  items,
  ownerRef,
}: /*setValue,*/
{
  items: { value: string; id: string }[];
  ownerRef: React.RefObject<HTMLInputElement>;
  /*setValue: (item: { value: string; id: string }) => void;*/
}) => {
  const [container, setContainer] = useState<Element>();
  const [params, setParams] = useState<{ top: number; left: number; width: number }>({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    if (document && window && ownerRef.current) {
      const element = document.querySelector('#dropdown');
      const { top, left, height, width } = ownerRef.current.getBoundingClientRect();
      setParams({ top: top + height + window.scrollY, left, width });
      if (element) {
        setContainer(element);
      }
    }
  }, [ownerRef]);

  if (!container) {
    return null;
  }
  const handleClick = (e: SyntheticEvent) => {
    const target = e.target as HTMLElement;
    const value = target.dataset['value'];
    const id = target.dataset['id'];

    if (id && value) {
      // setValue({ value, id });
    }
  };
  const jsx = (
    <ul className={styles.ddList} style={{ top: params.top, left: params.left, width: `${params.width}px` }}>
      {items.map((i) => {
        return (
          <li
            key={i.id}
            className={classNames(styles.ddListItem, 'hover')}
            data-Id={i.id}
            data-value={i.value}
            onClick={handleClick}
          >
            {i.value}
          </li>
        );
      })}
    </ul>
  );

  return createPortal(jsx, container);
};
