import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';

import BackgroundWithHeader from '../../components/BackgroundWithHeader/BackgroundWithHeader';
import Colors from '../../styles/colors.json';
import TextComponent from '../../components/TextComponent/TextComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  BottomPageContainer,
  DescriptionContainer,
  InsideCircleContainer,
  ItemContainer,
  LineItemsContainer,
  SimbolCircleContainer,
  TopPageContainer,
  TabNFCContainer,
} from './styles';

import {useNavigation} from '@react-navigation/core';
import {initNfc, readNdef} from '../../code/nfc';

const Uses: React.FC = () => {
  const [loadNFC, setLoadNFC] = useState(false);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);

  const navigation = useNavigation();

  // Inicializando a função de start do NFC
  useEffect(() => {
    initNfc().then(() => {});
  }, []);

  // Opacidade do background ao ativar ou desativar a tela de aviso
  useEffect(() => {
    setBackgroundOpacity(loadNFC ? 0.9 : 1);
  }, [loadNFC]);

  // Função de leitura da máquina
  async function tabReadNFC(item: string) {
    setLoadNFC(true);

    const response = await readNdef();

    /*
      AQUI LOCALIZARIA O CÓDIGO DE MANIPULAÇÃO DAS INFORMAÇÕES OBTIDAS POR
      MEIO DE ACESSOS AS API'S
    */

    goToVerifyPayPage(item);
  }

  // Navegando para página de verificação, com o envio do parâmetro do item selecionado.
  async function goToVerifyPayPage(item: string): Promise<void> {
    navigation.navigate('verifyPay', {
      item,
    });
  }

  return (
    <>
      <BackgroundWithHeader
        justifyContent="space-between"
        nameIcon="arrow-back"
        transparent={backgroundOpacity}>
        <TopPageContainer>
          <SimbolCircleContainer>
            <InsideCircleContainer>
              <MaterialIcons name="nfc" color={Colors.white} size={48} />
              <TextComponent
                textAlign="center"
                fontSize={1.4}
                fontFamily="Lato-Bold"
                color={Colors.blue}>
                80 CT
              </TextComponent>
            </InsideCircleContainer>
          </SimbolCircleContainer>

          <TextComponent textAlign="center" color={Colors.gray} fontSize={1.1}>
            Basta aproximar o celular do leitor, depois de selecionar uma opção,
            que o pagamento será efetuado
          </TextComponent>
        </TopPageContainer>

        <BottomPageContainer>
          <DescriptionContainer>
            <TextComponent
              textAlign="left"
              color={Colors.white}
              fontSize={1.4}
              fontFamily="Lato-Bold">
              Usos e seus preços
            </TextComponent>

            <TextComponent
              textAlign="left"
              color={Colors.gray}
              fontSize={1.1}
              fontFamily="Lato-Regular">
              Clique em uma opção de compra
            </TextComponent>
          </DescriptionContainer>

          <LineItemsContainer>
            <TouchableOpacity onPress={() => tabReadNFC('ticket-bus')}>
              <ItemContainer>
                <MaterialIcons
                  name="directions-bus"
                  color={Colors.gray}
                  size={40}
                />
                <TextComponent
                  textAlign="center"
                  color={Colors.blueGray}
                  fontSize={1}>
                  Passagem de ônibus
                </TextComponent>
                <TextComponent
                  textAlign="center"
                  color={Colors.blue}
                  fontSize={1.2}
                  fontFamily="Lato-Bold">
                  50 CT
                </TextComponent>
              </ItemContainer>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => tabReadNFC('ticket-culture')}>
              <ItemContainer>
                <MaterialIcons
                  name="theater-comedy"
                  color={Colors.gray}
                  size={40}
                />
                <TextComponent
                  textAlign="center"
                  color={Colors.blueGray}
                  fontSize={1}>
                  Eventos culturais
                </TextComponent>
                <TextComponent
                  textAlign="center"
                  color={Colors.blue}
                  fontSize={1.2}
                  fontFamily="Lato-Bold">
                  30 - 90 CT
                </TextComponent>
              </ItemContainer>
            </TouchableOpacity>
          </LineItemsContainer>

          <LineItemsContainer>
            <TouchableOpacity onPress={() => tabReadNFC('ticket-subway')}>
              <ItemContainer>
                <MaterialIcons name="tram" color={Colors.gray} size={40} />
                <TextComponent
                  textAlign="center"
                  color={Colors.blueGray}
                  fontSize={1}>
                  Passagem de metrô
                </TextComponent>
                <TextComponent
                  textAlign="center"
                  color={Colors.blue}
                  fontSize={1.2}
                  fontFamily="Lato-Bold">
                  40 CT
                </TextComponent>
              </ItemContainer>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => tabReadNFC('check')}>
              <ItemContainer>
                <MaterialIcons
                  name="receipt-long"
                  color={Colors.gray}
                  size={40}
                />
                <TextComponent
                  textAlign="center"
                  color={Colors.blueGray}
                  fontSize={1}>
                  Desconto em contas
                </TextComponent>
              </ItemContainer>
            </TouchableOpacity>
          </LineItemsContainer>
        </BottomPageContainer>
      </BackgroundWithHeader>
      {
        // Carregar aviso
        loadNFC && <TabNFC />
      }
    </>
  );
};

interface TabNFCProps {}

const TabNFC: React.FC<TabNFCProps> = () => {
  return (
    <TabNFCContainer>
      <MaterialIcons name="nfc" size={72} color={Colors.white} />
      <TextComponent
        textAlign="center"
        color={Colors.gray}
        fontSize={1.2}
        marginTop={16}>
        Aproxime o seu celular para próximo da máquina.
      </TextComponent>
    </TabNFCContainer>
  );
};

export default Uses;
