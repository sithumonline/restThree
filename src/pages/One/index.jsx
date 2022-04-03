import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Note_API } from "../../api/note";
import "./one.css";

const One = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    document.getElementById("mod").addEventListener("click", () => {
      const input = document.getElementsByTagName("input");
      Array.from(input).forEach((element) => {
        if (localStorage.theme === "dark") {
          element.classList.remove("dark-calender");
        } else {
          element.classList.add("dark-calender");
        }
      });
    });
  }, []);

  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    date: "",
    time: "",
    isUpdate: false,
  });

  const updateForm = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = useMutation(Note_API.create, {
    onSuccess: () => {
      setForm({
        id: "",
        name: "",
        description: "",
        date: "",
        time: "",
        isUpdate: false,
      });
      queryClient.invalidateQueries("todos");
    },
  });

  const handleUpdate = useMutation(Note_API.update, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const { isSuccess, data } = useQuery(
    "todos",
    Note_API.getNotes
  );

  return (
    <div>
      <div className="p-8 sm:p-16 flex flex-col justify-start dark:text-white">
        <div className="w-7/12">
          <h1 className="text-7xl tracking-tight font-light leading-[4.5rem] uppercase">
            One
          </h1>
        </div>
      </div>
      <div>
        <form className="p-8 sm:p-16 pt-24 items-stretch flex flex-col sm:flex-row gap-8 sm:gap-4 dark:text-white">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-black dark:text-white dark:bg-black bg-white leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
            placeholder="Name"
            onChange={updateForm}
            value={form.name}
          />
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-black dark:text-white dark:bg-black bg-white leading-tight focus:outline-none focus:shadow-outline"
            name="description"
            type="text"
            placeholder="Artist"
            onChange={updateForm}
            value={form.description}
          />
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-black dark:text-white dark:bg-black bg-white leading-tight focus:outline-none focus:shadow-outline"
            name="date"
            type="date"
            id="date"
            placeholder="Date"
            onChange={updateForm}
            value={form.date}
          />
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-black dark:text-white dark:bg-black bg-white leading-tight focus:outline-none focus:shadow-outline"
            name="time"
            type="time"
            placeholder="Time"
            onChange={updateForm}
            value={form.time}
          />
          <button
            className="dark:bg-white bg-black hover:bg-orange-500 dark:hover:bg-orange-500 dark:hover:text-white dark:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => {
              if (form.isUpdate) {
                handleUpdate.mutate({
                  id: form.id,
                  name: form.name,
                  description: form.description,
                  date: form.date,
                  time: form.time,
                });
                setForm({
                  id: "",
                  name: "",
                  description: "",
                  date: "",
                  time: "",
                  isUpdate: false,
                });
              } else {
                handleCreate.mutate({
                  name: form.name,
                  description: form.description,
                  date: form.date,
                  time: form.time,
                });
              }
            }}
          >
            {form.isUpdate ? "Update" : "Create"}
          </button>
        </form>
      </div>
      <div>
        <form className="p-8 sm:p-16 pt-24 md:p-0 md:px-16 items-stretch flex flex-col sm:flex-row gap-8 sm:gap-4 dark:text-white">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-black dark:text-white dark:bg-black bg-white leading-tight focus:outline-none focus:shadow-outline"
            name="search"
            type="text"
            placeholder="Search by name"
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
                <th className="text-center">Date</th>
                <th className="text-center">Time</th>
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>

            <tbody>
              {isSuccess &&
                data.map((note) => (
                  <Row
                    id={note.id}
                    key={note.id}
                    name={note.name}
                    description={note.description}
                    year={note.year}
                    state={setForm}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default One;

const Row = (props) => {
  const queryClient = useQueryClient();

  const handleDelete = useMutation(Note_API.remove, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  return (
    <tr key={props.id}>
      <td className="text-center">{props.name}</td>
      <td className="text-center">{props.description}</td>
      <td className="text-center">{props.date}</td>
      <td className="text-center">{props.time}</td>
      <td className="text-center">
        <samp
          className="text-blue-500 hover:text-blue-600 cursor-pointer"
          onClick={() => {
            props.state({
              id: props.id,
              name: props.name,
              description: props.description,
              date: props.date,
              time: props.time,
              isUpdate: true,
            });
          }}
        >
          Edit
        </samp>
      </td>
      <td className="text-center">
        <samp
          className="text-red-500 hover:text-red-600 cursor-pointer"
          onClick={() => {
            handleDelete.mutate(props.id);
          }}
        >
          Delete
        </samp>
      </td>
    </tr>
  );
};
