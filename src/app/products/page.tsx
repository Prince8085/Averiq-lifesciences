import { redirect } from "next/navigation";

/**
 * The full product catalog listing has been retired — the complete range is
 * now presented as a horizontal "Star Formulations" showcase on the homepage.
 * Any legacy /products links are forwarded there.
 */
export default function ProductsPage() {
  redirect("/#products");
}
