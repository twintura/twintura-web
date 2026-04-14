export default function BarberbookPage() {
  return (
    <main className="bg-primary text-white min-h-screen px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="h1 mb-6">BarberBook</h1>

        <p className="text-base-premium mb-8">
          BarberBook is a modern booking and management platform for barbershops,
          designed to simplify scheduling, manage clients, and grow your business.
        </p>

        <div className="flex gap-4 justify-center">
          <a href="/products/barberbook/terms" className="underline text-sm">
            Terms & Conditions
          </a>

          <a href="/products/barberbook/privacy" className="underline text-sm">
            Privacy Policy
          </a>
        </div>

      </div>
    </main>
  );
}