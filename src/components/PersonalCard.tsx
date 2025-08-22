import { TiltedCard } from "./ui/tilted-card";

export default function PersonalCard() {
  const overlayContent = (
    <div className="absolute inset-0 flex flex-col justify-end p-4 
                    bg-gradient-to-t from-background/90 to-transparent 
                    rounded-b-[15px]"> 
      <p className="text-lg font-semibold text-foreground drop-shadow-sm">
        Nithin Varma
      </p>
      <p className="text-sm text-muted-foreground drop-shadow-sm">
        Polymath & Innovator
      </p>
    </div>
  );

  return (
    <div className="flex justify-center items-center">
      <TiltedCard
        imageSrc="/eaf0580b-d38a-4fa4-b83b-78db14148205.png"
        altText="Courier Team"
        captionText="SS Courier Team - Professional Logistics"
        containerHeight="350px"
        containerWidth="280px"
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={12}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={overlayContent}
        tooltipClassName="bg-background border border-border text-foreground shadow-lg"
        className="mx-auto"
      />
    </div>
  );
}