import React from "react";
import { makeStyles, tokens } from "@fluentui/react-components";
import Page from "../../components/page/Page";
import { Globe48Regular, Person48Regular } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";

export default function HomePage(): React.JSX.Element {

  const styles = useStyles();
  const navigate = useNavigate(); 

	return (
		<Page documentTitle="Web Chat Home">
            <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Willkommen zum WebChat</h1>
        <p className={styles.subtitle}>Entdecke und Unterhalte dich mit Menschen aus aller Welt!</p>
      </header>

      {/* Hauptinhalt */}
      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>So einfach geht´s!</h2>
          <p className={styles.text}>
            Schreibe im globalen Chat oder mit einzelnen Personen um diese besser kennen zu lernen.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Letzte Chats</h2>
          <p className={styles.text}>
            Hier kannst du deine letzten Unterhaltungen direkt weiterführen!
          </p>
          <div className={styles.ChatContainer}>
            <Chat title="Global Chat" path="/chats/global"/>
            <div className={styles.Divider}/>
            <Chat title="Chat 1" path="/chats/individuals"/>
            <Chat title="Chat 2" path="/chats/individuals"/>
            <Chat title="Chat 3" path="/chats/individuals"/>
            <Chat title="Chat 4" path="/chats/individuals"/>
            <Chat title="Chat 5" path="/chats/individuals" />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Noch Fragen?</h2>
          <p className={styles.text}>
            Dann findest du <a className={styles.Link} onClick={() => navigate("/about")}>hier</a> alles was du über uns wissen musst. Falls du Hilfe brauchst dann schreib unserem Support!
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2024 Meine Website. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
            
		</Page>
	);
}

interface ChatProps {
    title: string;
    path: string;
}

const Chat: React.FC<ChatProps> = ({ title, path }) => {
  const styles = useStyles()
  const navigate = useNavigate()
    return(
        <div className={styles.ChatFrame} onClick={() => navigate(path)}>
            {path.includes("global") ? <Globe48Regular className={styles.Icon}/> : <Person48Regular className={styles.Icon}/>}
            <h3 className={styles.IconName}>{title}</h3>
        </div>
    )
};
const useStyles = makeStyles({
    ChatFrame: {
      borderLeftColor: tokens.colorNeutralBackground1,
      border: '2px solid',
      borderRadius: '10px',
      padding: tokens.spacingHorizontalXXL,
      width: '200px',
      margin: tokens.spacingHorizontalM,
      cursor: "pointer"
    },
    Icon: {
      margin: tokens.spacingHorizontalXXS,
      marginTop: tokens.spacingHorizontalL,
      marginBottom: tokens.spacingHorizontalL
    },
    IconName:{
      fontSize: '1.5em',
      color: tokens.colorBrandForeground1,
      marginBottom: tokens.spacingHorizontalS
    },
    Divider: {
      borderLeftColor: tokens.colorNeutralBackground1,
      borderLeft: "2px solid",
      minHeight: "100px"
    },
    ChatContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      padding: tokens.spacingHorizontalXL
    },
    Link: {
      cursor: "pointer",
      textDecoration: "underline",
      color: tokens.colorBrandForeground1
    },
    /*  */
    container: {
      fontFamily: 'Arial, sans-serif',
      color: tokens.colorNeutralBackgroundInverted,
      textAlign: 'center',
      margin: 0,
      padding: 0,
    },
    header: {
      backgroundColor: tokens.colorBrandForeground1,
      padding: '50px 0',
      color: tokens.colorNeutralBackgroundInverted,
      minHeight: "10%",
    },
    title: {
      fontSize: '3em',
      margin: tokens.spacingHorizontalS,
    },
    subtitle: {
      fontSize: '1.5em',
      marginTop: tokens.spacingHorizontalL,
    },
    main: {
      padding: tokens.spacingHorizontalL,
      minHeight: "70%", 
    },
    section: {
      marginTop: tokens.spacingHorizontalXXXL,
      marginBottom: tokens.spacingHorizontalXXXL,
    },
    sectionTitle: {
      fontSize: '2em',
      color: tokens.colorBrandForeground1,
      margin: tokens.spacingHorizontalXXL
    },
    text: {
      fontSize: '1.2em',
    },
    footer: {
      backgroundColor: tokens.colorNeutralBackgroundInverted,
      color: tokens.colorBrandForeground1,
      padding: '20px 0',
    },
})