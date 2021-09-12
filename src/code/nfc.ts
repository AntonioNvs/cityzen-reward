import NfcManager, {NfcEvents} from 'react-native-nfc-manager';

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
