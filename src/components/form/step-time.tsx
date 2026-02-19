"use client";

type StepTimeProps = {
  onNext: (data: { time: string }) => void;
  onBack: () => void;
};

export function StepTime({ onNext, onBack }: StepTimeProps) {
  const times = ["8:00", "9:00",  "10:00","16:00", "18:00", "20:00"];

  function selectTime(time: string) {
    onNext({ time });
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Wybierz godzinę seansu</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => selectTime(time)}
            className="p-4 rounded-lg border border-slate-700 hover:border-sky-500 hover:bg-slate-800 transition"
          >
            <p className="text-lg font-medium">{time}</p>
          </button>
        ))}
      </div>

      <button
        onClick={onBack}
        className="mt-4 text-slate-400 hover:text-slate-200 text-sm"
      >
        ← Wróć
      </button>
    </div>
  );
}
