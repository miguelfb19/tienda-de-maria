export interface Metodo {
  readonly icon: string;
  readonly iconBg: string;
  readonly nombre: string;
  readonly subtitulo: string;
  readonly dato: string;
  readonly esNumero: boolean;
  readonly valorCopiar?: string;
  readonly qrImage?: string;
}

interface Props {
  readonly metodo: Metodo;
  readonly isLast: boolean;
  readonly estaCopiado: boolean;
  readonly onCopiar: () => void;
}

export default function MetodoPagoItem({ metodo, isLast, estaCopiado, onCopiar }: Props) {
  return (
    <div
      className={`rounded-xl border-2 border-border bg-surface p-3.5 ${isLast ? "" : " mb-2.5"}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div
            className={`flex h-10.5 w-10.5 items-center justify-center rounded-[10px] text-lg font-bold ${metodo.iconBg}`}
            aria-hidden="true"
          >
            {metodo.icon}
          </div>
          <div>
            <div className="text-[15px] font-bold">{metodo.nombre}</div>
            <div className="text-xs text-text-light">{metodo.subtitulo}</div>
          </div>
        </div>
        <div
          className={
            metodo.esNumero
              ? "cursor-pointer select-all text-base font-extrabold tracking-wider"
              : "text-sm font-semibold text-text-light"
          }
          aria-label={metodo.esNumero ? `Número ${metodo.nombre}: ${metodo.dato}` : undefined}
        >
          {metodo.dato}
        </div>
      </div>

      {metodo.qrImage ? (
        <div className="mt-3 rounded-xl border border-border/80 bg-white/70 p-3 print:hidden">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-light">
            Escanea el QR
          </div>
          <img
            src={metodo.qrImage}
            alt={`Código QR para pagar con ${metodo.nombre}`}
            className="mx-auto h-28 w-28 rounded-lg object-contain"
            loading="lazy"
          />
        </div>
      ) : null}

      {metodo.esNumero ? (
        <div className="mt-2.5 flex gap-2">
          <button
            className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-pink-light px-3 py-1.5 text-[12px] font-bold text-text transition-colors hover:bg-pink no-print"
            onClick={onCopiar}
            type="button"
          >
            {estaCopiado ? "✅ ¡Copiado!" : "📋 Copiar"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
