import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  sidebar: {
    padding: 10,
    height: "100%",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "80px 80px 80px",
    gap: 10,
  },
  contentItem: {
    width: 70,
    height: 70,
    border: "1px solid #e7e7e7",
    borderRadius: 5,
    padding: 5,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default useStyles;
