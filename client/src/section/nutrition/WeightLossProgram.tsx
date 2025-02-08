import { HiCheck } from 'react-icons/hi'

const WeightLossProgram = () => {
  return (
    <div>
      <div className='grid grid-cols-2 gap-3'>
        <img className='w-full' src="https://img.freepik.com/premium-photo/happy-young-woman-joggling-oranges-kitchen-background_116317-3349.jpg?w=996" alt="" />
        
        <div className="grid grid-cols-1 gap-1">
<div>
<p className='font-semibold text-lg'>Planning and Prep</p>
          <p>Our nutrition team love the benefit of exercise and healthy food</p>
          <div className="flex items-center gap-2 bg-white p-2">
            <button className="flex items-center justify-center rounded-full text-[#6636EE]  border border-[#6636EE] p-3">
              <HiCheck />
            </button>
            <p className="text-gray-700 text-sm">
              Vite quam touror enim est pharetra integer
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white p-2">
            <button className="flex items-center justify-center rounded-full text-[#6636EE]  border border-[#6636EE] p-3">
              <HiCheck />
            </button>
            <p className="text-gray-700 text-sm">
              Morbi vitae tortor at enim est pharetra integer
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white p-2">
            <button className="flex items-center justify-center rounded-full text-[#6636EE]  border border-[#6636EE] p-3">
              <HiCheck />
            </button>
            <p className="text-gray-700 text-sm">
              Curabitur non nulla sit amet nisl tempus
            </p>
          </div>
</div>

        </div>
      </div>
    </div>
  )
}

export default WeightLossProgram