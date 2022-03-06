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
        <form className="p-8 sm:p-16 pt-24 items-stretch flex flex-col sm:flex-row gap-8 sm:gap-4 dark:text-white">
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
        <div className="p-8 sm:p-16 pt-24 sm:pt-24 min-h-screen flex flex-col justify-start dark:text-white">
          <table className="table-auto">
            <thead>
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default One;
