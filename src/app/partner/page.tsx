import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Averiq Lifesciences.",
};

export default function PartnerPage() {
  redirect("/contact");
}
