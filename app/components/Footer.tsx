interface FooterProps {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export default function Footer({
  github = "https://github.com/morris-harrison",
  email = "mailto:morriskharrison@outlook.com",
}: FooterProps) {
  return (
    <footer className="bg-black border-t border-white mt-8">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-center">
        <p className="text-white text-sm">
          2026 Morris Harrison
        </p>
      </div>
    </footer>
  );
}
