import { cx } from "@/utils";

const Hamburger = ({
  handleToggle,
  toggled,
}: {
  handleToggle: Function;
  toggled: boolean;
}) => {
  return (
    <button
      aria-label="Hamburger Menu Toggle Button"
      className={cx(
        toggled ? "bg-light hover:bg-light/80" : "",
        "z-50 rounded-full p-2 transition-all duration-300 ease-in-out hover:bg-accent/10 md:hidden"
      )}
      onClick={() => handleToggle(toggled)}
    >
      <div className="ease flex h-6 w-6 cursor-pointer flex-col justify-center transition-all duration-300">
        <div className="flex h-4 flex-col justify-between">
          <span
            style={{
              transform: toggled ? "rotate(-45deg) translate(-5px, 5px)" : "",
            }}
            className="ease h-0.5 w-full rounded bg-dark transition-all duration-200 "
          />
          <span
            style={{ opacity: toggled ? 0 : 1 }}
            className="ease h-0.5 w-full rounded bg-dark transition-all duration-200 "
          />
          <span
            style={{
              transform: toggled ? "rotate(45deg) translate(-5px, -5px)" : "",
            }}
            className="ease h-0.5 w-full rounded bg-dark transition-all duration-200 "
          />
        </div>
      </div>
    </button>
  );
};

export default Hamburger;
