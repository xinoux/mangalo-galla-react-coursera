import './index-style.css'
export default function Header({firstName, lastName}) {
  return (
    <header>
      <div className="logo">
        <h1>
          <img
            src="./img/headerwhite.png"
            alt="Mangata and Gallo"
            id="logo-black-img"
          />
        </h1>
      </div>
    </header>
  );
}
