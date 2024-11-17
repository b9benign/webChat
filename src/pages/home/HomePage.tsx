import React from "react";
import { makeStyles, tokens } from "@fluentui/react-components";
import Page from "../../components/page/Page";
import { Globe32Regular, PeopleTeamRegular, Person32Regular } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/card/Card";
import { CardHeader } from "../../components/card/CardHeader";
import { CardPreview } from "../../components/card/CardPreview";
import { CardFooter } from "../../components/card/CardFooter";

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
          <div className={styles.chatContainer}>
            <Card 
              header={<CardHeader header={"Global Chat"} description={"Chatte mit Allen... ALLEN"} image={<Globe32Regular />} />}
              preview={<CardPreview />} 
              footer={<CardFooter onClick={() => navigate("/chats/global")}/>}
            />
            <div className={styles.divider}/>
            <Card 
              header={<CardHeader header={"Team Chat"} description={"Gruppenchats, mit deinen Liebsten"} image={<PeopleTeamRegular fontSize={"32px"}/>} />}
              preview={<CardPreview />} 
              footer={<CardFooter onClick={() => navigate("/chats/groups")}/>}
            />
            <Card 
              header={<CardHeader header={"Einzel Chat"} description={"Privatnachrichten"} image={<Person32Regular />} />}
              preview={<CardPreview />} 
              footer={<CardFooter onClick={() => navigate("/chats/individuals")}/>}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Noch Fragen?</h2>
          <p className={styles.text}>
            Dann findest du <a className={styles.link} onClick={() => navigate("/about")}>hier</a> alles was du über uns wissen musst. Falls du Hilfe brauchst dann schreib unserem Support!
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

const useStyles = makeStyles({
    chatFrame: {
      borderLeftColor: tokens.colorNeutralBackground1,
      border: '2px solid',
      borderRadius: '10px',
      padding: tokens.spacingHorizontalXXL,
      width: '200px',
      margin: tokens.spacingHorizontalM,
      cursor: "pointer"
    },
    icon: {
      margin: tokens.spacingHorizontalXXS,
      marginTop: tokens.spacingHorizontalL,
      marginBottom: tokens.spacingHorizontalL
    },
    iconName:{
      fontSize: '1.5em',
      color: tokens.colorBrandForeground1,
      marginBottom: tokens.spacingHorizontalS
    },
    divider: {
      borderLeftColor: tokens.colorNeutralBackground1,
      borderLeft: "2px solid",
      minHeight: "100px"
    },
    chatContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      padding: tokens.spacingHorizontalXL
    },
    link: {
      cursor: "pointer",
      textDecoration: "underline",
      color: tokens.colorBrandForeground1
    },
    container: {
      fontFamily: 'Arial, sans-serif',
      color: tokens.colorNeutralForeground1,
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