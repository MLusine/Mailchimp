import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    border: "1px solid #f2f2f2",
    background: "#e3e2e2",
    height: "100%",
    overflow: "auto",
  },
  content: {
    width: "50%",
    minHeight: "50%",
    background: "#fff",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: 10,
  },
  item: {
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
