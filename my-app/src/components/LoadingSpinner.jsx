import React from 'react';

export const LoadingSpinner = React.memo(() => (
  <div className="state-loading">⏳ Procesando tomos arcanos y datos elementales...</div>
));

LoadingSpinner.displayName = 'LoadingSpinner';