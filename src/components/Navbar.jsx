import Container from "./Container";
import logo from "../assets/pngs/travelUnboundLogo.png";
export default function Navbar() {
  const navOptions = [
    {
      name: "Flights",
      route: "/careers",
    },
    {
      name: "Tours",
      route: "/courses",
    },
    {
      name: "Videos",
      route: "/corporate",
    },
    {
      name: "Testimonials",
      route: "/store",
    },
    {
      name: "About Us",
      route: "/mocktests",
    },
  ];
  return (
    <div className="bg-slate-400">
      <Container>
        <div className="flex flex-row align-middle justify-evenly">
          <div className="md:basis-2/12">
            <img className="w-auto h-auto md:w-30 md:h-20 md:-ml-[10rem]" src={logo} alt="logo" />
          </div>
          <div className="hidden md:flex flex-row align-middle my-auto justify-center space-x-10">
            {navOptions.map((currElem, index) => (
              <p
                key={index}
                className="text-lg text-gray-800 cursor-pointer hover:text-[#000000] transition-all ease-out"
              >
                {currElem.name}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
