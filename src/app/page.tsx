export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <Car name={"bugatti"}/>
      <Car name={"vegan"}/>
    </main>
  )
}


function Car({ name }) {
    return (
      <div className="flex flex-col shadow-md hover:shadow-2xl hover:shadow-indigo-500/40 items-center rounded-lg w-1/3 h-1/2 border border-black justify-center">
        <p>{name}</p>
        <p>type: car</p>
      </div>
    )
}
