"use client";

import Image from 'next/image';
import styles from './style.module.scss';

import editIcon from "@/images/icons/ellipsis.svg";
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export const TripTools = () => {
    const options = [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 1",
      "Option 2",
      "Option 3",
    ];

    const [active, setActive] = useState<boolean>(false);

    const handleDropdownOpening = () => {
      setActive(!active);
    };

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (e.target === null) return;
        if ((e.target as HTMLElement).closest(`.${styles.tools}`)) return;
        setActive(false);
      };

      if (active) {
        document.addEventListener("click", handleClickOutside);
      } else {
        document.removeEventListener("click", handleClickOutside);
      }

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [active]);

    return (
      <div className={clsx(styles.tools, active && styles.active)}>
        <button
          className={styles.button}
          onClick={() => handleDropdownOpening()}>
          <Image src={editIcon} width={32} height={32} alt="" />
        </button>

        <div className={styles.menu}>
          <div className={styles.menuWrapper}>
            {options.map((option) => (
              <div
                className={styles.option}
                key={option}
                onClick={() => handleDropdownOpening()}>
                {option}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}