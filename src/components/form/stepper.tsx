type StepperProps = {
  step: number;
};

export function Stepper({ step }: StepperProps) {
  const steps = ["Wybór filmu", "Godzina seansu", "Wybór miejsca", "Dane osobowe", "Podsumowanie"];

  return (
    <div className="flex items-center gap-6">
      {steps.map((label, index) => {
        const active = index === step;

        return (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                ${active ? "bg-sky-500 text-white" : "bg-slate-800 text-slate-400"}
              `}
            >
              {index + 1}
            </div>

            <span className={active ? "text-sky-400" : "text-slate-400"}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
