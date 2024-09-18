import { FC, HTMLAttributes} from "react";

type ContainerProps = HTMLAttributes<HTMLElement>;

const Container: FC<ContainerProps> = ({...props}) => {
    return (
        <div {...props}>
            {props.children}
        </div>
    )
}

export { Container }