export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Dziękujemy za zakup!</h1>
        <p className="text-slate-300">
          Twój bilet został pomyślnie zarezerwowany.
        </p>

        <a
          href="/"
          className="inline-block mt-4 px-6 py-2 rounded-md bg-sky-600 hover:bg-sky-700 transition"
        >
          Wróć na stronę główną
        </a>
      </div>
    </main>
  );
}
