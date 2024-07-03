import { ClockIcon, FireIcon, HeartIcon } from "@heroicons/react/24/outline";
import { favorites } from "../data";

export default function Favorites() {
  return (
    <div>
      <div className="p-10 px-5 bg-white">
        <h2 className="text-2xl font-bold text-center mt-10 mb-5">Favorites</h2>

        <div className="grid grid-cols-2 gap-5 p-2">
          {favorites &&
            favorites.map((favorite, index) => {
              return (
                <div
                  key={favorite.id}
                  className="shadow-xl rounded-2xl p-2 flex flex-col justify-start align-middle my-5 gap-4"
                  style={{
                    backgroundColor: "#F6F6F6",
                    boxShadow:
                      "0 2px 4px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <div className="relative rounded-2xl">
                    <div className="h-[27px] w-[23px] bg-white absolute top-2 right-2 rounded-[7px] flex justify-center items-center leading-tight">
                      <HeartIcon className="h-6 w-6 text-gray-500" />
                    </div>
                    <img
                      src={favorite.image}
                      alt={favorite.name}
                      className="w-full h-[110px] object-cover rounded-2xl"
                    />
                  </div>
                  <p className="text-small font-semibold">{favorite.name}</p>

                  <div className="flex gap-2  mt-auto">
                    <div className="flex   items-center gap-1">
                      <FireIcon className="h-5 w-5 text-gray-500 " />
                      <p className="text-xs text-gray-500">
                        {favorite.caloryLevel} Kcal
                      </p>
                    </div>{" "}
                    <p className="text-2xl text-black-700">·</p>
                    <div className="flex   items-center gap-1">
                      <ClockIcon className="h-5 w-5 text-gray-500 " />
                      <p className="text-xs text-gray-500">
                        {favorite.preparationDuration} min
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
