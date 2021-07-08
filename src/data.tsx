const shirtUrl = require("./assets/images/shirt.jpeg");
const tShirtUrl = require("./assets/images/t-shirt.jpeg");
const vaderSocksUrl = require("./assets/images/vader-socks.jpeg");
const eyeOfAgamottoUrl = require("./assets/images/eye-of-agamotto.jpeg");
const lightSaberUrl = require("./assets/images/lightsaber.jpg");

export const data = [
    {
        id: "1",
        name: "Amazing T-Shirt",
        price: 400,
        imagePath: tShirtUrl,
        description: `A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its 
            body and sleeves. Traditionally, it has short sleeves and a round neckline, known as 
            a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light 
            and inexpensive fabric and are easy to clean.`
    },
    {
        id: "2",
        name: "Formal Work Shirt",
        price: 800,
        imagePath: shirtUrl,
        description: `Originally an undergarment worn exclusively by men, it has become, in American English, 
            a catch-all term for a broad variety of upper-body garments and undergarments. In British English, 
            a shirt is more specifically a garment with a collar, sleeves with cuffs, and a full vertical opening 
            with buttons or snaps`
    },
    {
        id: "3",
        name: "Vader Socks",
        price: 2000,
        imagePath: vaderSocksUrl,
        description: `A sock is a piece of clothing worn on the feet and often covering the ankle or some part of the calf. 
            Some type of shoe or boot is typically worn over socks.`
    },
    {
        id: "4",
        name: "Eye of Agamotto",
        price: 5000,
        imagePath: eyeOfAgamottoUrl,
        description: `The Eye of Agamotto was a powerful magical talisman created by Agamotto. It is commonly 
            possessed by the Sorcerer Supreme of Earth.`
    },
    {
        id: "5",
        name: "Lightsaber",
        price: 8000,
        imagePath: lightSaberUrl,
        description: `The lightsaber, also referred to as a laser sword by those who were unfamiliar with it, 
            was a weapon usually used by the Jedi, the Sith, and other Force-sensitives. Lightsabers consisted 
            of a plasma blade, powered by a kyber crystal, that was emitted from a usually metal hilt and could be shut off at will. `
    }
];