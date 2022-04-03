import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Note_API } from "../../api/note";
import "./one.css";

const One = (props) => {
  Note_API.setBasePath(props.data.name);

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
    ...props.data.props,
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
        ...props.data.props,
        isUpdate: false,
      });
      queryClient.invalidateQueries(props.data.name);
    },
  });

  const handleUpdate = useMutation(Note_API.update, {
    onSuccess: () => {
      queryClient.invalidateQueries(props.data.name);
    },
  });

  const { isSuccess, data } = useQuery(props.data.name, Note_API.getNotes);

  return (
    <div>
      <div className="p-8 sm:p-16 flex flex-col justify-start dark:text-white">
        <div className="w-7/12">
          <h1 className="text-7xl tracking-tight font-light leading-[4.5rem] uppercase">
            {props.data.title}
          </h1>
        </div>
      </div>
      <div>
        <form className="p-8 sm:p-16 pt-24 items-stretch flex flex-col sm:flex-row gap-8 sm:gap-4 dark:text-white">
          {props.data.fields.map((field, index) => (
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-black dark:text-white dark:bg-black bg-white leading-tight focus:outline-none focus:shadow-outline"
              name={field.name}
              type={field.type}
              placeholder={field.title}
              onChange={updateForm}
              value={form[field.name]}
              key={index}
            />
          ))}
          <button
            className="dark:bg-white bg-black hover:bg-orange-500 dark:hover:bg-orange-500 dark:hover:text-white dark:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => {
              const f = props.data.fields.map((field) => {
                return {
                  [field.name]: form[field.name],
                };
              });
              if (form.isUpdate) {
                handleUpdate.mutate({
                  id: form.id,
                  ...f.reduce((acc, cur) => ({ ...acc, ...cur }), {}),
                });
                setForm({
                  id: "",
                  ...props.data.props,
                  isUpdate: false,
                });
              } else {
                handleCreate.mutate({
                  ...f.reduce((acc, cur) => ({ ...acc, ...cur }), {}),
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
                {props.data.fields.map((field, index) => (
                  <th className="text-center" key={index}>
                    {field.title}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {isSuccess &&
                data.map((note, index) => (
                  <Row
                    key={index}
                    data={note}
                    name={props.data.name}
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
      queryClient.invalidateQueries(props.name);
    },
  });

  return (
    <tr key={props.data.id}>
      {Object.keys(props.data)
        .filter((key) => key !== "id")
        .map((key, index) => (
          <td className="text-center" key={index}>
            {props.data[key]}
          </td>
        ))}
      <td className="text-center">
        <samp
          className="text-blue-500 hover:text-blue-600 cursor-pointer"
          onClick={() => {
            const f = Object.keys(props.data).map((key) => {
              return {
                [key]: props.data[key],
              };
            });
            props.state({
              ...f.reduce((acc, cur) => ({ ...acc, ...cur }), {}),
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
            const alert = window.confirm(
              "Are you sure you want to delete this?"
            );
            if (alert) {
              handleDelete.mutate(props.data.id);
            }
          }}
        >
          Delete
        </samp>
      </td>
    </tr>
  );
};
