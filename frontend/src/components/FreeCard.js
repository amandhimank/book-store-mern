const FreeCard = () => {
  return (
    <div className="mb-6 p-4">
        <div className="card bg-white dark:bg-slate-800 w-92 shadow-xl mx-3 hover:scale-[1.05] transition">
      <figure>
        <img className="w-full h-full"
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?size=338&ext=jpg&ga=GA1.1.1819120589.1727164800&semt=ais_hybrid"
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-black dark:text-zinc-300">
        <h2 className="card-title">
          Book!
          <div className="badge badge-secondary">Free</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Reading</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FreeCard;
