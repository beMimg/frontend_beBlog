import { Link } from "react-router-dom";
import { useAuth } from "../context/authProvider";

export default function Nav() {
  const { token } = useAuth();

  return (
    <nav className="flex flex-row justify-between">
      <h1>Blog</h1>
      {token ? (
        <div className="flex flex-row gap-6">
          <Link to="/posts">Posts</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/about-us">About</Link>
        </div>
      ) : (
        <div className="flex flex-row gap-6">
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/about-us">About</Link>
        </div>
      )}
    </nav>
  );
}
