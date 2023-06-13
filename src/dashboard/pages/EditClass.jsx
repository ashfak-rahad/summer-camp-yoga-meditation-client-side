import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthProvider";

import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useClass from "../../hooks/useClass";
import { useParams } from "react-router-dom";

const EditClass = () => {
  
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const { id } = useParams();
  const { singleClass } = useClass(id);

  const { class_name, avilable_seats, price } = singleClass;
  const updateClass = (data) => {
    const updatedClass = {
      class_name: data.class_name,
      avilable_seats: parseFloat(data.avilable_seats),
      price: parseFloat(data.price),
    };

    axiosSecure.put(`/update-class/${id}`, updatedClass).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Class Updated sucessfull",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <main>
      <hr className="w-full my-3" />
      <form onSubmit={handleSubmit(updateClass)} className="px-[100px] py-5">
        <div className="text-center my-3">
          <h2 className="text-2xl font-bold">Update Class</h2>
        </div>

        <section className="w-full">
          <div className="w-full my-2">
            <span className="block font-bold">Class Name</span>
            <input
              {...register("class_name")}
              defaultValue={class_name}
              type="text"
              className="w-full px-4 py-3 outline-0 mt-3 rounded border"
              autoComplete="off"
              placeholder="class Name"
            />
          </div>
          <div className="w-full my-2">
            <span className="block font-bold">Instructor Name</span>
            <input
              {...register("instructor_name")}
              value={user?.displayName && user?.displayName}
              type="text"
              className="w-full px-4 py-3 outline-0 mt-3 rounded border"
              autoComplete="off"
              disabled
            />
          </div>
          <div className="w-full my-2">
            <span className="block font-bold">Instructor Email</span>
            <input
              {...register("instructor_email")}
              type="text"
              value={user?.email && user?.email}
              className="w-full px-4 py-3 outline-0 mt-3 rounded border"
              autoComplete="off"
              disabled
            />
          </div>

          <div className="w-full my-2">
            <span className="block font-bold">Avilable Seats</span>
            <input
              {...register("avilable_seats")}
              type="number"
              defaultValue={avilable_seats}
              className="w-full px-4 py-3 outline-0 mt-3 rounded border"
              autoComplete="off"
            />
          </div>
          <div className="w-full my-2">
            <span className="block font-bold">Price</span>
            <input
              {...register("price")}
              type="number"
              defaultValue={price}
              className="w-full px-4 py-3 outline-0 mt-3 rounded border"
              autoComplete="off"
            />
          </div>
        </section>

        <div>
          <button
            className="px-4 bg-indigo-600 block mt-10 py-3 rounded text-white w-full"
            type="submit"
          >
            Update Class
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditClass;
