import Container from "./Container";
import { CostData } from "../resources/costs";
import { Slide } from "react-awesome-reveal";
export default function CostCards() {
  return (
    <Slide>
      <div className="mt-[5rem]">
        <p className="text-3xl text-center font-semibold text-gray-800 mb-[5rem]">Costs</p>
        <Container>
          <div className="flex flex-row gap-x-5 text-gray-800 mx-auto align-middle justify-center justify-items-center">
            {CostData.map((curreEle, index) => {
              return (
                <div
                  key={index}
                  className="bg-slate-400 w-[20rem] rounded-2xl p-10  hover:bg-slate-600"
                >
                  <p className="text-2xl font-bold mb-5">{curreEle.type}</p>
                  <p className="text-l font-normal mb-5">{curreEle.price}</p>
                  <p className="text-md font-bold mb-5">{curreEle.discount}</p>
                  <p className="text-xl font-extrabold">
                    {curreEle.discountPrice}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </Slide>
  );
}
