import { useState } from 'react';
import { CategoryPage } from './pages/CategoryPage';
import { GamePage } from './pages/GamePage';

function gameApp() {

  const [selectedCategoryKey, setSelectedCategoryKey] = useState(null);

  if (!selectedCategoryKey) {
    return <CategoryPage onSelect={setSelectedCategoryKey} />;
  }

  return (
    <div> 
      <GamePage
        categoryKey={selectedCategoryKey}
        onPickNewCategory={() => setSelectedCategoryKey(null)}
      />
    </div>
  )
}

export default gameApp
