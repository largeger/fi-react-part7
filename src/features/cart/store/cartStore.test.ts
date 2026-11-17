import { describe, it, beforeEach } from "vitest";
import { useCartStore } from "./cartStore";

// @ts-ignore
const mockItem = {
  id: 1,
  name: "USB-Tassenwärmer",
  price: 12.99,
  category: "Schreibtisch" as const,
  emoji: "☕",
  description: "Nie wieder kalter Kaffee.",
};

describe("useCartStore (Store Isolation Tests)", () => {
  beforeEach(() => {
    // Zustand Store vor jedem Test zurücksetzen!
    useCartStore.getState().clear();
  });

  it("fügt ein neues Produkt hinzu", () => {
    // TODO: Übung 6 - addItem(mockItem) aufrufen und items Array im getState() auf Länge 1 & Inhalt prüfen
  });

  it("erhöht die Menge eines bereits vorhandenen Artikels", () => {
    // TODO: Übung 6 - addItem zweimal aufrufen und sicherstellen, dass nur quantity=2 erhöht wird
  });

  it("entfernt Artikel zuverlässig per ID", () => {
    // TODO: Übung 6 - addItem aufrufen, dann removeItem(1) ausführen und leeres Array erwarten
  });

  it("leert den gesamten Warenkorb bei clear()", () => {
    // TODO: Übung 6 - mehrere Artikel hinzufügen, clear() aufrufen und items.length === 0 prüfen
  });
});
