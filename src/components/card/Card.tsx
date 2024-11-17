import { makeStyles, tokens } from "@fluentui/react-components";
import { Card as FluentCard } from "@fluentui/react-components";
import { CardProperties } from "./CardProperties";

const useStyles = makeStyles({
  card: {
    margin: tokens.spacingHorizontalL,
    width: "300px",
    maxWidth: "100%",
  },
});

export function Card (properties: CardProperties): React.JSX.Element {
  const styles = useStyles();
  return (
    <FluentCard className={styles.card}>
      {properties.header}
      {properties.preview}
      {properties.footer}
    </FluentCard>
  );
};