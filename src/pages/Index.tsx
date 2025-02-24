import { useState, useEffect } from 'react';
import { Menu, Heart, ShoppingCart, User } from 'lucide-react';
import FilterPopup from '../components/FilterPopup';
import TourCard from '../components/TourCard';
import { tours, Tour } from '../data/tours';

const Index = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredTours, setFilteredTours] = useState<Tour[]>(tours);
  const [filters, setFilters] = useState<any>({});

  useEffect(() => {
    let filtered = [...tours];

    if (filters.category) {
      filtered = filtered.filter(tour => tour.category === filters.category);
    }

    if (filters.location) {
      filtered = filtered.filter(tour =>
        tour.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.theme) {
      filtered = filtered.filter(tour => tour.theme === filters.theme);
    }

    if (filters.activity) {
      filtered = filtered.filter(tour =>
        tour.activities.includes(filters.activity)
      );
    }

    if (filters.vehicle) {
      filtered = filtered.filter(tour => tour.vehicle === filters.vehicle);
    }

    if (filters.feature) {
      filtered = filtered.filter(tour =>
        tour.features.includes(filters.feature)
      );
    }

    if (filters.priceRange) {
      filtered = filtered.filter(tour => tour.price <= filters.priceRange);
    }

    if (filters.startTime) {
      filtered = filtered.filter(tour => tour.startTime === filters.startTime);
    }

    if (filters.groupSize) {
      filtered = filtered.filter(tour => tour.groupSize <= filters.groupSize);
    }

    setFilteredTours(filtered);
  }, [filters]);

  const handleFilter = (newFilters: any) => {
    setFilters(newFilters);
    setIsFilterOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="sticky top-0 bg-white shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>

            <div className="font-semibold text-xl">Local Marketplace</div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Heart className="h-6 w-6" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ShoppingCart className="h-6 w-6" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </main>

      <FilterPopup
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onFilter={handleFilter}
        filteredCount={filteredTours.length}
      />
    </div>
  );
};

export default Index;
