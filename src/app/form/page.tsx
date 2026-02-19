"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import { Stepper } from "@/components/form/stepper";
import { StepMovie } from "@/components/form/step-movie";
import { StepTime } from "@/components/form/step-time";
import { StepPersonal } from "@/components/form/step-personal";
import { StepSummary } from "@/components/form/step-summary";
import { StepSeat } from "@/components/form/step-seat";
import { useSearchParams } from "next/navigation";

export default function FormPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const searchParams = useSearchParams();
  const movieFromQuery = searchParams.get("movie");

  useEffect(() => {
    if (movieFromQuery) {
      setFormData((prev) => ({ ...prev, movie: movieFromQuery }));
      setStep(1);
    }
  }, [movieFromQuery]);

  function handleNext(data: any) {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(step + 1);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="container py-10 space-y-6">
        <h1 className="text-2xl font-bold">Kup bilet do kina</h1>

        <Stepper step={step} />

        <div key={step} className="rounded-lg border border-slate-800 p-6 step-enter step-enter-active">
          {step === 0 && <StepMovie onNext={handleNext} />}
          {step === 1 && <StepTime onNext={handleNext} onBack={() => setStep(step - 1)} />}
          {step === 2 && <StepSeat onNext={handleNext} onBack={() => setStep(step - 1)} />}
          {step === 3 && <StepPersonal onNext={handleNext} onBack={() => setStep(step - 1)} />}
          {step === 4 && (
            <StepSummary
              data={formData}
              onBack={() => setStep(step - 1)}
              onConfirm={() => {
                window.location.href = "/thank-you";
              }}
            />
          )}
        </div>
      </div>
    </main>
  );
}
