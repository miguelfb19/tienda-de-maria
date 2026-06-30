import { datosPago } from "../data/productos";

function formatNumero(num: string): string {
  return num.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
}

export default function MetodosPago() {
  return (
    <section className="rounded-2xl bg-card p-5 shadow-[0_4px_20px_rgba(93,78,55,0.08)]">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
        <span className="text-[22px]">💳</span>
        Métodos de Pago
      </h2>

      <div className="mb-2.5 flex items-center justify-between rounded-xl border-2 border-border bg-surface p-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-peach text-lg font-bold">
            BB
          </div>
          <div>
            <div className="text-[15px] font-bold">Bre-B</div>
            <div className="text-xs text-text-light">Bancolombia</div>
          </div>
        </div>
        <div className="cursor-pointer select-all text-base font-extrabold tracking-wider">
          {formatNumero(datosPago.breB)}
        </div>
      </div>

      <div className="mb-2.5 flex items-center justify-between rounded-xl border-2 border-border bg-surface p-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-mint text-lg font-bold">
            N
          </div>
          <div>
            <div className="text-[15px] font-bold">Nequi</div>
            <div className="text-xs text-text-light">Billetera digital</div>
          </div>
        </div>
        <div className="cursor-pointer select-all text-base font-extrabold tracking-wider">
          {formatNumero(datosPago.nequi)}
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl border-2 border-border bg-surface p-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-lavender text-lg">
            💵
          </div>
          <div>
            <div className="text-[15px] font-bold">Efectivo</div>
            <div className="text-xs text-text-light">Pago en el sitio</div>
          </div>
        </div>
        <div className="text-sm font-semibold text-text-light">
          Las vueltas están aquí
        </div>
      </div>
    </section>
  );
}
