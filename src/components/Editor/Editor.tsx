import { DragEvent, useState } from "react";
import useStyles from "./styles";

interface Field {
  id: string;
  name: string;
}

interface EditorProps {
  shownFields: Field[];
  handleDrop: (e: DragEvent) => void;
  reorderFields: (draggedId: string, dropIndex: number) => void;
}

const Editor: React.FC<EditorProps> = ({
  shownFields,
  handleDrop,
  reorderFields,
}) => {
  const styles = useStyles();
  const [draggedFieldId, setDraggedFieldId] = useState<string | null>(null);

  const handleDragStart = (e: DragEvent, id: string) => {
    e.dataTransfer.setData("text/plain", id);
    setDraggedFieldId(id);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDropInEditor = (e: DragEvent, dropIndex: number) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData("text/plain");

    if (shownFields.some((field) => field.id === draggedId)) {
      reorderFields(draggedId, dropIndex);
    } else {
      handleDrop(e);
      const newIndex = shownFields.length;
      reorderFields(draggedId, newIndex);
    }

    setDraggedFieldId(null);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDropInEditor(e, shownFields.length)}
      >
        {shownFields.map((field, index) => (
          <div
            key={field.id}
            className={styles.item}
            draggable
            onDragStart={(e) => handleDragStart(e, field.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDropInEditor(e, index)}
          >
            <h5>{field.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Editor;
