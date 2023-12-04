import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit'
    title: string
    icon?: string
    variant: string
}

const Buttons = ({ type, title, icon, variant } : ButtonProps) => {
  return (
    <button
    type={type}
    className={`${variant} flexCenter border rounded-full gap-3`}>
       { icon && <Image src={icon} alt="icon" height={20} width={20} /> }
       <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Buttons