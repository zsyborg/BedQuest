import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text, Span, Input, Button, Section, Icon, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { IoMdArrowUp } from "react-icons/io";
import { MdArrowForward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				You choose are great vacation
			</title>
			<meta name={"description"} content={"Anyone can build a vacation, we build experiences"} />
			<meta property={"og:title"} content={"You choose are great vacation"} />
			<meta property={"og:description"} content={"Anyone can build a vacation, we build experiences"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/OGimage.png?v=2021-09-23T20:32:10.363Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/favicon.png?v=2021-09-23T20:33:18.314Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/32x32.png?v=2021-09-23T20:33:26.450Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/32x32.png?v=2021-09-23T20:33:26.450Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/32x32.png?v=2021-09-23T20:33:26.450Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/32x32.png?v=2021-09-23T20:33:26.450Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/270.png?v=2021-09-23T20:33:32.819Z"} />
			<meta name={"msapplication-TileColor"} content={"#0CAD1C"} />
		</Helmet>
		<Section padding="18px 0 18px 0" quarkly-title="Header">
			<Override slot="SectionContent" justify-content="space-around" flex-direction="row" align-items="center" />
			<Image
				max-height="80px"
				src="https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/logo.svg?v=2021-09-23T21:07:52.037Z"
				width="25%"
				height="auto"
				lg-max-width="150px"
				sm-width="50%"
			/>
			<Components.QuarklycommunityKitMobileSidePanel width="50%">
				<Override slot="Button Text" lg-display="none" />
				<Override slot="Button Icon" size="32px" />
				<Box display="flex" justify-content="center" align-items="center" md-flex-direction="column">
					<Link
						lg-margin="0px 6px 0px 6px"
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
					>
						Service
					</Link>
					<Link
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
						lg-margin="0px 6px 0px 6px"
						href="#"
						text-decoration-line="initial"
						color="--dark"
					>
						About
					</Link>
					<Link
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						lg-margin="0px 6px 0px 6px"
						href="#"
					>
						Advisors
					</Link>
					<Link
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						lg-margin="0px 6px 0px 6px"
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
					>
						Contact
					</Link>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
			<Components.QuarklycommunityKitPopup display="flex" justify-content="flex-end" md-display="none" width="25%">
				<Override
					slot="Button Open"
					lg-padding="13px 20px 13px 20px"
					width="180px"
					lg-margin="0px 16px 0px 0px"
					border-radius="10px"
					border-width="1px"
					background="rgba(0, 119, 204, 0)"
					color="--dark"
					font="normal 700 16px/1.5 --fontFamily-googleManrope"
					padding="13px 45px 13px 45px"
					border-style="solid"
					border-color="--color-dark"
					lg-width="150px"
				>
					Order Now
				</Override>
				<Override
					slot="Wrapper"
					padding="32px 0px 0px 0px"
					max-width="700px"
					border-width="1px"
					border-style="solid"
					border-color="--color-grey"
					border-radius="10px"
				/>
				<Override slot="Button Close" size="36px" />
				<Box padding="0px 16px 16px 16px" display="flex" flex-direction="column">
					<Box padding="0px 16px 16px 16px">
						<Text margin="0px 0px 16px 0px" font="--headline3">
							Let's plan your next vacation
						</Text>
						<Text margin="0px 0px 48px 0px" font="--lead">
							Have a question about your future journey? Wondering about one of our destinations? Ask away! That’s what we’re here for.
						</Text>
						<Text font="--headline4" margin="0px 0px 0px 0px">
							Request details
						</Text>
					</Box>
					<Components.QuarklycommunityKitNetlifyForm display="flex" flex-wrap="wrap" width="100%" successMessage="Thanks for you reply">
						<Box flex-wrap="wrap" display="flex">
							<Box width="50%" display="flex" padding="16px 16px 16px 16px" flex-direction="column">
								<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope">
									First name{" "}
									<Span color="--green">
										*
									</Span>
								</Text>
								<Input
									border-color="--color-light"
									border-width="1px"
									border-radius="10px"
									required
									padding="14px 16px 14px 16px"
									placeholder="Bill"
									name="Name"
									type="text"
								/>
							</Box>
							<Box width="50%" display="flex" padding="16px 16px 16px 16px" flex-direction="column">
								<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope">
									Last name (optional)
								</Text>
								<Input
									border-radius="10px"
									name="Last name"
									padding="14px 16px 14px 16px"
									placeholder="Salliwan"
									type="text"
									border-color="--color-light"
									border-width="1px"
								/>
							</Box>
							<Box flex-direction="column" width="50%" display="flex" padding="16px 16px 16px 16px">
								<Text font="600 24px/1.3 --fontFamily-googleManrope" margin="0px 0px 8px 0px">
									Email address{"\n\n "}
									<Span
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										color="--green"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
									>
										*
									</Span>
								</Text>
								<Input
									padding="14px 16px 14px 16px"
									placeholder="billslwn@mailbox.com"
									name="mail"
									type="email"
									border-color="--color-light"
									border-width="1px"
									border-radius="10px"
									required
								/>
							</Box>
							<Box width="50%" display="flex" padding="16px 16px 16px 16px" flex-direction="column">
								<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope">
									Phone number (optional)
								</Text>
								<Input
									name="tel"
									type="tel"
									border-color="--color-light"
									border-width="1px"
									border-radius="10px"
									padding="14px 16px 14px 16px"
									placeholder="1 916 555-17-29"
								/>
							</Box>
							<Box
								padding="16px 16px 16px 16px"
								width="100%"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
							>
								<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope">
									Phone number (optional)
								</Text>
								<Input
									type="text"
									width="100%"
									placeholder="Enter your message here..."
									name="text"
									border-width="1px"
									border-radius="10px"
									as="textarea"
									min-height="150px"
									padding="14px 16px 14px 16px"
									border-color="--color-light"
								/>
								<Text margin="8px 0px 32px 0px" font="--base" color="--grey">
									5000 characters left
								</Text>
								<Button
									padding="12px 68px 12px 68px"
									font="--link"
									background="--color-green"
									border-radius="10px"
									hover-opacity=".8"
								>
									Submit
								</Button>
							</Box>
						</Box>
					</Components.QuarklycommunityKitNetlifyForm>
				</Box>
			</Components.QuarklycommunityKitPopup>
		</Section>
		<Section padding="60px 0 20px 0" quarkly-title="HeroBlock">
			<Text
				color="--dark"
				lg-font="normal 800 40px/1.2 &quot;Manrope&quot;, sans-serif"
				md-font="normal 800 28px/1.2 &quot;Manrope&quot;, sans-serif"
				margin="0px 0px 0px 0px"
				font="--headline1"
			>
				ANYONE CAN BUILD A VACATION, WE BUILD EXPERIENCES
			</Text>
			<Image
				max-height="600px"
				object-position="0% 80%"
				lg-max-height="300px"
				md-max-height="200px"
				sm-max-height="150px"
				src="https://images.unsplash.com/photo-1548957175-84f0f9af659e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1764&q=80"
				width="100%"
				object-fit="cover"
				margin="32px 0px 0px 0px"
				srcSet="https://images.unsplash.com/photo-1548957175-84f0f9af659e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1548957175-84f0f9af659e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1548957175-84f0f9af659e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1548957175-84f0f9af659e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1548957175-84f0f9af659e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1548957175-84f0f9af659e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1548957175-84f0f9af659e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Section>
		<Section padding="28px 0 74px 0" md-padding="28px 0 28px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="40%"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--headline2"
					color="--dark"
					lg-font="normal 700 28px/1.2 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 700 22px/1.2 &quot;Manrope&quot;, sans-serif"
				>
					Our Services{" "}
					<Span
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						color="--green"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
					>
						&
						<br />
					</Span>
					Travel Specialties
				</Text>
			</Box>
			<Box
				md-width="100%"
				empty-min-height="64px"
				empty-border-color="LightGray"
				padding="0px 0px 0px 10%"
				width="60%"
				display="flex"
				md-padding="0px 0px 0px 0px"
				md-margin="32px 0px 0px 0px"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--lead"
					color="--dark"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					Our company was founded by our expert team of "Travel Advisors" to provide unique, exceptional service to our clients and share our passion for travel with them. Our team travels a lot all over the world to deliver our clients first-hand information about new destinations, hotels, local restaurants, clubs, bars, pubs, beaches, and other places to see. We are proud to bring you outstanding experiences wherever and whenever you travel.
				</Text>
			</Box>
		</Section>
		<Section padding="54px 0 74px 0" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				padding="0px 16px 0px 0px"
				width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
			>
				<Text
					md-font="normal 600 18px/1.2 &quot;Manrope&quot;, sans-serif"
					md-margin="0px 0px 24px 0px"
					margin="0px 0px 48px 0px"
					font="--headline3"
					color="--dark"
					lg-font="normal 600 24px/1.2 &quot;Manrope&quot;, sans-serif"
				>
					Popular destinations
				</Text>
			</Box>
			<Box
				md-width="50%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="30%"
				padding="0px 16px 0px 0px"
			>
				<Image
					width="100%"
					max-width="400px"
					lg-min-height="300px"
					sm-min-height="188px"
					src="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
					min-height="600px"
					object-fit="cover"
					object-position="40% 0%"
					srcSet="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text
					margin="16px 0px 16px 0px"
					font="--headline4"
					lg-font="600 18PX/1.3 &quot;Manrope&quot;, sans-serif"
					md-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif"
					md-margin="8px 0px 0px 0px"
				>
					Africa
				</Text>
			</Box>
			<Box
				width="70%"
				padding="0px 0px 0px 16px"
				md-width="50%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
			>
				<Image
					object-fit="cover"
					width="100%"
					lg-min-height="390px"
					sm-min-height="221px"
					src="https://images.unsplash.com/photo-1528397659400-9da613e72579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
					min-height="778px"
					srcSet="https://images.unsplash.com/photo-1528397659400-9da613e72579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1528397659400-9da613e72579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1528397659400-9da613e72579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1528397659400-9da613e72579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1528397659400-9da613e72579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1528397659400-9da613e72579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1528397659400-9da613e72579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text
					margin="16px 0px 16px 0px"
					font="--headline4"
					lg-font="600 18PX/1.3 &quot;Manrope&quot;, sans-serif"
					md-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif"
					md-margin="8px 0px 0px 0px"
				>
					Asia
				</Text>
			</Box>
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				padding="32px 16px 0px 0px"
				width="33.333%"
				md-width="50%"
				empty-min-width="64px"
				empty-min-height="64px"
			>
				<Image
					min-height="544px"
					object-fit="cover"
					object-position="40% 0%"
					width="100%"
					max-width="400px"
					lg-min-height="272px"
					sm-min-height="221px"
					src="https://images.unsplash.com/photo-1584910226124-a6dc7e5deea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
					srcSet="https://images.unsplash.com/photo-1584910226124-a6dc7e5deea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1584910226124-a6dc7e5deea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1584910226124-a6dc7e5deea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1584910226124-a6dc7e5deea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1584910226124-a6dc7e5deea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1584910226124-a6dc7e5deea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1584910226124-a6dc7e5deea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text
					md-margin="8px 0px 0px 0px"
					margin="16px 0px 0px 0px"
					font="--headline4"
					lg-font="600 18PX/1.3 &quot;Manrope&quot;, sans-serif"
					md-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif"
				>
					New Zealand
				</Text>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="33.333%"
				empty-min-width="64px"
				padding="32px 16px 0px 16px"
				md-width="50%"
				md-padding="32px 0px 0px 16px"
			>
				<Image
					lg-min-height="177px"
					src="https://images.unsplash.com/photo-1609971190265-ef3cc54b55ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
					min-height="353px"
					object-fit="cover"
					object-position="40% 0%"
					width="100%"
					max-width="400px"
					srcSet="https://images.unsplash.com/photo-1609971190265-ef3cc54b55ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1609971190265-ef3cc54b55ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1609971190265-ef3cc54b55ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1609971190265-ef3cc54b55ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1609971190265-ef3cc54b55ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1609971190265-ef3cc54b55ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1609971190265-ef3cc54b55ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text
					width="100%"
					lg-font="600 18PX/1.3 &quot;Manrope&quot;, sans-serif"
					md-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif"
					md-margin="8px 0px 0px 0px"
					margin="16px 0px 0px 0px"
					font="--headline4"
				>
					Europe
				</Text>
			</Box>
			<Box
				width="33.333%"
				padding="32px 0px 0px 16px"
				md-padding="32px 0px 0px 0px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-border-style="solid"
			>
				<Image
					min-height="450px"
					object-fit="cover"
					object-position="40% 0%"
					src="https://images.unsplash.com/photo-1494233892892-84542a694e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
					width="100%"
					max-width="400px"
					lg-min-height="225px"
					md-max-width="none"
					md-max-height="325px"
					sm-max-height="188px"
					srcSet="https://images.unsplash.com/photo-1494233892892-84542a694e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1494233892892-84542a694e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1494233892892-84542a694e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1494233892892-84542a694e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1494233892892-84542a694e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1494233892892-84542a694e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1494233892892-84542a694e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text
					md-margin="8px 0px 0px 0px"
					margin="16px 0px 0px 0px"
					font="--headline4"
					lg-font="600 18PX/1.3 &quot;Manrope&quot;, sans-serif"
					md-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif"
				>
					Australia & South Pacific
				</Text>
			</Box>
		</Section>
		<Section padding="54px 0 90px 0" overflow-x="hidden" overflow-y="hidden">
			<Text
				margin="0px 0px 32px 0px"
				font="--headline3"
				color="--dark"
				lg-font="normal 600 24px/1.2 &quot;Manrope&quot;, sans-serif"
				md-font="normal 600 18px/1.2 &quot;Manrope&quot;, sans-serif"
			>
				Our Travel Specialties
			</Text>
			<Components.QuarklycommunityKitCarousel
				showLink={false}
				max-width="415px"
				autoPlayIntervalProp="5s"
				slidesProp="10"
				overflow-x="visible"
				showHead
				showText={false}
				showDots={false}
				showArrows={false}
				overflow-y="visible"
				autoPlay
			>
				<Override slot="Slide Head 4">
					Ocean cruising
				</Override>
				<Override slot="Slide Image 7" src="https://images.unsplash.com/photo-1585911735226-1c39d1df845b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=534&q=80" />
				<Override slot="Slide Image 10" src="https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=540&q=80" />
				<Override slot="Slide Head 7">
					Private islands
				</Override>
				<Override slot="Slide Image 9" src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=550&q=80" />
				<Override
					slot="Slide Head"
					color="--dark"
					margin="0px 0px 0px 0px"
					font="600 24px/1.3 --fontFamily-googleManrope"
					lg-font="600 18px/1.3 --fontFamily-googleManrope"
					md-font="600 16px/1.3 --fontFamily-googleManrope"
					width="100%"
					text-align="left"
				/>
				<Override slot="Slide Image 1" src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=530&q=80" />
				<Override slot="Slide Image 2" src="https://images.unsplash.com/photo-1621373271317-3673c281cedc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=548&q=80" />
				<Override slot="Slide Image 3" src="https://images.unsplash.com/photo-1518560122155-9eae8eda7181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=532&q=80" />
				<Override slot="Slide Head 5">
					Food & Wine
				</Override>
				<Override slot="Slide Head 8">
					River cruising
				</Override>
				<Override slot="Slide Head 9">
					Safari & wildlife
				</Override>
				<Override slot="Slide Head 10">
					Spa & wellness
				</Override>
				<Override slot="Slide Image" padding="0px 35px 0px 0px" />
				<Override
					slot="Slide Content"
					width="100%"
					padding="0px 35px 0px 0px"
					top="auto"
					bottom="-58px"
					display="flex"
					justify-content="flex-start"
				/>
				<Override slot="Slide Head 1">
					Adventures
				</Override>
				<Override slot="Slide Head 2">
					Beach vacations
				</Override>
				<Override slot="Slide Image 5" src="https://images.unsplash.com/photo-1595057083625-5e33c9372312?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=570&q=80" />
				<Override slot="Slide Head 3">
					Honeymoons
				</Override>
				<Override slot="Slide Image 4" src="https://images.unsplash.com/photo-1598737285721-29346a5c9278?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=559&q=80" />
				<Override slot="Slide Head 6">
					Luxury hotels & resorts
				</Override>
				<Override slot="Slide Image 6" src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=540&q=80" />
				<Override slot="Slide Image 8" src="https://images.unsplash.com/photo-1520587963533-65f1795bde61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=548&q=80" />
			</Components.QuarklycommunityKitCarousel>
		</Section>
		<Section padding="70px 0 30px 0" lg-padding="30px 0 30px 0">
			<Text
				margin="0px 0px 18px 0px"
				font="--headline2"
				color="--dark"
				lg-font="normal 700 28px/1.2 &quot;Manrope&quot;, sans-serif"
				md-font="normal 700 22px/1.2 &quot;Manrope&quot;, sans-serif"
			>
				Learn More About Our Destinations
			</Text>
			<LinkBox
				align-items="flex-start"
				border-width="1px"
				margin="30px 0px 0px 0px"
				md-padding="8px 8px 40px 8px"
				md-flex-wrap="wrap"
				width="100%"
				display="flex"
				padding="32px 32px 32px 32px"
				border-color="--color-light"
				border-style="solid"
				lg-padding="16px 16px 16px 16px"
				md-position="relative"
				flex-direction="row"
			>
				<Box
					height="100%"
					display="flex"
					justify-content="space-between"
					md-height="auto"
					md-margin="0px 0px 16px 0px"
					width="65%"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 0px 0px 0px"
					lg-width="50%"
					md-width="100%"
				>
					<Box lg-width="90%" width="75%">
						<Text
							lg-font="normal 500 12px/1.5 &quot;Manrope&quot;, sans-serif"
							lg-margin="0px 0px 16px 0px"
							margin="0px 0px 32px 0px"
							font="--base"
							color="--grey"
							text-transform="uppercase"
						>
							9h ago by RACHEL MORRIS
						</Text>
						<Text
							lg-font="600 18px/1.3 &quot;Manrope&quot;, sans-serif"
							margin="0px 0px 16px 0px"
							font="--headline4"
							color="--dark"
							width="90%"
						>
							10 Things to Do on The Caribbean Island of Montserrat{"\n"}
						</Text>
						<Text margin="0px 0px 16px 0px" font="--lead" color="--dark" lg-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif">
							This tiny island is one of the region’s most stunning places. Once you see its black sand beaches, coral reefs, amazing mountains and hills, not to mention the various rare plants and animals, you are sure to want to come back here again and again. But unless you make $70,000 a year, visiting this paradise is currently out of the question.{"\n"}
						</Text>
					</Box>
					<Box
						color="--dark"
						hover-opacity=".8"
						md-position="absolute"
						md-bottom="8px"
						display="flex"
						align-items="center"
						flex-direction="row"
						justify-content="flex-start"
					>
						<Text margin="0px 8px 0px 0px" font="--link" color="inherit" lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif">
							Read article
						</Text>
						<Icon
							category="io"
							icon={IoMdArrowUp}
							color="inherit"
							transform="rotate(45deg)"
							margin="1px 0px 0px 0px"
						/>
					</Box>
				</Box>
				<Box width="35%" display="flex" lg-width="50%" md-width="100%">
					<Image
						min-height="336px"
						object-fit="cover"
						md-max-height="250px"
						md-min-height="16px"
						sm-height="200px"
						width="100%"
						src="https://images.unsplash.com/photo-1609098239495-86e3187115d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
						srcSet="https://images.unsplash.com/photo-1609098239495-86e3187115d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1609098239495-86e3187115d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1609098239495-86e3187115d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1609098239495-86e3187115d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1609098239495-86e3187115d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1609098239495-86e3187115d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1609098239495-86e3187115d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</LinkBox>
			<LinkBox
				lg-padding="16px 16px 16px 16px"
				md-padding="8px 8px 40px 8px"
				md-flex-wrap="wrap"
				margin="30px 0px 0px 0px"
				width="100%"
				align-items="flex-start"
				border-color="--color-light"
				border-style="solid"
				md-position="relative"
				flex-direction="row"
				display="flex"
				padding="32px 32px 32px 32px"
				border-width="1px"
			>
				<Box
					flex-direction="column"
					justify-content="space-between"
					padding="0px 0px 0px 0px"
					lg-width="50%"
					md-width="100%"
					width="65%"
					height="100%"
					display="flex"
					align-items="flex-start"
					md-height="auto"
					md-margin="0px 0px 16px 0px"
				>
					<Box lg-width="90%" width="75%">
						<Text
							text-transform="uppercase"
							lg-font="normal 500 12px/1.5 &quot;Manrope&quot;, sans-serif"
							lg-margin="0px 0px 16px 0px"
							margin="0px 0px 32px 0px"
							font="--base"
							color="--grey"
						>
							2d ago by ZACH MURPHY
						</Text>
						<Text
							margin="0px 0px 16px 0px"
							font="--headline4"
							color="--dark"
							width="90%"
							lg-font="600 18px/1.3 &quot;Manrope&quot;, sans-serif"
						>
							Insights into "Lost Tribe" Jewish Communities in India and Myanmar
						</Text>
						<Text lg-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif" margin="0px 0px 16px 0px" font="--lead" color="--dark">
							South and Southeast Asian communities, often overlooked, prevent a complete idea of Jewish identity by emphasizing its malleability.{"\n"}
						</Text>
					</Box>
					<Box
						align-items="center"
						flex-direction="row"
						justify-content="flex-start"
						color="--dark"
						hover-opacity=".8"
						md-position="absolute"
						md-bottom="8px"
						display="flex"
					>
						<Text lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif" margin="0px 8px 0px 0px" font="--link" color="inherit">
							Read article
						</Text>
						<Icon
							margin="1px 0px 0px 0px"
							category="io"
							icon={IoMdArrowUp}
							color="inherit"
							transform="rotate(45deg)"
						/>
					</Box>
				</Box>
				<Box width="35%" display="flex" lg-width="50%" md-width="100%">
					<Image
						src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
						min-height="336px"
						object-fit="cover"
						md-max-height="250px"
						md-min-height="16px"
						sm-height="200px"
						width="100%"
						srcSet="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</LinkBox>
			<LinkBox
				width="100%"
				padding="32px 32px 32px 32px"
				border-width="1px"
				border-style="solid"
				lg-padding="16px 16px 16px 16px"
				md-padding="8px 8px 40px 8px"
				md-flex-wrap="wrap"
				display="flex"
				align-items="flex-start"
				border-color="--color-light"
				md-position="relative"
				flex-direction="row"
				margin="30px 0px 0px 0px"
			>
				<Box
					flex-direction="column"
					padding="0px 0px 0px 0px"
					md-height="auto"
					width="65%"
					height="100%"
					display="flex"
					md-width="100%"
					md-margin="0px 0px 16px 0px"
					justify-content="space-between"
					align-items="flex-start"
					lg-width="50%"
				>
					<Box width="75%" lg-width="90%">
						<Text
							margin="0px 0px 32px 0px"
							font="--base"
							color="--grey"
							text-transform="uppercase"
							lg-font="normal 500 12px/1.5 &quot;Manrope&quot;, sans-serif"
							lg-margin="0px 0px 16px 0px"
						>
							3d ago by TAYLOR GIFT
						</Text>
						<Text
							margin="0px 0px 16px 0px"
							font="--headline4"
							color="--dark"
							width="90%"
							lg-font="600 18px/1.3 &quot;Manrope&quot;, sans-serif"
						>
							Croatia will lift restrictions on fully vaccinated travelers in December.
						</Text>
						<Text margin="0px 0px 16px 0px" font="--lead" color="--dark" lg-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif">
							Travelers who present a certificate proving they are fully vaccinated against coronavirus before boarding a flight will be able to fly to Croatia.{"\n"}
						</Text>
					</Box>
					<Box
						color="--dark"
						hover-opacity=".8"
						md-position="absolute"
						md-bottom="8px"
						display="flex"
						align-items="center"
						flex-direction="row"
						justify-content="flex-start"
					>
						<Text margin="0px 8px 0px 0px" font="--link" color="inherit" lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif">
							Read article
						</Text>
						<Icon
							margin="1px 0px 0px 0px"
							category="io"
							icon={IoMdArrowUp}
							color="inherit"
							transform="rotate(45deg)"
						/>
					</Box>
				</Box>
				<Box width="35%" display="flex" lg-width="50%" md-width="100%">
					<Image
						md-max-height="250px"
						md-min-height="16px"
						sm-height="200px"
						width="100%"
						src="https://images.unsplash.com/photo-1579471479173-8fc6067ea154?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80"
						min-height="336px"
						object-fit="cover"
						max-height="336px"
						object-position="0% 90%"
						srcSet="https://images.unsplash.com/photo-1579471479173-8fc6067ea154?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1579471479173-8fc6067ea154?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1579471479173-8fc6067ea154?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1579471479173-8fc6067ea154?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1579471479173-8fc6067ea154?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1579471479173-8fc6067ea154?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1579471479173-8fc6067ea154?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</LinkBox>
			<Components.QuarklycommunityKitCollapse border-width="0px" margin="30px 0px 0px 0px" padding="0px 0px 0px 0px">
				<Override slot="Content" display="flex" flex-wrap="wrap" />
				<Override
					slot="Button"
					padding="74px 24px 8px 24px"
					lg-font="600 24px/1.3 &quot;Manrope&quot;, sans-serif"
					lg-background="--color-white url(https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/find_replace.svg?v=2021-09-24T01:44:52.463Z) center top/34px no-repeat"
					lg-padding="34px 24px 8px 24px"
					width="100%"
					font="--headline4"
					color="--dark"
					background="--color-white url(https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/find_replace.svg?v=2021-09-24T01:44:52.463Z) center top/64px no-repeat"
				>
					Show all articles
				</Override>
				<LinkBox
					md-position="relative"
					md-flex-wrap="wrap"
					display="flex"
					margin="0px 0px 32px 0px"
					border-width="1px"
					lg-padding="16px 16px 16px 16px"
					md-padding="8px 8px 40px 8px"
					width="100%"
					padding="32px 32px 32px 32px"
					border-style="solid"
					md-margin="0px 0px 16px 0px"
					align-items="flex-start"
					flex-direction="row"
					border-color="--color-light"
				>
					<Box
						width="65%"
						display="flex"
						flex-direction="column"
						justify-content="space-between"
						lg-width="50%"
						md-margin="0px 0px 16px 0px"
						height="100%"
						align-items="flex-start"
						padding="0px 0px 0px 0px"
						md-width="100%"
						md-height="auto"
					>
						<Box width="75%" lg-width="90%">
							<Text
								text-transform="uppercase"
								lg-font="normal 500 12px/1.5 &quot;Manrope&quot;, sans-serif"
								lg-margin="0px 0px 16px 0px"
								margin="0px 0px 32px 0px"
								font="--base"
								color="--grey"
							>
								4d ago by PAIGE MCCLANAHAN
							</Text>
							<Text
								lg-font="600 18px/1.3 &quot;Manrope&quot;, sans-serif"
								margin="0px 0px 16px 0px"
								font="--headline4"
								color="--dark"
								width="90%"
							>
								Barcelona Takes on Airbnb
							</Text>
							<Text margin="0px 0px 0px 0px" font="--lead" color="--dark" lg-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif">
								A new rule, the only one of its kind in a major European city, forbids short-term private-room rentals, adding fuel to the debate over how to control booming prepandemic tourism.
							</Text>
						</Box>
						<Box
							hover-opacity=".8"
							md-position="absolute"
							md-bottom="8px"
							display="flex"
							align-items="center"
							flex-direction="row"
							justify-content="flex-start"
							color="--dark"
						>
							<Text margin="0px 8px 0px 0px" font="--link" color="inherit" lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif">
								Read article
							</Text>
							<Icon
								category="io"
								icon={IoMdArrowUp}
								color="inherit"
								transform="rotate(45deg)"
								margin="1px 0px 0px 0px"
							/>
						</Box>
					</Box>
					<Box lg-width="50%" md-width="100%" width="35%" display="flex">
						<Image
							md-max-height="250px"
							md-min-height="16px"
							sm-height="200px"
							width="100%"
							src="https://images.unsplash.com/photo-1533990805250-e13bd50e5124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
							min-height="336px"
							object-fit="cover"
							srcSet="https://images.unsplash.com/photo-1533990805250-e13bd50e5124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1533990805250-e13bd50e5124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1533990805250-e13bd50e5124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1533990805250-e13bd50e5124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1533990805250-e13bd50e5124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1533990805250-e13bd50e5124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1533990805250-e13bd50e5124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
				</LinkBox>
				<LinkBox
					padding="32px 32px 32px 32px"
					flex-direction="row"
					display="flex"
					margin="0px 0px 0px 0px"
					border-color="--color-light"
					lg-padding="16px 16px 16px 16px"
					md-flex-wrap="wrap"
					width="100%"
					align-items="flex-start"
					border-width="1px"
					md-padding="8px 8px 40px 8px"
					border-style="solid"
					md-margin="0px 0px 16px 0px"
					md-position="relative"
				>
					<Box
						align-items="flex-start"
						padding="0px 0px 0px 0px"
						md-height="auto"
						md-margin="0px 0px 16px 0px"
						width="65%"
						height="100%"
						flex-direction="column"
						justify-content="space-between"
						display="flex"
						lg-width="50%"
						md-width="100%"
					>
						<Box width="75%" lg-width="90%">
							<Text
								margin="0px 0px 32px 0px"
								font="--base"
								color="--grey"
								text-transform="uppercase"
								lg-font="normal 500 12px/1.5 &quot;Manrope&quot;, sans-serif"
								lg-margin="0px 0px 16px 0px"
							>
								4d ago by KENNETH CHANG
							</Text>
							<Text
								width="90%"
								lg-font="600 18px/1.3 &quot;Manrope&quot;, sans-serif"
								margin="0px 0px 16px 0px"
								font="--headline4"
								color="--dark"
							>
								Inspiration4 Astronauts Beam After Return From 3-Day Journey to Orbit
							</Text>
							<Text margin="0px 0px 0px 0px" font="--lead" color="--dark" lg-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif">
								The mission hinted at what space travel could look like in a more accessible future, while remaining in reach now to only the richest of the rich.
							</Text>
						</Box>
						<Box
							md-position="absolute"
							md-bottom="8px"
							display="flex"
							align-items="center"
							flex-direction="row"
							justify-content="flex-start"
							color="--dark"
							hover-opacity=".8"
						>
							<Text lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif" margin="0px 8px 0px 0px" font="--link" color="inherit">
								Read article
							</Text>
							<Icon
								icon={IoMdArrowUp}
								color="inherit"
								transform="rotate(45deg)"
								margin="1px 0px 0px 0px"
								category="io"
							/>
						</Box>
					</Box>
					<Box md-width="100%" width="35%" display="flex" lg-width="50%">
						<Image
							src="https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
							min-height="336px"
							object-fit="cover"
							max-height="336px"
							md-max-height="250px"
							md-min-height="16px"
							sm-height="200px"
							width="100%"
							srcSet="https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
				</LinkBox>
			</Components.QuarklycommunityKitCollapse>
		</Section>
		<Section padding="74px 0 24px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				margin="0px 0px 16px 0px"
				width="100%"
				padding="16px 16px 16px 16px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Text font="--headline3" color="--dark" lg-font="normal 600 24px/1.2 &quot;Manrope&quot;, sans-serif" margin="0px 0px 0px 0px">
					Advisors team
				</Text>
			</Box>
			<Box
				empty-border-color="LightGray"
				width="25%"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Image
					width="100%"
					min-height="400px"
					object-fit="cover"
					object-position="80% 0%"
					lg-min-height="200px"
					src="https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
					srcSet="https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Box
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-flex-direction="row"
					md-align-items="center"
					md-justify-content="space-between"
				>
					<Text lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif" margin="16px 0px 13px 0px" font="--headline4" color="--dark">
						Jane Smith
					</Text>
					<SocialMedia margin="0px 0px 0px -3px" justify-content="flex-start" facebook="https://www.facebook.com/quarklyapp" linked-in="https://linkedin.com/">
						<Override slot="link-facebook" margin="0px 5px 0px 0px">
							<div />
						</Override>
						<Override
							slot="link"
							border-radius="50%"
							hover-background="transparent"
							display="flex"
							justify-content="center"
							height="36px"
							align-items="center"
							background="none"
							color="--grey"
							hover-color="--light"
							margin="0 5px 0 5px"
							padding="5x 5px 5px 5px"
							width="36px"
						/>
						<Override
							slot="icon"
							border-radius="50px"
							lg-font="30px sans-serif"
							color="--dark"
							padding="5px 5px 5px 5px"
							border-width="0px"
							size="34px"
						/>
					</SocialMedia>
				</Box>
			</Box>
			<Box
				empty-border-color="LightGray"
				width="25%"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Image
					src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
					width="100%"
					min-height="400px"
					object-fit="cover"
					object-position="80% 0%"
					lg-min-height="200px"
					srcSet="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Box
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-flex-direction="row"
					md-align-items="center"
					md-justify-content="space-between"
				>
					<Text margin="16px 0px 13px 0px" font="--headline4" color="--dark" lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif">
						Laura Walker
					</Text>
					<SocialMedia margin="0px 0px 0px -3px" justify-content="flex-start" instagram="https://instagram.com/instagram">
						<Override
							slot="link"
							justify-content="center"
							background="none"
							color="--grey"
							display="flex"
							hover-background="transparent"
							margin="0 5px 0 5px"
							padding="5x 5px 5px 5px"
							width="36px"
							height="36px"
							align-items="center"
							border-radius="50%"
							hover-color="--light"
						/>
						<Override
							slot="icon"
							border-radius="50px"
							lg-font="30px sans-serif"
							color="--dark"
							padding="5px 5px 5px 5px"
							border-width="0px"
							size="34px"
						/>
						<Override slot="link-facebook" margin="0px 5px 0px 0px">
							<div />
						</Override>
					</SocialMedia>
				</Box>
			</Box>
			<Box
				empty-border-color="LightGray"
				width="25%"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Image
					lg-min-height="200px"
					src="https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=540&q=80"
					width="100%"
					min-height="400px"
					object-fit="cover"
					object-position="80% 0%"
					srcSet="https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Box
					md-justify-content="space-between"
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-flex-direction="row"
					md-align-items="center"
				>
					<Text font="--headline4" color="--dark" lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif" margin="16px 0px 13px 0px">
						Kristen Hudson
					</Text>
					<SocialMedia linked-in="https://linkedin.com/" margin="0px 0px 0px -3px" justify-content="flex-start">
						<Override
							slot="link"
							border-radius="50%"
							color="--grey"
							margin="0 5px 0 5px"
							width="36px"
							justify-content="center"
							background="none"
							hover-color="--light"
							hover-background="transparent"
							padding="5x 5px 5px 5px"
							height="36px"
							display="flex"
							align-items="center"
						/>
						<Override
							slot="icon"
							color="--dark"
							padding="5px 5px 5px 5px"
							border-width="0px"
							size="34px"
							border-radius="50px"
							lg-font="30px sans-serif"
						/>
						<Override slot="link-facebook" margin="0px 5px 0px 0px">
							<div />
						</Override>
					</SocialMedia>
				</Box>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="25%"
				padding="16px 16px 16px 16px"
				md-width="100%"
			>
				<Image
					width="100%"
					min-height="400px"
					object-fit="cover"
					object-position="30% 0%"
					lg-min-height="200px"
					src="https://images.unsplash.com/photo-1590649778473-d017b9013d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=540&q=80"
					srcSet="https://images.unsplash.com/photo-1590649778473-d017b9013d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1590649778473-d017b9013d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1590649778473-d017b9013d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1590649778473-d017b9013d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1590649778473-d017b9013d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1590649778473-d017b9013d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1590649778473-d017b9013d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Box
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-flex-direction="row"
					md-align-items="center"
					md-justify-content="space-between"
				>
					<Text margin="16px 0px 13px 0px" font="--headline4" color="--dark" lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif">
						Katelin Stewart
					</Text>
					<SocialMedia margin="0px 0px 0px -3px" justify-content="flex-start" facebook="https://www.facebook.com/quarklyapp">
						<Override
							slot="link"
							color="--grey"
							padding="5x 5px 5px 5px"
							width="36px"
							align-items="center"
							border-radius="50%"
							hover-color="--light"
							hover-background="transparent"
							margin="0 5px 0 5px"
							height="36px"
							display="flex"
							justify-content="center"
							background="none"
						/>
						<Override
							slot="icon"
							size="34px"
							border-radius="50px"
							lg-font="30px sans-serif"
							color="--dark"
							padding="5px 5px 5px 5px"
							border-width="0px"
						/>
						<Override slot="link-facebook" margin="0px 5px 0px 0px">
							<div />
						</Override>
					</SocialMedia>
				</Box>
			</Box>
		</Section>
		<Section padding="92px 0 74px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/airplanemode_active.svg?v=2021-09-24T22:50:23.546Z) center 19%/250px no-repeat scroll padding-box" md-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/airplanemode_active.svg?v=2021-09-24T22:50:23.546Z) center 15%/125px no-repeat scroll padding-box" md-padding="40px 0 40px 0">
			<Override slot="SectionContent" align-items="center" justify-content="center" />
			<Text
				max-width="440px"
				text-align="center"
				lg-font="normal 600 28px/1.2 &quot;Manrope&quot;, sans-serif"
				lg-max-width="340px"
				md-margin="0px 0px 52px 0px"
				margin="0px 0px 76px 0px"
				font="--headline3"
				color="--dark"
			>
				Sign-up for our newsletter{" "}
				<Span color="--green">
					&
				</Span>
				{"  "}sales
			</Text>
			<Components.QuarklycommunityKitNetlifyForm
				border-width="0px 0px 1px 0px"
				border-style="solid"
				border-color="--color-grey"
				width="100%"
				md-width="360px"
				sm-width="100%"
				max-width="600px"
				lg-max-width="340px"
			>
				<Override slot="Form" align-items="center" display="flex" justify-content="center" />
				<Box display="flex" align-items="center" justify-content="flex-start">
					<Input
						type="email"
						border-color="--color-grey"
						border-style="none"
						md-width="100%"
						min-width="400px"
						placeholder="Put your e-mail here..."
						name="Email"
						required
						padding="6px 16px 6px 0px"
						border-width="0px"
						width="100%"
						color="--grey"
						lg-min-width="auto"
					/>
					<Button
						font="--link"
						flex-direction="row-reverse"
						padding="8px 4px 8px 24px"
						background="transparent"
						color="--dark"
						display="flex"
						text-align="right"
						align-items="center"
						justify-content="flex-end"
					>
						<Icon category="md" icon={MdArrowForward} color="--dark" margin="0px 0px 0px 16px" />
						Subscribe
					</Button>
				</Box>
			</Components.QuarklycommunityKitNetlifyForm>
		</Section>
		<Section padding="54px 0 30px 0" quarkly-title="Footer" lg-padding="30px 0 20px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				width="25%"
				md-width="50%"
				sm-margin="0px 0px 16px 0px"
				empty-min-width="64px"
				empty-border-color="LightGray"
				padding="16px 16px 16px 16px"
				md-align-items="flex-start"
				md-display="flex"
				md-justify-content="center"
				sm-padding="16px 16px 16px 0px"
			>
				<Image src="https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/logo.svg?v=2021-09-23T21:07:52.037Z" width="248px" height="auto" max-width="100%" />
			</Box>
			<Box
				width="25%"
				flex-direction="column"
				md-width="50%"
				sm-padding="16px 16px 16px 0px"
				empty-border-style="solid"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				padding="16px 16px 16px 16px"
				display="flex"
				empty-min-width="64px"
			>
				<Text margin="0px 0px 32px 0px" font="--headline4" color="--dark" lg-font="600 24px/1.3 &quot;Manrope&quot;, sans-serif">
					About
				</Text>
				<Link
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
				>
					Destinations
				</Link>
				<Link
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
				>
					Newsroom
				</Link>
				<Link
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
				>
					Partners
				</Link>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					Carreers
				</Link>
			</Box>
			<Box
				empty-border-width="1px"
				padding="16px 16px 16px 16px"
				display="flex"
				md-width="50%"
				sm-padding="16px 16px 16px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="25%"
				flex-direction="column"
			>
				<Text margin="0px 0px 32px 0px" font="--headline4" color="--dark" lg-font="600 24px/1.3 &quot;Manrope&quot;, sans-serif">
					Other
				</Text>
				<Link
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
				>
					Terms & Conditions
				</Link>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					Privacy center
				</Link>
				<Link
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
				>
					Accessibility policy
				</Link>
				<Link
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
				>
					Cookie policy
				</Link>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				padding="16px 16px 16px 16px"
				display="flex"
				flex-direction="column"
				sm-padding="16px 16px 16px 0px"
				empty-min-width="64px"
				empty-border-style="solid"
				width="25%"
				md-width="50%"
			>
				<Text margin="0px 0px 32px 0px" font="--headline4" color="--dark" lg-font="600 24px/1.3 &quot;Manrope&quot;, sans-serif">
					Contacts
				</Text>
				<Link
					href="tel:123456789"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					1 (916) 684-4294
				</Link>
				<Link
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="mailto:mail@gmail.com"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
				>
					sale@fantastico.com
				</Link>
				<Link
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
				>
					5121 Laguna Woods Dr, Elk Grove, CA, 95758{"  "}
				</Link>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"614ce40335c5c8001f7746de"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});