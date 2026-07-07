import { useCallback, useState } from "react";
import ListaPrecios from "./components/ListaPrecios";
import MetodosPago from "./components/MetodosPago";
import qrBreB from "./assets/qr-breB.png";
import qrNequi from "./assets/qr-nequi.png";
import qrImage from "./assets/qr-web.png";

function compartir() {
  if (navigator.share) {
    navigator.share({
      title: "Tienda de María",
      text: "Tienda de María — Autoservicio Mujin Hanbaijo",
      url: window.location.href,
    }).catch(() => {
      // usuario canceló
    });
  } else {
    navigator.clipboard.writeText(window.location.href).catch(() => {
      // falló copiar
    });
  }
}

export default function App() {
  const [shared, setShared] = useState(false);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const esAdmin = (() => {
    try {
      const data = localStorage.getItem("admin");
      if (!data) return false;
      const parsed = JSON.parse(data);
      return parsed.admin === true;
    } catch {
      return false;
    }
  })();

  const handleShare = useCallback(() => {
    compartir();
    if (!navigator.share) {
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col px-6 py-6 max-w-180 mx-auto sm:py-8 sm:px-6">
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
        <div className="absolute right-0 top-0 flex gap-1.5 no-print">
          <button
            className="cursor-pointer rounded-xl bg-pink-light px-3.5 py-1.5 text-[13px] font-bold text-text transition-colors hover:bg-pink"
            onClick={handleShare}
            title="Compartir"
            type="button"
          >
            {shared ? "✅ Link copiado" : "🔗 Compartir"}
          </button>
          {esAdmin && (
            <button
              className="cursor-pointer rounded-xl bg-pink-light px-3.5 py-1.5 text-[13px] font-bold text-text transition-colors hover:bg-pink"
              onClick={handlePrint}
              title="Imprimir"
              type="button"
            >
              🖨️ Imprimir
            </button>
          )}
        </div>
      </header>

      <section className="mb-5 shrink-0 rounded-2xl border-2 border-dashed border-pink-light bg-surface px-5 py-3.5 text-center">
        <p className="text-[13px] leading-relaxed text-text sm:text-sm">
          <strong className="text-pink-dark">Mujin Hanbaijo (無人販売所)</strong>
          {" "}— Autoservicio de confianza. Escoges tu producto, verificas el
          precio y pagas con Bre-B, Nequi o en efectivo. Las vueltas están en la
          caja. ¡Así de simple!
        </p>
      </section>

      <main className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2">
        <ListaPrecios />
        <MetodosPago />
      </main>

      <div className="hidden print:mt-6 print:block">
        <div className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-text-light">
          Códigos QR
        </div>
        <div className="grid gap-3 text-center grid-cols-3">
          <div className="rounded-xl border border-border/80 bg-white/80 p-3">
            <div className="mb-2 text-sm font-bold">Bre-B</div>
            <img className="mx-auto max-w-32" src={qrBreB} alt="QR de Bre-B" />
          </div>
          <div className="rounded-xl border border-border/80 bg-white/80 p-3">
            <div className="mb-2 text-sm font-bold">Nequi</div>
            <img className="mx-auto max-w-32" src={qrNequi} alt="QR de Nequi" />
          </div>
          <div className="rounded-xl border border-border/80 bg-white/80 p-3">
            <div className="mb-2 text-sm font-bold">Visitar la tienda</div>
            <img className="mx-auto max-w-32" src={qrImage} alt="QR de la Tienda de María" />
            <p className="mt-2 text-xs text-text-light">Escanea para visitar la tienda</p>
          </div>
        </div>
      </div>

      <footer className="mt-5 shrink-0 text-center text-[11px] text-text-light sm:text-xs">
        ¡Gracias por comprar en la tienda de María! 💖
      </footer>
    </div>
  );
}
