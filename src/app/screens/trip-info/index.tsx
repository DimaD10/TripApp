"use client";

import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { WISHLIST_LOCAL_NAME } from "@/src/constants/configuration.constants";
import clsx from "clsx";
import { ProfileComponent } from "../../components/_ui/profile";

import avatar from "@/images/peoples/avatar1.png";

export const TripInfo = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <HeaderComponent />

          <ProfileComponent
            src={avatar.src}
            title="Curated by Sandra"
            descr="Fyno expert"
          />

          <p className={styles.paragraph}>
            Welcome to Iceland, a land of breathtaking landscapes and unspoiled
            natural beauty. From its majestic waterfalls and geothermal wonders
            to the vibrant culture and rich history, Iceland promises an
            unforgettable adventure for every traveler.
          </p>
        </div>
      </div>
    </section>
  );
};

const HeaderComponent = () => {
  const [wish, setWish] = useState<boolean>(false);
  const [animationActive, setAnimationActive] = useState<boolean>(false);

  const handleWish = () => {
    setWish(!wish);
    setAnimationActive(!animationActive);
    localStorage.setItem(WISHLIST_LOCAL_NAME, `${!wish}`);

    setTimeout(() => {
      setAnimationActive(false);
    }, 300);
  };

  useEffect(() => {
    const localWish = localStorage.getItem(WISHLIST_LOCAL_NAME);
    const wishBoolean = localWish === "true";

    setWish(wishBoolean);
  }, []);

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Iceland’s Highlights</h1>

      <div className={styles.actions}>
        <button
          className={clsx(
            styles.button,
            styles.wishlist,
            wish && styles.wishlistActive,
            animationActive && styles.animate
          )}
          onClick={() => handleWish()}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" fill="white" />
            <path
              d="M16.5013 19.6588L16 19.3685L15.4987 19.6588L11 22.265V12.77C11 11.9279 11.0008 11.3554 11.0363 10.9126C11.071 10.4812 11.1339 10.2602 11.2109 10.106C11.4045 9.71862 11.7186 9.4045 12.106 9.21091C12.2602 9.13386 12.4812 9.071 12.9126 9.03633C13.3554 9.00075 13.9279 9 14.77 9H17.23C18.0721 9 18.6446 9.00075 19.0874 9.03633C19.5188 9.071 19.7398 9.13386 19.894 9.21091C20.2814 9.4045 20.5955 9.71862 20.7891 10.106C20.8661 10.2602 20.929 10.4812 20.9637 10.9126C20.9992 11.3554 21 11.9279 21 12.77V22.265L16.5013 19.6588Z"
              stroke="black"
              strokeWidth="2"
              className="stroke"
            />
          </svg>

          <span>{wish ? "In" : "Add to "} wishlist</span>
        </button>

        <button className={styles.button}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" fill="white" />
            <path
              className="fill"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 6.08582L16.7071 6.79292L20.2071 10.2929L18.7929 11.7071L17 9.91424V19H15V9.91424L13.2071 11.7071L11.7929 10.2929L15.2929 6.79292L16 6.08582ZM13 13H12.5C10.8431 13 9.5 14.3432 9.5 16V21C9.5 22.6569 10.8431 24 12.5 24H19.5C21.1569 24 22.5 22.6569 22.5 21V16C22.5 14.3432 21.1569 13 19.5 13H19V15H19.5C20.0523 15 20.5 15.4477 20.5 16V21C20.5 21.5523 20.0523 22 19.5 22H12.5C11.9477 22 11.5 21.5523 11.5 21V16C11.5 15.4477 11.9477 15 12.5 15H13V13Z"
              fill="black"
            />
          </svg>

          <span>Share</span>
        </button>
      </div>
    </div>
  );
};
