"use client";

import { useDebugValue, useEffect, useState } from "react";
import styles from "./style.module.scss";
import arrow from "@/images/icons/arrow-bottom.svg";
import Image from "next/image";
import clsx from "clsx";
import { DropdownProps } from "./dropdown.config";

export const Dropdown = ({ points, defaultPoint = 0, additionalFunction}: DropdownProps) => {
  const [currentPoint, setCurrentPoint] = useState<number>(
    defaultPoint
  );
  const [active, setActive] = useState<boolean>(false);

  const handleCurrentPoint = (i: number) => {
    setCurrentPoint(i);
    handleDropdownOpening();

    if (additionalFunction) additionalFunction(i);
  };

  const handleDropdownOpening = () => {
    setActive(!active);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (e.target === null) return;
      if ((e.target as HTMLElement).closest(`.${styles.dropdown}`)) return;
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

  useEffect(() => {
    setCurrentPoint(defaultPoint);
  }, [defaultPoint])

  return (
    <span className={clsx(styles.dropdown, active && styles.active)}>
      <div className={styles.header} onClick={() => handleDropdownOpening()}>
        <span className={styles.current}>{points[currentPoint]}</span>

        <Image src={arrow} width={11} height={6} alt="" />
      </div>

      <span className={styles.body}>
        <span className={styles.bodyWrapper}>
          {points.map((point, i) => (
            <span
              key={point}
              className={styles.item}
              onClick={() => handleCurrentPoint(i)}>
              {point}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
};
