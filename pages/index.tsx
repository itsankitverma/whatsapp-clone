import { RiRefreshLine, RiMessageFill } from 'react-icons/ri'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'

export default function Home() {
  return (
    <div className="bg-[#090e11] w-screen h-screen py-5 px-[15.5rem] rounded-lg">
      <div className='bg-[#212527] h-full w-full grid grid-cols-3 text-white'>
          <div className='h-full'>
            <div className='flex justify-between items-center px-5 h-16 bg-[#3f4242] rounded-lg'>
              <img 
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
                className='w-10 h-10 rounded-full' 
                alt="" />
                <div className='flex items-center gap-7'>
                  <RiRefreshLine className='w-6 h-6 cursor-pointer'/>
                  <RiMessageFill className='w-6 h-6 cursor-pointer' />
                  <BiDotsVerticalRounded className='w-6 h-6 cursor-pointer' />
                </div>
            </div>
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20"></svg>
              </span>
              <input className="placeholder:italic placeholder:text-gray-400 block bg-slate-600 w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
            </label>
            <div className="h-5/6 ">
            <div className='flex cursor-pointer hover:bg-slate-700 items-center justify-between px-4 py-3'>
                  <div className='flex items-center gap-3'>
                  <img 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
                    className='w-14 h-14 rounded-full' 
                    alt="" />
                    <div className='flex flex-col'>
                    <p className="text-xl">Test</p>
                    <p className="text-sm">Test Message</p></div>
                  </div>
                  <p className="text-sm">12:24 pm</p>
                </div>
                <div className='flex cursor-pointer hover:bg-slate-700 items-center justify-between px-4 py-3'>
                  <div className='flex items-center gap-3'>
                  <img 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
                    className='w-14 h-14 rounded-full' 
                    alt="" />
                    <div className='flex flex-col'>
                    <p className="text-xl">Test</p>
                    <p className="text-sm">Test Message</p></div>
                  </div>
                  <p className="text-sm">12:24 pm</p>
                </div>
                <div className='flex cursor-pointer hover:bg-slate-700 items-center justify-between px-4 py-3'>
                  <div className='flex items-center gap-3'>
                  <img 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
                    className='w-14 h-14 rounded-full' 
                    alt="" />
                    <div className='flex flex-col'>
                    <p className="text-xl">Test</p>
                    <p className="text-sm">Test Message</p></div>
                  </div>
                  <p className="text-sm">12:24 pm</p>
                </div>
                <div className='flex cursor-pointer hover:bg-slate-700 items-center justify-between px-4 py-3'>
                  <div className='flex items-center gap-3'>
                  <img 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
                    className='w-14 h-14 rounded-full' 
                    alt="" />
                    <div className='flex flex-col'>
                    <p className="text-xl">Test</p>
                    <p className="text-sm">Test Message</p></div>
                  </div>
                  <p className="text-sm">12:24 pm</p>
                </div>
                <div className='flex cursor-pointer hover:bg-slate-700 items-center justify-between px-4 py-3'>
                  <div className='flex items-center gap-3'>
                  <img 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
                    className='w-14 h-14 rounded-full' 
                    alt="" />
                    <div className='flex flex-col'>
                    <p className="text-xl">Test</p>
                    <p className="text-sm">Test Message</p></div>
                  </div>
                  <p className="text-sm">12:24 pm</p>
                </div>
                <div className='flex cursor-pointer hover:bg-slate-700 items-center justify-between px-4 py-3'>
                  <div className='flex items-center gap-3'>
                  <img 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
                    className='w-14 h-14 rounded-full' 
                    alt="" />
                    <div className='flex flex-col'>
                    <p className="text-xl">Test</p>
                    <p className="text-sm">Test Message</p></div>
                  </div>
                  <p className="text-sm">12:24 pm</p>
                </div>
                <div className='flex cursor-pointer hover:bg-slate-700 items-center justify-between px-4 py-3'>
                  <div className='flex items-center gap-3'>
                  <img 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
                    className='w-14 h-14 rounded-full' 
                    alt="" />
                    <div className='flex flex-col'>
                    <p className="text-xl">Test</p>
                    <p className="text-sm">Test Message</p></div>
                  </div>
                  <p className="text-sm">12:24 pm</p>
                </div>
                <div className='flex cursor-pointer hover:bg-slate-700 items-center justify-between px-4 py-3'>
                  <div className='flex items-center gap-3'>
                  <img 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
                    className='w-14 h-14 rounded-full' 
                    alt="" />
                    <div className='flex flex-col'>
                    <p className="text-xl">Test</p>
                    <p className="text-sm">Test Message</p></div>
                  </div>
                  <p className="text-sm">12:24 pm</p>
                </div>
                <div className='flex cursor-pointer hover:bg-slate-700 items-center justify-between px-4 py-3'>
                  <div className='flex items-center gap-3'>
                  <img 
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
                    className='w-14 h-14 rounded-full' 
                    alt="" />
                    <div className='flex flex-col'>
                    <p className="text-xl">Test</p>
                    <p className="text-sm">Test Message</p></div>
                  </div>
                  <p className="text-sm">12:24 pm</p>
                </div>  
            </div>
          </div>

          {/* second part */}
          <div className=' col-span-2 '>
            <div className=' flex flex-col items-center justify-center h-full '>

            <img className='w-60' src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="" />
              <p className='text-4xl'>WhatsApp Web</p>
            </div>
          </div>
      </div>
    </div>
  )
}
