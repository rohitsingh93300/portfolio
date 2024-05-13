import React from 'react'
import Link from "next/link";
import {Button} from "./ui/button";
import {Download, Send} from 'lucide-react';
import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from 'react-icons/ri'
//components
import DevImg from './DevImg'
import Badge from './Badge'
import Socials from './Socials'

const Hero = () => {
    return (
        <section className='py-12 xl:py-24 h-max md:h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-5 md:flex-row md:justify-between gap-x-8'>
                    {/* text */}
                    <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                        <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Web Developer</div>
                        <h1 className='h1 mb-4'>Hello, my name is Rohit Singh</h1>
                        <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Brief description with insights into myself, my vocational journey, and what i engage in professionally.</p>
                        {/* buttons*/}
                        <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                            <Link href='/contact'>
                            <Button className='gap-x-2'>Contact me <Send size={18}/></Button>
                            </Link>
                            <Button variant='secondary' className='gap-x-2'>Download CV<Download size={18}/></Button>
                        </div>
                        {/* socials */}
                        <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all '/>
                    </div>
                    {/* image */}
                    <div className='relative hidden xl:flex '>
                        {/* Badge1 */}
                        <Badge 
                        containerStyles='absolute top-[24%] -left-[5rem]'
                        icon={<RiBriefcase4Fill/>} 
                        endCountNum={3} 
                        badgeText='Years Of Experience'/>
                        {/* Badge 2 */}
                        <Badge 
                        containerStyles='absolute top-[80%] -left-[1rem]'
                        icon={<RiTodoFill/>} 
                        endCountNum={6} 
                        endCountText='k'
                        badgeText='Finished Projects'/>
                        {/* Badge 3 */}
                        <Badge 
                        containerStyles='absolute top-[55%] -right-8'
                        icon={<RiTeamFill/>} 
                        endCountNum={9} 
                        endCountText='k'
                        badgeText='Happy Clients'/>
                       <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark  md:w-[500px] md:h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
                       <DevImg containerStyles='bg-hero_shape md:w-[510px] md:h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/developer1.png' />
                    </div>
                </div>
                {/* icon */}
                <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                    <RiArrowDownSLine className='text-3xl text-primary '/>
                </div>
            </div>
        </section>
    )
}

export default Hero
