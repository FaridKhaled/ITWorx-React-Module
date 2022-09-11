import AddUser from "./components/AddUser";

function App() {

  const date = new Date();

  const sidebarIcon =
    `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
  `;

  return (
    <div className='App'>

      <header className='text-left p-3 border-b border-b-gray-500'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        &nbsp;
        &nbsp;
        <span className='font-bold text-gray-500'> Good Morning!</span>
        &nbsp;
        <span className='text-gray-500'>{date.toUTCString().slice(0, 25)}</span>
      </header>

      <main className='bg-main-section-color p-5'>

        <div className="flex justify-between">

          <h1 className="text-2xl font-bold"> User Management </h1>

          <AddUser />

        </div>

      </main>

    </div>
  );
}

export default App;
