import clsx from "clsx";
import styles from "./style.module.scss";
import { PropsWithChildren } from "react";
import { Header } from "../../header";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={clsx(styles.wrapper, "wrapper")}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
