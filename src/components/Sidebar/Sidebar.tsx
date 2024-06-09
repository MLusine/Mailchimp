import { DragEvent } from "react";
import useStyles from "./styles";

interface Field {
  id: string;
  name: string;
}

interface SidebarProps {
  hiddenFields: Field[];
  handleDragStart: (e: DragEvent, id: string) => void;
  handleAddItem: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  hiddenFields,
  handleDragStart,
  handleAddItem,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.sidebar}>
      <h2>Content</h2>
      <div className={styles.content}>
        {hiddenFields.map((field) => (
          <div
            key={field.id}
            className={styles.contentItem}
            draggable
            onDragStart={(e) => handleDragStart(e, field.id)}
            onClick={() => handleAddItem(field.id)}
          >
            <h5>{field.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
