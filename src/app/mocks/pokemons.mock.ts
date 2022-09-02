import { Pokemon } from '../models/pokemons.model';

export const pokemonList: Pokemon[] = [
  {
    name: 'Charmeleon',
    description:
      'Charmeleon destrói seus oponentes sem pena com suas garras afiadas. Torna-se agressivo quando encontra um oponente forte e então a chama na ponta da sua cauda queima intensamente em uma cor azulada.',
    type: ['fogo'],
    image: './assets/images/pokemons/img-charmeleon.jpg',
    height: 1.85,
    weight: 19,
    cod: 1,
    data: [10, 45, 60, 35],
  },
  {
    name: 'Squirtle',
    description:
      'A carapaça de Squirtle não serve só para sua proteção. As ranhuras em sua superfície e a sua forma arredondada ajudam a minimizar a resistência na água permitindo que nade em alta velocidade',
    type: ['agua'],
    image: './assets/images/pokemons/img-squirtle.jpg',
    height: 50,
    weight: 9,
    cod: 2,
    data: [25, 80, 44, 56],
  },
  {
    name: 'Caterpie',
    description:
      'Caterpie tem um apetite voraz. Pode devorar folhas maiores do que seu corpo bem diante de seus olhos. Este Pokémon libera um cheiro terrivelmente forte das suas antenas.',
    type: ['incomodar'],
    image: './assets/images/pokemons/img-caterpie.jpg',
    height: 30,
    weight: 2.9,
    cod: 3,
    data: [40, 30, 22, 15],
  },
  {
    name: 'Pikachu',
    description:
      'Quando Pikachu acha alguma coisa nova, lança uma carga elétrica nela. Se você encontrar uma fruta torrada, é prova de que este Pokémon errou na intensidade de sua carga elétrica.',
    type: ['eletrico'],
    image: './assets/images/pokemons/img-pikachu.jpg',
    height: 40,
    weight: 6,
    cod: 4,
    data: [80, 60, 45, 90],
  },
  {
    name: 'Blastoise',
    description:
      'Blastoise possui canos de água muito precisos que sobressaem de sua carapaça. Podem dar tiros de água com tamanha precisão que conseguem abater latas vazias a uma distância de mais de 50 metros.',
    type: ['agua'],
    image: './assets/images/pokemons/img-blastoise.jpg',
    height: 1.85,
    weight: 64,
    cod: 5,
    data: [89, 46, 38, 47],
  },
  {
    name: 'Pidgeotto',
    description:
      'Pidgeotto se apossa de uma área grande como seu próprio território. Este Pokémon voa para vigiar seu espaço. Se alguém invadir o seu território, punirá o invasor arduamente com suas garras afiadas sem piedade.',
    type: ['normal', 'voo'],
    image: './assets/images/pokemons/img-pidgeotto.jpg',
    height: 1.12,
    weight: 30,
    cod: 6,
    data: [20, 47, 33, 55],
  },
  {
    name: 'Pidgeot',
    description:
      'Este Pokémon tem uma plumagem deslumbrante de belas penas brilhantes. Muitos Treinadores são atraídos pela beleza extraordinária das penas em sua cabeça, os convencendo a escolher Pidgeot como seu Pokémon.',
    type: ['normal', 'voo'],
    image: './assets/images/pokemons/img-pidgeot.jpg',
    height: 1.59,
    weight: 39.4,
    cod: 7,
    data: [20, 28, 40, 39],
  },
  {
    name: 'Rattata',
    description:
      'Rattata é extremamente prudente. Move suas orelhas até enquanto dorme para ouvir tudo. Não é particular na hora de escolher seu habitat podendo fazer seu ninho em qualquer lugar.',
    type: ['normal'],
    image: './assets/images/pokemons/img-rattata.jpg',
    height: 30,
    weight: 3.5,
    cod: 8,
    data: [39, 45, 36, 49],
  },
  {
    name: 'Ekans',
    description:
      'Ekans se enrola para descansar. Adota esta posição para responder rapidamente a qualquer ameaça de qualquer direção levantando a cabeça com uma encarada feroz.',
    type: ['toxico'],
    image: './assets/images/pokemons/img-ekans.jpg',
    height: 201,
    weight: 6.9,
    cod: 9,
    data: [47, 25, 31, 53],
  },
  {
    name: 'Arbok',
    description:
      'Este Pokémon é terrivelmente forte e pode esmagar qualquer coisa com seu corpo. Pode achatar até cilindros pesados de aço. Uma vez que Arbok se enrosca em seu oponente, escapar de seu abraço é impossível.',
    type: ['toxico'],
    image: './assets/images/pokemons/img-arbok.jpg',
    height: 1.1,
    weight: 19,
    cod: 10,
    data: [58, 36, 47, 79],
  },
  {
    name: 'Vulpix',
    description:
      'Ao nascer, Vulpix tem uma cauda branca. A cauda se separa em seis se este Pokémon recebe bastante amor de seu Treinador. As seis caudas se encaracolam majestosamente.',
    type: ['fogo'],
    image: './assets/images/pokemons/img-vulpix.jpg',
    height: 1.85,
    weight: 64,
    cod: 11,
    data: [30, 45, 56, 66],
  },
  {
    name: 'Raichu',
    description:
      'Se suas bolsas elétricas ficarem sobrecarregadas, Raichu aterrará sua cauda no solo para descarregar eletricidade. Zonas queimadas podem ser encontradas perto de seu ninho.',
    type: ['eletrico'],
    image: './assets/images/pokemons/img-raichu.jpg',
    height: 80,
    weight: 30,
    cod: 12,
    data: [67, 50, 49, 80],
  },
  {
    name: 'Paras',
    description:
      'Paras tem cogumelos parasitas crescendo em suas costas chamados tochukaso. Eles crescem ao se alimentarem dos nutrientes deste Pokémon Inseto. São muito valiosos como elixir de vida.',
    type: ['incomodar', 'grama'],
    image: './assets/images/pokemons/img-paras.jpg',
    height: 1.83,
    weight: 64,
    cod: 13,
    data: [20, 35, 46, 60],
  },
  {
    name: 'Venonat',
    description:
      'Diz-se que Venonat evoluiu com um revestimento fino de pelo rígido que cobre e protege seu corpo inteiro. Possui olhos tão grandes que não há uma presa que passe desapercebida.',
    type: ['incomodar', 'toxico'],
    image: './assets/images/pokemons/img-venonat.jpg',
    height: 100,
    weight: 30,
    cod: 14,
    data: [47, 42, 30, 64],
  },
  {
    name: 'Venomoth',
    description:
      'Venomoth é um Pokémon noturno e só ativo à noite. Suas presas favoritas são insetos pequenos que se encontram em volta das luzes nas ruas, atraídos pela luz na escuridão.',
    type: ['incomodar', 'toxico'],
    image: './assets/images/pokemons/img-venomoth.jpg',
    height: 1.51,
    weight: 12,
    cod: 15,
    data: [57, 52, 40, 74],
  },
  {
    name: 'Metagross',
    description:
      'Metagross tem quatro cérebros no total. Os quatro cérebros combinados podem calcular problemas difíceis mais rápido do que um supercomputador. Pode flutuar no ar ao guardar suas quatro patas',
    type: ['aco', 'psiquico'],
    image: './assets/images/pokemons/img-metagross.jpg',
    height: 2.34,
    weight: 70,
    cod: 16,
    data: [99, 80, 78, 100],
  },
];
