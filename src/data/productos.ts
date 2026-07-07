export interface Producto {
  readonly id: number;
  readonly nombre: string;
  readonly precio: number;
  readonly emoji: string;
}

export const productos: readonly Producto[] = [
  { id: 1, nombre: "Platanitos", precio: 3000, emoji: "🍌" },
  { id: 2, nombre: "Bianchi", precio: 400, emoji: "🍬" },
  { id: 3, nombre: "Bom Bom Bun", precio: 1000, emoji: "🍭" },
  { id: 4, nombre: "Trident", precio: 500, emoji: "🫧" },
  { id: 5, nombre: "Galletas Dux", precio: 1500, emoji: "🍪" },
] as const;

export const datosPago = {
  breB: "3225289202",
  nequi: "3225289202",
} as const;
