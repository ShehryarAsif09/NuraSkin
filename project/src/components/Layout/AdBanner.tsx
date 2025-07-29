import React from 'react';

interface AdBannerProps {
  size: 'small' | 'medium' | 'large';
  position: 'top' | 'middle' | 'sidebar' | 'footer';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ size, position, className = '' }) => {
  const sizeClasses = {
    small: 'h-20',
    medium: 'h-32',
    large: 'h-48',
  };

  const getAdSenseCode = () => {
    // Google AdSense code
    return `
<!-- Google AdSense ${position} ${size} -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8874321229002860" crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8874321229002860"
     data-ad-slot="1234567890"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
    `;
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-pink-200 p-4 ${className}`}>
      <div className="text-gray-400 text-xs mb-2 text-center">Advertisement</div>
      <div className={`bg-gray-100 rounded flex items-center justify-center ${sizeClasses[size]}`}>
        <div className="text-center">
          <span className="text-gray-500 text-sm">Google AdSense</span>
          <div className="text-xs text-gray-400 mt-1">{size} - {position}</div>
          {/* Actual AdSense ad unit */}
          <ins className="adsbygoogle"
               style={{display: 'block'}}
               data-ad-client="ca-pub-8874321229002860"
               data-ad-slot="1234567890"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
      </div>
      
      {/* Initialize AdSense */}
      <script dangerouslySetInnerHTML={{
        __html: `
          if (typeof window !== 'undefined' && window.adsbygoogle) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }
        `
      }} />
    </div>
  );
};

export default AdBanner;