const Constrained_Width = ({ children, className = "", as, mobile = true, tablet = true, desktop = true }) => { 
  const Element = as ?? "div";

  const mobileStyle = mobile ? "max-w-screen-xl px-6" : "";
  const tabletStyle = tablet ? "md:max-w-screen-xl md:px-6" : "";
  const desktopStyle = desktop ? "md:max-w-screen-xl xl:px-12 2xl:px-0" : "";

  const combinedClasses = new Set([
    ...mobileStyle.split(" "),
    ...tabletStyle.split(" "),
    ...desktopStyle.split(" "),
    "max-w-screen-xl",
    "w-full",
    "mx-auto",
    ...className?.split(" "),
  ]);

  const uniqueClassNames = Array.from(combinedClasses).join(" ");

  return (
    <Element {...{ className: uniqueClassNames.trim() }}>
      {children}
    </Element>
  );
}

export default Constrained_Width;