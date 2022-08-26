interface ImageSmallProps {
  small: string,
  medium?: string,
  large?: string
}
interface ImageMediumProps {
  small?: string,
  medium: string,
  large?: string
}
interface ImageLargeProps {
  small?: string,
  medium?: string,
  large: string
}

type ImageProps = ImageSmallProps | ImageMediumProps | ImageLargeProps

export default interface ContentProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode | React.ReactNode[],
  background?: string,
  images?: ImageProps,
  align?: 'top' | 'center' | 'bottom',
}

export interface StyledContentProps extends React.HTMLAttributes<HTMLElement> {
  $align?: string
}