import { Icon } from "@iconify/react/dist/iconify.js";

export default function Navbar() {
  return (
    <nav className="absolute bottom-0 left-0 px-8 pt-6 pb-10 w-full bg-purple-600 rounded-tl-2xl rounded-tr-2xl">
      <ul className="flex items-center justify-between text-black !text-opacity-40">
        <li>
          <a className="text-white" href="#">
            <Icon icon="cil:building" width={35} />
          </a>
        </li>
        <li>
          <a href="#">
            <Icon icon="cil:calendar" width={35} />
          </a>
        </li>
        <li>
          <a href="#">
            <Icon icon="material-symbols-light:view-list-outline" width={45} />
          </a>
        </li>
        <li>
          <a href="#">
            <Icon icon="cil:user" width={35} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
