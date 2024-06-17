"use client";

import clsx from "clsx";
import "swiper/css";
import styles from "./style.module.scss";
import { LabelComponent } from "../label";
import Image from "next/image";

import highlightIcon from "@/images/icons/sparkle-small.svg";
import bedIcon from "@/images/icons/bed-small.svg";
import listSmallIcon from "@/images/icons/list-small.svg";
import dragNDropIcon from "@/images/icons/draganddrop-small.svg";
import directionIcon from "@/images/icons/direction.svg"

import { Swiper, SwiperSlide } from "swiper/react";
import {
  PointProps,
  SimpleTripCardsProps,
  TripCardProps,
  TripCardsProps,
} from "./trip.config";

import cards from "./cards.data.json";
import { TripCard } from "../trip-card";
import { Navigation } from "swiper/modules";

import arrowIcon from "@/images/icons/arrow-right.svg";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { Reorder } from "framer-motion";
import { TripTools } from "../trip-tools";

const DELAY: number = 500;

const cardsMain: PointProps[] = cards;

export const TripComponent = () => {
  return (
    <section className={styles.section} id="itinerary">
      <div className={clsx(styles.container, "container")}>
        {cardsMain.map((point, i) => (
          <TripPoint key={i} point={point} />
        ))}
      </div>
    </section>
  );
};

const TripPoint = ({ point }: { point: PointProps }) => {
  const [highlightsActive, setHighlightsActive] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const handleHighlights = () => {
    if (buttonDisabled) return;

    setHighlightsActive(!highlightsActive);

    setButtonDisabled(true);

    setTimeout(() => {
      setButtonDisabled(false);
    }, DELAY);
  };

  const trips: TripCardProps[][] = point.cards;
  const stay: TripCardProps[] = point.stay;

  return (
    <div className={styles.point}>
      <div className={styles.pointEl}>
        <div className={styles.pointHeader}>
          <div className={clsx(styles.icon, styles.iconBlue)}>
            <span>{point.id}</span>
          </div>

          <h2 className={styles.title}>{point.title}</h2>
        </div>

        <div className={clsx(styles.labels, styles.paddingMain)}>
          {point.labels.map((el) => (
            <LabelComponent key={el} text={el} />
          ))}
        </div>

        <p className={clsx(styles.paragraph, styles.paddingMain)}>
          {point.paragraph}
        </p>
      </div>

      <div className={clsx(styles.cardsPoint, styles.pointEl)}>
        <div className={styles.pointHeader}>
          <div
            className={clsx(
              styles.icon,
              styles.highlightIcon,
              highlightsActive && styles.active
            )}>
            <Image src={listSmallIcon} width={14} height={14} alt="" />
            <Image src={highlightIcon} width={20} height={20} alt="" />
          </div>

          <div className={styles.wrap}>
            <h2 className={styles.headline}>
              {highlightsActive
                ? `${point.cards.length} days plan`
                : "Region highlights"}
            </h2>

            <button
              onClick={() => handleHighlights()}
              className={clsx(styles.button, styles.buttonHeader)}>
              {highlightsActive ? (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.94976 16.625C11.9267 15.7592 13.5092 14.1767 14.375 12.1998C15.2408 14.1767 16.8233 15.7592 18.8002 16.625C16.8233 17.4908 15.2408 19.0733 14.375 21.0502C13.5092 19.0733 11.9267 17.4908 9.94976 16.625Z"
                    stroke="black"
                    strokeWidth="1.75"
                    className="stroke"
                  />
                  <path
                    d="M20.3528 7.73598C20.385 7.57509 20.615 7.57509 20.6472 7.73598C20.9113 9.0565 21.9435 10.0887 23.264 10.3528C23.4249 10.385 23.4249 10.615 23.264 10.6472C21.9435 10.9113 20.9113 11.9435 20.6472 13.264C20.615 13.4249 20.385 13.4249 20.3528 13.264C20.0887 11.9435 19.0565 10.9113 17.736 10.6472C17.5751 10.615 17.5751 10.385 17.736 10.3528C19.0565 10.0887 20.0887 9.0565 20.3528 7.73598Z"
                    fill="black"
                    className="fill"
                  />
                </svg>
              ) : (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="9.75"
                    y="9.75"
                    width="2.5"
                    height="2.5"
                    rx="1.25"
                    fill="black"
                    stroke="black"
                    className="stroke fill"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="9.75"
                    y="14.75"
                    width="2.5"
                    height="2.5"
                    rx="1.25"
                    fill="black"
                    stroke="black"
                    className="stroke fill"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="9.75"
                    y="19.75"
                    width="2.5"
                    height="2.5"
                    rx="1.25"
                    fill="black"
                    stroke="black"
                    className="stroke fill"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="15"
                    y="10"
                    width="7"
                    height="2"
                    fill="black"
                    className="fill"
                  />
                  <rect
                    x="15"
                    y="15"
                    width="7"
                    height="2"
                    fill="black"
                    className="fill"
                  />
                  <rect
                    x="15"
                    y="20"
                    width="7"
                    height="2"
                    fill="black"
                    className="fill"
                  />
                </svg>
              )}

              <span>Show {highlightsActive ? "highlights" : "daily plan"}</span>
            </button>
          </div>
        </div>

        <TripCards cards={trips} highlightsActive={highlightsActive} />
      </div>

      <div className={clsx(styles.cardsPoint, styles.pointEl)}>
        <div className={styles.pointHeader}>
          <div className={clsx(styles.icon)}>
            <Image src={bedIcon} width={20} height={20} alt="" />
          </div>

          <h2 className={styles.headline}>Where to stay</h2>
        </div>

        <TripCardsSimple cards={stay} />
      </div>
    </div>
  );
};

const TripCards = ({ cards, highlightsActive }: TripCardsProps) => {
  const [active, setActive] = useState<boolean>(highlightsActive);
  const [listActive, setListActive] = useState<boolean>(true);
  const [sliderHeight, setSliderHeight] = useState<number>(10000);
  const [listHeight, setListHeight] = useState<number>(10000);

  const slider = useRef(null);
  const list = useRef(null);

  useEffect(() => {
    if (!highlightsActive) {
      setTimeout(() => {
        setActive(highlightsActive);
      }, DELAY);

      setListActive(highlightsActive);
    } else {
      setActive(highlightsActive);

      setTimeout(() => {
        setListActive(highlightsActive);
      }, DELAY);
    }
  }, [highlightsActive]);

  useEffect(() => {
    if (!slider.current || !list.current) return;

    const height = (slider.current as HTMLElement).offsetHeight;
    const heightList = (list.current as HTMLElement).offsetHeight;

    setSliderHeight(height);
    setListHeight(heightList + 500);
  }, []);

  const flatCards = cards.flat();
  const directionsTime = cards;

  return (
    <div
      className={clsx(
        styles.cards,
        styles.paddingMain,
        active && styles.withoutBorder
      )}>
      <div
        ref={slider}
        className={styles.sliderWrapper}
        style={{
          maxHeight: !active ? `${sliderHeight}px` : `0px`,
          opacity: !active ? 1 : 0,
        }}>
        <SwiperWrapper>
          {flatCards.map((card: TripCardProps) => (
            <SwiperSlide key={card.title}>
              <TripCard
                title={card.title}
                previewUrl={card.previewUrl}
                labels={card.labels}
                pick={card.pick}
                rating={card.rating}
              />
            </SwiperSlide>
          ))}
        </SwiperWrapper>
      </div>

      {cards.some((item) => Array.isArray(item)) && (
        <div
          className={styles.simulateCards}
          ref={list}
          style={{
            maxHeight: !listActive ? `0px` : `${listHeight}px`,
            opacity: !listActive ? 0 : 1,
          }}>
          {cards.map((card: TripCardProps[], i) => (
            <div className={styles.group} key={i}>
              <div className={styles.groupHeader}>
                <h4>Day {i + 1}</h4>

                <div className={styles.groupTools}>
                  <div className={styles.routeLenght}>
                    <Image src={directionIcon} width={24} height={24} alt="" />

                    <span>
                      {card[0] ? card[0].totalDayTime : "0m"}
                    </span>
                  </div>

                  <TripTools />
                </div>
              </div>

              <DaysPlan cards={card} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const TripCardsSimple = ({ cards }: SimpleTripCardsProps) => {
  const flatCards = cards.flat();

  return (
    <div className={clsx(styles.cards, styles.paddingMain)}>
      <div className={styles.sliderWrapper}>
        <SwiperWrapper>
          {flatCards.map((card: TripCardProps) => (
            <SwiperSlide key={card.title}>
              <TripCard
                title={card.title}
                previewUrl={card.previewUrl}
                labels={card.labels}
                pick={card.pick}
                rating={card.rating}
              />
            </SwiperSlide>
          ))}
        </SwiperWrapper>
      </div>
    </div>
  );
};

const DaysPlan = ({ cards }: SimpleTripCardsProps) => {
  const [listItems, setListItems] = useState<TripCardProps[]>(cards);

  useEffect(() => {
    setListItems(cards);
  }, [cards]);

  return (
    <div className={styles.groupList}>
      <Reorder.Group values={listItems} axis="y" onReorder={setListItems}>
        {Array.isArray(cards) &&
          listItems.length &&
          listItems.map((card: TripCardProps) => (
            <Reorder.Item key={card.title} value={card}>
              <div className={clsx(styles.simulateCard)}>
                <TripCard
                  title={card.title}
                  previewUrl={card.previewUrl}
                  labels={card.labels}
                  pick={card.pick}
                  rating={card.rating}
                  row={true}
                />

                <div className={styles.tools}>
                  <div className={clsx(styles.toolDragNDrop, styles.tool)}>
                    <Image src={dragNDropIcon} width={32} height={32} alt="" />
                  </div>

                  <TripTools />
                </div>
              </div>
            </Reorder.Item>
          ))}
      </Reorder.Group>
    </div>
  );
};

const SwiperWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={"auto"}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
        disabledClass: "swiper-button-disabled",
      }}
      speed={500}>
      {children}

      <div className="swiper-button-prev">
        <Image src={arrowIcon} width={16} height={16} alt="" />
      </div>
      <div className="swiper-button-next">
        <Image src={arrowIcon} width={16} height={16} alt="" />
      </div>
    </Swiper>
  );
};
