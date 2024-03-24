function Sidebar() {
  return (
    <>
    <div className="flex flex-col gap-6 bg-[#383838] p-20">
        <p className="text-white">Filters</p>
        <p className="text-white">MEAL PLANS</p>
        <div className="flex flex-col gap-4 mt-5">
            <div className="flex gap-2">
                <input type="checkbox" name="breakfast" id="breakfast" />
                <label htmlFor="breakfast" className="text-white">BREAKFAST</label>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" name="lunch" id="lunch" />
                <label htmlFor="lunch" className="text-white">LUNCH</label>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" name="dinner" id="dinner" />
                <label htmlFor="dinner" className="text-white">DINNER</label>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" name="snacks" id="snacks" />
                <label htmlFor="snacks" className="text-white">SNACKS</label>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" name="smoothie" id="smoothie" />
                <label htmlFor="smoothie" className="text-white">SMOOTHIE</label>
            </div>
        </div>
        <p className="text-white mt-8">DIETS</p>
        <div className="flex flex-col gap-4 mt-5">
            <div className="flex gap-2">
                <input type="checkbox" name="nonVeg" id="nonveg" />
                <label htmlFor="nonveg" className="text-white">NON VEG</label>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" name="veg" id="veg" />
                <label htmlFor="veg" className="text-white">VEG</label>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" name="vegan" id="vegan" />
                <label htmlFor="vegan" className="text-white">VEGAN</label>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar