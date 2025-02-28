import Link from "next/link";

const Header = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/upload">Upload</Link></li>
        <li><Link href="/analysis">Analysis</Link></li>
        <li><Link href="/map">Map</Link></li>
        <li><Link href="/results">Results</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/api-docs">API Docs</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
