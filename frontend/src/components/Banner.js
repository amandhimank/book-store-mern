const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row ">
      <div className="banner-left order-2 md:order-1 md:w-1/2 w-full flex flex-col md:gap-8 gap-4">
        <h1 className="text-black text-[4.3vh] tracking-tighter leading-none md:text-5xl font-medium mt-7 md:mt-32">
          Unlock the Magic of Reading <br /> -{" "}
          <span className="text-green-500">One Book at a Time.</span>
        </h1>
        <p className="font-medium text-zinc-500 text-sm md:text-base">
          We believe in the power of stories to inspire and captivate. Whether
          you’re seeking timeless classics or the latest bestsellers, our
          carefully curated collection has something for every reader. Explore
          new worlds, gain fresh insights, and let your reading journey begin
          here!
        </p>
        <label className="input input-bordered input-success flex items-center gap-2 bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill=""
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow text-black font-semibold" placeholder="Email" />
        </label>
        <button className="btn w-28 text-white text-lg font-semibold">Login</button>
      </div>
      <div className="banner-right order-1 md:w-1/2 w-full p-2 md:p-20">
        <img className="md:h-full md:w-[28rem] h-full w-full" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149350216.jpg?t=st=1727204863~exp=1727208463~hmac=75763cb20f780490f6704668c41127c8f3ca3550a7a4a6b3a106a8fc0d0edb38&w=740" />
      </div>
    </div>
  );
};

export default Banner;
