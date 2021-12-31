const Span = props => <span>{props.name}</span>
const BtnMinus = props => <button onClick={props.remove} disabled={props.products ? false : true}>-</button>
const BtnPlus = props => <button onClick={props.add} disabled={props.products === props.maxNumber ? true : false}>+</button>
const AddToCart = props => <button onClick={props.addToCart}>Dodaj</button>
const Cart = props => <h2 className="yourCart" >Twój koszyk : {props.inCart} </h2>
const ClearCart = props => (props.inCart > 0 ? <button onClick={props.clear}>Usuń</button> : null)

const Availability = props => <span>stan magazynowy: {props.availability}</span>

class ShoppingCart extends React.Component {

    state = {
        actualProducts: 1,
        maxProducts: 7,
        inCart: 0
    }

    handleRemoveProduct = () => {
        this.setState({
            actualProducts: this.state.actualProducts - 1
        })
    }
    handleAddProduct = () => {
        this.setState({
            actualProducts: this.state.actualProducts + 1
        })
    }

    handleAddToCart = () => {
        this.setState({
            maxProducts: this.state.maxProducts - this.state.actualProducts,
            inCart: this.state.inCart + this.state.actualProducts,
            actualProducts: 0
        })
    }

    handleRemoveFromCart = () => {
        this.setState({
            maxProducts: this.state.inCart + this.state.maxProducts,
            inCart: 0
        })
    }

    render() {
        const { actualProducts, maxProducts, inCart } = this.state;
        return (
            <>
                <h1>Zakupy Online</h1>
                <div className="cartContainer">
                    <Cart inCart={inCart} />
                    <ClearCart inCart={inCart} clear={this.handleRemoveFromCart} />
                </div>
                <div className="productContainer">
                    <div className="product" >
                        <img src="img/mleko.jpg" alt="mleko" />
                        <Availability className="productAvailability" availability={maxProducts} />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rerum quod temporibus dolores tenetur accusantium, id fugit magni. Molestias praesentium suscipit corrupti ad dolorem in atque voluptate nisi nemo non.</p>
                    <div className="product__panel">
                        <BtnMinus remove={this.handleRemoveProduct} products={actualProducts} />
                        <Span name={actualProducts} />
                        <BtnPlus add={this.handleAddProduct} products={actualProducts} maxNumber={maxProducts} />
                        <AddToCart addToCart={this.handleAddToCart} />
                    </div>
                </div>

            </>
        )
    }
}

ReactDOM.render(<ShoppingCart />, document.getElementById('root'));