import React from 'react';

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
} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';

const Uses: React.FC = () => {
  const navigation = useNavigation();

  function goToVerifyPayPage(item: string): void {
    navigation.navigate('verifyPay', {
      item,
    });
  }

  return (
    <BackgroundWithHeader justifyContent="space-between" nameIcon="arrow-back">
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
          <TouchableOpacity onPress={() => goToVerifyPayPage('ticket-bus')}>
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

          <TouchableOpacity onPress={() => goToVerifyPayPage('ticket-culture')}>
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
          <TouchableOpacity onPress={() => goToVerifyPayPage('ticket-subway')}>
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

          <TouchableOpacity onPress={() => goToVerifyPayPage('check')}>
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
  );
};

export default Uses;
