export default function Accordion({ title, expanded, onClick, children }) {
  return (
    <div className="w-10/12 mx-auto border-2 border-gray-500 rounded-3xl mb-4">
      <div
        className={`bg-transparent py-2 px-4 cursor-pointer ${
          expanded ? "rounded" : ""
        }`}
        onClick={onClick}
      >
        <div className="font-semibold grid grid-cols-5 text-gray-800 text-sm sm:text-xl md:text-2xl items-center">
          <div className="col-span-4">{title}</div>
          <div className="ml-auto md:ml-[8rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      {expanded && (
        <div className="accordion-body bg-tarnsparent py-2 px-4">
          <div className="accordion-content py-3">
            <p className="text-xs sm:text-lg md:text-xl text-gray-800">{children}</p>
          </div>
        </div>
      )}
    </div>
  );
}
