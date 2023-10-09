"use client";

import styles from "./RecipeEditFormDirections.module.scss";

export default function RecipeEditFormDirections({
  value: directions,
  onChange,
  className,
}) {
  function updateDirection(direction, idxToUpdate) {
    onChange(directions.map((v, idx) => (idx === idxToUpdate ? direction : v)));
  }

  function addDirection() {
    onChange([...directions, ""]);
  }

  function removeDirection(idxToRemove) {
    onChange(directions.filter((v, idx) => idx !== idxToRemove));
  }

  return (
    <>
      {directions.map((direction, index) => (
        <div key={index} className={[className, styles.direction].join(" ")}>
          <textarea
            name={`direction-${index}`}
            value={direction}
            onChange={(e) => updateDirection(e.target.value, index)}
          />
          <button type="button" onClick={addDirection} className={styles.add}>
            +
          </button>
          {directions.length > 1 && (
            <button type="button" onClick={(e) => removeDirection(index)}>
              x
            </button>
          )}
        </div>
      ))}
    </>
  );
}
