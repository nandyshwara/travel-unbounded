import Container from "../components/Container";
import { tourNameWithData } from "../resources/tourPage";
export default function TourPage() {
  return (
    <div>
      <Container>
        <div className="bg-slate-400 flex flex-row px-5 py-5 mt-10 rounded-2xl">
          <div className="w-1/2">
            <img
              className="rounded-2xl"
              src={require(`../assets/pngs/${tourNameWithData["bannerImage"]}.png`)}
              alt=""
            />
          </div>
          <div className="text-3xl text-gray-800 font-semibold mx-auto my-auto text-center">
            <p className="">Big Cats Week at Maasai Mara</p>
            <p className="text-xl">(Diwali 2023 special)</p>
            <hr className=" mx-auto mt-5 w-10/12 border-1 border-blue-400"/>
            <div className="flex justify-evenly mt-10 gap-10 text-xl">
                <p>Price : </p>
                <p>$2000</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
