const arsenalData = [
    // Sidearms
    {
        id: 1,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/bfa273477b5ce6345c00da5a396281bd51830dc8-680x384.png',
        ArsenalName: 'Classic',
        ArsenalType: 'Sidearms',
        ArsenalDescription: 'Lorem ipsun',
    },
    {
        id: 2,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/25b9844dfade4acdbd05229da3b07b0071e5059a-680x384.png',
        ArsenalName: 'Shorty',
        ArsenalType: 'Sidearms',
        ArsenalDescription: 'Lorem Ipsun',
    },
    {
        id: 3,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/10c955e82728dbcc4f7edd687be251437b3c8acc-680x384.png',
        ArsenalName: 'Frenzy',
        ArsenalType: 'Sidearms',
        ArsenalDescription: 'Lorem Ipsun',
    },
    {
        id: 4,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/575558a88acc67dfac8da6c6ab26f4b61589c96f-680x383.png',
        ArsenalName: 'Ghost',
        ArsenalType: 'Sidearms',
        ArsenalDescription: 'Lorem ipsun',
    },
    {
        id: 5,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/37efa958bf1dd8ec57a0b1585e741599c7b7bee7-680x383.png',
        ArsenalName: 'Sheriff',
        ArsenalType: 'Sidearms',
        ArsenalDescription: 'Lorem ipsun',
    },
    // SMGS
    {
        id: 5,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/377c8a9058a364478ed179ccbe41a68dd2255234-680x383.png',
        ArsenalName: 'Stinger',
        ArsenalType: 'Smgs',
        ArsenalDescription: 'Lorem ipsun',
    },
    {
        id: 6,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9fad4bf3774e87edf9994a2afada0abdc72c4bed-680x383.png',
        ArsenalName: 'Spectre',
        ArsenalType: 'Smgs',
        ArsenalDescription: 'Lorem ipsun',
    },
    // Shotguns
    {
        id: 7,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/982db8ebe5b57b989e009d13b24d9f1bc9c090b5-680x383.png',
        ArsenalName: 'Bucky',
        ArsenalType: 'Shotguns',
        ArsenalDescription: 'Lorem ipsun',
    },
    {
        id: 8,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7190d2e85b82bd1de81eba87a1db2b469259289d-680x383.png',
        ArsenalName: 'Judge',
        ArsenalType: 'Shotguns',
        ArsenalDescription: 'Lorem ipsun',
    },
    // Rifles
    {
        id: 9,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7bbdf3063c94fa06fbde33c35ce09fd5202fc153-680x383.png',
        ArsenalName: 'Bulldog',
        ArsenalType: 'Rifles',
        ArsenalDescription: 'Lorem ipsun',
    },
    {
        id: 10,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/64917f04177ef9666f58149f0a98a41fa7bf96ba-680x383.png',
        ArsenalName: 'Guardian',
        ArsenalType: 'Rifles',
        ArsenalDescription: 'Lorem ipsun',
    },
    {
        id: 11,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f0636340d8a60e1488a447e66784921d01f90d18-680x383.png',
        ArsenalName: 'Phantom',
        ArsenalType: 'Rifles',
        ArsenalDescription: 'Lorem ipsun',
    },
    {
        id: 12,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fc32a60b112201776c490a5a6a7f2381cd232bd5-680x383.png',
        ArsenalName: 'Vandal',
        ArsenalType: 'Rifles',
        ArsenalDescription: 'Lorem ipsun',
    },
    // Snipers
    {
        id: 13,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/248441a78c76ee615ad1ece97db1c0203cebc5b1-680x383.png',
        ArsenalName: 'Marshal',
        ArsenalType: 'Snipers',
        ArsenalDescription: 'Lorem ipsun',
    },
    {
        id: 14,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1b1e480a139ae8d1892f8d7fd163391ce123ee38-680x383.png',
        ArsenalName: 'Outlaw',
        ArsenalType: 'Snipers',
        ArsenalDescription: 'Lorem ipsun',
    },
    {
        id: 15,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/606f29a17f5bc6f13264f2df21a29d4e209c9dce-680x383.png',
        ArsenalName: 'Operators',
        ArsenalType: 'Snipers',
        ArsenalDescription: 'Lorem ipsun',
    },
    // Heavies
    {
        id: 16,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/4f1969789f8f0da0863d15a6a23957b4508753f2-680x383.png',
        ArsenalName: 'Ares',
        ArsenalType: 'Heavies',
        ArsenalDescription: 'Lorem ipsun',
    },
    {
        id: 17,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d7e242b2e704155c71841325629ad1a4673c436f-680x383.png',
        ArsenalName: 'Odin',
        ArsenalType: 'Heavies',
        ArsenalDescription: 'Lorem ipsun',
    },
    // Melee
    {
        id: 18,
        ArsenalImage: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/48649a9bbc3bc0afce42f498991ea081958992a2-680x383.png',
        ArsenalName: 'Tactical Knife',
        ArsenalType: 'Melee',
        ArsenalDescription: 'Lorem ipsun',
    },

]

export default arsenalData;