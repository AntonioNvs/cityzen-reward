![Logo](https://i.ibb.co/GsnNW0d/logo.png)

# Hackaton da Fundação Estudar - Sustentabilidade

## O problema

A sociedade atual demonstra árduas dificuldades em superar e mitigar problemas que, em concepção, são simples, sendo eles a sustentabilidade e saúde. Segundo o estudo da Revista Ciência e Saúde Coletiva, teríamos uma economia de R$1.14 bilhão aos cofres públicos caso o sedentarismo fosse a metade do que é hoje. Além disso, outro estudo feito pelo Centro de Tecnologia de Embalagens (CETEA) em parceria com o Compromisso Empresarial para Reciclagem (CEMPRE), estimou que, por ano, 53.2 milhões de toneladas de CO2 são lançadas na atmosfera a partir de resíduos urbanos que poderiam ser reciclados.

Dito isso, é de suma importância que os cidadãos, principalmente em cidades inteligentes, desenvolvam hábitos saudáveis e sustentáveis para a melhoria de vida em todos os aspectos, e tais atitudes são falhas atualmente, sem o incentivo para realização das mesmas. Logo, nós desenvolvemos a Cityzen Reward.

## A solução

A solução hospedada neste repositório consiste na parte estática, com algumas funcionalidades, dos usuários do Cityzen Reward, feita em React Native, utilizando TypeScript.

- [Instalação](#instalação)
- [Integração](#integração)
- [Geolocalização](#geolocalização)
- [Uso do NFC](#nfc)

### Instalação

* **Pré-requisitos**

É necessário ter todo o ambiente React Native e Git instalado e configurado na máquina, desde a SDK, até os instaladores de bibliotecas.

* **Comandos**

Primeiro, clona-se o projeto

```bash
git clone https://github.com/AntonioNvs/cityzen-reward.git CityzenReward
```

Após isso, instale os pacotes por

```
yarn
```

### Integração

A solução se baseia no pressuposto da existência de sistemas virtuais do município/estado que armazena e entrega dados de alguns serviços utilizados pela gente, e como o contexto do desafio é cidades inteligentes, tal ideia é viabilizada.

Com o nosso sistema no centro de toda a integração, sendo responsável por manipular as transações conforme acontecem, a segurança e a robustez do complexo são dois aspectos que precisam ser garantidos. Em ideia, o agrupamento das informações seria por meio de chamadas a API, devido a existência delas aqui apresentada anteriormente. Dito isso, as transações seriam feitas pelo próprio sistema, que accessaria os componentes integrantes conforme o necessário, sendo estes somente responsável em fornecer de antemão o acesso de suas respectivas funcionalidades.

### Geolocalização

Todo o sistema foi construído com o uso da biblioteca [react-native-geolocation-service](https://github.com/Agontuk/react-native-geolocation-service), na qual foi possível capturar a informação em tempo real do aparelho e monitorar sua movimentação, por meio de suas adquiridas.

O sistema descrito e utilizado se encontra [aqui](src/pages/Run/Run.tsx), com o seguinte código chave:

```ts
  function _start() {
    setWatchId(
      Geolocation.watchPosition(
        latPos => {
          // Atualizando a distância
          setDistance(dis => dis + calcDistance(latPos));

          // Atualizando a posição
          const newPos = position;
          newPos.push(latPos);
          setPosition(newPos);

          console.log(position);
        },
        error => Alert.alert(JSON.stringify(error)),
        {
          enableHighAccuracy: true, // Uso de GPS ao invés de Wi-fi
          distanceFilter: 2, // Distância mínima (m) de atualização
        },
      ),
    );

    setWasStarted(true);
  }
  
  // Cálculo da distância entre duas geolocalizações
  function calcDistance(currentPos: Geolocation.GeoPosition) {
    let dis = 0;

    if (position.length !== 0) {
      const lastIndex = position.length - 1;

      /*
        AQUI LOCALIZARIA A FUNÇÃO DE VERIFICAÇÃO DA VERACIDADE DA CORRIDA,
        OU SEJA, O ALGORITMO ANTI-BURLAGEM, COM O FUNCIONAMENTO IDEALIZADO
        NO VÍDEO DO PROTÓTIPO
      */

      dis = getPreciseDistance(
        {
          latitude: position[lastIndex].coords.latitude,
          longitude: position[lastIndex].coords.longitude,
        },
        {
          latitude: currentPos.coords.latitude,
          longitude: currentPos.coords.longitude,
        },
      );
    }

    return dis;
  }
```

### NFC

O uso do NFC foi construído em base na biblioteca [react-native-nfc-manager](https://github.com/revtel/react-native-nfc-manager), na qual foi possível utilizar o componente nativo de NFC do dispositivo para ler um sinal próximo ao aparelho.

Em ideia da aplicação, seu uso consistiria em aproximar de uma máquina ou aparelho celular (outra aplicação de escrita de sinal NFC) do local de gasto dos Cityzen Credit, ou seja, estariam disponíveis no ônibus, metrô, nas localidades de eventos culturais e na própria prefeitura para abater em contas públicas.

O sistema descrito e utilizado se encontra [aqui](src/code/nfc.ts), com o seguinte código chave:

```ts
// Inicialização da leitura do NFC, tendo que ser feita antes de qualquer tentativa de leitura
export async function initNfc() {
  await NfcManager.start();
}

export function readNdef() {
  // Retirada dos eventos setados ao finalizar o processo de leitura
  const cleanUp = () => {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    NfcManager.setEventListener(NfcEvents.SessionClosed, null);
  };

  // Promise de espera de leitura da máquina
  return new Promise(resolve => {
    let tagFound = null;

    // Quando conseguir ler o equipamento, é disparado tal evento de retorno das informações
    NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
      tagFound = tag;
      resolve(tagFound);

      NfcManager.unregisterTagEvent().catch(() => 0);
    });

    NfcManager.setEventListener(NfcEvents.SessionClosed, () => {
      // Em caso a sessão feche, resete os eventos e retorne a função
      cleanUp();
      if (!tagFound) {
        resolve();
      }
    });

    NfcManager.registerTagEvent();
  });
}
```

## Atualizações futuras

O sistema é escalável devido a alta demanda na sociedade, para o seu necessário e urgente desenvolvimento sustentável. Logo, o aplicativo atual é somente um indício de todas as aplicabilidades que poderiam ser feitas, dentre tais:

- **Uso de blockchain nas transações**
- **Gamificação**
- **Adição de novas possibilidades de ganho e compra de Cityzen Credit**
- **Aplicação dos agentes municipais, que estariam disponíveis nos meios de compra**



*Todos os direitos reservados para o respectivo produtor da aplicação - Antônio Caetano Neves Neto ©*
