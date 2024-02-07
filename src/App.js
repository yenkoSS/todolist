
function App() {
  return (
    <div className='container'>
      <header className='header'>
        <h1 className='heading-1'>
          ToDo <span>List</span>
        </h1>
      </header>
      <main>
        <div className="box">
          <h2 className="heading-2">Add item</h2>
          <form>
            <input type='text' placeholder="Enter item name..."></input>
            <input type='text' placeholder="Enter qty..."></input>
            <button type="submit" >Add</button>
          </form>
        </div>
        <div className="box overflow">
          <div className="item-box done">
            <input type="checkbox"></input>
            <p className="text-item">1<span>x</span>Car Wash</p>
            <button>X</button>
          </div>
        </div>
      </main>
      <footer>
        <small>
          Copyright
        </small>
      </footer>
    </div>
  )
}

export default App;
