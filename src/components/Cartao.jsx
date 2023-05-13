const Cartao = (props) => {

    const mcardLogo = "/mcard.svg"



    return (
        <div style={{backgroundColor: props.cardColor}} className="cartao">
            {props.number}
            <br />
            {props.cvv}
            <img className="card-logo" src={mcardLogo} />
        </div>
    )

}

export default Cartao