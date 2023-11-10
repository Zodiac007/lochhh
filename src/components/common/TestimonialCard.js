export default function TestimonialCard({ username, quote, designation }) {
  return (
    <div className="bg-white w-full col-span-2 p-5 rounded-lg">
      <div className="flex items-center">
        <h1 className="text-black text-lg font-semibold">{username}</h1>
        <span className="ml-6 text-sm text-[#96979a]">{designation}</span>
      </div>
      <p className="text-base font-medium text-black leading-6 py-4">{quote}</p>
    </div>
  );
}
