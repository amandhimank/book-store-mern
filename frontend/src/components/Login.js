import { Link } from "react-router-dom";
import Register from "./Register";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const dialogRef = useRef(null);

  const closeModal = () => {
    dialogRef.current.close(); // Close the modal when cross button is clicked
  };

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <dialog ref={dialogRef} id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-slate-800 dark:text-zinc-300">
          <h3 className="font-bold text-xl">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="mt-5 flex flex-col gap-4">
            {/* if there is a button in form, it will close the modal */}
            <button  type="button" onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <label className="input input-bordered flex items-center bg-transparent gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" {...register("email", { required: true })} />
            </label>
            {errors.email && <span className="text-red-500">This field is required*</span>}

            <label className="input input-bordered flex items-center bg-transparent gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
                >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                  />
              </svg>
              <input type="password" className="grow" placeholder="Password" {...register("password", { required: true })} />
            </label>
            {errors.password && <span className="text-red-500">This field is required*</span>}
            <input type="submit" value="Login" className="btn btn-active w-full my-5 text-lg text-white"  />
          </form>
          <span className="mr-3 text-lg">New User ?</span>
          <Link to="/register" className="text-lg text-red-500 font-semibold">Register</Link>
        </div>
      </dialog>
    </>
  );
};

export default Login;
