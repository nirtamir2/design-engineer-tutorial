import MyApp from "./MyApp";
import svgPhone from "./iphone-silver.svg";

function App() {
  return (
    <main className="flex h-screen select-none items-center justify-center overflow-hidden">
      <div className="relative flex aspect-square h-screen items-center justify-center bg-gradient-to-br from-[#F1FAFD] from-20% to-[#E1F6FD] transition-colors duration-300">
        <div className="absolute left-1/2 top-1/2 z-20 h-[814px] w-[376px] -translate-x-1/2 -translate-y-1/2">
          <MyApp />
        </div>

        <div className="fixed bottom-[72px] left-1/2 z-50 h-1.5 w-[360px] -translate-x-1/2 px-28">
          <div className="size-full rounded-3xl bg-black" />
        </div>
        <img
          src={svgPhone}
          alt="iphone mock"
          className="pointer-events-none relative z-30"
        />
      </div>
    </main>
  );
}

export default App;
