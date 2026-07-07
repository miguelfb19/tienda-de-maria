import { useCallback, useState } from "react";
import { datosPago } from "../data/productos";
import qrBreB from "../assets/qr-breB.png";
import qrNequi from "../assets/qr-nequi.png";
import MetodoPagoItem from "./MetodoPagoItem";
import type { Metodo } from "./MetodoPagoItem";

function formatNumero(num: string): string {
  return num.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
}

async function copiarAlPortapapeles(texto: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch {
    return false;
  }
}

const METODOS: readonly Metodo[] = [
  {
    icon: "BB",
    iconBg: "bg-peach",
    nombre: "Bre-B",
    subtitulo: "Bancolombia",
    dato: formatNumero(datosPago.breB),
    esNumero: true,
    valorCopiar: datosPago.breB,
    qrImage: qrBreB,
  },
  {
    icon: "N",
    iconBg: "bg-mint",
    nombre: "Nequi",
    subtitulo: "Billetera digital",
    dato: formatNumero(datosPago.nequi),
    esNumero: true,
    valorCopiar: datosPago.nequi,
    qrImage: qrNequi,
  },
  {
    icon: "💵",
    iconBg: "bg-lavender",
    nombre: "Efectivo",
    subtitulo: "Pago en el sitio",
    dato: "Las vueltas están en la caja",
    esNumero: false,
  },
] as const;

export default function MetodosPago() {
  const [copiedMethod, setCopiedMethod] = useState<string | null>(null);

  const handleCopiar = useCallback(async (valor: string, nombre: string) => {
    const ok = await copiarAlPortapapeles(valor);
    if (ok) {
      setCopiedMethod(nombre);
      window.setTimeout(() => setCopiedMethod(null), 2000);
    }
  }, []);

  return (
    <section className="rounded-2xl bg-card p-5 shadow-[0_4px_20px_rgba(93,78,55,0.08)]">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
        <span className="text-[22px]" aria-hidden="true">
          💳
        </span>
        Métodos de Pago
      </h2>
      {METODOS.map((m, i) => (
        <MetodoPagoItem
          key={m.nombre}
          metodo={m}
          isLast={i === METODOS.length - 1}
          estaCopiado={copiedMethod === m.nombre}
          onCopiar={() => handleCopiar(m.valorCopiar ?? "", m.nombre)}
        />
      ))}
    </section>
  );
}
