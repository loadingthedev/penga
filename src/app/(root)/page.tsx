import Banner from "./components/Banner";
import ScroolCards from "./components/ScroolCards";

export default function Home() {
  return (
    <main className="mt-4 mb-8">
      <div className="flex gap-8 flex-col">
        <Banner />
        <ScroolCards title="Latest Updates" link="/latest-updates" />
        <ScroolCards title="Recently Added" link="/recently-added" />
        <ScroolCards title="Most Popular" link="/most-popular" />
        <ScroolCards title="Top Rated" link="/top-rated" />
      </div>
    </main>
  );
}
