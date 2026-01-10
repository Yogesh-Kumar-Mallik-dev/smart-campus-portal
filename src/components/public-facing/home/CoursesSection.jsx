import React, { useState } from 'react';

const SpatialGrid = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cards = [
    { id: 'poly', label: 'Polytechnic', color: 'from-violet-500 to-violet-600' },
    { id: 'btech', label: 'B.Tech', color: 'from-blue-500 to-blue-600' },
    { id: 'mtech', label: 'M.Tech', color: 'from-cyan-500 to-cyan-600' },
    { id: 'bca', label: 'BCA', color: 'from-pink-500 to-pink-600' },
    { id: 'mca', label: 'MCA', color: 'from-rose-500 to-rose-600' },
    { id: 'bba', label: 'BBA', color: 'from-amber-500 to-amber-600' },
    { id: 'mba', label: 'MBA', color: 'from-purple-500 to-purple-600' },
    { id: 'bpharm', label: 'B.Pharm', color: 'from-green-500 to-green-600' },
    { id: 'mpharm', label: 'M.Pharm', color: 'from-emerald-500 to-emerald-600' }
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

  if (isMobile) {
    return (
        <div className="w-full py-12 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">Courses We Offer</h2>
            <div className="relative h-80 flex items-center justify-center">
              {cards.map((card, idx) => (
                  <div
                      key={card.id}
                      className={`absolute w-full max-w-xs h-64 transition-all duration-500 ease-out ${
                          activeCard === null
                              ? idx === 0
                                  ? 'opacity-100 scale-100 z-10'
                                  : 'opacity-0 scale-90 pointer-events-none'
                              : activeCard === card.id
                                  ? 'opacity-100 scale-100 z-10'
                                  : 'opacity-0 scale-90 pointer-events-none'
                      }`}
                  >
                    <div
                        className={`w-full h-full bg-gradient-to-br ${card.color} rounded-xl shadow-2xl p-6 flex flex-col items-center justify-center cursor-pointer`}
                        onClick={() => handleCardClick(card.id)}
                    >
                      <h3 className="text-4xl font-bold text-white mb-2">{card.label}</h3>
                      <p className="text-white/80 text-center text-sm">
                        {activeCard === card.id ? 'Tap to explore other courses' : 'Tap to learn more'}
                      </p>
                    </div>
                  </div>
              ))}

              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 z-20">
                {cards.map((card) => (
                    <button
                        key={card.id}
                        onClick={() => setActiveCard(card.id)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            (activeCard === card.id || (activeCard === null && card.id === 'poly'))
                                ? 'bg-white w-6'
                                : 'bg-white/40'
                        }`}
                    />
                ))}
              </div>
            </div>
          </div>
        </div>
    );
  }

  const { template, positions } = getCurrentLayout();

  return (
      <div className="w-full py-4 px-4 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-3 text-text">Courses We Offer</h2>
          <div
              className="w-full grid gap-1 transition-all duration-700 ease-out"
              style={{
                gridTemplate: template,
                aspectRatio: '16 / 9'
              }}
          >
            {cards.map((card) => {
              const pos = positions[card.id];
              const isActive = activeCard === card.id;

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
                        className={`w-full h-full bg-gradient-to-br ${card.color} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center relative overflow-hidden group`}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                      <h3
                          className={`font-bold text-white z-10 transition-all duration-700 ${
                              isActive ? 'text-2xl mb-1.5' : 'text-sm'
                          }`}
                      >
                        {card.label}
                      </h3>

                      {isActive && (
                          <div className="z-10 text-white/90 text-center px-3 animate-in fade-in duration-500">
                            <p className="text-xs mb-1.5">Explore program details</p>
                            <div className="flex gap-1.5 justify-center">
                              <button className="px-2 py-0.5 text-xs bg-white/20 rounded hover:bg-white/30 transition-colors">
                                Curriculum
                              </button>
                              <button className="px-2 py-0.5 text-xs bg-white/20 rounded hover:bg-white/30 transition-colors">
                                Apply
                              </button>
                            </div>
                          </div>
                      )}
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