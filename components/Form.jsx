'use client'
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import { Textarea } from "./ui/textarea";
import { User, MailIcon, MessageSquare, ArrowRightIcon } from "lucide-react";

const Form = () => {
    return <form className='flex flex-col gap-y-4'>
        {/* input */}
        <div className='relative flex items-center '>
            <Input type="name" placeholder='Name'/>
            <User className='absolute right-6' size={20}/>
        </div>
        {/* email */}
        <div className='relative flex items-center'>
            <Input type="email" placeholder='Email'/>
            <MailIcon className='absolute right-6' size={20}/>
        </div>
        {/* textarea */}
        <div className='relative flex items-center'>
            <Textarea type="name" placeholder='Type Your Message Here'/>
            <MessageSquare className='absolute top-4 right-6' size={20}/>
        </div>
        <Button className='flex items-center gap-x-1 max-w-[166px]'>Let's Talk <ArrowRightIcon size={20}/></Button>
        
    </form>
};
export default Form;