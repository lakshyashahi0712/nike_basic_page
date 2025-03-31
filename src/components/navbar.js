const Navigation = () => {

    return(
        <nav className="flex justify-between mr-10 ml-10 mt-3.5 items-center mt-0 mb-0 ml-auto mr-auto max-w-7xl">
      <div className="logo">
      <img src="/images/brand_logo.png" alt="" />
      </div>
        <ul className="flex gap-10">
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="bg-red-600 h-7 w-15 text-white">Login</button>

    </nav>
    )
}
export default Navigation
