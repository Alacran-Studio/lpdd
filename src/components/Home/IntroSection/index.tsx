import LinkButton from "@/components/common/LinkButton";

export default function IntroSection() {
  return (
    <section
      className={`flex w-full flex-col items-center pt-8 text-center md:pt-10`}
    >
      <p className="mx-6 text-xs font-medium text-secondary-foreground sm:text-2xl">
        We strive to provide a comprehensive and updated list of organizations
        that are dedicated to
      </p>
      <h2 className="mx-4 mb-4 mt-2 text-lg font-semibold sm:mx-auto sm:mb-10 sm:mt-4 sm:max-w-3xl sm:text-4xl">
        Fostering The Growth And Development Of Latiné Professionals
      </h2>
      <LinkButton href="/about" title="Learn More"></LinkButton>
    </section>
  );
}