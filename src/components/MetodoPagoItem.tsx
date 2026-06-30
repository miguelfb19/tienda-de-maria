export interface Metodo {
  readonly icon: string;
  readonly iconBg: string;
  readonly nombre: string;
  readonly subtitulo: string;
  readonly dato: string;
  readonly esNumero: boolean;
}

interface Props {
  readonly metodo: Metodo;
  readonly isLast: boolean;
  readonly estaCopiado: boolean;
  readonly onCopiar: () => void;
  readonly onAbrirNequi: () => void;
}

export default function MetodoPagoItem({ metodo, isLast, estaCopiado, onCopiar, onAbrirNequi }: Props) {
  return (
    <div
      className={`rounded-xl border-2 border-border bg-surface p-3.5 ${isLast ? "" : " mb-2.5"}`}
    >
      <div className="flex items-center justify-between">
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

      {metodo.esNumero && (
        <div className="mt-2.5 flex gap-2">
          <button
            className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-pink-light px-3 py-1.5 text-[12px] font-bold text-text transition-colors hover:bg-pink no-print"
            onClick={onCopiar}
            type="button"
          >
            {estaCopiado ? "✅ ¡Copiado!" : "📋 Copiar"}
          </button>
          <button
            className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-mint px-3 py-1.5 text-[12px] font-bold text-text transition-colors hover:opacity-80 no-print"
            onClick={onAbrirNequi}
            type="button"
          >
            📱 Abrir Nequi
          </button>
        </div>
      )}
    </div>
  );
}
