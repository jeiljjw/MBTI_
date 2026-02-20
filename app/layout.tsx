// This is the root layout that wraps all pages.
// The middleware handles redirecting to the default locale.
// This layout is minimal and just provides the basic HTML structure.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
