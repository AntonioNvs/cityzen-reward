import React from 'react';
import {useNavigation} from '@react-navigation/core';

import BackgroundWithHeader from '../../components/BackgroundWithHeader/BackgroundWithHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/colors.json';

import {
  ButtonConfirmContainer,
  ItemContainer,
  ItemBottomContainer,
} from './styles';
import TextComponent from '../../components/TextComponent/TextComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

const VerifyPay: React.FC = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();

  return (
    <BackgroundWithHeader justifyContent="center" nameIcon="arrow-back">
      <ItemContainer>
        <MaterialIcons
          name={
            item === 'ticket-bus'
              ? 'directions-bus'
              : item === 'ticket-culture'
              ? 'theater-comedy'
              : item === 'ticket-subway'
              ? 'tram'
              : 'receipt-long'
          }
          size={144}
          color={Colors.gray}
        />
        <ItemBottomContainer>
          <TextComponent
            textAlign="center"
            color={Colors.blueGray}
            fontSize={1.6}>
            {item === 'ticket-bus'
              ? 'Passagem de ônibus'
              : item === 'ticket-culture'
              ? 'Eventos culturais'
              : item === 'ticket-subway'
              ? 'Passagem de metrô'
              : 'Desconto em contas'}
          </TextComponent>
          <TextComponent
            textAlign="center"
            color={Colors.blue}
            fontFamily="Lato-Bold"
            fontSize={1.4}
            marginTop={8}>
            {item === 'ticket-bus'
              ? '50'
              : item === 'ticket-culture'
              ? '80'
              : item === 'ticket-subway'
              ? '40'
              : '70'}{' '}
            CT
          </TextComponent>
        </ItemBottomContainer>
      </ItemContainer>

      <TextComponent textAlign="center" color={Colors.gray} fontSize={1.4}>
        Você deseja realmente realizar a compra?
      </TextComponent>
      <TextComponent
        textAlign="center"
        color={Colors.blueGray}
        fontSize={1}
        marginTop={8}>
        Sobrará{' '}
        {item === 'ticket-bus'
          ? '30'
          : item === 'ticket-culture'
          ? '0'
          : item === 'ticket-subway'
          ? '40'
          : '10'}{' '}
        CT em sua conta.
      </TextComponent>
      <ButtonConfirmContainer>
        <ButtonComponent
          width={96}
          height={48}
          borderRadius={8}
          type="linear"
          primaryColor="rgba(106, 179, 206, 1)"
          secondaryColor="rgba(106, 179, 206, 0.6)"
          action={() => navigation.navigate('Dashboard')}
          alignItems="center"
          justifyContent="space-evenly"
          flexDirection="row">
          <MaterialIcons name="done" size={20} color={Colors.white} />
          <TextComponent textAlign="center" fontSize={1.2}>
            Sim
          </TextComponent>
        </ButtonComponent>

        <ButtonComponent
          width={96}
          height={48}
          borderRadius={8}
          type="solid"
          primaryColor={Colors.black}
          action={() => navigation.navigate('Dashboard')}
          alignItems="center"
          justifyContent="space-evenly"
          flexDirection="row">
          <MaterialIcons name="close" size={20} color={Colors.gray} />
          <TextComponent textAlign="center" fontSize={1.2} color={Colors.gray}>
            Não
          </TextComponent>
        </ButtonComponent>
      </ButtonConfirmContainer>
    </BackgroundWithHeader>
  );
};

export default VerifyPay;
