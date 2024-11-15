import IcoMoon, {IconProps} from "react-icomoon";
import iconSet from "../../config/svgIcons.json";

const Icon = (props: IconProps) => {
    return (
        <>
            <IcoMoon iconSet={iconSet} {...props} />
        </>
    )
}

export default Icon
