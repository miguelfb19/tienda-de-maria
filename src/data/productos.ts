export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  emoji: string;
}

export const productos: Producto[] = [
  { id: 1, nombre: "Platanitos", precio: 3000, emoji: "🍌" },
  { id: 2, nombre: "Bianchi", precio: 400, emoji: "🍬" },
  { id: 3, nombre: "Bom Bom Bun", precio: 1000, emoji: "🍭" },
  { id: 4, nombre: "Trident", precio: 500, emoji: "" },
];

export const datosPago = {
  breB: "3225289202",
  nequi: "3225289202",
};
