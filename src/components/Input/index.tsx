import { FC, ReactNode } from "react";

interface Props {
    className?: string
    value: string
    placeholder?: string
    onChange: (text: string) => void
    label?: () => ReactNode
    leftIcon?: () => ReactNode
    rightIcon?: () => ReactNode
    type?: string
    onBlur: () => void
}

const Input: FC<Props> = ({className, value, onChange, label, rightIcon, leftIcon, placeholder, type = "text", onBlur}) => {
    return (
        <div>
            {label && label()}

            <div className={`flex items-center ${className} ${rightIcon && "justify-around"}`}>
                {leftIcon && leftIcon()}

                <input 
                    className="focus:outline-none"
                    type={type} 
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)} 
                    onBlur={() => onBlur()}
                />
                
                {rightIcon && rightIcon()}
            </div>
        </div>
    )
}

export { Input }