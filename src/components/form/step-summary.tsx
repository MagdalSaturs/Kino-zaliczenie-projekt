"use client";

import { Button } from "@/components/ui/button";
import { moviesMap } from "@/lib/movies";



type StepSummaryProps = {
  data: any;
  onBack: () => void;
  onConfirm: () => void;
};

export function StepSummary({ data, onBack, onConfirm }: StepSummaryProps) {
  const movie = moviesMap.find((m) => m.id === data.movie);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Podsumowanie zakupu</h2>

      <div className="space-y-2 text-slate-300">
        <p><strong>Film:</strong> {movie?.title}</p>
        <p><strong>Godzina:</strong> {data.time}</p>
        <p><strong>Miejsce:</strong> {data.seat}</p>
        <p><strong>Imię:</strong> {data.firstName}</p>
        <p><strong>Nazwisko:</strong> {data.lastName}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Wiek:</strong> {data.age}</p>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          Wróć
        </Button>

        <Button onClick={onConfirm}>
          Potwierdź zakup
        </Button>
      </div>
    </div>
  );
}
