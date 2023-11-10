export default function CarousalCard({ icon, content, input, price, days }) {
  return (
    <div className="keen-slider__slide number-slide1 px-6 py-6 rounded-xl shadow">
      <div className="flex justify-between">
        <img src={icon} alt="" />
        <p className="text-black text-xs">Save</p>
      </div>
      <p className="text-black text-xl lg:text-2xl py-6">{content}</p>

      {/* input like box for carousal for UI perspective only not functionality */}
      {input && (
        <div className="flex items-end">
          <div className="absolute bottom-7 border p-2">
            <p className="text-black text-sm font-normal">hello@gmail.com</p>
          </div>
        </div>
      )}

      {/* Dropdown chips for UI perspective only not functionality */}
      {price.length && (
        <div className="flex items-end">
          <div className="absolute bottom-7">
            <span className="bg-[#e5e5e6] px-2 py-1 text-xs rounded text-[#313233]">
              ${price} &#9663;
            </span>
          </div>
        </div>
      )}

      {days.length && (
        <div className="flex items-end">
          <div className="absolute bottom-7">
            <span className="bg-[#e5e5e6] px-2 py-1 text-xs rounded text-[#313233]">
              {days} &#9663;
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
