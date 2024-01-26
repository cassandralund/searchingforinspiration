//Set up connections with HTML elements & creating global variables
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
let corkboardBg = new Image();
corkboardBg.src = 'images/corkboard.jpg';

const startButton = document.getElementById('pickDevice');
startButton.addEventListener('click', placeRandomImages);

const sentenceText = document.getElementById('ideaText');

let devNum;
let adjNum;
let twistNum;

// Arrays of image URLs and words
const devImages = [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F300000%2Ft2%2Fvintage-phone.png&f=1&nofb=1&ipt=7e5926dc1d9bd025ebeac8d204bf9de3990ab9f54525ee9ebe4c191cf26d8057&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jWDMoiZ1YBlTP58Kn7ywoAAAAA%26pid%3DApi&f=1&ipt=26747ddccbaffbbdc33f7de2c5dfce35f64bfbe7b6c7350f9a6a2d6753453a2d&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc4.wallpaperflare.com%2Fwallpaper%2F479%2F704%2F20%2Fapple-inc-apple-watch-technology-wallpaper-thumb.jpg&f=1&nofb=1&ipt=d4fbb58f135f207577bf3e9298200118682bdb5c40cc58c0c20e1a48fda0a975&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.pxhere.com%2Fphotos%2Fe1%2F42%2Fkindle_ebook_reader_kindle_touch_reader_technology_electronic_digital_e_book-830664.jpg!s&f=1&nofb=1&ipt=3d52af9eb15fb902c2a8c5487d20fbe2f33f5ffab566df95c7790c02eb5d19d7&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F10000%2Ft2%2F1-1213888522NCLT.jpg&f=1&nofb=1&ipt=baf825342d853d0a87bb0c364f5231d25b56bce91a4a37f7d799433a4d0db771&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpublicdomainpictures.net%2Fpictures%2F240000%2Ft2%2Fretro-desk-lamp.jpg&f=1&nofb=1&ipt=d46934a1f28c9aad4bbf03403f878479b4ef75c2583c297a52441a462548107d&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fas2.ftcdn.net%2Fjpg%2F01%2F31%2F60%2F73%2F220_F_131607341_64RStyD1zPQnsmyHovCsL89g19zwzyhw.jpg&f=1&nofb=1&ipt=1df8f30dc9b00746a4f5e89094e524a7bac6c442619f61ca8ef85667514a7bcf&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-TBYSYEoK9vIkf1ahRt1tQAAAA%26pid%3DApi&f=1&ipt=63ca14162774c46bb4f25a374d5e015d4c9874acca9386b1826de7aa2d033eb6&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.pxhere.com%2Fphotos%2Fce%2F8e%2Freading_book_read_touch_screen_e_book_e_reader_e_book_e_ink-827097.jpg!s&f=1&nofb=1&ipt=e0176e8d89c2c8e29afe0c6e03466ff1f7564059f686419b1f7c34d5d6c6036b&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.pxhere.com%2Fphotos%2Ff0%2Ffa%2FChicago_Museum_Asian_Art_Ewer_in_the_Form_of_a_Bamboo_Shoot-1474929.jpg!s&f=1&nofb=1&ipt=db01227d2fff773654932c0be2e58d9c3b8fba540000115b4d64f2c7123b65e9&ipo=images',
    "images/keyboard.jpg",
    "images/key.jpg",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixnio.com%2Ffree-images%2F2017%2F03%2F07%2F2017-03-07-11-00-16-300x200.jpg&f=1&nofb=1&ipt=f5e1c72681d334c20847e5287e241a279c5c18a345600eff9ff0f7037dd356e5&ipo=images"
];

const wordsDev = [
    "phone",
    "mouse",
    "smart watch",
    "tablet",
    "laptop",
    "lamp",
    "smart thermostat",
    "smart shoe",
    "e-reader",
    "smart kettle",
    "keyboard",
    "key",
    "projector"
];

const adjImages = [
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F140000%2Ft2%2Ffunky-fruit.jpg&f=1&nofb=1&ipt=e564f703f14b40115339b525e4926d7fd96c61a675d52c531abe75bcb4a4f743&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.metmuseum.org%2FCRDImages%2Fci%2Fweb-additional%2F62.135.2a_CP1.jpg&f=1&nofb=1&ipt=9c2c0b1a27148393cf0c15b41a3493532634238f2f390f32af850b46521b290a&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F270000%2Ft2%2Ffuzzy-green-plant.jpg&f=1&nofb=1&ipt=3419834d0b411de61863317fda234c5a19eddedcecb01010e447d1e6aac7193a&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F08%2F06%2F14%2F04%2Fsticky-notes-1574437__180.png&f=1&nofb=1&ipt=1904fa72d7cdbad8f867e6b2d0b61425323de7961c52c88cfe2f0b59539b92bd&ipo=images',
    'images/artistic rendering of a nose.png',
    'images/squeaky mouse.png',
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F09%2F08%2F23%2F50%2Fshaking-hands-2730650__180.png&f=1&nofb=1&ipt=ec145477d2bd90b35a5c7bf0d70ec428cbff0780da6cb2987b7f1508187edd97&ipo=images",
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fas1.ftcdn.net%2Fjpg%2F00%2F95%2F25%2F30%2F220_F_95253095_xYua36aoq5iUmvaMFTVEoSWxypYXQGWD.jpg&f=1&nofb=1&ipt=451ed544bb06d0f8404de2d825ca92e6b80fe2af968f4930e1642e92190ecd9e&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.V92lmvHSlggnH3ZazuR7FAAAAA%26pid%3DApi&f=1&ipt=c8ea312a642b16ab2028799f21970640e4a448210e498600a9eec1ee97f5244b&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fas1.ftcdn.net%2Fjpg%2F03%2F07%2F38%2F70%2F220_F_307387013_IzJNxUuBf9Dz3lWmmWfujYztEq0VS1Pa.jpg&f=1&nofb=1&ipt=8ecca2df81500c9ba8f79a05d9cab267ffeed0c671d9ee4f0e408e74cc28c519&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fas2.ftcdn.net%2Fjpg%2F06%2F70%2F84%2F51%2F220_F_670845137_EtkxlS1ZtIz8p20HK3Dlq4aNZKOXOwxo.jpg&f=1&nofb=1&ipt=e7cd4e9bd53befcb64736a3975cb5c719fb54f3a71df860b464228051ba69d51&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc1.peakpx.com%2Fwallpaper%2F72%2F427%2F642%2Fnails-metal-iron-stainless-tabletop-wallpaper-thumb.jpg&f=1&nofb=1&ipt=0d10814340a904651aa83ad5f807c9c5834d7a08924050fdef77a536c1a184d7&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fas2.ftcdn.net%2Fjpg%2F03%2F34%2F39%2F65%2F220_F_334396558_xUGTVJ4ordG9xcPReoCpFGZUgnOzHMo4.jpg&f=1&nofb=1&ipt=d8d0bc187f39d8c2cdb814f0c52f4e3175176728c065d33541a5b9895a3ec288&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fas2.ftcdn.net%2Fjpg%2F02%2F93%2F79%2F39%2F220_F_293793944_9U1dobY1TAwFaONKRfeAFheQTYT87tH7.jpg&f=1&nofb=1&ipt=27ecafd0b31355bd31bf4ce06657b4ae0ddb7a8a17951dcbd68d426422258ee5&ipo=images'
];

const wordAdj = [
    "A funky",
    "A spiffy",
    "A fuzzy",
    "A sticky",
    "A smelly",
    "A squeaky",
    "A shaking",
    "A slick",
    "A steampunk",
    "A shimmering",
    "An undulating",
    "A nail-biting",
    "An improbable",
    "An ordinary seeming"
];

const twistImages = [
    'images/cat.png',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F07%2F12%2F19%2F03%2Flungs-154282__180.png&f=1&nofb=1&ipt=b7b5c32e45fa3b40d52a101a791590aa0d6f5c6ddf2e69e6f3a7dbaf932d8de6&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fm%2Fbottom-ocean-raster-51233211.jpg&f=1&nofb=1&ipt=8c51a87895a8e29fa7f75805eeb56d6b1c4f2ef2d17f2a7f9b0b1f688d39df2a&ipo=images',
    'images/awkward dinner party.png',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F10%2F09%2F03%2F56%2Fbird-2832364__180.jpg&f=1&nofb=1&ipt=28b132abd1660af8d3453d549f027628296a6ee5e96767a155815fca96f3855e&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2012%2F01%2F09%2F13%2F01%2Fmars-11656__180.jpg&f=1&nofb=1&ipt=808d018b67ae1a813ab16cd592eb503bc2b14161fe2d7a84958b75fbedd5d7b0&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.sePJuICpKT8YLdkb7MtzjgAAAA%26pid%3DApi&f=1&ipt=dd73a02fa0c00986bda539c032b1a34f0b1c8057b66a2f94b311dea2a3ac1109&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F270000%2Ft2%2Fvintage-wooden-school-desks.jpg&f=1&nofb=1&ipt=ff9fa2e4120c055b56ab77f614ca5bfa97af4dc1c0369714569954475089c265&ipo=images',
    'images/bobby pins.jpg',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fas2.ftcdn.net%2Fjpg%2F02%2F13%2F87%2F29%2F220_F_213872907_bX2rrW3CVNNIzSxuMbWCLKCAsUxFFluh.jpg&f=1&nofb=1&ipt=6c27a65bd35e91959f86709bd566b7d4ad970d8bcf15c14debf90c592dd721ea&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F3399%2F3565592927_e21cde35e8_n.jpg&f=1&nofb=1&ipt=67d51d8d79a14157b98bccbe3234ad988432c0d90ff632d5971a78683e952433&ipo=images'
];

const wordTwist = [
    "but it's for cats.",
    "but it's only operated by breathing on it.",
    "but it has to be completely waterproof.",
    "but it is for use at a dinner party where no one is talking to each other.",
    "but it makes tweeting noises, like a canary.",
    "but it's for the mission to Mars.",
    "but it will be marketed exclusively through 15 second TikTok ads.",
    "but it will only be used by middle school students in social studies class.",
    "but it must also double as a hair accessory.",
    "but it needs to help users brush their teeth.",
    "but it is edible for human beings."
];

//Functions to randomly select from arrays and randomly place them on the moodboard

//Randomly selects which component will be pulled from the three arrays
function getRandomPictures() {
    devNum = Math.floor(Math.random() * devImages.length);
    adjNum = Math.floor(Math.random() * adjImages.length);
    twistNum = Math.floor(Math.random() * twistImages.length);
}

//Function called when user wants a new moodboard
function placeRandomImages() {
    //Redraw the corkboard background
    context.drawImage(corkboardBg, 0, 0);

    //Randomize which pictures we'll be pulling onto the Canvas
    getRandomPictures();

    //Create images and set sources
    let devPic = new Image();
    devPic.src = devImages[devNum];

    let adjPic = new Image();
    adjPic.src = adjImages[adjNum];

    let twistPic = new Image();
    twistPic.src = twistImages[twistNum];

    //Draw chosen images on the Canvas
    drawImage(devPic);
    drawImage(adjPic);
    drawImage(twistPic);

    sentenceText.textContent = wordAdj[adjNum] + " " + wordsDev[devNum] + " " + wordTwist[twistNum];
}

//Helper function to randomize placement and put images on Canvas
function drawImage(img) {
    img.onload = function() {
        let x = Math.random() * (canvas.width - img.width);
        let y = Math.random() * (canvas.height - img.height);

        context.drawImage(img, x, y);
    }
}