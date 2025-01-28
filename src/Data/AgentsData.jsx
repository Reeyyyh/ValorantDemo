const agentsData = [
    // Col 1
    {
        id: 1,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/51e62f3c74356a7501d06feba42ac643133257d7-616x822.png",
        AgentsName: "Brimstone",
        AgentsRole: "Controller",
        AgentsDescription: "Joining from the U.S.A., Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.",
        AgentsAbility: [
            {
                name: "INCENDIARY",
                description: "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone."
            },
            { 
                name: "SKY SMOKE", 
                description: "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALT FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area." 
            },
            { 
                name: "STIM BEACON", 
                description: "EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire." 
            },
            { 
                name: "ORBITAL STRIKE", 
                description: "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area." 
            },
        ],
    },
    {
        id: 2,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/47387e354c34d51b84066bc47af3c5755b92b9c5-616x822.png",
        AgentsName: "Phoniex",
        AgentsRole: "Duelist",
        AgentsDescription: "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
        AgentsAbility: [
            {
                name: "CURVEBALL",
                description: "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right."
            },
            { 
                name: "HOT HANDS", 
                description: "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies." 
            },
            { 
                name: "BLAZE", 
                description: "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair." 
            },
            { 
                name: "RUN IT BACK", 
                description: "INSTANTLY place a marker at Phoenix\'s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health." 
            },
        ],
    },
    {
        id: 3,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/58a180961a14beb631877921e647c233804853c1-616x822.png",
        AgentsName: "Sage",
        AgentsRole: "Sentinel",
        AgentsDescription: "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
        AgentsAbility: [
            {
                name: "SLOW ORB",
                description: "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it."
            },
            { 
                name: "HEALING ORB", 
                description: "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time." 
            },
            { 
                name: "BARRIER ORB", 
                description: "EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter." 
            },
            { 
                name: "RESURRECTION", 
                description: "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health." 
            },
        ],
    },
    {
        id: 4,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/08b3d8822544bd327ebed0768c8b90fcec83d1a5-616x822.png",
        AgentsName: "Sova",
        AgentsRole: "Initiator",
        AgentsDescription: "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
        AgentsAbility: [
            {
                name: "SHOCK BOLT",
                description: "EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow."
            },
            { 
                name: "RECON BOLT", 
                description: "EQUIP a bow with recon bolt. FIRE to send the recon bolt forward, activating upon collision and Revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow." 
            },
            { 
                name: "OWL DRONE", 
                description: "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. Enemies can destroy the Owl Drone." 
            },
            { 
                name: "HUNTER'S FURY", 
                description: "EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active." 
            },
        ],
    },
    // col 2
    {
        id: 5,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/152244f121e61ca32bdd2bea9fc5370e315664fb-616x822.png",
        AgentsName: "Viper",
        AgentsRole: "Controller",
        AgentsDescription: "The American Chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy's vision. If the toxins don't kill her prey, her mindgames surely will.",
        AgentsAbility: [
            {
                name: "POISON CLOUD",
                description: "EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be picked up to be REDEPLOYED before the round starts and can be RE-USED more than once throughout the round."
            },
            { 
                name: "TOXIC SCREEN", 
                description: "EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once." 
            },
            { 
                name: "SNAKE BITE", 
                description: "EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies." 
            },
            { 
                name: "VIPER'S PIT", 
                description: "EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it." 
            },
        ],
    },
    {
        id: 6,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/4a648cdbcbbeef137050deefeaf6a1369c606666-616x822.png",
        AgentsName: "Cypher",
        AgentsRole: "Sentinel",
        AgentsDescription: "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
        AgentsAbility: [
            {
                name: "CYBER CAGE",
                description: "INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it."
            },
            { 
                name: "SPYCAM", 
                description: "EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. This ability can be picked up to be REDEPLOYED." 
            },
            { 
                name: "TRAPWIRE", 
                description: "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED." 
            },
            { 
                name: "NEURAL THEFT", 
                description: "INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players." 
            },
        ],
    },
    {
        id: 7,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7cb513c9b3eae3286449776e85753138436d553c-616x822.png",
        AgentsName: "Reyna",
        AgentsRole: "Duelist",
        AgentsDescription: "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
        AgentsAbility: [
            {
                name: "DEVOUR",
                description: "Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb."
            },
            { 
                name: "DISMISS", 
                description: "INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible." 
            },
            { 
                name: "LEER", 
                description: "EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it." 
            },
            { 
                name: "EMPRESS", 
                description: "INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration." 
            },
        ],
    },
    {
        id: 8,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/820d36d431fff77b1e1ece39ad6f007746bd31f6-616x822.png",
        AgentsName: "Killjoy",
        AgentsRole: "Sentinel",
        AgentsDescription: "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.",
        AgentsAbility: [
            {
                name: "ALARMBOT",
                description: "EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot."
            },
            { 
                name: "TURRET", 
                description: "EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret." 
            },
            { 
                name: "NANOSWARM", 
                description: "EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots." 
            },
            { 
                name: "LOCKDOWN", 
                description: "EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies." 
            },
        ],
    },
    // Col 3
    {
        id: 9,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e435c3378b7999a3338b408dbb5da8ba63f91150-616x822.png",
        AgentsName: "Breach",
        AgentsRole: "Initiator",
        AgentsDescription: "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
        AgentsAbility: [
            {
                name: "FLASHPOINT",
                description: "EQUIP a blinding charge. FIRE the charge to set fast-acting burst through the wall. The charge detonates to blind all players looking at it."
            },
            { 
                name: "FAULT LINE", 
                description: "EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone." 
            },
            { 
                name: "AFTERSHOCK", 
                description: "EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area." 
            },
            { 
                name: "ROLLING THUNDER", 
                description: "EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it." 
            },
        ],
    },
    {
        id: 10,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/015a083717e9687de8a741cfceddb836775b5f9f-616x822.png",
        AgentsName: "Omen",
        AgentsRole: "Controller",
        AgentsDescription: "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
        AgentsAbility: [
            {
                name: "PARANOIA",
                description: "INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls."
            },
            { 
                name: "DARK COVER", 
                description: "EQUIP a shadow orb, entering a phased world to place and target the orbs. PRESS the ability key to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD FIRE while targeting to move the marker further away. HOLD ALT FIRE while targeting to move the marker closer. PRESS RELOAD to toggle normal targeting view." 
            },
            { 
                name: "SHROUDED STEP", 
                description: "EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location." 
            },
            { 
                name: "FROM THE SHADOWS", 
                description: "EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport." 
            },
        ],
    },
    {
        id: 11,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d41286dc9017bf79c0b4d907b7a260c27b0adb69-616x822.png",
        AgentsName: "Jett",
        AgentsRole: "Duelist",
        AgentsDescription: "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
        AgentsAbility: [
            {
                name: "UPDRAFT",
                description: "INSTANTLY propel Jett high into the air."
            },
            { 
                name: "TAILWIND", 
                description: "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills." 
            },
            { 
                name: "CLOUDBURST", 
                description: "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair." 
            },
            { 
                name: "BLADE STORM", 
                description: "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill." 
            },
        ],
    },
    {
        id: 12,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/40b4b242b68afe30d21e7f95bdcacaebca46ea60-616x822.png",
        AgentsName: "Raze",
        AgentsRole: "Duelist",
        AgentsDescription: "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of \"boom.\"",
        AgentsAbility: [
            {
                name: "BLAST PACK",
                description: "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit. Raze isn't damaged by this ability, but will still take fall damage if launched up far enough."
            },
            { 
                name: "PAINT SHELLS", 
                description: "EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range. ALT FIRE to lob. Paint Shells charge resets every two kills." 
            },
            { 
                name: "BOOM BOT", 
                description: "EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them." 
            },
            { 
                name: "SHOWSTOPPER", 
                description: "EQUIP a rocket launcher. FIRE to shoot a rocket that does massive area damage on contact with anything." 
            },
        ],
    },
    // Col 4
    {
        id: 13,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/37ea1466beebb54aad4f16efbad184566cb80368-616x822.png",
        AgentsName: "Skye",
        AgentsRole: "Initiator",
        AgentsDescription: "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye\'s side.",
        AgentsAbility: [
            {
                name: "",
                description: ""
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
        ],
    },
    {
        id: 14,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/05e1a996814dd10d7179efee327d29a7be00e912-616x822.png",
        AgentsName: "Yoru",
        AgentsRole: "Duelist",
        AgentsDescription: "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
        AgentsAbility: [
            {
                name: "",
                description: ""
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
        ],
    },
    {
        id: 15,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ba51d43803082941b0274b66413b0acc972546dd-616x822.png",
        AgentsName: "Astra",
        AgentsRole: "Controller",
        AgentsDescription: "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.",
        AgentsAbility: [
            {
                name: "",
                description: ""
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
        ],
    },
    {
        id: 16,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fe52e0efac73ec782b19a54e98a4658b03677407-616x822.png",
        AgentsName: "Kay/o",
        AgentsRole: "Initiator",
        AgentsDescription: "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to Suppress enemy abilities dismantles his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
        AgentsAbility: [
            {
                name: "",
                description: ""
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
        ],
    },
    // Col 5
    {
        id: 17,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0f5b668b77499c0051201389d6ac5e7343c9727f-616x822.png",
        AgentsName: "Chamber",
        AgentsRole: "Sentinel",
        AgentsDescription: "Well-dressed and well-armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.",
        AgentsAbility: [
            {
                name: "",
                description: ""
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
        ],
    },
    {
        id: 18,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/14145d7bf9be17afa80c04ee4fbe200076cc1769-616x822.png",
        AgentsName: "Neon",
        AgentsRole: "Duelist",
        AgentsDescription: "Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.",
        AgentsAbility: [
            {
                name: "",
                description: ""
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
        ],
    },
    {
        id: 19,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e7099cc13a665ed2b556d514e50984393ed49967-616x822.png",
        AgentsName: "Fade",
        AgentsRole: "Initiator",
        AgentsDescription: "Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears—before crushing them in the dark.",
        AgentsAbility: [
            {
                name: "",
                description: ""
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
        ],
    },
    {
        id: 20,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1246b5c517f6c8fa660e884a7032c1c54994003e-616x822.png",
        AgentsName: "Harbor",
        AgentsRole: "Controller",
        AgentsDescription: "Hailing from India’s coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies, or pummel those that oppose him.",
        AgentsAbility: [
            {
                name: "",
                description: ""
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
        ],
    },
    // Col 6
    {
        id: 21,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8d88f133f735f6a9077679b1ece754e5624c728e-616x822.png",
        AgentsName: "Gekko",
        AgentsRole: "Initiator",
        AgentsDescription: "Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again.",
        AgentsAbility: [
            {
                name: "",
                description: ""
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
        ],
    },
    {
        id: 22,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/477284dfe402a85abcf6b07512bcd6f01c8fe60e-616x822.png",
        AgentsName: "Deadlock",
        AgentsRole: "Sentinel",
        AgentsDescription: "Norwegian operative Deadlock deploys an array of cutting-edge nanowire to secure the battlefield from even the most lethal assault. No one escapes her vigilant watch, nor survives her unyielding ferocity.",
        AgentsAbility: [
            {
                name: "",
                description: ""
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
        ],
    },
    {
        id: 23,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2c35cef9c38283f8478d1e808b1c129f371e50b3-616x822.png",
        AgentsName: "Iso",
        AgentsRole: "Duelist",
        AgentsDescription: "Chinese fixer for hire, Iso falls into a flow state to dismantle the opposition. Reconfiguring ambient energy into bulletproof protection, he advances with focus towards his next duel to the death.",
        AgentsAbility: [
            {
                name: "",
                description: ""
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
        ],
    },
    {
        id: 24,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9f02060077f9d61dbe89555a339e6231006d9b7b-616x822.png",
        AgentsName: "Clove",
        AgentsRole: "Controller",
        AgentsDescription: "Scottish troublemaker Clove makes mischief for enemies in both the heat of combat and the cold of death. The young immortal keeps foes guessing, even from beyond the grave, their return to the living only ever a moment away.",
        AgentsAbility: [
            {
                name: "",
                description: ""
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
        ],
    },
    // Col 7
    {
        id: 25,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/370e4b820670ef0bac7e685f6e8c5e64d19f1890-587x900.png",
        AgentsName: "Vyse",
        AgentsRole: "Sentinel",
        AgentsDescription: "Metallic mastermind Vyse unleashes liquid metal to isolate, trap, and disarm her enemies. Through cunning and manipulation, she forces all who oppose her to fear the battlefield itself.",
        AgentsAbility: [
            {
                name: "",
                description: ""
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
        ],
    },
    {
        id: 26,
        AgentsImage: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3413df9939de606a355c1f88fbfc35f0774c19c9-587x900.jpg",
        AgentsName: "Tejo",
        AgentsRole: "Initiator",
        AgentsDescription: "A veteran intelligence consultant from Colombia, Tejo's ballistic guidance system pressures the enemy to relinquish their ground - or their lives. His targeted strikes keep opponents off balance and under his heel.",
        AgentsAbility: [
            {
                name: "",
                description: ""
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
            { 
                name: "", 
                description: "" 
            },
        ],
    },
];

export default agentsData;
