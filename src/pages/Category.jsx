import Header from'../Components/Header';
import Main from '../Components/Main';
import {CartProvider} from 'react-use-cart';

function Category() {
    return(
    <CartProvider>
    <Header />
    <Main />
    </CartProvider>
    )
}

export default Category