const One = () => {
  return (
    <div>
      <div>
        <form className="p-8 sm:p-16 pt-24 items-stretch flex flex-col sm:flex-row gap-8 sm:gap-4 dark:text-white">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-black dark:text-white dark:bg-black bg-white leading-tight focus:outline-none focus:shadow-outline"
            id="song"
            type="text"
            placeholder="Song"
          />
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-black dark:text-white dark:bg-black bg-white leading-tight focus:outline-none focus:shadow-outline"
            id="artist"
            type="text"
            placeholder="Artist"
          />
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-black dark:text-white dark:bg-black bg-white leading-tight focus:outline-none focus:shadow-outline"
            id="year"
            type="text"
            placeholder="Year"
          />
          <button
            className="dark:bg-white bg-black hover:bg-orange-500 dark:hover:bg-orange-500 dark:hover:text-white dark:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Add
          </button>
        </form>
      </div>
      <div>
        <form className="p-8 sm:p-16 pt-24 md:p-0 md:px-16 items-stretch flex flex-col sm:flex-row gap-8 sm:gap-4 dark:text-white">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-black dark:text-white dark:bg-black bg-white leading-tight focus:outline-none focus:shadow-outline"
            id="search"
            type="text"
            placeholder="Search by song name"
          />
          <button
            className="dark:bg-white bg-black hover:bg-orange-500 dark:hover:bg-orange-500 dark:hover:text-white dark:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Search
          </button>
        </form>
      </div>

      <div>
        <div className="p-8 sm:p-16 pt-24 sm:pt-24 lg:pb-40 flex flex-col justify-start dark:text-white">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="text-center">Song</th>
                <th className="text-center">Artist</th>
                <th className="text-center">Year</th>
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="text-center">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td className="text-center">Malcolm Lockyer</td>
                <td className="text-center">1961</td>
                <td className="text-center">
                  <samp
                    className="text-blue-500 hover:text-blue-600 cursor-pointer"
                    onClick={() => {
                      console.log("Edit");
                    }}
                  >
                    Edit
                  </samp>
                </td>
                <td className="text-center">
                  <samp
                    className="text-red-500 hover:text-red-600 cursor-pointer"
                    onClick={() => {
                      console.log("Delete");
                    }}
                  >
                    Delete
                  </samp>
                </td>
              </tr>
              <tr>
                <td className="text-center">Witchy Woman</td>
                <td className="text-center">The Eagles</td>
                <td className="text-center">1972</td>
                <td className="text-center">
                  <samp
                    className="text-blue-500 hover:text-blue-600 cursor-pointer"
                    onClick={() => {
                      console.log("Edit");
                    }}
                  >
                    Edit
                  </samp>
                </td>
                <td className="text-center">
                  <samp
                    className="text-red-500 hover:text-red-600 cursor-pointer"
                    onClick={() => {
                      console.log("Delete");
                    }}
                  >
                    Delete
                  </samp>
                </td>
              </tr>
              <tr>
                <td className="text-center">Shining Star</td>
                <td className="text-center">Earth, Wind, and Fire</td>
                <td className="text-center">1975</td>
                <td className="text-center">
                  <samp
                    className="text-blue-500 hover:text-blue-600 cursor-pointer"
                    onClick={() => {
                      console.log("Edit");
                    }}
                  >
                    Edit
                  </samp>
                </td>
                <td className="text-center">
                  <samp
                    className="text-red-500 hover:text-red-600 cursor-pointer"
                    onClick={() => {
                      console.log("Delete");
                    }}
                  >
                    Delete
                  </samp>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default One;
