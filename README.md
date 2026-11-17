# Pixel & Bohne – Testing-Strategien mit Vitest & React Testing Library (Demo 07)

Demo-Projekt für **Frontend-Testing** in React mit **Vitest**, **React Testing Library** und **Mocking**.

Basiert auf der Feature-Architektur aus Teil 06 und demonstriert saubere Test-Patterns auf allen Ebenen der Frontend-Test-Pyramide:
1. **Unit-Tests** für reine JavaScript/TypeScript-Geschäftslogik (`cartCalculations.test.ts`)
2. **Component-Tests** für DOM-Rendering & Interaktionen (`ProductCard.test.tsx`)
3. **Async & Mocking-Tests** für API-Aufrufe, Ladezustände und Fehlerbehandlung (`ProductList.test.tsx`)

---

## Schnellstart

```bash
cd demo-projekte/07
npm install
npm test            # Startet Vitest im Watch-Modus
# oder
npm run test:run    # Führt alle Tests einmalig im CI-Modus aus
# oder
npm run dev         # Startet die Anwendung im Browser
```

---

## Test-Struktur

```text
src/
├── features/
│   ├── cart/
│   │   └── store/
│   │       ├── cartStore.ts
│   │       └── cartCalculations.test.ts    # 🟢 Unit-Test: calculateCart (reine Logik)
│   └── products/
│       └── components/
│           ├── ProductCard.tsx
│           ├── ProductCard.test.tsx        # 🟡 Component-Test: RTL + userEvent + Store
│           ├── ProductList.tsx
│           └── ProductList.test.tsx        # 🔴 Mocking & Async: vi.mock + findByRole
└── test/
    ├── setup.ts                            # Globales jest-dom Setup & cleanup
    └── test-utils.tsx                      # Custom renderWithProviders (MUI + TanStack Query)
```

---

## Wichtige Befehle

| Befehl | Beschreibung |
| :--- | :--- |
| `npm run test` | Startet Vitest im interaktiven Watcher-Modus |
| `npm run test:run` | Einmaliger Testdurchlauf (Exit Code 0 bei Erfolg) |
| `npm run dev` | Startet Vite Dev-Server für manuelle UI-Checks |
