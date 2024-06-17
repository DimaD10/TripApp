"use client"

import Image from "next/image";
import styles from "./style.module.scss";
import { TripCardsProps } from "./trip-card.config";
import { PropsWithChildren, useState } from "react";
import clsx from "clsx";
import { MAX_RATING_VALUE } from "@/src/constants/configuration.constants";

import ratingIcon from '@/images/icons/rating-icon.svg';

export const TripCard = ({title, previewUrl, labels=["1", "2"], pick, rating, row = false}: TripCardsProps) => {
    const [fav, setFav] = useState<boolean>(false)
    const [animationActive, setAnimationActive] = useState<boolean>(false);

    const handleFav = () => {
        setFav(!fav)

        setAnimationActive(!animationActive);

        setTimeout(() => {
          setAnimationActive(false);
        }, 300);
    }

    return (
      <div className={clsx(styles.card, row && styles.row)}>
        <div className={styles.preview}>
          <Image src={previewUrl} height={600} width={440} alt="" />

          <div className={styles.previewBar}>
            {pick === "true" && <Label>Curator’s pick</Label>}

            <button
              className={clsx(
                styles.favBtn,
                fav && styles.active,
                animationActive && styles.animate
              )}
              onClick={() => handleFav()}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 10.77C8 9.11814 8 8.29221 8.31637 7.65906C8.60675 7.07792 9.07792 6.60675 9.65906 6.31637C10.2922 6 11.1181 6 12.77 6H19.23C20.8819 6 21.7078 6 22.3409 6.31637C22.9221 6.60675 23.3933 7.07792 23.6836 7.65906C24 8.29221 24 9.11814 24 10.77V26L16 21.3655L8 26V10.77Z"
                  fill="black"
                  fillOpacity="0.1"
                />
                <path
                  d="M23.7494 26.4326L24.5 26.8675V26V10.77V10.7482C24.5 9.94074 24.5 9.30464 24.4588 8.79246C24.4169 8.26999 24.3297 7.83334 24.1309 7.43557C23.7921 6.75758 23.2424 6.20787 22.5644 5.86909C22.1667 5.67034 21.73 5.58314 21.2075 5.54115C20.6954 5.49999 20.0593 5.5 19.2518 5.5H19.23H12.77H12.7482C11.9407 5.5 11.3046 5.49999 10.7925 5.54115C10.27 5.58314 9.83334 5.67034 9.43557 5.86909C8.75758 6.20787 8.20787 6.75758 7.86909 7.43557C7.67034 7.83334 7.58314 8.26999 7.54115 8.79246C7.49999 9.30464 7.5 9.94073 7.5 10.7482V10.77V26V26.8675L8.25064 26.4326L16 21.9434L23.7494 26.4326Z"
                  stroke="#3C3C43"
                  strokeOpacity="0.18"
                />
                <path
                  d="M15.4987 20.5002L9 24.265V10.77C9 9.92785 9.00075 9.35538 9.03633 8.91262C9.071 8.48124 9.13386 8.26024 9.21091 8.10604C9.4045 7.71862 9.71862 7.4045 10.106 7.21091C10.2602 7.13386 10.4812 7.071 10.9126 7.03633C11.3554 7.00075 11.9279 7 12.77 7H19.23C20.0721 7 20.6446 7.00075 21.0874 7.03633C21.5188 7.071 21.7398 7.13386 21.894 7.21091C22.2814 7.4045 22.5955 7.71862 22.7891 8.10604C22.8661 8.26024 22.929 8.48124 22.9637 8.91262C22.9992 9.35538 23 9.92785 23 10.77V24.265L16.5013 20.5002L16 20.2098L15.4987 20.5002Z"
                  fill="black"
                  fillOpacity="0.1"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M9 11.77C9 10.1181 9 9.29221 9.31637 8.65906C9.60675 8.07792 10.0779 7.60675 10.6591 7.31637C11.2922 7 12.1181 7 13.77 7H18.23C19.8819 7 20.7078 7 21.3409 7.31637C21.9221 7.60675 22.3933 8.07792 22.6836 8.65906C23 9.29221 23 10.1181 23 11.77V25L16 20.829L9 25V11.77Z"
                  fill="white"
                  className={styles.activeFrame}
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.title}>{title}</div>

          {pick === "true" && <Label>Curator’s pick</Label>}

          {rating && (
            <div className={styles.rating}>
              <Image src={ratingIcon} width={16} height={16} alt="" />

              <span>
                {rating}/{MAX_RATING_VALUE}
              </span>
            </div>
          )}

          <div className={styles.labels}>
            {labels.map((el) => (
              <div key={el} className={styles.labelItem}>
                {el}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

const Label = ({children}: PropsWithChildren) => {
    return (
        <div className={styles.label}>
            {children}
        </div>
    )
}
