import React, { useState } from 'react';

const FilterComponent = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState([]);

  const regions = ["남구", "수영구", "북구", "진구"]; // 여기에 필요한 지역구 목록을 추가하세요

  const handleRegionClick = () => {
    setShowOptions(!showOptions);
  };

  const handleRegionToggle = (region) => {
    if (selectedRegions.includes(region)) {
      setSelectedRegions(selectedRegions.filter((item) => item !== region));
    } else {
      setSelectedRegions([...selectedRegions, region]);
    }
  };

  return (
    <div>
      <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', cursor: 'pointer',display: 'flex', justifyContent: 'center'}} onClick={handleRegionClick}>
        지역 {showOptions ? '닫기' : '열기'}
      </div>
      {showOptions && (
        <div>
          {regions.map((region) => (
            <label key={region}>
              <input
                type="checkbox"
                value={region}
                checked={selectedRegions.includes(region)}
                onChange={() => handleRegionToggle(region)}
              />
              {region}
            </label>
          ))}
          <p>선택된 지역: {selectedRegions.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;