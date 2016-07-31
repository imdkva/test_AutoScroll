const { render, findDOMNode } = ReactDOM

////////////////////////////////////////////////////////////
// Разрешено менять только этот компонент!
class AutoScroll extends React.Component {

  static propTypes = {
    // Количество пикселов, которое должен игнорировать автоскролл
    buffer: React.PropTypes.number
  };

  static defaultProps = {
    //на случай, если buffer не задан - скролится всегда
    buffer: 0
  };

  componentWillUpdate() {
    let domNode = findDOMNode(this),
        currentPosition = domNode.scrollHeight,
        contentBottom = domNode.scrollTop + domNode.offsetHeight;
    
    this.shouldScroll =  contentBottom > currentPosition - this.props.buffer;
  }

  componentDidUpdate() {
    if (this.shouldScroll) {
      let domNode = findDOMNode(this);
      domNode.scrollTop = domNode.scrollHeight;
    }
  }

  render() {
    return this.props.children
  }
}

// Разрешено менять только компонент сверху!
////////////////////////////////////////////////////////////
class App extends React.Component {

  state = { lines: [] };
  
  componentDidMount() {
    streamLines((line) => {
      this.setState({
        lines: this.state.lines.concat([ line ])
      })
    })
  }

  render() {
    const { lines } = this.state
    return (
      <div>
        <h1>Mindbox Test</h1>
        
        <AutoScroll buffer={50}>
          <ul style={{
            height: '300px',
            border: '1px solid',
            overflow: 'auto'
          }}>
            {lines.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </AutoScroll>
      </div>
    )
  }
}
  


////////////////////////////////////////////////////////////
const streamLines = (cb) => {
  var lines = script.split('\n').filter(l => l.trim() != '')

  const notify = () => {
    if (lines.length) {
      cb(lines.shift())
      setTimeout(notify, Math.random() * 1500)
    }
  }

  notify()
}


const script = `
Upon entering the theater, futuristic music sets the mood. A cast member reminds guests that no food, drink or flash photography is allowed and to put on their 3D glasses. The lights dim, a view of the universe appears and a meteorite spins closer and closer to the audience.

Male Announcer: The cosmos: a universe of good and evil where a small group struggles to bring freedom to the countless worlds of despair; a rag-tag band led by the infamous Captain EO.

EO’s spaceship blasts the meteorite into pieces and then soars into the picture on its way to a nearby planet. On board, the ship’s navigator appear. The creature, known as The Geex, has two heads – one named Idy and the other Ody.

Ody: This planet doesn’t look so dangerous, Idy.

Idy: Is this it, Ody?

Ody: We’ll see.

Idy: Ohh.

Ody: We better find that landing beacon.

Idy: Hey, Hooter, we’re almost there!

Hooter: (Blows trunk) Oh, boy!

Major Domo: Don’t get too close or you’ll trip their intrusion alarm.

Hooter: Yeah, don’t blow it you guys.

Ody: Relax, there’s no problem.

Idy: No problem. (Buzzer goes off.) INTRUSION ALERT!!!

Ody: Battle alert!

Idy: Battle alert!!

Minor Domo folds his robotic arms in and ducks behind something.

Major Domo: Don’t panic! That’s what got us into trouble the last time.

Ody: It wasn’t our fault. It was Hooter’s fault.

Idy: Right, Hooter’s fault.

Hooter blows air out of his trunk right at Idy and Ody.

Idy: Oh, Hooter!

Whistle goes off.

Major Domo: Straighten up men. It’s the Captain.

Captain EO rises up on an elevator platform into the cabin.

Minor Domo: Good morning, Captain.

Major Domo: It looks like we tripped their intrusion alarm, sir.

Hooter: Idy and Ody blew it. They got too close.

Captain EO: We’re goin’ in.

Major Domo: Sir, the ship is in absolutely no condition to go into battle. I thought we’d begin by cleaning up Hooter’s bunk.

Hooter throws a can across the cabin.

Captain EO: Hooter! Listen! The Command considers us a bunch of losers. But we’re gonna do it right this time, ’cause we’re the best. We don’t we’ll be drummed out of the corps.

Major Domo: We won’t let you down this time, Captain.

Ody: We’re going to do it right.

Idy: That’s right, we’ll be perfect, sir.

Hooter makes noise in agreement and salutes.

Captain EO: OK. (Salutes Hooter back.)

Idy: Captain, there’s something weird out there.

Ody: A patrol ship.

Captain EO: I thought so. Maybe we can outrun him.

The enemy patrol ship roars by.

Idy: It’s going to ram us!

Ody: Duck!

Captain EO: (Grabs control of the ship) Get to your stations!

EO’s ship flips underneath the patrol ship, dodging it and its laser guns. Minor Domo is sent flying across the cabin into Major Domo (leaving a dent in Major Domo’s metallic back). Hooter is thrown onto his bunk. The patrol ship turns around and hits EO’s ship with its laser gun.

Captain EO: Hold on, everybody, hold on!

Major Domo: We haven’t found the landing beacon yet.

Captain EO: Somebody get the map. Where’s the map?!

Idy: Who’s got the map?

Ody: Fuzzball.

Fuzzball: (Chirps) Hooter has it. (Points in Hooter’s direction.)

Major Domo: Hooter has it!

Captain EO: Hooter!

Hooter: I think I ate it!

Idy & Ody: You ate it!

The chase continues with EO’s ship nearing the planet. EO’s Commander appears on a holographic screen.

Commander Bog: Captain EO?! You down there, EO?

Captain EO: Commander Bog.

Commander Bog: Captain EO, you are late reporting in. Are you having a problem finding our landing beacon?

Captain EO: No, sir. Everything’s under control, sir!

Commander Bog looks around and sees the ship in disarray.

Commander Bog: What’s going on?

Captain EO: We’re having a slight weapons malfunction, sir.

Commander Bog: Captain EO, have you engaged in combat against orders?!

Hooter throws something at the screen and covers the Commander’s eyes.

Commander Bog: I can’t see! Captain EO, what’s going on?

Captain EO: Woohoo!

The ship flies down in between buildings on the planet and approaches a tunnel.

Idy: We’re going through.

Ody: No! Idy, the sail’s not in.

Captain EO: Hooter, bring in the sail!

Hooter: OK.

Captain EO: It’s right behind you, Hooter.

Hooter: I can’t reach it.

Commander Bog: What’s going on? (The yellow substance that Hooter threw onto Commander Bog’s eyes begins to wear off.)

Captain EO: Somebody push the red button.

Major Domo: Use your trunk, Hooter.

Idy: Come on, Hooter. Stretch!

Hooter jumps and hits the button which brings the sail in just in time. EO’s ship flies right through the tunnel without being hit by the patrol ship’s weapons.

Captain EO: Wu!

Everyone cheers with relief. They’re not clear yet, though. EO must navigate the ship through a series of tight spaces.

Ody: We’re losing power.

Captain EO: Everybody hold on!

The ship crashes and smoke is released into the theater. Major Domo shines a light throughout the cabin to inspect the damage. Captain EO is laying on the floor with small pieces of debris on him.

Major Domo: Captain EO? Captain EO?!

EO sits up and looks around at what happened.

Ody: I think we found the beacon. Captain EO, take a look at this.

Captain EO: The homing beacon. We ran right into it!

They all cheer.

Captain EO: Commander Bog!

Commander Bog: Captain EO?

Captain EO: Everything’s OK, sir.

Major Domo: Right on time.

Captain EO: And we’ve reached the homing beacon, sir.

Commander Bog: Well, so far, so good, Captain EO. But, I must admit that I am a bit surprised after the mess you made of your last mission. But now that you’ve found the beacon, take the map, find the Supreme Leader and give her the gift. You do have the map, don’t you?

EO turns to check with his crew.

Ody: No problem.

Idy: No problem, sir.

Hooter: Right here.

Commander Bog: Then get going! (His holographic image disappears.)

Hooter: Boy, do we have a problem.

Ody: We’ll never find the supreme leader without a map.

Captain EO: (Whispers) Come on.

The crew leaves the ship in pursuit of the Supreme Leader even though they don’t know where she is. The setting is very dark with lots of smoke and scrap metal all around. Fuzzball flies right out at the audience. Hooter sneezes loudly.

Hooter: I couldn’t help it.

Captain EO: Quiet.

Hooter paws through the junk.

Captain EO: Hooter.

Hooter: I’m disguising myself.

Captain EO: Ha, ha. Hooter, listen. Put it back and let’s go.

Hooter blows his trunk and puts a trash can on his head.

Captain EO: (Laughing) Don’t be silly.

Hooter: Gotta have a disguise.

As they go further, they hear strange sounds and begin to look all around them. Hooter stops short and the rest bump into him creating a noise which alerts the guards.

Idy & Ody: Shh!

Hooter: Sorry.

Guards pop up from behind the heaps of metal and surround the crew.

Guard: Get them!

Outnumbered and nowhere to go, EO and the crew surrender and are led to the Supreme Leader’s dark, grungy lair.

The Supreme Leader is suspended like a spider from its web with numerous cables and tubes hanging all around her. She likes to click her long, sharp fingernails together and claw at the audience.

Idy: Who is it?

Major Domo: The Supreme Leader.

Hooter: Hey, I told you I’d find her.

Supreme Leader Supreme Leader: Silence! Infidel!

Hooter: Infidel?

Supreme Leader: You infect my world with your presence. Turn the others into … trash cans!

Hooter: See you later trash can! (Runs over to Major Domo)

Supreme Leader: And for him! 100 years of torture in my deepest dungeon.

Captain EO: (Remaining strong and unmoved) Your highness, my loyal companions and I accept these punishments.

Hooter: We do?

Idy: Of course we do, he’s our captain.

Hooter: Speak for yourself. (Honks)

Captain EO: We have come here uninvited and unannounced.

Supreme Leader: So, then we both admit to your … stupidity! Why have you come?

Captain EO: To bring a gift, your highness. To someone as beautiful as you.

Supreme Leader: You think me … beautiful?

Captain EO: Very beautiful within, your highness, but without a key to unlock it. And that is my gift to you.

Supreme Leader: So, let me see this gift.

Captain EO: Not only see, your highness, but hear.

EO points to his ear and then to Minor Domo giving him the cue to get started. The music starts and Minor Domo transforms into a keyboard synthesizer. Major Domo kicks his leg off and it becomes a guitar. The rest of his metallic body becomes a complete drum set played by Idy and Ody.

Captain EO: Hooter, hurry up! (He removes his cape and throws it on the floor.)

Idy: Come on, Hooter.

Ody: Over here.

Hooter slips on EO’s cape and slides into the keyboard knocking it over which stops the music.

Idy & Ody: No.

Supreme Leader: Send in my troops!

The troops start coming in from underneath where the Supreme Leader is suspended.

Hooter: I got it, I got it! (Pushes keyboard back upright.)

Captain EO: Hooter!! Hurry up and fix it, Hooter!

The troops surround EO pushing at him with their weapons. A 3D effect here puts us in EO’s spot and we see the troop’s spears being jabbed right at us.

Supreme Leader: Send him to my dungeon!

Captain EO: Hooter!

Hooter: (Sparks two wires together) I got it!

Hooter presses the keys, the music starts and the power of the music energizes Captain EO to push away the guards from around him.

Supreme Leader: Get him!

EO uses his power to turn the guards into dancers who then join his side. They fall in formation behind him and move forward toward the Supreme Leader.

Captain EO: Wu!

The group performs a series of dance moves and then EO sings.

Captain EO: We’re on a mission in the everlasting light that shines
A revelation of the truth and chapters of our minds

Synthesized Voice: So long, bad times

Captain EO: We’re gonna shake it up
Break it up
We’re sharing light brighter than the sun

Synthesized Voice & Fuzzball: Hello, good times

Captain EO: We’re here to stimulate, eliminate, an’ congregate, illuminate

Dancers: We are here to change the world

Captain EO: We! Gonna change the world. We!

Dancers: We are here to change the world

Captain EO: Gonna change the world. Wu!

The group moves to the back of the room, turns and moves forward again making stomping sounds with each step.

Captain EO: So do surrender ’cause my power’s deep inside my soul
Sing it!

Dancers: We are here to change the world

Captain EO: We! Gonna change the world. Yeah, yeah.

Dancers: We are here to change the world

Captain EO: We! Gonna change the world. Wu!

EO moves closer and up a few stairs toward the Supreme Leader.

Supreme Leader: My whip warriors!

The warriors emerge from their cells and advance toward EO whipping at the air in front of EO. The dancers back away from the warriors and run to the back of the room. EO tries to destroy them with his laser power, but they deflect the light. The warriors get their whips wrapped around him. He spins out of their hold, but grabs onto the ends of both whips.

Supreme Leader: Destroy him! Ha, ha, ha.

Using his laser power, the power runs through the whips to the warriors. A good idea, but it backfires on him. They deflect the power right back to him setting him back. He drops the whips and runs toward the open gate which then closes just before he gets there. The whip warriors approach. Fuzzball gets an idea and flies up behind the warriors and grabs hold of the end of their whips. He quickly ties the whips together. The warriors didn’t notice and lift their whips to crack at EO but instead get all tangled up in each other. The Supreme Leader gets a worried look on her face. EO uses his power and transforms the warriors into more dancers.

Hooter: Let’s go

EO sets prisoners, who were locked up in cells built into the columns of the lair, free and transforms them into more dancers. EO does the Moon Walk and continues the song.

Captain EO: Wu!

Dancers: We are here to change the world

Captain EO: We’re gonna change the world, girl

The Supreme Leader covers her ears and groans.

Dancers: We are here to change the world

Captain EO: My brothers! My brothers! We’re gonna change the world.

Dancers: We are here to change the world

Captain EO: We! Deep down in my fire. Deep down in my soul, baby.

Dancers: We are here to change the world

Captain EO: We! Gonna change the world. Wu!

EO rises and hovers above the ground, sends magic up to the Supreme Leader and transforms her into a beautiful woman. Her lair is also transformed into a beautiful palace. The dark, metallic columns covered with black tubes are now Greek-like white columns draped with vines. The sun is shining in the background.

Captain EO: Wu!

The dancers celebrate and gather around the Supreme Leader. EO’s crew joins EO and follow him toward the gate.

Captain EO: We’re sending out
A major love
And this is our
Message to you
The planets are linin’ up
We’re bringin’ brighter days
They’re all in line
Waitin’ for you
Can’t you see?
You’re just another part of me
Wu! Another part of me

EO’s crew heads for the gate. Fuzzball flies out to the audience and waves good-bye.

Fuzzball: Bye, bye.

EO salutes and they leave.

Captain EO: We’re takin’ over
We have the truth
This is our mission
To see it through
Don’t point your finger
Not dangerous
This is our planet
You’re one of us

EO’s ship flies up in front of us and takes off towards another planet.

Captain EO: We’re sending out
A major love
And this is our
Message to you
The planets are linin’ up (Three planets appear in line, then disappear and a starfield appears.)
We’re bringin’ brighter days
They’re all in line
Waitin’ for you (The “Captain EO” logo appears and, with the music, laser lights flash from behind the screen out through the room.)
Can’t you see?
You’re just another part of me, Ee, Ee, Wu!

The logo fades away and the lights in the theater come on. Guests remove their 3D glasses and exit out the doors to their left into the Journey Into Imagination courtyard.
`

render(
  <App/>,
  document.getElementById('app')
)