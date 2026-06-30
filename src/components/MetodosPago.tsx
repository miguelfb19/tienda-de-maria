import { useCallback, useMemo, useState } from "react";
import { datosPago } from "../data/productos";
import MetodoPagoItem from "./MetodoPagoItem";
import type { Metodo } from "./MetodoPagoItem";

const NUMERO = "3225289202";

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

function abrirNequi(): void {
  const deepLinks = [
    `nequi://send?phone=${NUMERO}`,
    `intent://send?phone=${NUMERO}#Intent;package=com.nequi.MobileApp;scheme=nequi;end`,
  ];

  for (const link of deepLinks) {
    try {
      const w = window.open(link, "_blank");
      if (w) {
        return;
      }
    } catch {
      // continuar al siguiente intento
    }
  }

  window.open("https://transacciones.nequi.com/bdigital/login.jsp", "_blank");
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
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopiar = useCallback(
    async (i: number) => {
      const ok = await copiarAlPortapapeles(NUMERO);
      if (ok) {
        setCopiedIndex(i);
        setTimeout(() => setCopiedIndex(null), 2000);
      }
    },
    [],
  );

  const callbacks = useMemo(
    () =>
      METODOS.map((_, i) => ({
        copiar: () => handleCopiar(i),
        abrir: () => abrirNequi(),
      })),
    [handleCopiar],
  );

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
          estaCopiado={copiedIndex === i}
          onCopiar={callbacks[i].copiar}
          onAbrirNequi={callbacks[i].abrir}
        />
      ))}
    </section>
  );
}
