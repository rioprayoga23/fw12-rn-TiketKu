import React from 'react';
import {
  Avatar,
  Box,
  FormControl,
  Input,
  Pressable,
  ScrollView,
  Stack,
  Text,
  VStack,
  Button,
} from 'native-base';
import Icon from 'react-native-vector-icons/dist/Feather';
import Footer from '../components/Footer';
import BtnFormAction from '../components/BtnFormAction';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../redux/reducers/auth';

const DetailsAccount = () => {
  const dispatch = useDispatch();
  const [showOne, setShowOne] = React.useState(false);
  const [showTwo, setShowTwo] = React.useState(false);
  return (
    <Stack direction={'column'} backgroundColor={'#161621'} flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack padding={5} space={4}>
          <VStack backgroundColor={'#0A2647'} padding={5} borderRadius={8}>
            <Text color={'white'} fontSize={18}>
              Info
            </Text>
            <Box alignItems={'center'} mt={7}>
              <Avatar size={'120px'} />
              <Text color={'white'} fontSize={21} marginTop={5}>
                Rio Prayoga
              </Text>
              <Text color={'white'} fontSize={15} marginTop={1}>
                Moviegoers
              </Text>
            </Box>
            <Box
              borderBottomWidth={0.8}
              borderBottomColor={'white'}
              marginY={7}
            />
            <Button
              onPress={() => dispatch(logoutAction())}
              background={'#28907D'}
              borderRadius={8}>
              Logout
            </Button>
          </VStack>

          <VStack my={5}>
            <Text color={'white'} fontSize={18} mb={5}>
              Account Settings
            </Text>

            <FormControl>
              <VStack backgroundColor={'#0A2647'} padding={5} borderRadius={8}>
                <Stack space={5}>
                  <Text color={'white'} fontSize={18}>
                    Details Information
                  </Text>
                  <Box borderBottomWidth={0.8} borderBottomColor={'white'} />
                  <Stack>
                    <FormControl.Label fontSize={15}>
                      Full name
                    </FormControl.Label>
                    <Input
                      variant="outline"
                      p={2}
                      placeholder="Rio Prayoga"
                      placeholderTextColor={'white'}
                      color={'white'}
                      fontSize={15}
                    />
                  </Stack>
                  <Stack>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input
                      variant="outline"
                      p={2}
                      placeholder="rio@gmail.com"
                      placeholderTextColor={'white'}
                      color={'white'}
                      fontSize={15}
                    />
                  </Stack>

                  <Stack>
                    <FormControl.Label>Phone Number</FormControl.Label>
                    <Input
                      variant="outline"
                      p={2}
                      placeholder="089654778600"
                      placeholderTextColor={'white'}
                      color={'white'}
                      fontSize={15}
                    />
                  </Stack>
                </Stack>
              </VStack>
              <Box mt={5}>
                <BtnFormAction title={'Update Changes'} />
              </Box>
            </FormControl>

            <FormControl mt={12}>
              <VStack backgroundColor={'#0A2647'} padding={5} borderRadius={8}>
                <Stack space={5}>
                  <Text color={'white'} fontSize={18}>
                    Account and Privacy
                  </Text>
                  <Box borderBottomWidth={0.8} borderBottomColor={'white'} />
                  <Stack>
                    <FormControl.Label fontSize={15}>
                      New Password
                    </FormControl.Label>
                    <Input
                      w={{
                        base: '100%',
                        md: '25%',
                      }}
                      type={showOne ? 'text' : 'password'}
                      InputRightElement={
                        <Pressable onPress={() => setShowOne(!showOne)}>
                          <Box mr={3}>
                            <Icon
                              name={showOne ? 'eye' : 'eye-off'}
                              size={25}
                              color="muted.400"
                            />
                          </Box>
                        </Pressable>
                      }
                      color={'white'}
                      fontSize={15}
                      placeholderTextColor={'white'}
                      placeholder="New Password"
                    />
                  </Stack>
                  <Stack>
                    <FormControl.Label fontSize={15}>
                      Confirm Password
                    </FormControl.Label>
                    <Input
                      w={{
                        base: '100%',
                        md: '25%',
                      }}
                      type={showTwo ? 'text' : 'password'}
                      InputRightElement={
                        <Pressable onPress={() => setShowTwo(!showTwo)}>
                          <Box mr={3}>
                            <Icon
                              name={showTwo ? 'eye' : 'eye-off'}
                              size={25}
                              color="muted.400"
                            />
                          </Box>
                        </Pressable>
                      }
                      color={'white'}
                      fontSize={15}
                      placeholderTextColor={'white'}
                      placeholder="Confirm Password"
                    />
                  </Stack>
                </Stack>
              </VStack>
              <Box mt={5}>
                <BtnFormAction title={'Update Changes'} />
              </Box>
            </FormControl>
          </VStack>
        </VStack>

        <Footer />
      </ScrollView>
    </Stack>
  );
};

export default DetailsAccount;
