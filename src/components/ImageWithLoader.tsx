import { useState } from 'react';
import { BounceLoader } from 'react-spinners';

interface ImageWithLoaderProps {
  src: string;
  alt?: string;
  loaderSize?: number;
  className?: string;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt = 'image',
  className,
}) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className='h-full grid place-items-center text-center'>
      {loading && (
        <BounceLoader size={40} color='#a8a8a8' className='m-auto' />
      )}

      <img
        src={src}
        alt={alt}
        style={{ display: loading ? 'none' : 'block' }}
        onLoad={handleImageLoad}
        onError={() => setLoading(false)} // Optional: Handle broken images
        className={className}
      />
    </div>
  );
};

export default ImageWithLoader;
