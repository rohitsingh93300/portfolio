import DevImg from "./DevImg"
import Image from 'next/image'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase, Key} from 'lucide-react'

const infoData = [
    {
        icon:<User2 size={20}/>,
        text:'Rohit Singh'
    },
    {
        icon:<PhoneCall size={20}/>,
        text:' +91 123 4567 890'
    },
    {
        icon:<MailIcon size={20}/>,
        text:'rohitsingh93300@gmail.com'
    },
    {
        icon:<Calendar size={20}/>,
        text:'Born on 6 Mar, 2001'
    },
    {
        icon:<GraduationCap size={20}/>,
        text:'Bachelor of Science'
    },
    {
        icon:<HomeIcon size={20}/>,
        text:'11/E/1.A.C.Paul Street'
    },
]

const qualificationData = [
    {
        title:'education',
        data: [
            {
                university: 'A.R.N.C Vidhyalya',
                qualification:'10th Pass',
                years:'2015-2016',
            },
            {
                university: "Adarsh Madhyamik Vidhyalya",
                qualification:'11th-12th',
                years:'2016-2018'
            },
            {
                university:"Bangabashi Morning College",
                qualification:'Bachelor of Science',
                years:'2019-2021'
            }
        ]
    },
    {
        title:'experience',
        data: [
            {
                company: 'ABC Inc',
                role:'Software Engineer',
                years:'2021-2022',
            },
            {
                company: 'ABC Inc',
                role:'Software Engineer',
                years:'2022-2023',
            },
            {
               company: 'ABC Inc',
                role:'Software Engineer',
                years:'2023-2024',
            }
        ]
    }
]
const skillData = [
   {
    title:'skills',
    data: [
        {
            name: 'HTML, CSS',
        },
        {
            name: 'Reactjs, Tailwind CSS, Redux Toolkit',
        },
        {
            name: 'Front-end Development',
        },
        {
            name:'Javascript'
        },
        {
            name:'Back-end Development'
        },
        {
            name:'Nextjs, Typescript'
        },
        {
            name:'Full Stack Developer'
        }
    ]
   },
   {
    title:'tools',
    data: [
        {
            imgPath: '/about/vscode.svg',
        },
        {
            imgPath: '/about/wordpress.svg',
        },
        {
            imgPath:'/about/figma.svg'
        },
        {
            imgPath:'/about/github.svg'
        },
        {
            imgPath:'/about/react.svg'
        },
        {
            imgPath:'/about/nextjs2.svg'
        },
        {
            imgPath:'/about/mongodb.svg'
        },
    ]
   }
]
const About = () => {
    const getData = (arr, title)=>{
        return arr.find((item)=>item.title === title);
    };
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
       <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            About me
        </h2>
        <div className='flex flex-col xl:flex-row'>
            {/* image */}
            <div className='hidden xl:flex flex-1 relative'>
                <Image className='rounded-full object-cover' src={'/about/about.jpeg'} width={505} height={400}/>
            </div>
            {/* tabs */}
            <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualification</TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                    <div className="text-center xl:text-left">
                        <h3 className='h3 mb-4'>Know More About Me</h3>
                        <p className="subtitle max-w-xl mx-auto xl:mx-0">Passionate about leveraging technology to build innovative solutions, Rohit Singh is a 23-year-old Full Stack Developer based in kolkata, India, with a Bachelor of Science degree, obtained from Bangabashi Morning College, they have cultivated a strong foundation in both theoretical knowledge and practical skills.</p>
                        {/* <p className="subtitle max-w-xl mx-auto xl:mx-0">Driven by a curiosity for exploring new technologies and a commitment to continuous learning, Rohit Singh specializes in crafting seamless web applications that deliver exceptional user experiences. Proficient in a variety of programming languages and frameworks, including JavaScript, React.js, Node.js, and more, they possess a versatile skill set that enables them to tackle challenges across the full development stack.</p> */}
                        {/* <p className="subtitle max-w-xl mx-auto xl:mx-0">With a commitment to excellence and a passion for pushing the boundaries of what's possible, Rohit Singh is poised to make a meaningful impact in the world of technology and beyond.
                        </p> */}
                        {/* icons */}
                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                            {infoData.map((item,index)=>{
                                return <div key={index} className='flex items-center gap-x-4 mx-auto xl:mx-0'>
                                    <div className="text-primary">{item.icon}</div>
                                    <div>{item.text}</div>
                                </div>
                            })}
                        </div>
                        {/* languages */}
                        <div className='flex flex-col gap-y-2'>
                            <div className="text-primary">Language Skill</div>
                            <div className="border-b border-border"></div>
                            <div>English, Hindi, Bengali</div>
                        </div>
                    </div>
                </TabsContent>
                {/* qualification */}
                <TabsContent value='qualifications'>
                    <div>
                       <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                       {/* experience & education wrapper */}
                       <div className='grid md:grid-cols-2 gap-y-8'>
                          {/* experience */}
                          <div className="flex flex-col gap-y-6">
                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                <Briefcase/>
                                <h4 className="capitalize font-medium">
                                    {getData(qualificationData,'experience').title}
                                </h4>
                            </div>
                            {/* list */}
                            <div className='flex flex-col gap-y-8'>
                                {getData(qualificationData, 'experience').data.map((item,index)=>{
                                    const {company,role, years} = item;
                                    return (
                                        <div className='flex gap-x-8 group' Key={index}>
                                            <div className='h-[84px] w-[1px]  bg-border relative ml-2'>
                                                <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                            </div>
                                            <div>
                                                <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                                <div className='text-lg leading-none text-muted-foreground mb-4'>{role}</div>
                                                <div className='text-base font-medium'>{years}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                          </div>
                          {/* education */}
                          <div className="flex flex-col gap-y-6">
                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                <GraduationCap size={28}/>
                                <h4 className="capitalize font-medium">
                                    {getData(qualificationData,'education').title}
                                </h4>
                            </div>
                            {/* list */}
                            <div className='flex flex-col gap-y-8'>
                                {getData(qualificationData, 'education').data.map((item,index)=>{
                                    const {university,qualification, years} = item;
                                    return (
                                        <div className='flex gap-x-8 group' Key={index}>
                                            <div className='h-[84px] w-[1px]  bg-border relative ml-2'>
                                                <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                            </div>
                                            <div>
                                                <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                                <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                <div className='text-base font-medium'>{years}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                          </div>
                       </div>
                    </div>
                </TabsContent>
                <TabsContent value='skills'>
                    <div className="text-center xl:text-left">
                        <h3 className="h3 mb-8">Tools I Use Everyday</h3>
                        {/* skills */}
                        <div className="mb-10">
                            <h4 className="text-xl font-semibold mb-2">Skills</h4>
                            <div className="border-b border-border mb-4"></div>
                            {/* skills list */}
                            <div>
                                {getData(skillData,'skills').data.map((item,index)=>{
                                    const {name} = item;
                                    return (
                                        <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
                                            <div className='font-medium'>{name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        {/* tools */}
                        <div>
                            <h4 classname='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                            <div className="border-b border-border mb-4"></div>
                            {/* tools list */}
                            <div className="flex gap-x-8 justify-center xl:justify-start">
                                {getData(skillData,'tools').data.map((item,index)=>{
                                    const {imgPath} = item;
                                    return (
                                        <div key={index}>
                                            <Image src={imgPath} width={48} height={48} alt="" priority />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </TabsContent>
              </div>
            </Tabs>
            </div>
        </div>
       </div>
    </section>
  )
}

export default About
