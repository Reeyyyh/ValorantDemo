const arsenalData = [
    // Sidearms
    {
        id: 1,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/bfa273477b5ce6345c00da5a396281bd51830dc8-680x384.png',
        ArsenalName: 'Classic',
        ArsenalType: 'Sidearms',
        ArsenalDescription: 'Lightweight and versatile, the default weapon for all is an instant classic.',
    },
    {
        id: 2,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/25b9844dfade4acdbd05229da3b07b0071e5059a-680x384.png',
        ArsenalName: 'Shorty',
        ArsenalType: 'Sidearms',
        ArsenalDescription: 'Surprise your enemy up close for max effectiveness.',
    },
    {
        id: 3,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/10c955e82728dbcc4f7edd687be251437b3c8acc-680x384.png',
        ArsenalName: 'Frenzy',
        ArsenalType: 'Sidearms',
        ArsenalDescription: 'Up close, hold the trigger. From afar...try something else.',
    },
    {
        id: 4,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/575558a88acc67dfac8da6c6ab26f4b61589c96f-680x383.png',
        ArsenalName: 'Ghost',
        ArsenalType: 'Sidearms',
        ArsenalDescription: 'Sleek, silenced, and proficient at any range.',
    },
    {
        id: 5,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/37efa958bf1dd8ec57a0b1585e741599c7b7bee7-680x383.png',
        ArsenalName: 'Sheriff',
        ArsenalType: 'Sidearms',
        ArsenalDescription: 'A modern six-shooter for the headshot searcher.',
    },
    // SMGS
    {
        id: 5,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/377c8a9058a364478ed179ccbe41a68dd2255234-680x383.png',
        ArsenalName: 'Stinger',
        ArsenalType: 'Smgs',
        ArsenalDescription: 'They’ll know it\'s over when the Stinger splash hits.',
    },
    {
        id: 6,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9fad4bf3774e87edf9994a2afada0abdc72c4bed-680x383.png',
        ArsenalName: 'Spectre',
        ArsenalType: 'Smgs',
        ArsenalDescription: 'When in doubt, the Spectre is your number one.',
    },
    // Shotguns
    {
        id: 7,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/982db8ebe5b57b989e009d13b24d9f1bc9c090b5-680x383.png',
        ArsenalName: 'Bucky',
        ArsenalType: 'Shotguns',
        ArsenalDescription: 'Attacker. Defender. You’re the one with the pump-action shotgun.',
    },
    {
        id: 8,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7190d2e85b82bd1de81eba87a1db2b469259289d-680x383.png',
        ArsenalName: 'Judge',
        ArsenalType: 'Shotguns',
        ArsenalDescription: 'Automatic, rapid fire shotgun that provides sustained high damage.',
    },
    // Rifles
    {
        id: 9,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7bbdf3063c94fa06fbde33c35ce09fd5202fc153-680x383.png',
        ArsenalName: 'Bulldog',
        ArsenalType: 'Rifles',
        ArsenalDescription: 'Some kind of happiness is measured out in taking down enemies with the Bulldog.',
    },
    {
        id: 10,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/64917f04177ef9666f58149f0a98a41fa7bf96ba-680x383.png',
        ArsenalName: 'Guardian',
        ArsenalType: 'Rifles',
        ArsenalDescription: 'Shines in the hands of a patient shooter.',
    },
    {
        id: 11,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f0636340d8a60e1488a447e66784921d01f90d18-680x383.png',
        ArsenalName: 'Phantom',
        ArsenalType: 'Rifles',
        ArsenalDescription: 'A balanced weapon built for stable, extended shots.',
    },
    {
        id: 12,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fc32a60b112201776c490a5a6a7f2381cd232bd5-680x383.png',
        ArsenalName: 'Vandal',
        ArsenalType: 'Rifles',
        ArsenalDescription: 'This accurate powerhouse is ferocious in small bursts.',
    },
    // Snipers
    {
        id: 13,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/248441a78c76ee615ad1ece97db1c0203cebc5b1-680x383.png',
        ArsenalName: 'Marshal',
        ArsenalType: 'Snipers',
        ArsenalDescription: 'Hold an angle, breathe, and they\'ll regret turning that corner.',
    },
    {
        id: 14,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1b1e480a139ae8d1892f8d7fd163391ce123ee38-680x383.png',
        ArsenalName: 'Outlaw',
        ArsenalType: 'Snipers',
        ArsenalDescription: 'Twin barrels, singular impact. The perfect pick for those do-or-die highlight plays.',
    },
    {
        id: 15,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/606f29a17f5bc6f13264f2df21a29d4e209c9dce-680x383.png',
        ArsenalName: 'Operators',
        ArsenalType: 'Snipers',
        ArsenalDescription: 'Get cozy and you can control important ground.',
    },
    // Heavies
    {
        id: 16,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/4f1969789f8f0da0863d15a6a23957b4508753f2-680x383.png',
        ArsenalName: 'Ares',
        ArsenalType: 'Heavies',
        ArsenalDescription: 'Don’t mistake its size for clunk.',
    },
    {
        id: 17,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d7e242b2e704155c71841325629ad1a4673c436f-680x383.png',
        ArsenalName: 'Odin',
        ArsenalType: 'Heavies',
        ArsenalDescription: 'Wielding this hammer of a machine threatens glory for the holder and ruin for the foe.',
    },
    // Melee
    {
        id: 18,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/48649a9bbc3bc0afce42f498991ea081958992a2-680x383.png',
        ArsenalName: 'Tactical Knife',
        ArsenalType: 'Melee',
        ArsenalDescription: 'An intimate solution.',
    },

]

export default arsenalData;