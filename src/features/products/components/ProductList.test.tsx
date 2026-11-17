import { describe, it, vi, beforeEach } from "vitest";

// Modul-Mocking für productsApi
vi.mock("../api/productsApi", () => ({
  fetchProducts: vi.fn(),
  createProduct: vi.fn(),
  setSimulateApiFailure: vi.fn(),
}));

describe("ProductList (Async & Mocking Tests)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("zeigt einen Ladeindikator während des Datenabrufs", () => {
    // TODO: Übung 5 - Pending Promise mocken: vi.mocked(productsApi.fetchProducts).mockReturnValue(new Promise(() => {}))
    // TODO: Übung 5 - ProductList mit renderWithProviders rendern
    // TODO: Übung 5 - expect(screen.getByRole("progressbar")).toBeInTheDocument()
  });

  it("rendert geladene Produkte nach erfolgreichem API-Aufruf", async () => {
    // TODO: Übung 5 - Produkte mit vi.mocked(productsApi.fetchProducts).mockResolvedValueOnce([...]) mocken
    // TODO: Übung 5 - ProductList rendern
    // TODO: Übung 5 - Mit await screen.findByRole("heading", { name: ... }) das Laden abwarten und prüfen
  });

  it("zeigt ein Alert, wenn der API-Aufruf fehlschlägt", async () => {
    // TODO: Übung 5 - Fehler simulieren: vi.mocked(productsApi.fetchProducts).mockRejectedValueOnce(new Error(...))
    // TODO: Übung 5 - Mit await screen.findByRole("alert") die Fehlermeldung verifizieren
  });
});
