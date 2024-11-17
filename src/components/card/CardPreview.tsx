import { makeStyles, tokens } from "@fluentui/react-components";
import { CardPreview as FluentPreview } from "@fluentui/react-components";
import { CardPreviewProperties } from "./CardPreviewProperties";

const useStyles = makeStyles({
  emptyCard: {
    width: "auto",
    minHeight: "100px",
    backgroundColor: tokens.colorNeutralBackground1Hover,
  },
});

export function CardPreview (properties: CardPreviewProperties): React.JSX.Element {
  const styles = useStyles();
  return (
    <FluentPreview>
    {properties.backgroundImage ? <img
        src={properties.backgroundImage}
    /> : <div className={styles.emptyCard}></div>}
    </FluentPreview>
  );
};