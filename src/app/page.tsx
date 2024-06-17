
import { TripHeader } from "./screens/trip-header";
import styles from "./page.module.scss";
import { TripInfo } from "./screens/trip-info";
import { Itinerary } from "./screens/itinerary";
import { TripComponent } from "./components/_ui/trip";

export default function Home() {
  return (
    <main className={styles.main}>
      <TripHeader />
      <TripInfo />
      <Itinerary />
      <TripComponent />
    </main>
  );
}
