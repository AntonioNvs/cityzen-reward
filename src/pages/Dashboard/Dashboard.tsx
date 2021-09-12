import React from 'react';

import {TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import BackgroundWithHeader from '../../components/BackgroundWithHeader/BackgroundWithHeader';
import TextComponent from '../../components/TextComponent/TextComponent';

import Colors from '../../styles/colors.json';

import {
  CardBottomContainer,
  CardContainer,
  CardTopContainer,
  IconTransactionContainer,
  LeftTransactionContainer,
  OptionTabContainer,
  TabContainer,
  TransactionCardContainer,
  TransactionsContainer,
  CoinTransactionContainer,
  InformationTextTransactionContainer,
  CardAndTransactionContainer,
  ImageCard,
} from './styles';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  // Navegação da TabBottomBar
  function changePageWithTabBar(page: string): void {
    navigation.navigate(page);
  }

  return (
    <>
      <BackgroundWithHeader nameIcon="menu" justifyContent="space-between">
        <CardAndTransactionContainer>
          <CardContainer>
            <ImageCard />
            <CardTopContainer>
              <MaterialIcons name="nfc" size={56} color={Colors.white} />
              <TextComponent
                textAlign="right"
                fontSize={1.5}
                fontFamily="Lato-Bold">
                80 CT
              </TextComponent>
            </CardTopContainer>

            <CardBottomContainer>
              <TextComponent
                textAlign="left"
                fontSize={1.25}
                fontFamily="Lato-Bold">
                1293 3944 9373 9373
              </TextComponent>

              <TextComponent
                marginTop={2}
                textAlign="left"
                fontSize={1.25}
                fontFamily="Lato-Bold">
                ANTÔNIO CAETANO NEVES NETO
              </TextComponent>
            </CardBottomContainer>
          </CardContainer>

          <TransactionsContainer>
            <TextComponent
              textAlign="left"
              fontSize={1.5}
              fontFamily="Lato-Bold">
              Transações
            </TextComponent>

            <TransactionCardContainer>
              <LeftTransactionContainer>
                <IconTransactionContainer>
                  <MaterialIcons
                    name="directions-bus"
                    size={32}
                    color={Colors.white}
                  />
                </IconTransactionContainer>

                <InformationTextTransactionContainer>
                  <TextComponent textAlign="left" fontSize={1.4}>
                    Passagem de ônibus
                  </TextComponent>
                  <TextComponent
                    textAlign="left"
                    color={Colors.gray}
                    fontSize={1.2}>
                    05 de setembro de 2021, 11:56
                  </TextComponent>
                </InformationTextTransactionContainer>
              </LeftTransactionContainer>

              <CoinTransactionContainer>
                <MaterialIcons name="nfc" size={16} color={Colors.white} />
                <TextComponent textAlign="right" color={Colors.red}>
                  -50
                </TextComponent>
              </CoinTransactionContainer>
            </TransactionCardContainer>

            <TransactionCardContainer>
              <LeftTransactionContainer>
                <IconTransactionContainer>
                  <FontAwesome name="recycle" size={28} color={Colors.white} />
                </IconTransactionContainer>

                <InformationTextTransactionContainer>
                  <TextComponent textAlign="left" fontSize={1.4}>
                    Reciclagem
                  </TextComponent>
                  <TextComponent
                    textAlign="left"
                    color={Colors.gray}
                    fontSize={1.2}>
                    03 de setembro de 2021, 14:31
                  </TextComponent>
                </InformationTextTransactionContainer>
              </LeftTransactionContainer>

              <CoinTransactionContainer>
                <MaterialIcons name="nfc" size={16} color={Colors.white} />
                <TextComponent textAlign="right" color={Colors.green}>
                  +50
                </TextComponent>
              </CoinTransactionContainer>
            </TransactionCardContainer>

            <TransactionCardContainer>
              <LeftTransactionContainer>
                <IconTransactionContainer>
                  <MaterialIcons
                    name="directions-run"
                    size={32}
                    color={Colors.white}
                  />
                </IconTransactionContainer>

                <InformationTextTransactionContainer>
                  <TextComponent textAlign="left" fontSize={1.4}>
                    Corrida
                  </TextComponent>
                  <TextComponent
                    textAlign="left"
                    color={Colors.gray}
                    fontSize={1.2}>
                    29 de agosto de 2021, 07:25
                  </TextComponent>
                </InformationTextTransactionContainer>
              </LeftTransactionContainer>

              <CoinTransactionContainer>
                <MaterialIcons name="nfc" size={16} color={Colors.white} />
                <TextComponent textAlign="right" color={Colors.green}>
                  +10
                </TextComponent>
              </CoinTransactionContainer>
            </TransactionCardContainer>

            <TransactionCardContainer>
              <LeftTransactionContainer>
                <IconTransactionContainer>
                  <MaterialIcons name="tram" size={32} color={Colors.white} />
                </IconTransactionContainer>

                <InformationTextTransactionContainer>
                  <TextComponent textAlign="left" fontSize={1.4}>
                    Passagem de metrô
                  </TextComponent>
                  <TextComponent
                    textAlign="left"
                    color={Colors.gray}
                    fontSize={1.2}>
                    28 de agosto de 2021, 06:00
                  </TextComponent>
                </InformationTextTransactionContainer>
              </LeftTransactionContainer>

              <CoinTransactionContainer>
                <MaterialIcons name="nfc" size={16} color={Colors.white} />
                <TextComponent textAlign="right" color={Colors.red}>
                  -40
                </TextComponent>
              </CoinTransactionContainer>
            </TransactionCardContainer>
          </TransactionsContainer>
        </CardAndTransactionContainer>
      </BackgroundWithHeader>

      <TabContainer>
        <TouchableOpacity onPress={() => changePageWithTabBar('run')}>
          <OptionTabContainer>
            <MaterialIcons
              name="directions-walk"
              size={26}
              color={Colors.black}
            />
            <TextComponent
              fontFamily="Lato-Bold"
              fontSize={0.8}
              color={Colors.black}
              textAlign="center">
              Corrida
            </TextComponent>
          </OptionTabContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => changePageWithTabBar('uses')}>
          <OptionTabContainer>
            <MaterialIcons name="nfc" size={26} color={Colors.black} />
            <TextComponent
              fontFamily="Lato-Bold"
              fontSize={0.8}
              color={Colors.black}
              textAlign="center">
              Usos
            </TextComponent>
          </OptionTabContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => changePageWithTabBar('recycling')}>
          <OptionTabContainer>
            <FontAwesome name="recycle" size={26} color={Colors.black} />
            <TextComponent
              fontFamily="Lato-Bold"
              fontSize={0.8}
              color={Colors.black}
              textAlign="center">
              Reciclagem
            </TextComponent>
          </OptionTabContainer>
        </TouchableOpacity>
      </TabContainer>
    </>
  );
};

export default Dashboard;
