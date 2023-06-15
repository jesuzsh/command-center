export default function Vegan() {
    return (
      <div class="h-screen">
        <Top/>
        <AddConsumable/>
      </div>
    )
}

function Top() {
  return (
    <div class="flex flex-col justify-center pl-3 h-16 border-b-2 border-slate-900">
      <h1>Vegan</h1>
    </div>
  )
}

function AddConsumable() {
    return (
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Add Consumable
        </button>
    )
}
