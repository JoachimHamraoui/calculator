function Button({ label, type, onClick, span }) {
    const spanClass = span === 2 ? 'col-span-2' : '';

  
    return (
      <button
        className={`btn ${type} ${spanClass} bg-slate-400 text-white hover:bg-slate-500 font-bold rounded focus:outline-none focus:shadow-outline`}
        onClick={() => onClick(label, type)}
      >
        {label}
      </button>
    );
  }
  
  export default Button;
  