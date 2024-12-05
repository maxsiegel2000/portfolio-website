export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="" className="nav-item">Home</a>
        <a href="" className="nav-item">Projects</a>
        <a href="" className="nav-item">About</a>
        <a href="" className="nav-item">Education</a>
        <a href="" className="nav-item bg-white text-slate-900 hover:bg-white/70 hover:text-slate-900">Contact</a>
      </nav>
    </div>
  )  
};
