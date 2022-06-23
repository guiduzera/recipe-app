import React from 'react';
import Button from 'react-bootstrap/Button';

export default function ButtonDetail() {
  return (
    <div className="p-2">
      <Button
        variant="primary"
        size="lg"
        data-testid="start-recipe-btn"
        className="w-100"
      >
        Start Recipe

      </Button>
    </div>
  );
}
