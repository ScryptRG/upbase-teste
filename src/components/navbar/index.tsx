import { Icon } from "@iconify/react/dist/iconify.js";

export default function Navbar() {
  return (
    <nav className="absolute bottom-0 left-0 w-full rounded-tl-2xl rounded-tr-2xl bg-purple-600 px-8 pb-10 pt-6">
      <ul className="flex items-center justify-between text-black !text-opacity-50">
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
