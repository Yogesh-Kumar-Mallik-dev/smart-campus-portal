import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Cpu, Code, Briefcase, FlaskConical, GraduationCap } from 'lucide-react';

const SpatialGrid = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cards = [
    { id: 'poly', label: 'Polytechnic', icon: Cpu, accentColor: 'bg-blue-500', duration: '3 Years', desc: 'Diploma programs in engineering' },
    { id: 'btech', label: 'B.Tech', icon: Cpu, accentColor: 'bg-blue-600', duration: '4 Years', desc: 'Bachelor of Technology' },
    { id: 'mtech', label: 'M.Tech', icon: GraduationCap, accentColor: 'bg-cyan-500', duration: '2 Years', desc: 'Master of Technology' },
    { id: 'bca', label: 'BCA', icon: Code, accentColor: 'bg-purple-500', duration: '3 Years', desc: 'Computer Applications' },
    { id: 'mca', label: 'MCA', icon: Code, accentColor: 'bg-purple-600', duration: '2 Years', desc: 'Master in Computer Apps' },
    { id: 'bba', label: 'BBA', icon: Briefcase, accentColor: 'bg-orange-500', duration: '3 Years', desc: 'Business Administration' },
    { id: 'mba', label: 'MBA', icon: Briefcase, accentColor: 'bg-orange-600', duration: '2 Years', desc: 'Master in Business' },
    { id: 'bpharm', label: 'B.Pharm', icon: FlaskConical, accentColor: 'bg-green-500', duration: '4 Years', desc: 'Bachelor of Pharmacy' },
    { id: 'mpharm', label: 'M.Pharm', icon: FlaskConical, accentColor: 'bg-green-600', duration: '2 Years', desc: 'Master of Pharmacy' }
  ];

  const defaultLayout = {
    poly: { col: 0, row: 0, colSpan: 1, rowSpan: 1 },
    btech: { col: 1, row: 0, colSpan: 1, rowSpan: 1 },
    mtech: { col: 2, row: 0, colSpan: 1, rowSpan: 1 },
    bca: { col: 0, row: 1, colSpan: 1, rowSpan: 1 },
    mca: { col: 1, row: 1, colSpan: 1, rowSpan: 1 },
    bba: { col: 2, row: 1, colSpan: 1, rowSpan: 1 },
    mba: { col: 0, row: 2, colSpan: 1, rowSpan: 1 },
    bpharm: { col: 1, row: 2, colSpan: 1, rowSpan: 1 },
    mpharm: { col: 2, row: 2, colSpan: 1, rowSpan: 1 }
  };

  const expandedLayouts = {
    poly: {
      gridTemplate: '1.5fr 0.75fr 0.75fr / 2fr 0.5fr 0.5fr',
      poly: { col: 0, row: 0, colSpan: 1, rowSpan: 1 },
      btech: { col: 1, row: 0, colSpan: 1, rowSpan: 1 },
      mtech: { col: 2, row: 0, colSpan: 1, rowSpan: 1 },
      bca: { col: 0, row: 1, colSpan: 1, rowSpan: 1 },
      mca: { col: 1, row: 1, colSpan: 1, rowSpan: 1 },
      bba: { col: 2, row: 1, colSpan: 1, rowSpan: 1 },
      mba: { col: 0, row: 2, colSpan: 1, rowSpan: 1 },
      bpharm: { col: 1, row: 2, colSpan: 1, rowSpan: 1 },
      mpharm: { col: 2, row: 2, colSpan: 1, rowSpan: 1 }
    },
    btech: {
      gridTemplate: '1.5fr 0.75fr 0.75fr / 0.6fr 1.8fr 0.6fr',
      poly: { col: 0, row: 0, colSpan: 1, rowSpan: 1 },
      btech: { col: 1, row: 0, colSpan: 1, rowSpan: 1 },
      mtech: { col: 2, row: 0, colSpan: 1, rowSpan: 1 },
      bca: { col: 0, row: 1, colSpan: 1, rowSpan: 1 },
      mca: { col: 1, row: 1, colSpan: 1, rowSpan: 1 },
      bba: { col: 2, row: 1, colSpan: 1, rowSpan: 1 },
      mba: { col: 0, row: 2, colSpan: 1, rowSpan: 1 },
      bpharm: { col: 1, row: 2, colSpan: 1, rowSpan: 1 },
      mpharm: { col: 2, row: 2, colSpan: 1, rowSpan: 1 }
    },
    mtech: {
      gridTemplate: '1.5fr 0.75fr 0.75fr / 0.5fr 0.5fr 2fr',
      poly: { col: 0, row: 0, colSpan: 1, rowSpan: 1 },
      btech: { col: 1, row: 0, colSpan: 1, rowSpan: 1 },
      mtech: { col: 2, row: 0, colSpan: 1, rowSpan: 1 },
      bca: { col: 0, row: 1, colSpan: 1, rowSpan: 1 },
      mca: { col: 1, row: 1, colSpan: 1, rowSpan: 1 },
      bba: { col: 2, row: 1, colSpan: 1, rowSpan: 1 },
      mba: { col: 0, row: 2, colSpan: 1, rowSpan: 1 },
      bpharm: { col: 1, row: 2, colSpan: 1, rowSpan: 1 },
      mpharm: { col: 2, row: 2, colSpan: 1, rowSpan: 1 }
    },
    bca: {
      gridTemplate: '0.6fr 1.8fr 0.6fr / 2fr 0.5fr 0.5fr',
      poly: { col: 0, row: 0, colSpan: 1, rowSpan: 1 },
      btech: { col: 1, row: 0, colSpan: 1, rowSpan: 1 },
      mtech: { col: 2, row: 0, colSpan: 1, rowSpan: 1 },
      bca: { col: 0, row: 1, colSpan: 1, rowSpan: 1 },
      mca: { col: 1, row: 1, colSpan: 1, rowSpan: 1 },
      bba: { col: 2, row: 1, colSpan: 1, rowSpan: 1 },
      mba: { col: 0, row: 2, colSpan: 1, rowSpan: 1 },
      bpharm: { col: 1, row: 2, colSpan: 1, rowSpan: 1 },
      mpharm: { col: 2, row: 2, colSpan: 1, rowSpan: 1 }
    },
    mca: {
      gridTemplate: '0.6fr 1.8fr 0.6fr / 0.6fr 1.8fr 0.6fr',
      poly: { col: 0, row: 0, colSpan: 1, rowSpan: 1 },
      btech: { col: 1, row: 0, colSpan: 1, rowSpan: 1 },
      mtech: { col: 2, row: 0, colSpan: 1, rowSpan: 1 },
      bca: { col: 0, row: 1, colSpan: 1, rowSpan: 1 },
      mca: { col: 1, row: 1, colSpan: 1, rowSpan: 1 },
      bba: { col: 2, row: 1, colSpan: 1, rowSpan: 1 },
      mba: { col: 0, row: 2, colSpan: 1, rowSpan: 1 },
      bpharm: { col: 1, row: 2, colSpan: 1, rowSpan: 1 },
      mpharm: { col: 2, row: 2, colSpan: 1, rowSpan: 1 }
    },
    bba: {
      gridTemplate: '0.6fr 1.8fr 0.6fr / 0.5fr 0.5fr 2fr',
      poly: { col: 0, row: 0, colSpan: 1, rowSpan: 1 },
      btech: { col: 1, row: 0, colSpan: 1, rowSpan: 1 },
      mtech: { col: 2, row: 0, colSpan: 1, rowSpan: 1 },
      bca: { col: 0, row: 1, colSpan: 1, rowSpan: 1 },
      mca: { col: 1, row: 1, colSpan: 1, rowSpan: 1 },
      bba: { col: 2, row: 1, colSpan: 1, rowSpan: 1 },
      mba: { col: 0, row: 2, colSpan: 1, rowSpan: 1 },
      bpharm: { col: 1, row: 2, colSpan: 1, rowSpan: 1 },
      mpharm: { col: 2, row: 2, colSpan: 1, rowSpan: 1 }
    },
    mba: {
      gridTemplate: '0.6fr 0.6fr 1.8fr / 2fr 0.5fr 0.5fr',
      poly: { col: 0, row: 0, colSpan: 1, rowSpan: 1 },
      btech: { col: 1, row: 0, colSpan: 1, rowSpan: 1 },
      mtech: { col: 2, row: 0, colSpan: 1, rowSpan: 1 },
      bca: { col: 0, row: 1, colSpan: 1, rowSpan: 1 },
      mca: { col: 1, row: 1, colSpan: 1, rowSpan: 1 },
      bba: { col: 2, row: 1, colSpan: 1, rowSpan: 1 },
      mba: { col: 0, row: 2, colSpan: 1, rowSpan: 1 },
      bpharm: { col: 1, row: 2, colSpan: 1, rowSpan: 1 },
      mpharm: { col: 2, row: 2, colSpan: 1, rowSpan: 1 }
    },
    bpharm: {
      gridTemplate: '0.6fr 0.6fr 1.8fr / 0.6fr 1.8fr 0.6fr',
      poly: { col: 0, row: 0, colSpan: 1, rowSpan: 1 },
      btech: { col: 1, row: 0, colSpan: 1, rowSpan: 1 },
      mtech: { col: 2, row: 0, colSpan: 1, rowSpan: 1 },
      bca: { col: 0, row: 1, colSpan: 1, rowSpan: 1 },
      mca: { col: 1, row: 1, colSpan: 1, rowSpan: 1 },
      bba: { col: 2, row: 1, colSpan: 1, rowSpan: 1 },
      mba: { col: 0, row: 2, colSpan: 1, rowSpan: 1 },
      bpharm: { col: 1, row: 2, colSpan: 1, rowSpan: 1 },
      mpharm: { col: 2, row: 2, colSpan: 1, rowSpan: 1 }
    },
    mpharm: {
      gridTemplate: '0.6fr 0.6fr 1.8fr / 0.5fr 0.5fr 2fr',
      poly: { col: 0, row: 0, colSpan: 1, rowSpan: 1 },
      btech: { col: 1, row: 0, colSpan: 1, rowSpan: 1 },
      mtech: { col: 2, row: 0, colSpan: 1, rowSpan: 1 },
      bca: { col: 0, row: 1, colSpan: 1, rowSpan: 1 },
      mca: { col: 1, row: 1, colSpan: 1, rowSpan: 1 },
      bba: { col: 2, row: 1, colSpan: 1, rowSpan: 1 },
      mba: { col: 0, row: 2, colSpan: 1, rowSpan: 1 },
      bpharm: { col: 1, row: 2, colSpan: 1, rowSpan: 1 },
      mpharm: { col: 2, row: 2, colSpan: 1, rowSpan: 1 }
    }
  };

  const getCurrentLayout = () => {
    if (!activeCard) return { template: '1fr 1fr 1fr / 1fr 1fr 1fr', positions: defaultLayout };
    return { template: expandedLayouts[activeCard].gridTemplate, positions: expandedLayouts[activeCard] };
  };

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  const handleButtonClick = (e, action, courseName) => {
    e.stopPropagation();
    console.log(`${action} clicked for ${courseName}`);
    // TODO: Add your navigation or modal logic here
    // For example: navigate(`/curriculum/${courseName}`)
  };

  const nextSlide = () => {
    setMobileIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setMobileIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Mobile View
  if (isMobile) {
    return (
        <div className="w-full py-12 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-text">Programs We Offer</h2>

            <div className="relative">
              {/* Card Container */}
              <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
                >
                  {cards.map((card) => {
                    const Icon = card.icon;
                    return (
                        <div
                            key={card.id}
                            className="w-full flex-shrink-0 px-4"
                        >
                          <div className="w-full bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-2xl shadow-lg p-8 min-h-[420px] flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                            {/* Icon + Accent Bar */}
                            <div className="flex items-center gap-4 mb-6">
                              <div className={`${card.accentColor} p-3 rounded-xl`}>
                                <Icon className="w-8 h-8 text-white" />
                              </div>
                              <div className={`h-1 flex-1 rounded-full ${card.accentColor} opacity-20`} />
                            </div>

                            <div>
                              <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">{card.label}</h3>
                              <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">{card.desc}</p>
                              <p className="text-gray-500 dark:text-gray-500 text-sm">{card.duration}</p>
                            </div>

                            <div className="space-y-3 mt-6">
                              <button
                                  onClick={(e) => handleButtonClick(e, 'Curriculum', card.label)}
                                  className="w-full px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-slate-700 font-medium transition-all duration-200"
                              >
                                View Curriculum
                              </button>
                              <button
                                  onClick={(e) => handleButtonClick(e, 'Apply', card.label)}
                                  className="w-full px-6 py-3 rounded-xl bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 font-medium transition-all duration-200 shadow-md"
                              >
                                Apply Now
                              </button>
                            </div>
                          </div>
                        </div>
                    )})}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-12 h-12 rounded-full bg-surface border-2 border-border shadow-lg flex items-center justify-center hover:bg-overlay active:scale-95 transition-all z-10"
                  aria-label="Previous course"
              >
                <ChevronLeft className="w-6 h-6 text-text" />
              </button>

              <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-12 h-12 rounded-full bg-surface border-2 border-border shadow-lg flex items-center justify-center hover:bg-overlay active:scale-95 transition-all z-10"
                  aria-label="Next course"
              >
                <ChevronRight className="w-6 h-6 text-text" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {cards.map((card, index) => (
                  <button
                      key={card.id}
                      onClick={() => setMobileIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                          index === mobileIndex
                              ? 'bg-primary w-8'
                              : 'bg-border w-2 hover:bg-muted'
                      }`}
                      aria-label={`Go to ${card.label}`}
                  />
              ))}
            </div>
          </div>
        </div>
    );
  }

  // Desktop Spatial Grid
  const { template, positions } = getCurrentLayout();

  return (
      <div className="w-full py-12 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-text">Programs We Offer</h2>

          <div
              className="w-full grid gap-2 transition-all duration-700 ease-out"
              style={{
                gridTemplate: template,
                aspectRatio: '16 / 9',
                maxHeight: '600px'
              }}
          >
            {cards.map((card) => {
              const pos = positions[card.id];
              const isActive = activeCard === card.id;
              const Icon = card.icon;

              return (
                  <div
                      key={card.id}
                      className="cursor-pointer transition-all duration-700 ease-out"
                      style={{
                        gridColumn: `${pos.col + 1} / span ${pos.colSpan}`,
                        gridRow: `${pos.row + 1} / span ${pos.rowSpan}`
                      }}
                      onClick={() => handleCardClick(card.id)}
                  >
                    <div
                        className={`w-full h-full bg-white dark:bg-slate-800 border-2 ${
                            isActive ? 'border-blue-500' : 'border-gray-200 dark:border-slate-700'
                        } rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group`}
                    >
                      {/* Subtle Hover Effect */}
                      <div className="absolute inset-0 bg-gray-50 dark:bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Accent Corner with Icon */}
                      <div className={`absolute top-3 right-3 ${card.accentColor} ${
                          isActive ? 'p-4 rounded-2xl' : 'p-2 rounded-lg'
                      } transition-all duration-700`}>
                        <Icon className={`text-white ${isActive ? 'w-8 h-8' : 'w-4 h-4'} transition-all duration-700`} />
                      </div>

                      {/* Content */}
                      <div className="z-10 text-center px-4 flex flex-col items-center justify-center h-full">
                        <h3
                            className={`font-bold text-gray-900 dark:text-gray-100 transition-all duration-700 ${
                                isActive ? 'text-3xl mb-2' : 'text-xl'
                            }`}
                        >
                          {card.label}
                        </h3>

                        {isActive && (
                            <div className="animate-in fade-in duration-500 space-y-3 mt-2">
                              <p className="text-gray-600 dark:text-gray-400 text-sm">{card.desc}</p>
                              <p className="text-gray-500 dark:text-gray-500 text-xs font-medium">{card.duration}</p>

                              <div className="flex gap-2 justify-center mt-4">
                                <button
                                    onClick={(e) => handleButtonClick(e, 'Curriculum', card.label)}
                                    className="px-4 py-2 text-sm border-2 border-gray-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg font-medium transition-all duration-200"
                                >
                                  Curriculum
                                </button>
                                <button
                                    onClick={(e) => handleButtonClick(e, 'Apply', card.label)}
                                    className="px-4 py-2 text-sm bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-200 shadow-md"
                                >
                                  Apply Now
                                </button>
                              </div>
                            </div>
                        )}
                      </div>
                    </div>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
  );
};

export default SpatialGrid;