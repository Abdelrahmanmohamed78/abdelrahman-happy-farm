function SectionHeader({ children }: { children: string }) {
  return (
    <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold lg:w-150 leading-[1.2] mb-7 px-5">
      {children}
    </h2>
  );
}

export default SectionHeader;
