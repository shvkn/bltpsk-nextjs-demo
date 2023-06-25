import classNames from 'classnames';
import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { ArrowDownIcon } from '@/components/ui/icons/arrow-down-icon';
import { ArrowUpIcon } from '@/components/ui/icons/arrow-up-icon';

import styles from './select.module.css';

interface ISelectProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'value'> {
  extraClass?: string;
  items: { id: string; value: string }[];
  onChange: (e: SyntheticEvent) => void;
}

export const Select: React.FC<ISelectProps> = ({ label, name, extraClass, items, onChange, ...rest }) => {
  const [isOpened, setOpened] = useState(false);
  const [container, setContainer] = useState<Element>();
  const [position, setPosition] = useState<{ top: number; left: number; width: number }>({ top: 0, left: 0, width: 0 });

  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const ddListRef = useRef<HTMLUListElement>(null);

  const toggleDropDown = () => {
    setOpened((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll: EventListener = () => {
      setOpened(false);
    };
    const handleOuterClick: EventListener = (e) => {
      if (
        ddListRef.current &&
        !ddListRef.current.contains(e.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(e.target as Node)
      ) {
        setOpened(false);
      }
    };
    if (document && window && inputRef.current) {
      const element = document.querySelector('#dropdown');
      if (element) {
        setContainer(element);
      }
      const { top, left, height, width } = inputRef.current.getBoundingClientRect();
      setPosition({ top: top + height + window.scrollY, left, width });
      if (element) {
        setContainer(element);
      }
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('mousedown', handleOuterClick, false);
    }
    return () => {
      if (window) {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousedown', handleOuterClick, false);
      }
    };
  }, []);

  const handleSelect = (e: SyntheticEvent) => {
    const target = e.target as HTMLElement;
    let { id, value } = target.dataset;
    if (inputRef.current) {
      id = id || '';
      value = value || '';
      inputRef.current.value = value;
      onChange({
        target: { value: id, name: inputRef.current.name },
      } as React.ChangeEvent<HTMLInputElement>);
    }
    setOpened(false);
  };
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        <input
          {...rest}
          ref={inputRef}
          readOnly={true}
          type='text'
          name={name}
          className={classNames(styles.input, extraClass)}
        />
        <button ref={toggleButtonRef} className={classNames(styles.ddButton, 'hover')} onClick={toggleDropDown}>
          {isOpened ? <ArrowUpIcon size='M' /> : <ArrowDownIcon size='M' />}
        </button>

        {isOpened &&
          container &&
          createPortal(
            <ul
              className={styles.ddList}
              style={{ top: position.top, left: position.left, width: `${position.width}px` }}
              ref={ddListRef}
            >
              <li>
                <button className={classNames(styles.ddListItem, 'hover')} onClick={handleSelect}>
                  Не выбран
                </button>
              </li>
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    className={classNames(styles.ddListItem, 'hover')}
                    data-id={item.id}
                    data-value={item.value}
                    onClick={handleSelect}
                  >
                    {item.value}
                  </button>
                </li>
              ))}
            </ul>,
            container
          )}
      </div>
    </div>
  );
};
