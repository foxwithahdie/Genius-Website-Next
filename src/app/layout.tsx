import "./globals.css";
import "@fontsource-variable/inter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: null,
  description: null,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen w-full flex-col supports-dvh:min-h-dscreen">
          <header className="px-4 py-2 shadow shadow-neutral-300 drop-shadow">
            <nav className="flex w-full items-center justify-between">
              <a href="/" className="font-futura text-sm font-medium">
                GENIUS WITHIN
              </a>
              <button className="rounded border-[1px] border-neutral-200 p-2">
                {/* TODO: replace this with a better hamburger icon (custom?) */}
                {/* TODO: make the hamburger menu functional */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path
                    fill="currentColor"
                    d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"
                  />
                </svg>
              </button>
            </nav>
          </header>
          <div className="flex grow flex-col bg-neutral-100">{children}</div>
          {/* TODO: do we need a footer? it's not in the figma */}
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
