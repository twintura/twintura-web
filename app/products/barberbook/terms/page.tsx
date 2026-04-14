export default function TermsPage() {
  return (
    <main className="bg-primary text-white min-h-screen px-6 py-24">
      <div className="max-w-3xl mx-auto space-y-6">

        <h1 className="h2">Terms & Conditions</h1>

        <p className="text-muted-premium">
          By using BarberBook, you agree to these terms. The platform is provided
          as-is without guarantees of uninterrupted availability.
        </p>

        <p className="text-muted-premium">
          Users are responsible for maintaining the confidentiality of their account
          and for all activities that occur under their account.
        </p>

        <p className="text-muted-premium">
          We reserve the right to modify or discontinue the service at any time.
        </p>

        <p className="text-muted-premium">
          Payments and subscriptions are handled securely via third-party providers.
        </p>

      </div>
    </main>
  );
}