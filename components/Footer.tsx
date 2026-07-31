import { perfil } from "@/data/profile";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col items-center gap-2 text-center text-sm text-ink-muted sm:flex-row sm:justify-between sm:text-left">
        <p>{perfil.nombre}</p>
        <p>© {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}
