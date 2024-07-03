import { categories } from "../data";

export default function Categories() {
  return (
    <div className="p-10 bg-white">
      <h2 className="text-2xl font-bold text-center">Categories</h2>

      {categories.map((category) => {
        return (
          <div
            key={category.id}
            className="shadow-xl rounded-2xl p-5 py-4 flex justify-between align-middle my-5"
            style={{
              backgroundColor: "#F6F6F6",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.4)",
            }}
          >
            <h4 className="font-semibold text-2xl h">{category.name}</h4>

            <img src={category.image} alt={category.name} />
          </div>
        );
      })}
    </div>
  );
}
