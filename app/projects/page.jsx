'use client'
import react, {useState} from 'react'
import { Tabs, TabsList, TabsTrigger,TabsContent } from '@/components/ui/tabs' 
import ProjectCard from '@/components/ProjectCard'

const projectData = [
  {
    image:'/work/3.png',
    category:'react js',
    name:'Nexa Website',
    description:'lorem ipsum dolor aquidijproit  codlflrjl  fdopfjlf fa fljdlf fjls f',
    link:'/',
    github:'/'
  },
  {
    image:'/work/4.png',
    category:'next js',
    name:'Nexa Website',
    description:'lorem ipsum dolor aquidijproit  codlflrjl  fdopfjlf fa fljdlf fjls f',
    link:'/',
    github:'/'
  },
 
  {
    image:'/work/2.png',
    category:'next js',
    name:'Nexa Website',
    description:'lorem ipsum dolor aquidijproit  codlflrjl  fdopfjlf fa fljdlf fjls f',
    link:'/',
    github:'/'
  },
 
  {
    image:'/work/1.png',
    category:'next js',
    name:'Nexa Website',
    description:'lorem ipsum dolor aquidijproit  codlflrjl  fdopfjlf fa fljdlf fjls f',
    link:'/',
    github:'/'
  },
  {
    image:'/work/3.png',
    category:'react js',
    name:'Nexa Website',
    description:'lorem ipsum dolor aquidijproit  codlflrjl  fdopfjlf fa fljdlf fjls f',
    link:'/',
    github:'/'
  },
  {
    image:'/work/4.png',
    category:'fullstack',
    name:'Nexa Website',
    description:'lorem ipsum dolor aquidijproit  codlflrjl  fdopfjlf fa fljdlf fjls f',
    link:'/',
    github:'/'
  },
 
]
//remove category duplicates
const uniqueCategories = ['all projects',...new Set(projectData.map((item)=> item.category))]

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects')
  const filteredProject = projectData.filter(project=>{
    //if category is 'all projects' return all projects, else filter by category
    return category === 'all projects' ? project : project.category === category
  })
  return (
    <section className='min-h-screen pt-12 '>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none '>
            {categories.map((category, index)=>{
              return <TabsTrigger 
              onClick={()=>setCategory(category)}
              value={category} 
              key={index} 
              className='capitalize w-[162px] md:w-auto'>
                {category}
                </TabsTrigger>
            })}
          </TabsList>
          {/* tabs conent */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 text-lg xl:mt-8 '>
            {filteredProject.map((project, index)=>{
              return <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects
