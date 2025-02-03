import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

type TBreadcrumbs = {
    bg: string;
    title: string;
};

const Breadcrumbs = ({ bg, title }: TBreadcrumbs) => {
    return (
        <div className='relative w-full'>
            {/* Background Image */}
            <div className='absolute inset-0 h-[440px]'>
                <img src={bg} alt='Background' className='w-full h-full object-cover' />
            </div>
            
            {/* Overlay & Content */}
            <div className='relative bg-primary/20 h-[440px] pt-20 pl-60 md:pt-[160px] pb-8 flex flex-col justify-end'>
                <h1 className='font-semibold text-white text-2xl leading-snug uppercase drop-shadow-lg'>
                    {title}
                </h1>
                <div className='text-white uppercase flex items-center gap-2'>
                    <Link className='flex items-center gap-3' to='/'><FaHome />Home</Link>
                    <span className='text-primary'>&gt;</span>
                    <span className='text-dark-gray'>{title}</span>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumbs;
