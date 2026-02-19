"use client";

import { moviesMap } from "@/lib/movies";


type StepMovieProps = {
  onNext: (data: { movie: string }) => void;
};

export function StepMovie({ onNext }: StepMovieProps) {

  function selectMovie(movieId: string) {
    onNext({ movie: movieId });
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Wybierz film</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {moviesMap.map((movie) => (
          <button
            key={movie.id}
            onClick={() => selectMovie(movie.id)}
            className="p-4 rounded-lg border border-slate-700 hover:border-sky-500 hover:bg-slate-800 transition"
          >
            <p className="text-lg font-medium">{movie.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
