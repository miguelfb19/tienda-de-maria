import { datosPago } from "../data/productos";

function formatNumero(num: string): string {
  return num.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
}

interface Metodo {
  readonly icon: string;
  readonly iconBg: string;
  readonly nombre: string;
  readonly subtitulo: string;
  readonly dato: string;
  readonly esNumero: boolean;
}

const METODOS: readonly Metodo[] = [
  {
    icon: "BB",
    iconBg: "bg-peach",
    nombre: "Bre-B",
    subtitulo: "Bancolombia",
    dato: formatNumero(datosPago.breB),
    esNumero: true,
  },
  {
    icon: "N",
    iconBg: "bg-mint",
    nombre: "Nequi",
    subtitulo: "Billetera digital",
    dato: formatNumero(datosPago.nequi),
    esNumero: true,
  },
  {
    icon: "💵",
    iconBg: "bg-lavender",
    nombre: "Efectivo",
    subtitulo: "Pago en el sitio",
    dato: "Las vueltas están aquí",
    esNumero: false,
  },
] as const;

export default function MetodosPago() {
  return (
    <section className="rounded-2xl bg-card p-5 shadow-[0_4px_20px_rgba(93,78,55,0.08)]">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
        <span className="text-[22px]" aria-hidden="true">
          💳
        </span>
        Métodos de Pago
      </h2>
      {METODOS.map((m, i) => (
        <div
          className={`flex items-center justify-between rounded-xl border-2 border-border bg-surface p-3.5${i < METODOS.length - 1 ? " mb-2.5" : ""}`}
          key={m.nombre}
        >
          <div className="flex items-center gap-2.5">
            <div
              className={`flex h-10.5 w-10.5 items-center justify-center rounded-[10px] text-lg font-bold ${m.iconBg}`}
              aria-hidden="true"
            >
              {m.icon}
            </div>
            <div>
              <div className="text-[15px] font-bold">{m.nombre}</div>
              <div className="text-xs text-text-light">{m.subtitulo}</div>
            </div>
          </div>
          <div
            className={
              m.esNumero
                ? "cursor-pointer select-all text-base font-extrabold tracking-wider"
                : "text-sm font-semibold text-text-light"
            }
            aria-label={m.esNumero ? `Número ${m.nombre}: ${m.dato}` : undefined}
          >
            {m.dato}
          </div>
        </div>
      ))}
    </section>
  );
}
