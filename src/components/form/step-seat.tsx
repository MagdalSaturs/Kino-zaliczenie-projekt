"use client";

type StepSeatProps = {
  onNext: (data: { seat: string }) => void;
  onBack: () => void;
};

export function StepSeat({ onNext, onBack }: StepSeatProps) {
  const rows = ["1", "2", "3", "4"];
  const seats = ["A", "B", "C", "D", "E"];

  function selectSeat(seat: string) {
    onNext({ seat });
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Wybierz miejsce</h2>

      <div className="grid gap-4">
        {rows.map((row) => (
          <div key={row} className="flex gap-3">
            {seats.map((col) => {
              const seatId = `${row}${col}`;
              return (
                <button
                  key={seatId}
                  onClick={() => selectSeat(seatId)}
                  className="w-12 h-12 flex items-center justify-center rounded-md border border-slate-700 hover:border-sky-500 hover:bg-slate-800 transition"
                >
                  {seatId}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <button
        onClick={onBack}
        className="text-slate-400 hover:text-slate-200 text-sm"
      >
        ← Wróć
      </button>
    </div>
  );
}
