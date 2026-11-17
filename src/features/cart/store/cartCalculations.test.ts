// @ts-ignore
import { describe, it, expect } from "vitest";
// @ts-ignore
import { calculateCart, applyDiscount, type CartItem } from "./cartStore";

describe("calculateCart", () => {
  it("gibt 0 für leeren Warenkorb zurück", () => {
    // TODO: Übung 1 - calculateCart mit leerem Array aufrufen und { totalItems: 0, totalPrice: 0 } erwarten
  });

  it("summiert Mengen und Preise korrekt auf", () => {
    // TODO: Übung 1 - Array mit mehreren CartItems übergeben und totalItems sowie totalPrice (toBeCloseTo) prüfen
  });
});

describe("applyDiscount", () => {
  it("zieht regulären Rabatt prozentual ab", () => {
    // TODO: Übung 1 - Regulären Rabatt mit applyDiscount testen (z. B. 20% von 100)
  });

  it("behandelt Grenzfälle wie 0% oder 100% Rabatt", () => {
    // TODO: Übung 1 - Grenzfälle (0%, 100%, ungültige Werte wie negativ oder > 100%) absichern
  });
});
