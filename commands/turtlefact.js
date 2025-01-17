//SSSpencer413

var Facts = [
    "A turtle's shell is a modified ribcage and part of its vertebral column",
    "Many turtles are able to retract their heads and feet into their shells",
    "Turtles are very adaptive and can be found on every continent, except Antarctica ",
    "Sea turtles can be found in the Coral Triangle of Indonesia, Malaysia, the Philippines, Papua New Guinea and more!",
    "Most turtles are omnivores and eat a variety of foods, depending on their species",
    "All turtles lay eggs. They find a place on land to lay their eggs, dig a nest into the sand or dirt and then walk away",
    "Sea turtles travel from the ocean to lay around 110 eggs on beaches",
    "The temperature of the sand affects the breeding of the turtle",
    "The earliest known turtle fossils are from the Triassic Period, about 220 million years ago",
    "A pair of Russian tortoises went into space in 1968, they returned safely and survived",
    "The African helmeted turtle is the most common turtle in Africa, according to Animal Planet",
    "The alligator snapping turtle lures in fish with its tongue by wiggling, which looks like a worm",
    "Just like your bones, a turtle’s shell is actually part of its skeleton. it consists of a rib cage and spine",
    "Contrary to popular belief, a turtle cannot come out of its shell. The turtle’s shell grows with them, so it’s impossible for them to grow too big for it!",
    "Sadly, many species of turtle are endangered! 129 of approximately 300 species of turtle and tortoise on Earth today are either vulnerable, endangered, or critically endangered",
    "Turtles belong to one of the oldest reptile groups in the world – beating snakes, crocodiles and alligators!",
    "Turtles are easily recognised by their bony, cartilaginous shell, they use it to protect themselves from predators",
    "Turtles have three ears: one on either side of the head and a third on the nose",
    "Turtles are more closely related to birds than they are to lizards and snakes",
    "Some species of turtles can climb trees",
    "The design of turtles’ shells is much like that of insect’s wings: A line of hexagons bounded by pentagons, leading to straight edges",
    "Snapping turtles evolved to have the snapping defense because they are too big to hide inside their shells like other turtles",
    "In Jurassic Park, the velociraptor sounds are actually turtles mating",
    "Some turtles can breathe through their cloacal bursae ",
    "In Kenya, a turtle adopted a hippo that was abandoned after a tsunami",
    "In the Amazon, butterflies will drink the tears of turtles to provide necessary sodium in their diet",
    "All tortoises are actually turtles and calling a tortoise a turtle is not wrong",
    "The earliest turtles had teeth and they could not pull their heads into their shells, but other than that they were very similar to the turtles that are alive today",
    "Some people believe that the turtles’ shell is what has allowed them to successfully survive for so long"
 ];

exports.run = async (Client, interaction) => {
    await interaction.defer();

    interaction.reply(Facts[Math.floor(Math.random() * Facts.length)]);
};

exports.commandData = {
    name: 'turtlefact',
    description: 'random turtle fact',
    defaultPermission: true
};