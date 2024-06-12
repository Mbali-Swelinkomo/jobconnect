import React from 'react';

interface CareerAdviceItemProps {
  link: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const CareerAdviceItem: React.FC<CareerAdviceItemProps> = ({ link, imageSrc, imageAlt, title, description }) => {
  return (
    <div className="item active">
      <a href={link}>
        <img src={imageSrc} alt={imageAlt} />
        <div className="carousel-slide-info">
          <h4>{title}</h4>
          <p className="lead">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default CareerAdviceItem;
