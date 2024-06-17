"use client";

import styles from "./styles.module.scss";
import navigationData from "./navigation.data.json";
import tripDurations from "@/src/data/trip-duration.data.json";
import { NavItemProps } from "./navigation.config";

import { Dropdown } from "@/src/app/components/_ui/dropdown/index";
import Link from "next/link";
import { useTripDurationStore } from "@/src/store";
import { useEffect, useLayoutEffect, useState } from "react";
import { TRIP_DURATION_LOCAL_NAME } from "@/src/constants/configuration.constants";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <NavigationComponent />

          <ActionButton />
        </div>
      </div>
    </div>
  );
};

const NavigationComponent = () => {
  const nav = [...navigationData, tripDurations];
  const { duration, switchDuration } = useTripDurationStore();

  const [newDuration, setNewDuration] = useState<number>();

  useLayoutEffect(() => {
    const localDuration = localStorage.getItem(TRIP_DURATION_LOCAL_NAME);

    if (localDuration) {
      setNewDuration(parseInt(localDuration));
    }
  }, []);

  useEffect(() => {
    if (newDuration || newDuration === 0) {
      switchDuration(newDuration);
      localStorage.setItem(TRIP_DURATION_LOCAL_NAME, `${newDuration}`);
    }
  }, [newDuration, switchDuration]);

  return (
    <div className={styles.navigation}>
      {nav.map((item, index) => {
        if (Array.isArray(item)) {
          return (
            <div className={styles.navItem} key={index}>
              <Dropdown
                points={item}
                defaultPoint={duration}
                additionalFunction={setNewDuration}
              />
            </div>
          );
        } else if (typeof item === "object") {
          return (
            <div className={styles.navItem} key={index}>
              <NavItem text={item.text} link={item.link} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

const NavItem = ({ text, link }: NavItemProps) => {
  return <Link href={link}>{text}</Link>;
};

const ActionButton = () => {
  return (
    <button className={styles.actionBtn}>
      <svg
        width="13"
        height="13"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 1.5V14.5M1.5 8L14.5 8"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="square"
          className="stroke"
        />
      </svg>

      <span>Create</span>
    </button>
  );
};
