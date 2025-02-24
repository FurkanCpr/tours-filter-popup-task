
import { Heart } from 'lucide-react';
import { Tour } from '../data/tours';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="tour-card">
      <div className="relative">
        <img src={tour.image} alt={tour.title} className="w-full h-64 object-cover" />
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
          <Heart className="h-5 w-5" />
        </button>
        {tour.originalPrice > tour.price && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
            {Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)}% OFF
          </div>
        )}
        <div className="absolute bottom-2 left-2 px-4 py-2 bg-primary text-white rounded-[6px]">
          {tour.category}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 text-yellow-500 mb-2">
          ⭐  <div style={{ color: "black" }}>({tour.rating})</div><div style={{ color: "grey" }}>({tour.reviews})</div>
        </div>
        <div className="flex items-start gap-2 mb-2">
          <div className="text-gray-500">📍</div>
          <div>{tour.location}</div>
        </div>
        <h3 className="font-semibold mb-3 line-clamp-2">{tour.title}</h3>
        <div className="flex items-center justify-between">
          <div>
            {tour.originalPrice > tour.price && (
              <span className="text-gray-500 line-through text-sm mr-2">
                THB {tour.originalPrice}
              </span>
            )}
            <span className="text-primary font-semibold">THB {tour.price}</span>
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
