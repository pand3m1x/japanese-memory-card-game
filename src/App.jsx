import { useState } from 'react';
import { CategoryPage } from './pages/CategoryPage.jsx';
import { GamePage } from './pages/GamePage.jsx';

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
