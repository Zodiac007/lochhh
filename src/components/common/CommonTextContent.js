export default function CommonTextContent({
  heading,
  subheading,
  textAlign,
  icon,
  classes,
}) {
  return (
    <div className="w-full lg:w-4/5 float-right">
      <img
        src={icon}
        alt="section-icon"
        className={`${classes}-icon ${
          textAlign === "right" ? "ml-auto" : "mr-auto"
        }`}
      />
      <h1
        className={`text-5xl text-white mt-4 leading-tight drop-shadow-lg`}
        style={{ textAlign: textAlign }}
      >
        {heading}
      </h1>
      <p
        className={`text-[#f2f2f2] flex opacity-70 my-4 text-base leading-6`}
        style={{ textAlign: textAlign }}
      >
        {subheading}
      </p>
    </div>
  );
}
