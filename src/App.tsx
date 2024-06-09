import { useState, DragEvent } from "react";
import { createUseStyles } from "react-jss";
import Editor from "./components/Editor/Editor";
import Sidebar from "./components/Sidebar/Sidebar";

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "4fr 1fr",
    gap: 10,
    height: "100vh",
    width: "100dvw",
    overflow: "auto",
  },
});

interface Field {
  id: string;
  name: string;
}

function App() {
  const styles = useStyles();

  const [shownFields, setShownFields] = useState<Field[]>([]);
  const [hiddenFields, setHiddenFields] = useState<Field[]>([
    { id: "heading", name: "Heading" },
    { id: "paragraph", name: "Paragraph" },
    { id: "button", name: "Button" },
    { id: "image", name: "Image" },
    { id: "input", name: "Input options" },
  ]);

  const handleDragStart = (e: DragEvent, id: string) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    const fieldId = e.dataTransfer.getData("text/plain");

    const field = hiddenFields.find((f) => f.id === fieldId);
    if (field && !shownFields.some((f) => f.id === fieldId)) {
      setShownFields([...shownFields, field]);
      setHiddenFields(hiddenFields.filter((f) => f.id !== fieldId));
    }
  };

  const reorderFields = (draggedId: string, dropIndex: number) => {
    const draggedIndex = shownFields.findIndex(
      (field) => field.id === draggedId
    );
    if (draggedIndex === -1) return;

    const newShownFields = [...shownFields];
    const [draggedField] = newShownFields.splice(draggedIndex, 1);
    newShownFields.splice(dropIndex, 0, draggedField);

    setShownFields(newShownFields);
  };

  const handleAddItem = (id: string) => {
    const field = hiddenFields.find((f) => f.id === id);
    if (field && !shownFields.some((f) => f.id === id)) {
      setShownFields([...shownFields, field]);
      setHiddenFields(hiddenFields.filter((f) => f.id !== id));
    }
  };

  return (
    <div className={styles.container}>
      <Editor
        shownFields={shownFields}
        handleDrop={handleDrop}
        reorderFields={reorderFields}
      />
      <Sidebar
        hiddenFields={hiddenFields}
        handleDragStart={handleDragStart}
        handleAddItem={handleAddItem}
      />
    </div>
  );
}

export default App;
