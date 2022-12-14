import { HiOutlineLogout } from "react-icons/hi"
import { useDispatch } from "react-redux"
import { Logo, SidebarNavLink } from "../components"
import { clearStore } from "../features/user/userSlice"

const Sidebar = () => {
  const dispatch = useDispatch()
  return (
    <>
      <aside className="w-1/3 xl:w-1/4 lg:flex flex-col h-screen sticky top-0 hidden ">
        <div className=" flex flex-col justify-between px-12 h-full bg-white ">
          <div>
            {/* Logo title */}
            <div className=" flex justify-center items-center space-x-2 mt-7 ">
              <Logo className="h-8" />
              <h3 className="text-3xl font-medium">Indago</h3>
            </div>
            {/* Menu items */}
            <div className=" mt-28 capitalize flex flex-col justify-center items-center space-y-10 ">
              <SidebarNavLink />
            </div>
          </div>

          <div className="  mb-10 w-[185px] hover:bg-red-200/70 bg-red-100/60 rounded-xl ">
            <button
              className="flex justify-center items-center w-full px-4 py-2  space-x-2 capitalize text-gray500 text-red-400/60  "
              onClick={() => dispatch(clearStore("Logout Successful..."))}
            >
              <span>
                {" "}
                <HiOutlineLogout className=" w-6 h-6 " />
              </span>
              <span> logout </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
