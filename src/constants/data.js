import  images from "./images"
import  icons from "./icons";

const home = {
    heroDesktop: {
        spanOne: "Scooter sharing",
        spanTwo: "made simple",
        text: "Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!",
        btn: "Get Scootin",
        backgroundImage: images.homeHeroDesktop
    },
    heroTablet: {
        spanOne: "Scooter sharing",
        spanTwo: "made simple",
        text: "Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!",
        btn: "Get Scootin",
        backgroundImage: images.homeHeroTablet
    },
    heroMobile: {
        spanOne: "Scooter",
        spanTwo: "sharing made simple",
        spanThree: "simple",
        text: "Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!",
        btn: "Get Scootin",
        backgroundImage: images.homeHeroMobile
    },
    features: [
        {
            title: "Locate with app",
            text: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
            icon: icons.locate
        },
        {
            title: "Pick your scooter",
            text: "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
            icon: icons.scooter
        },
        {
            title: "Enjoy the ride",
            text: "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
            icon: icons.ride
        }
    ],
    info: [
        {
            title: "Easy to use riding telemetry",
            text: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
            btn: "Learn More",
            image: images.telemetry
        },
        {
            title: "Coming to a city near you",
            text: "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
            btn: "Learn More",
            image: images.nearYou
        },
        {
            title: "Zero hassle payments",
            text: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
            btn: "Learn More",
            image: images.payments
        }
    ]     
}

const about = {
    heroDesktop: {
        title: "About",        
        backgroundImage: images.aboutHeroDesktop
    },
    heroTablet: {
        title: "About",        
        backgroundImage: images.aboutHeroTablet
    },
    heroMobile: {
        title: "About",        
        backgroundImage: images.aboutHeroMobile
    },
    info: [
        {
            title: "Mobility for the digital era",
            text: "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",
            image: images.digitalEra
        },
        {
            title: "Better urban living",
            text: "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",
            image: images.betterLiving
        },
    ],
    values: {
        title: "Our values",
        content: [
            {
                number: "01",
                title: "Our tech",
                text: "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
                image: images.ourTech
            },
            {
                number: "02",
                title: "Our integrity",
                text: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
                image: images.ourIntegrity
            },
            {
                number: "03",
                title: "Our community",
                text: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
                image: images.ourCommunity
            }
        ]
    },
    faq: [
        {
            title: "How it works",
            content: [
                {
                    title: "How do I download the app?",
                    text: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
                },
                {
                    title: "Can I find a nearby Scoots?",
                    text: "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information."
                },
                {
                    title: "Do I need a license to ride?",
                    text: "Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots."
                }
            ]
        },
        {
            title: "Safe driving",
            content: [
                {
                    title: "Should I wear a helmet?",
                    text: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
                },
                {
                    title: "How about the rules & regulations?",
                    text: "Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way."
                },
                {
                    title: "What if I damage my Scoot?",
                    text: "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter."
                }
            ]
        }
    ]
}

const careers = {
    heroDesktop: {
        title: "Careers",        
        backgroundImage: images.careersLocationHeroDesktop
    },
    heroTablet: {
        title: "Careers",        
        backgroundImage: images.careersLocationHeroTablet
    },
    heroMobile: {
        title: "Careers",        
        backgroundImage: images.careersLocationHeroMobile
    },
    info: {
            title: "Care to join our mission?",
            text: "We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!",
            btn: "Say Hello",
            image: images.joinUs
        },
    values: {
        title: "Why join us?",
        content: [
            {
                number: "01",
                title: "Our tech",
                text: "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
                image: images.ourTech
            },
            {
                number: "02",
                title: "Our integrity",
                text: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
                image: images.ourIntegrity
            },
            {
                number: "03",
                title: "Our community",
                text: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
                image: images.ourCommunity
            }
        ]
    },
    jobs: [
        {
            position: "General Manager",
            location: "Jakarta, Indonesia"
        },
        {
            position: "UI/UX Designer",
            location: "Yokohama, Japan"
        },
        {
            position: "Blog Content Copywriter",
            location: "New York, United States"
        },
        {
            position: "Graphic Designer",
            location: "New York, United States"
        },
        {
            position: "Fleet Supervisor",
            location: "Jakarta, Indonesia"
        },
        {
            position: "UX Analyst",
            location: "London, United Kingdom"
        }
    ]       
}

const locations = {
    heroDesktop: {
        title: "Locations",        
        backgroundImage: images.careersLocationHeroDesktop
    },
    heroTablet: {
        title: "Locations",        
        backgroundImage: images.careersLocationHeroTablet
    },
    heroMobile: {
        title: "Locations",        
        backgroundImage: images.careersLocationHeroMobile
    },
    mapDesktop: images.worldMapDesktop,
    mapTablet: images.worldMapTablet,
    mapMobile: images.worldMapMobile,
    locations: ["New York", "London", "Yokohama", "Jakarta"],
    contact: {
        title: "Your city not listed?",
        text: "If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.",
        btn: "Message Us"
    }
}

const cta = {
    text: "Sign up and Scoot off today",
    iconStore: icons.appStore,
    iconGoogle: icons.googlePlay     
}   

export default {
    home,
    about,
    careers,
    locations
}