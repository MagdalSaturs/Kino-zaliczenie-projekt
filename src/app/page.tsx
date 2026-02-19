"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MovieChart } from "@/components/MovieChart";
import { moviesMap } from "@/lib/movies";



export default function HomePage() {
  const [lastTicket, setLastTicket] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("lastTicket");
    if (data) setLastTicket(JSON.parse(data));
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="container py-10 space-y-8">

        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Kino Magnolia</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Najlepsze kino w okolicy. Nowe premiery, klasyki, emocje i wyjątkowa atmosfera.
            Zarezerwuj miejsce i zanurz się w świecie filmu.
          </p>
          <Link href="/form" className="inline-block mt-4 px-6 py-3 rounded-md bg-sky-600 hover:bg-sky-700 transition" >
            Kup bilet
          </Link>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Aktualnie w repertuarze</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {moviesMap.map((movie) => (
              <div key={movie.id} className="p-6 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 transition" >
                <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{movie.description}</p>

                <Link href={`/form?movie=${movie.id}`} className="text-sky-400 hover:text-sky-300 text-sm">
                  Zarezerwuj bilet →
                </Link>

              </div>
            ))}
          </div>
        </section>

        {lastTicket && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Ostatnio kupiony bilet</h2>

            <div className="p-6 rounded-lg border border-slate-800 bg-slate-900">
              <p><strong>Film:</strong> {lastTicket.movie}</p>
              <p><strong>Godzina:</strong> {lastTicket.time}</p>
              <p><strong>Miejsce:</strong> {lastTicket.seat}</p>
            </div>
          </section>
        )}

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Popularność filmów</h2>
          <MovieChart />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">O nas</h2>
          <p className="text-slate-400 max-w-2xl">
            Kino Magnolia to nowoczesne kino z najlepszym nagłośnieniem i wygodnymi fotelami.
            Dbamy o jakość seansów i komfort widzów. Organizujemy maratony filmowe,
            premiery oraz wydarzenia specjalne. Dołącz do naszej społeczności kinomaniaków!
          </p>
        </section>

        <footer className="text-center text-slate-600 text-sm pt-10">
          © {new Date().getFullYear()} Kino Magnolia — Wszystkie prawa zastrzeżone
        </footer>
      </div>
    </main>
  );
}
