import config from "../../styles/config";
import StyledContent, { ContentBackground } from "./styles";
import ContentProps from "./types";

interface LinkProps extends React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>{
  src?: string,
  rel?: string
}

const Link = (props: LinkProps) => {
  return <link {...props} />
}

const getResponsiveImage = (image: string, size: string) => {
  const breakpoint = config.breakpoint[size as keyof typeof config.breakpoint]
  return {
    srcset: `${image} ${breakpoint.mid.replace('px', 'w')}`,
    size: `(max-width: ${breakpoint.max}) ${breakpoint.mid}`,
    width: breakpoint.mid
  }
}

const Content: React.FC<ContentProps> = ({ children, background, images, align, ...rest }) => {
  const mainImage = background || images?.large || images?.medium || images?.small
  const responsiveImages = []
  if(images?.small) responsiveImages.push(getResponsiveImage(images.small,'small'))
  if(images?.medium) responsiveImages.push(getResponsiveImage(images.medium,'medium'))
  if(images?.large) responsiveImages.push(getResponsiveImage(images.large,'large'))
  return (
    <StyledContent className='content' $align={align} { ...rest }>
      {mainImage && <>
          <Link rel="preload" src={mainImage} />
          <ContentBackground
            alt="representation of time"
            className="content__background"
            loading="lazy"
            src={mainImage}
            srcSet={responsiveImages.length ? responsiveImages.map(ri => ri.srcset).join(', ') : undefined}
            sizes={responsiveImages.length ? `${responsiveImages.map(ri => ri.size).join(', ')}, ${responsiveImages.pop()?.width}` : undefined}
          />
      </>}
      {children}
    </StyledContent>
  );
}

export default Content;