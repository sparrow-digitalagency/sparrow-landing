import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <Container className="py-section text-center">
      <p className="text-7xl font-bold text-accent">404</p>
      <h1 className="mt-4 text-2xl">{t("title")}</h1>
      <Link href="/" className="mt-8 inline-block underline">
        {t("backHome")}
      </Link>
    </Container>
  );
}
