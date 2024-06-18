
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav >
      <Link href="/">
        <p className="text-primary font-bold text-3xl capitalize">stay Swift</p>
      </Link>

      <ul className="text-white">
        <li>
          <Link href="#">Recommended Places</Link>
        </li>

        <li>
          <Link href="#">About Us</Link>
        </li>

        <li>
          <Link href="#">Contact us</Link>
        </li>

        <li>
          <Link href="/bookings">Bookings</Link>
        </li>

        <li>
          <Link href="/login" class="login bg-primary">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar