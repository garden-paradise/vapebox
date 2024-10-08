import { useEffect, useState } from 'react';
import HeaderBig from './reuse/HeaderBig/HeaderBig';
import HeaderSmall from './reuse/HeaderSmall/HeaderSmall';

const Header = (props) => {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    let myProducts =
      JSON.parse(localStorage.getItem('myProducts')) === null
        ? []
        : JSON.parse(localStorage.getItem('myProducts'));
    props.getItemCountBasket(
      myProducts.filter((item) => item.basket === true).length
    );

    let token = localStorage.getItem('token');
    if (token !== null) {
      props.getAccountInformation(token);
      props.getOrders(token);
      props.getFavorites(token);
    }
    window.innerWidth < 1199 && setSmall(true);
  }, [window.innerWidth]);

  return (
    <header>
      {/* {console.log(props)} */}
      {small ? (
        <HeaderSmall
          accountInfo={props.accountInfo}
          itemCountBasket={props.itemCountBasket}
        />
      ) : (
        <HeaderBig
          searchText={props.searchText}
          accountInfo={props.accountInfo}
          itemCountBasket={props.itemCountBasket}
          menuOpen={props.menuOpen}
          getMenuOpen={props.getMenuOpen}
        />
      )}
    </header>
  );
};
export default Header;
