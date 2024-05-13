import Image from 'next/image'

const DevImg = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='developer' className='object-contain'/>
    </div>
  )
}

export default DevImg
