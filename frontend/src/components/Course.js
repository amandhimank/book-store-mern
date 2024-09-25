const Course = () => {
  return (
    <div className="card cursor-pointer">
      <div className="card bg-white w-80 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">
            Books
            <div className="badge badge-secondary text-white hover:text-pink-500 hover:bg-white">Paid</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline font-semibold bg-red-500 text-white cursor-pointer hover:text-red-500 hover:bg-white">$100</div>
            <button className="btn text-white ">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
