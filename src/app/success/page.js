import { redirect } from "next/navigation";
import { stripe } from "../../lib/stripe";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  const status = session.status;
  const customerEmail = session.customer_details?.email;

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white font-mono p-6">
        <div className="max-w-md text-center space-y-4 border border-black p-8">
          <h1 className="text-2xl font-black uppercase tracking-widest text-green-600">
            PAYMENT_SUCCESSFUL
          </h1>
          <p className="text-xs text-slate-600 leading-relaxed uppercase">
            We appreciate your business! A confirmation email will be sent to{" "}
            <span className="font-bold text-black">{customerEmail}</span>.
          </p>
          <a
            href="/"
            className="inline-block bg-black text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-colors"
          >
            Return to Store
          </a>
        </div>
      </section>
    );
  }
}
