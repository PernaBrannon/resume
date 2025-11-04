import { useEffect, useState } from 'react'

interface ImagePreloaderProps {
  images: string[]
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({ images }) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  useEffect(() => {
    const preloadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, src]))
          resolve(src)
        }
        
        img.onerror = reject
        img.src = src
      })
    }

    const preloadAllImages = async () => {
      try {
        await Promise.all(images.map(preloadImage))
      } catch (error) {
        console.error('Error preloading images:', error)
      }
    }

    preloadAllImages()
  }, [images])

  // Add loading state to window object for access in App component
  useEffect(() => {
    window.__imagesLoaded = loadedImages.size === images.length
  }, [loadedImages, images])

  return null
}

export default ImagePreloader