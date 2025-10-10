const FORMSPREE_ENDPOINT = "https://formspree.io/f/mblzzgey";

export async function submitWaitlistEmail(email: string) {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
  if (!endpoint) {
    throw new Error("Form endpoint not configured. Set VITE_FORM_ENDPOINT.");
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    let message = "Failed to submit";
    try {
      const data = await res.json();
      message = data?.error || data?.message || message;
    } catch (_) {}
    throw new Error(message);
  }

  return true;
}
