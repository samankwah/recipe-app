export default function NewRecipe() {
  return (
    <div>
      <div className="p-10 px-5 bg-white">
        <h2 className="text-2xl font-bold text-center mt-10 mb-5">
          New Recipe
        </h2>

        <form className="max-w-lg mx-auto p-4">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-gray-500 font-bold mb-1 ml-4"
            >
              NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              //   value={formData.name}
              //   onChange={handleChange}
              className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-gray-500 font-bold mb-1 ml-4"
            >
              CATEGORY
            </label>
            <input
              type="text"
              id="name"
              name="name"
              //   value={formData.name}
              //   onChange={handleChange}
              className=" h-14 bg-[#f1f1f1] w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-gray-500 font-bold mb-1 ml-4"
            >
              INGREDIENTS
            </label>
            <input
              type="text"
              id="name"
              name="name"
              //   value={formData.name}
              //   onChange={handleChange}
              className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-gray-500 font-bold mb-1 ml-4"
            >
              DESCRIPTION
            </label>
            <input
              type="text"
              id="name"
              name="name"
              //   value={formData.name}
              //   onChange={handleChange}
              className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
