export default function OrganizationLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mb-4 flex w-10/12 flex-col items-center pb-4 pt-8">
      {children}
    </section>
  );
}
