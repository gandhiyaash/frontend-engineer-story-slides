import * as React from "react"

export interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  fallbackSrc?: string
}

const ImageWithFallback = React.forwardRef<HTMLImageElement, ImageWithFallbackProps>(
  ({ src, alt, fallbackSrc, className, ...props }, ref) => {
    const [imgSrc, setImgSrc] = React.useState(src)
    const [hasError, setHasError] = React.useState(false)

    React.useEffect(() => {
      setImgSrc(src)
      setHasError(false)
    }, [src])

    const handleError = () => {
      if (!hasError) {
        setHasError(true)
        if (fallbackSrc) {
          setImgSrc(fallbackSrc)
        } else {
          // Create a simple gradient fallback
          setImgSrc("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f7931a;stop-opacity:0.3' /%3E%3Cstop offset='100%25' style='stop-color:%23e65100;stop-opacity:0.6' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)' /%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='16' fill='%23ffffff'%3E" + encodeURIComponent(alt) + "%3C/text%3E%3C/svg%3E")
        }
      }
    }

    return (
      <img
        ref={ref}
        src={imgSrc}
        alt={alt}
        className={className}
        onError={handleError}
        {...props}
      />
    )
  }
)

ImageWithFallback.displayName = "ImageWithFallback"

export { ImageWithFallback }
