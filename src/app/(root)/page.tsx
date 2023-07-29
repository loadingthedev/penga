import Banner from "./components/Banner";
import LatestUpdates from "./components/LatestUpdates";

export default function Home() {
  return (
    <main className="mt-4 mb-8">
      <div className="flex gap-8 flex-col">
        <Banner />
        <LatestUpdates />
      </div>
    </main>
  );
}
