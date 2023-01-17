import React, {useEffect} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useDispatch} from 'react-redux';
import MainHeader from '../components/MainHeader';
import {transactionHistoryAction} from '../redux/actions/transactionsHistory';
import DetailsAccount from './DetailsAccount';
import OrderHistory from './OrderHistory';

const FirstRoute = () => <DetailsAccount />;

const SecondRoute = () => <OrderHistory />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Profile = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Details Account'},
    {key: 'second', title: 'Order History'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'white'}}
      style={{backgroundColor: '#28907D'}}
    />
  );
  return (
    <>
      <MainHeader />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </>
  );
};

export default Profile;
