import { HiCheck } from 'react-icons/hi'

const WeightLossProgram = () => {
  return (
    <div>
      <div className='grid grid-cols-2 gap-3'>
        <img className='w-full' src="https://img.freepik.com/premium-photo/happy-young-woman-joggling-oranges-kitchen-background_116317-3349.jpg?w=996" alt="" />

        <div className="grid grid-cols-1 gap-1">
          <div>
            <p className='font-semibold text-lg'>Planning and Prep</p>
            <p className='mt-2 mb-3'>Our nutrition team love the benefit of exercise and healthy food</p>
            <div className="flex items-center gap-2 bg-white p-2">
              <button className="flex items-center justify-center rounded-full text-[#6636EE]  border border-[#6636EE] p-1">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm">
                Nutrition assessment
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white p-2">
              <button className="flex items-center justify-center rounded-full text-[#6636EE] border border-[#6636EE] p-1">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm">
                Meal Planning and Analysis
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white p-2">
              <button className="flex items-center justify-center rounded-full text-[#6636EE]  border border-[#6636EE] p-1">
                <HiCheck />
              </button>
              <p className="text-gray-700 text-sm">
                Weight assessment
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WeightLossProgram