export default function Navbar() {
  return (


    <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-100">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
          <img src={"/logo192.png"} className="w-12" alt="logo"/>
        </div>
      </div>
    </nav>
  )
}