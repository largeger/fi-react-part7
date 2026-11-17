import { describe, it, expect, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard";
import { renderWithProviders } from "../../../test/test-utils";
import type { Product } from "../../../shared/types/product";

const dummyProduct: Product = {
  id: 42,
  name: "Clean Code Kaffeebecher",
  description: "Hält Kaffee heiß und Code sauber.",
  price: 19.95,
  category: "Kaffee",
  emoji: "☕",
};

describe("ProductCard (Component Tests)", () => {
  beforeEach(() => {
    // TODO: Übung 3 - Zustand Store vor jedem Test zurücksetzen: useCartStore.getState().clear()
  });

  it("rendert Produktdetails korrekt (Name, Kategorie, Preis, Emoji)", () => {
    renderWithProviders(<ProductCard product={dummyProduct} />);

    // 1. Name als Überschrift prüfen (getByRole)
    expect(
      screen.getByRole("heading", { level: 3, name: /clean code kaffeebecher/i })
    ).toBeInTheDocument();

    // TODO: Übung 2 - Kategorie Chip und Beschreibung prüfen

    // TODO: Übung 2 - Formatierten Preis ("19.95 €") und Emoji prüfen

    // TODO: Übung 2 - Buttons "Details" und "+ Warenkorb" im Dokument verifizieren
  });

  it("öffnet den Detail-Dialog beim Klick auf den Details-Button", async () => {
    // TODO: Übung 3 - userEvent.setup() initialisieren
    // TODO: Übung 3 - Prüfen, dass Dialog anfangs nicht im DOM ist (queryByRole)
    // TODO: Übung 3 - Klick auf "Details" ausführen und Dialog-Sichtbarkeit prüfen
    // TODO: Übung 3 - Klick auf "Fertig" ausführen und mit waitFor prüfen, dass Dialog verschwindet
  });

  it("fügt das Produkt beim Klick auf 'In den Warenkorb' zum Store hinzu", async () => {
    // TODO: Übung 3 - Klick auf "+ Warenkorb" ausführen
    // TODO: Übung 3 - Items in useCartStore.getState().items verifizieren
  });
});
