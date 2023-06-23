import SearchBox from "./components/searchBox";

export const metadata = {
  title: "KunJon Weather App",
  description: "Search for Cities",
};

export default function Search() {
  return (
    <main className="mt-5 mx-5">
      <h1 className="text-xl font-medium mb-4">KunJon Weather App</h1>
      <form>
        <h2 className="text-lg mb-4">Search for local weather</h2>
        <div className="mb-4">
          <SearchBox />
        </div>
      </form>
    </main>
  );
}
