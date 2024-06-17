"use client";

import Image from "next/image";
import styles from "./style.module.scss";

import planeIcon from "@/images/icons/plane.svg";
import personIcon from "@/images/icons/person.svg";
import calendarIcon from "@/images/icons/calendar.svg";
import clsx from "clsx";

export const Itinerary = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <HeaderComponent />
        </div>
      </div>
    </section>
  );
};

const HeaderComponent = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Iceland itinerary</h2>

      <TripDetails />
    </div>
  );
};

const TripDetails = () => {
  return (
    <div className={styles.details}>
      <div className={styles.route}>
        <input
          type="text"
          readOnly
          className={styles.detail}
          value="Reykjavík, KEF"
        />
        <Image
          src={planeIcon}
          width={32}
          height={32}
          className={styles.routeIcon}
          alt=""
        />
        <input
          type="text"
          readOnly
          className={styles.detail}
          value="San Francisco, SFO"
        />
      </div>

      <div
        className={clsx(
          styles.detail,
          styles.detailCustom,
          styles.detailIcon,
          styles.detailBig
        )}>
        <Image
          src={calendarIcon}
          width={32}
          height={32}
          className={styles.icon}
          alt=""
        />
        <input type="text" readOnly value="Jul 03 – Jul 11" />
      </div>

      <div
        className={clsx(
          styles.detail,
          styles.detailCustom,
          styles.detailIcon,
          styles.detailSmall
        )}>
        <Image
          src={personIcon}
          width={32}
          height={32}
          className={styles.icon}
          alt=""
        />
        <input type="text" readOnly value="2" />
      </div>
    </div>
  );
};


