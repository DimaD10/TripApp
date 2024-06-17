"use client";

import styles from "./style.module.scss";

import images from "./gallery.data.json";
import Image from "next/image";
import tripDurations from "@/src/data/trip-duration.data.json";
import Fancybox from "../../components/_ui/gallery";
import Link from "next/link";

import chocolate from "@/images/icons/chocolate.svg";
import { useRef } from "react";
import { InfoComponentProps, InfoItemProps } from "./trip-header.config";
import { useTripDurationStore } from "@/src/store";

export const TripHeader = () => {
    const duration = useTripDurationStore((state) => state.duration)

    const info = [
      {
        title: "Trip duration",
        text: tripDurations[duration],
      },
      {
        title: "Exploration",
        text: "4 regions",
      },
      {
        title: "Flight",
        text: "7h 20m from SFO",
      },
    ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <GalleryComponent />

          <InfoComponent items={info} />
        </div>
      </div>
    </section>
  );
};

const GalleryComponent = () => {
  const openGalleryRef = useRef(null);

  const openGallery = () => {
    if (openGalleryRef.current === null) return

    const elem: HTMLButtonElement = openGalleryRef.current
    
    elem.click();
  };

  return (
    <div className={styles.galleryGrid}>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}>
        {images.map((el, i) => (
          <Link
            key={el}
            data-fancybox="main-gallery"
            href={el}
            className={styles.image}
            ref={i === 0 ? openGalleryRef : undefined}>
            <Image src={el} width="1920" height="1080" alt="" />
          </Link>
        ))}
      </Fancybox>

      <button className={styles.button} onClick={() => openGallery()}>
        <Image src={chocolate} width={12} height={12} alt="" />

        <span>All photos</span>
      </button>
    </div>
  );
};

const InfoComponent = ({ items }: InfoComponentProps) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoMain}>
        {items.map((el) => (
          <InfoItem key={el.title} title={el.title} text={el.text} />
        ))}
      </div>

      <Link href="#itinerary" className={styles.link}>
        View itinerary
      </Link>
    </div>
  );
};

const InfoItem = ({ title, text }: InfoItemProps) => {
    return (
        <div className={styles.infoItem}>
            <h3>{ title }</h3>
            <p>{ text }</p>
        </div>
    )
}
