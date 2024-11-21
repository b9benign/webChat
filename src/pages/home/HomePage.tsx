import { makeStyles, tokens } from "@fluentui/react-components";
import React from "react";
import Page from "../../components/page/Page";
import useAuthenticationContext from "../../context/authentication/useAuthenticationContext";
import GlobalChatCard from "../../components/example-cards/GlobalChatCard";

export default function HomePage(): React.JSX.Element {

	const { titleWrapper, titleStyles, sectionWrapper, sectionHeader, cardsWrapper } = useStyles();
	const { user } = useAuthenticationContext();

	return (
		<Page documentTitle="Web Chat Home">
			<div className={titleWrapper}>
				<h1 className={titleStyles}>Welcome, {user?.displayName} 💖</h1>
			</div>
			<section className={sectionWrapper}>
				<p className={sectionHeader}>Most recent chats</p>
				<div className={cardsWrapper}>
					<GlobalChatCard />
				</div>
			</section>
		</Page>
	);
}

const useStyles = makeStyles({
	titleWrapper: {
		width: "90%",
		height: "200px",
		margin: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		borderBottom: `2px solid ${tokens.colorBrandForeground1}`
	},
	titleStyles: {
		textAlign: "center",
		fontSize: tokens.fontSizeHero900,
		lineHeight: "50px"
	},
	sectionWrapper: {
		margin: "60px auto 0 auto",
		width: "90%",
		padding: tokens.spacingHorizontalL,
		borderRadius: tokens.borderRadiusLarge
	},
	sectionHeader: {
		fontSize: tokens.fontSizeBase500,
		marginBottom: tokens.spacingHorizontalS
	},
	cardsWrapper: {
		display: "flex",
		flexDirection: "row",
		gap: tokens.spacingHorizontalL
	}
})