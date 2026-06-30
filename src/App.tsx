import ListaPrecios from "./components/ListaPrecios";
import MetodosPago from "./components/MetodosPago";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col px-6 py-6 max-w-[720px] mx-auto sm:py-8 sm:px-6">
      <header className="relative mb-5 shrink-0 text-center sm:mb-6">
        <img
          className="mx-auto mb-1 h-12 w-12 sm:h-14 sm:w-14"
          src="/favicon.svg"
          alt="Tienda de María"
        />
        <h1 className="text-2xl font-extrabold tracking-tight text-text sm:text-[28px]">
          Tienda de María
        </h1>
        <p className="mt-0.5 text-[13px] text-text-light sm:text-sm">
          Tu tiendita de confianza
        </p>
        <button
          className="absolute right-0 top-0 cursor-pointer rounded-xl bg-pink-light px-3.5 py-1.5 text-[13px] font-bold text-pink-dark transition-colors hover:bg-pink print:hidden"
          onClick={() => window.print()}
          title="Imprimir"
        >
          🖨️ Imprimir
        </button>
      </header>

      <section className="mb-5 shrink-0 rounded-2xl border-2 border-dashed border-pink-light bg-surface px-5 py-3.5 text-center">
        <p className="text-[13px] leading-relaxed text-text sm:text-sm">
          <strong className="text-pink-dark">Mujin Hanbaijo (無人販売所)</strong> — Autoservicio de
          confianza. Escoges tu producto, verificas el precio y pagas con Bre-B, Nequi o en
          efectivo. Las vueltas están en la caja. ¡Así de simple!
        </p>
      </section>

      <main className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2">
        <ListaPrecios />
        <MetodosPago />
      </main>

      <footer className="mt-5 shrink-0 text-center text-[11px] text-text-light sm:text-xs">
        ¡Gracias por comprar en la tienda de María! 💖
      </footer>
    </div>
  );
}
