import { makeStyles, Button, tokens } from "@fluentui/react-components";
import { ArrowReplyRegular } from "@fluentui/react-icons";
import { Card, CardFooter, CardHeader, CardPreview } from "@fluentui/react-components";
import { CardProperties } from "./CardProperties";

const useStyles = makeStyles({
  card: {
    margin: tokens.spacingHorizontalL,
    width: "360px",
    maxWidth: "100%",
  },
  emptyCard: {
    width: "auto",
    minHeight: "100px",
    backgroundColor: tokens.colorNeutralBackground1Hover,
  },
});

export function DefaultCard (properties: CardProperties): React.JSX.Element {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardHeader
        image={ properties.image }
        header={ properties.header }
        description={ properties.description }
      />

      <CardPreview>
        {properties.backgroundImage ? <img
          src={properties.backgroundImage}
        /> : <div className={styles.emptyCard}></div>}
      </CardPreview>

      <CardFooter>
        <Button icon={<ArrowReplyRegular fontSize={16} />} onClick={properties.onClick}>Go To Chat</Button>
      </CardFooter>
    </Card>
  );
};