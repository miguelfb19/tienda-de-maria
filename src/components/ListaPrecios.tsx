import { productos } from "../data/productos";

const AVATAR_COLORS = [
  "#FFB5C2", "#FFDAB9", "#C1E8D5", "#E0D4F5",
  "#FFD6DE", "#FDEBD0", "#D5F5E3", "#D2B4DE",
];

function formatPrecio(precio: number): string {
  return `$${precio.toLocaleString("es-CO")}`;
}

export default function ListaPrecios() {
  return (
    <section className="rounded-2xl bg-card p-5 shadow-[0_4px_20px_rgba(93,78,55,0.08)]">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
        <span className="text-[22px]">📋</span>
        Lista de Precios
      </h2>
      {productos.map((p, i) => (
        <div
          className="flex items-center justify-between border-b border-border py-2.5 last:border-b-0"
          key={p.id}
        >
          <div className="flex items-center gap-2.5">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] text-base"
              style={{ background: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
            >
              {p.emoji}
            </div>
            <div>
              <div className="text-sm font-semibold">{p.nombre}</div>
              <div className="text-[11px] text-text-light">#{p.id}</div>
            </div>
          </div>
          <div className="text-base font-extrabold text-pink-dark">
            {formatPrecio(p.precio)}
          </div>
        </div>
      ))}
    </section>
  );
}
