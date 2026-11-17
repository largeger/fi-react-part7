import { describe, it, vi, beforeEach } from "vitest";


vi.mock("../api/productsApi", () => ({
  createProduct: vi.fn().mockResolvedValue({ id: 999 }),
}));

describe("CreateProductForm (Form & Validation Tests)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("lässt den Benutzer Eingaben in die Textfelder tippen", async () => {
    // TODO: Übung 4 - userEvent.setup() initialisieren
    // TODO: Übung 4 - CreateProductForm rendern
    // TODO: Übung 4 - Mit user.type() Text in Label 'Produktname' eingeben und toHaveValue() prüfen
  });

  it("verhindert das Absenden bei unvollständigen Pflichtfeldern (leerer Name)", async () => {
    // TODO: Übung 4 - Leeres Formular abschicken (Klick auf 'Produkt speichern')
    // TODO: Übung 4 - Sicherstellen, dass productsApi.createProduct NICHT aufgerufen wurde
  });

  it("sendet das Formular ab, wenn alle Pflichtfelder ausgefüllt sind", async () => {
    // TODO: Übung 4 - Pflichtfelder (Name, Beschreibung) ausfüllen
    // TODO: Übung 4 - Absenden klicken und mit waitFor toHaveBeenCalledWith prüfen
  });
});
