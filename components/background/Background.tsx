
import {
    ImageWrapper, BackgroundImage
} from '../styles/Background.style'

interface BackgroundProps {
    svg?: string;
}


const Background = (props: BackgroundProps) => {
    return (
        <ImageWrapper>
            {/* <BackgroundImage src='bg.png'/> */}
        </ImageWrapper>
    )
}


export default Background