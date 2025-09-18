import "./InfoBox.css"

function InfoBox() {
  return (
    <>
      <div className="info">
        <h1>Martin Sütt</h1>
        <h2>Hobid:</h2>
        <ul>
          <li>Arvutimängud</li>
          <li>Korvpall</li>
          <li>Jalutamine</li>
        </ul>
        <form className="field">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="email"
            />
          </div>
          <div>
            <label htmlFor="txt">Sõnum:</label>
            <input
              type="text"
              id="text"
              placeholder="sõnum"
            />
          </div>
          <button>Saada</button>
        </form>
      </div>
    </>
  )
}

export default InfoBox
