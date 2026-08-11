export const metadata = {
  title: "Sahara Grill Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ height: "100vh", maxHeight: "100dvh", overflow: "hidden" }}>
      {children}
    </div>
  );
}
