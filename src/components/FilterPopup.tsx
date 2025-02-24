import React, { useState, useMemo, useEffect } from 'react';
import { X } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Tour, tours } from '../data/tours';

interface FilterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onFilter: (filters: FilterState) => void;
  filteredCount?: number;
}

interface FilterState {
  category: string;
  location: string;
  theme: string;
  activity: string;
  priceRange: number;
  startTime: string;
  groupSize: number;
  vehicle: string;
  feature: string;
}

const LOCATIONS = ["Turkey", "Spain", "Rassada Pier/Rass", "Greece"];

const FilterPopup: React.FC<FilterPopupProps> = ({ isOpen, onClose, onFilter, filteredCount }) => {
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    location: '',
    theme: '',
    activity: '',
    priceRange: 5000,
    startTime: '',
    groupSize: 50,
    vehicle: '',
    feature: ''
  });

  const [locationInput, setLocationInput] = useState('');
  const [filteredToursCount, setFilteredToursCount] = useState(filteredCount);
  const [showLocations, setShowLocations] = useState(false);

  const categories = ["Tours", "Tickets", "Rent", "Transfer"];
  const themes = ["Island Tour", "Land Tour", "Safari"];
  const activities = ["Swimming", "Running", "Elephant Care", "Snorkeling"];
  const vehicles = ["Yacht", "Speedboat", "Safari", "Catamaran", "Speedcatamaran"];
  const features = ["Transfer", "Halal Food", "Vegetarian Food"];
  const times = ["12:00", "14:00", "17:00", "18:00", "20:00"];

  const filteredLocations = useMemo(() => {
    if (!locationInput) {
      return [];
    }
    return LOCATIONS.filter(location =>
      location.toLowerCase().includes(locationInput.toLowerCase())
    );
  }, [locationInput]);

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

    setFilteredToursCount(filtered.length);
  }, [filters]);

  const handleReset = () => {
    const resetFilters = {
      category: '',
      location: '',
      theme: '',
      activity: '',
      priceRange: 5000,
      startTime: '',
      groupSize: 50,
      vehicle: '',
      feature: ''
    };
    setFilters(resetFilters);
    setLocationInput('');
    onFilter(resetFilters); // Filtrelerin temizlendiğini bildirmek için onFilter fonksiyonunu çağırın
  };

  return (
    <div className={`filter-popup ${!isOpen ? 'hidden' : ''} fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center`} style={{ backdropFilter: 'blur(5px)' }}>
      <div className="bg-white rounded-lg p-6 w-full max-w-lg max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-center w-full">Filter</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilters({ ...filters, category })}
              className={`px-4 py-2 rounded-full ${filters.category === category
                ? 'bg-primary text-white'
                : 'border hover:bg-primary/10'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <div className="relative">
            <h3 className="font-semibold mb-3">Location</h3>
            <input
              type="text"
              placeholder="Where are you going?"
              value={locationInput}
              onChange={(e) => {
                setLocationInput(e.target.value);
                setShowLocations(true);
              }}
              className="w-full p-2 border rounded-lg"
            />
            {showLocations && locationInput && (
              <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
                {filteredLocations.map((location) => (
                  <button
                    key={location}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => {
                      setLocationInput(location);
                      setFilters({ ...filters, location });
                      setShowLocations(false);
                    }}
                  >
                    {location}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="font-semibold mb-3">Theme</h3>
            <div className="flex flex-wrap gap-2">
              {themes.map((theme) => (
                <button
                  key={theme}
                  onClick={() => setFilters({ ...filters, theme })}
                  className={`px-4 py-2 rounded-full ${filters.theme === theme
                    ? 'bg-primary text-white'
                    : 'border hover:bg-primary/10'
                    }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Activity</h3>
            <div className="flex flex-wrap gap-2">
              {activities.map((activity) => (
                <button
                  key={activity}
                  onClick={() => setFilters({ ...filters, activity })}
                  className={`px-4 py-2 rounded-full ${filters.activity === activity
                    ? 'bg-primary text-white'
                    : 'border hover:bg-primary/10'
                    }`}
                >
                  {activity}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Vehicle</h3>
            <div className="flex flex-wrap gap-2">
              {vehicles.map((vehicle) => (
                <button
                  key={vehicle}
                  onClick={() => setFilters({ ...filters, vehicle })}
                  className={`px-4 py-2 rounded-full ${filters.vehicle === vehicle
                    ? 'bg-primary text-white'
                    : 'border hover:bg-primary/10'
                    }`}
                >
                  {vehicle}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Features</h3>
            <div className="flex flex-wrap gap-2">
              {features.map((feature) => (
                <button
                  key={feature}
                  onClick={() => setFilters({ ...filters, feature })}
                  className={`px-4 py-2 rounded-full ${filters.feature === feature
                    ? 'bg-primary text-white'
                    : 'border hover:bg-primary/10'
                    }`}
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Price Range (THB {filters.priceRange})</h3>
            <Slider
              defaultValue={[filters.priceRange]}
              max={5000}
              step={100}
              onValueChange={([value]) => setFilters({ ...filters, priceRange: value })}
            />
          </div>

          <div>
            <h3 className="font-semibold mb-3">Start Time</h3>
            <div className="flex flex-wrap gap-2">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setFilters({ ...filters, startTime: time })}
                  className={`px-4 py-2 rounded-full ${filters.startTime === time
                    ? 'bg-primary text-white'
                    : 'border hover:bg-primary/10'
                    }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Group Size (Max {filters.groupSize})</h3>
            <Slider
              defaultValue={[filters.groupSize]}
              max={50}
              step={1}
              onValueChange={([value]) => setFilters({ ...filters, groupSize: value })}
            />
          </div>

          <div className="flex justify-between gap-4 mt-8">
            <button
              onClick={handleReset}
              className="w-1/2 py-2 rounded-lg border hover:bg-gray-100 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={() => onFilter(filters)}
              className="w-1/2 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Search {filteredToursCount !== undefined ? `(${filteredToursCount})` : ''}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
